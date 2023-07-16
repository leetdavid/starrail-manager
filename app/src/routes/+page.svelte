<script lang="ts">
  import Button from "$components/Button.svelte";
  import Spinner from "$components/Spinner.svelte";
  import HSRAward from "$components/HSRAward.svelte";
  import HSRClaim from "$components/HSRClaim.svelte";
  
  export let data

  const { dailyRewardPromise, claimPromise } = data.props

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>


{#await dailyRewardPromise}
  <Spinner />
{:then reward} 
  <HSRAward dailyAwardItem={reward.award} />
{/await}

{#await claimPromise}
  <Spinner />
{:then claim}
  <HSRClaim claim={claim} />
{/await}
