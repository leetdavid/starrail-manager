<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements'

  interface $$Props extends HTMLButtonAttributes {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'surface' 
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  }

  export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button'
  
  switch ($$restProps.variant) {
  case 'primary':
    $$restProps.class = 'btn variant-filled-primary'
    break
  case 'secondary':
    $$restProps.class = 'btn variant-filled-secondary'
    break
  }

</script>

<button class="btn" type={type} {...$$restProps}>
  <slot />
</button>
