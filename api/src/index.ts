require("dotenv").config();

import { hsr } from "./starrail";
import { CronJob } from "cron";
import { getHSRRedeemCodes, redeemHSRCode } from "./redemption";

let checkInJob = new CronJob(
  "2 0 * * *",
  async () => {
    console.log("Checking in...");
    console.log("Today's reward:", await hsr.daily.reward());
    const res = await hsr.daily.claim();
    console.log(res.status);
    console.log(res.code);
  },
  null,
  true,
  "Asia/Hong_Kong"
);

let redeemJob = new CronJob(
  "2 0 * * *",
  async () => {
    console.log("Getting redeem codes...");
    const codes = await getHSRRedeemCodes();
    console.log("Redeem codes:", codes);

    for (const code of codes) {
      // const res = await hsr.redeem.claim(code);
      // The current hoyoapi implementation is broken
      const res = await redeemHSRCode(hsr, code);
      console.log(res);
    }

    console.log("Done!");
  },
  null,
  true,
  "Asia/Hong_Kong"
);

// let getUIDJob = new CronJob(
//   "* * * * * *",
//   async () => {
//     console.log("Getting UID...");
//     console.log("UID:", hsr.uid);
//   },ty
//   null,
//   true,
//   "Asia/Hong_Kong"
// );

// let characterStatJob = new CronJob(
//   "0 * * * * *",
//   async () => {
//     console.log("Checking character stats...");

//     const characterStats = await hsr.record.characters();

//     for (const characterStat of characterStats) {
//       console.log(characterStat);
//     }
//   },
//   null,
//   false, // don't start immediately
//   "Asia/Hong_Kong"
// );
