<script>
  import '../app.postcss';

  // Your selected Skeleton theme:
  import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';

  // This contains the bulk of Skeletons required styles:
  import '@skeletonlabs/skeleton/styles/skeleton.css';

  // Finally, your application's global stylesheet (sometimes labeled 'app.css')
  import '../app.postcss';

  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

  import { storePopup } from '@skeletonlabs/skeleton';
  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<slot />
