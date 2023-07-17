<script>
  import { ProgressBar } from '@skeletonlabs/skeleton';
</script>

<div class="block card p-6 space-y-2">
  <h4 class="h4">Stamina</h4>
  <div class="flex items-center gap-4">
    <ProgressBar class="flex-1" />
    <span class="flex-0">? / ?</span>
  </div>
  <div class="w-96 max-w-full placeholder animate-pulse" />
  
  <hr />

  <div class="flex">
    <h4 class="h4 flex-1">Expeditions</h4>
    <div class="placeholder animate-pulse flex-0 w-16" />
  </div>

  <div class="grid grid-cols-2 grid-rows-2 gap-4">
    {#each Array.from(Array(4).keys()) as i}
      <div class="card card-hover p-4 shadow space-y-2">
        <h5 class="h5">
          <div class="placeholder animate-pulse w-48 h-6 max-w-full" />
        </h5>
        <div class="flex gap-2">
          {#each Array.from(Array(2).keys()) as i}
            <div class="placeholder-circle animate-pulse w-14 max-w-full h-14" />
          {/each}
        </div>
        <div class="placeholder animate-pulse w-96 max-w-full h-4" />
      </div>
    {/each}
  </div>
</div>
