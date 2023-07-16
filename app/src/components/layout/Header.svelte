<script>
  import { AppBar, Avatar } from '@skeletonlabs/skeleton';
  import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppBar class="bg-opacity-30 shadow-lg">
  <svelte:fragment slot="lead">
    <h5 class="ml-2 h5 my-auto">
      <span
        class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text
        text-transparent box-decoration-clone capitalize font-bold">StarRail Manager</span
      >
    </h5>
  </svelte:fragment>
  <svelte:fragment slot="trail">
    <div class="mr-4">
      <LightSwitch />
    </div>

    <button>
      <Avatar
        initials="DL"
        width="w-10"
        background="bg-primary-500"
        class="shadow-sm hover:shadow"
      />
    </button>
  </svelte:fragment>
</AppBar>
<!-- 
<header id="shell-header" class="bg-surface-1/50 px-2 text-lg backdrop-blur-sm 
  transition-transform ease-in md:px-0 flex-none z-10 h-12 align-middle items-center"

  >
  <div class="app-bar m-0 p-0">
    <h5 class="h5 my-auto">
      <span class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone capitalize">Hello World!</span>
    </h5>
  </div>
</header> -->
