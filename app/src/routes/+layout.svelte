<script>
  import '../theme.postcss'

  // This contains the bulk of Skeletons required styles:
  import '@skeletonlabs/skeleton/styles/skeleton.css';

  // Finally, your application's global stylesheet (sometimes labeled 'app.css')
  import '../app.postcss';

  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

  import { AppShell, Drawer, Modal, Toast, storePopup } from '@skeletonlabs/skeleton';

  import Header from '$components/layout/Header.svelte';
  import Sidebar from '$components/layout/Sidebar.svelte';
  import Footer from '$components/layout/Footer.svelte';
  import Navigation from '$components/layout/Navigation.svelte';

  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<!-- <main>
  <slot />
</main> -->

<Toast position="tr" />
<Modal />
<Drawer>
  <Navigation />
</Drawer>

<AppShell>
  <svelte:fragment slot="header"><Header /></svelte:fragment>
  <svelte:fragment slot="sidebarLeft"><Sidebar /></svelte:fragment>
  <main>
    <div class="container mx-auto">
      <slot />
    </div>
  </main>
  <svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>
