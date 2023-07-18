FROM node as build
RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

FROM node:slim
RUN npm install -g pnpm

ENV NODE_ENV production
USER node

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --production --frozen-lockfile

COPY --from=build /app/dist ./dist

# EXPOSE 8080
CMD ["node", "dist/index.js"]
