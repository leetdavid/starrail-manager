<script lang="ts">
  import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
  import Icon from '@iconify/svelte';

  let currentTile: number = 0;
</script>

<AppRail>
  <svelte:fragment slot="lead">
    <AppRailAnchor href="/">
      <span>
        <Icon icon="mdi:home" height={32} class="mx-auto" />
        Home
      </span>
    </AppRailAnchor>
  </svelte:fragment>

  <!-- --- -->
  <svelte:fragment slot="trail">
    <AppRailAnchor
      href="https://github.com/leetdavid/starrail-manager"
      target="_blank"
      title="GitHub"
    >
      <Icon icon="mdi:github" height={32} class="mx-auto" />
      GitHub
    </AppRailAnchor>
  </svelte:fragment>
</AppRail>
