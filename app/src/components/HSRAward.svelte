<script lang="ts">
  import type { IDailyAwardItem } from 'hoyoapi'

  export let dailyAwardItem: IDailyAwardItem

</script>

<div class="h-16">
  <div>{dailyAwardItem.cnt}</div>
  <img src={dailyAwardItem.icon} class="h-16"/>
  <div>{dailyAwardItem.name}</div>
</div>
