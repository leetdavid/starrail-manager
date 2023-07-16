/** @type {import('./$types').PageServerLoad} */
import { hsr } from '$lib/hsr.server';

/*
  account
  cookie
  daily
  record
  redeem
  region
  uid
*/

export async function load() {
  return {
    props: {
      dailyRewardPromise: hsr.daily.reward(),
      claimPromise: hsr.daily.claim(),
      charactersPromise: hsr.record.characters(),
      notePromise: hsr.record.note(),
      account: hsr.account,
      region: hsr.region,
      recordsPromise: hsr.record.records(),
    },
  };
}
