require("dotenv").config();

import { hsr } from "./starrail";
import { CronJob } from "cron";

let checkInJob = new CronJob(
  "0 * * * * *",
  async () => {
    console.log("Checking in...");
    console.log("Today's reward:", await hsr.daily.reward());
    await hsr.daily.claim();
    console.log("Reward claimed.");
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

let characterStatJob = new CronJob(
  "0 * * * * *",
  async () => {
    console.log("Checking character stats...");

    const characterStats = await hsr.record.characters();

    for (const characterStat of characterStats) {
      console.log(characterStat);
    }
  },
  null,
  false, // don't start immediately
  "Asia/Hong_Kong"
);
