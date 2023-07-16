/** @type {import('./$types').PageServerLoad} */
import { hsr } from '$lib/hsr.server';

export async function load() {
  return {
    props: {
      dailyRewardPromise: hsr.daily.reward(),
      claimPromise: hsr.daily.claim(),
      characters: hsr.record.characters(),
    },
  };
}
