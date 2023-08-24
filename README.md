# StarRail Manager

A web application dashboard for viewing your Honkai: Star Rail stats, and automates the process of claiming your daily rewards.

## Features

- Auto-claim your dailies using `api` (Currently, it attempts to claim your daillies every hour, and only the `api` is required for this to work.)
- Check the state of your assignments
- (WIP, hoyoapi is bugged) Auto-redeem codes shown on [prydwen.gg](https://prydwen.gg/star-rail/)
- (WIP) Get a discord alert when your assignments are complete
- (WIP) Manage your automations using the webapp

## Quickstart

### 1. Setup Environment Variables

The two required environment variables are `PUBLIC_HOYO_API_TOKEN` and `PUBLIC_HOYO_API_UID`. The instructions on obtaining the token is available on [hoyoapi](https://github.com/vermaysha/hoyoapi), and the UID is simply your in-game UID. 

### 2. Install Dependencies
A prerequisite is to have `pnpm` installed globally (check [here](https://pnpm.io/installation) for instructions on installing `pnpm`).

Simply run the below command to install dependencies.

```bash
pnpm install
```

Run the below command to run the development server.

```bash
pnpm dev
```
