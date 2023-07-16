<script lang="ts">
  import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
  import type { IDailyClaim } from 'hoyoapi';

  export let claim: IDailyClaim;

  const popupHover: PopupSettings = {
    event: 'hover',
    target: 'popupHover',
    placement: 'top',
  };

  $: alreadyClaimed = claim.code === -5003;
</script>

{#if alreadyClaimed}
<div class="card p-4 variant-filled-secondary" data-popup="popupHover">
  <p>{claim.status}</p>
  <div class="arrow variant-filled-secondary" />
</div>
{/if}

<button
class="btn variant-filled-primary [&>*]:pointer-events-none" use:popup={popupHover}>
  <span>Claim</span>
</button>
