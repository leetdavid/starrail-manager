<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<div class="page-footer bg-surface-50 dark:bg-surface-900 border-t border-surface-500/10 text-xs md:text-base">
  <div class="w-full max-w-7xl mx-auto p-4 py-4 md:py-8 space-y-8">
    <section class="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0">
      <p class="my-auto">
        <a class="anchor" href="https://github.com/leetdavid/starrail-manager/blob/main/LICENSE" target="_blank" rel="noreferrer">
          MIT License
        </a>
        <span class="opacity-10 mx-2">|</span>
        <a class="anchor" href="https://github.com/leetdavid/" target="_blank" rel="noreferrer">
          Made by David Lee
        </a>
      </p>
      <div class="flex space-x-4">
        <a class="btn variant-soft" href="https://github.com/leetdavid/starrail-manager" target="_blank" rel="noreferrer">
          <Icon icon="mdi:github" height={24} class="mx-auto" />
          <span class="hidden md:inline-block ml-2">GitHub</span>
        </a>
      </div>
    </section>
  </div>
</div>
