import { HonkaiStarRail, LanguageEnum } from "hoyoapi";

if (!process.env.PUBLIC_HOYO_API_TOKEN) {
  throw new Error("HOYO_API_TOKEN is not defined");
}

if (!process.env.PUBLIC_HOYO_API_UID) {
  throw new Error("HOYO_API_UID is not defined");
}

// const hsr = await HonkaiStarRail.create({
//   cookie: process.env.HOYO_API_TOKEN,
//   lang: LanguageEnum.ENGLISH,
// });

export const hsr = new HonkaiStarRail({
  cookie: process.env.PUBLIC_HOYO_API_TOKEN,
  lang: LanguageEnum.ENGLISH,
  uid: +process.env.PUBLIC_HOYO_API_UID,
});
