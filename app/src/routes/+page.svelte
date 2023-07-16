<script lang="ts">
  import HSRAward from '$components/HSRAward.svelte';
  import HSRClaim from '$components/HSRClaim.svelte';
  import HSRNote from '$components/HSRNote.svelte';

  export let data;

  const { dailyRewardPromise, claimPromise, notePromise } = data.props;
</script>

<div class="h-12" />

<h1 class="h1">
  <span
    class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text
  text-transparent box-decoration-clone"
  >
    Welcome to the StarRail Manager!
  </span>
</h1>

<p>
  This site shows your <b>Honkai: Star Rail</b> stats and helps you auto-claim the daily rewards.
</p>

<div class="my-8 grid gap-4">
  <h3 class="h3">Note</h3>
  {#await notePromise then note}
    <HSRNote {note} />
  {/await}
</div>

<!-- {#await dailyRewardPromise}
  <Spinner />
{:then reward}
  <HSRAward dailyAwardItem={reward.award} />
{/await} -->

<!-- {#await claimPromise}
  <Spinner />
{:then claim}
  <HSRClaim {claim} />
{/await} -->
<!-- 
{#each Array.from(Array(20).keys()) as i}
  <Spinner />
{/each} -->
