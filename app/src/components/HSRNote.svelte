<script lang="ts">
  import type { IHSRNote } from 'hoyoapi';

  import { Avatar, ProgressBar } from '@skeletonlabs/skeleton';

  export let note: IHSRNote;

  function convert(x: number) {
    let h = ~~(x / 3600),
      m = ~~((x - h * 3600) / 60),
      s = x - h * 3600 - m * 60;
    let words = ['hour', 'minute', 'second'];
    return [h, m, s]
      .map((x, i) => (!x ? '' : `${x} ${words[i]}${x !== 1 ? 's' : ''}`))
      .filter((x) => x)
      .join(', ')
      .replace(/,([^,]*)$/, ', and$1');
  }

  console.log(note.expeditions);
</script>

<div class="block card p-4">
  <h4 class="h4">Stamina</h4>
  <div class="flex items-center py-2 gap-4">
    <ProgressBar value={note.current_stamina} max={note.max_stamina} class="flex-1" />
    <span class="flex-0">{note.current_stamina} / {note.max_stamina}</span>
  </div>
  <p>{convert(note.stamina_recover_time)} until full recovery</p>

  <hr class="my-3" />

  <h4 class="h4">Expeditions</h4>
  <div class="py-4 grid grid-cols-2 grid-rows-2 gap-4">
    {#each note.expeditions as expedition}
      <div class="card card-hover p-4 shadow">
        <h5 class="h5">{expedition.name}</h5>
        <div class="flex gap-2">
          {#each expedition.avatars as avatar}
            <Avatar width="w-14" src={avatar} border="border-2 border-secondary-700 hover:!border-secondary-500" size="sm" />
          {/each}
        </div>
        <p class="text-sm">{expedition.status}</p>
      </div>
    {/each}
  </div>
</div>

<!-- 
{
    "current_stamina": 14,
    "max_stamina": 180,
    "stamina_recover_time": 59584,
    "accepted_epedition_num": 4,
    "total_expedition_num": 4,
    "expeditions": [
        {
            "avatars": [
                "https://act.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_76512l/622524fb899d4f73c7c9651a459c4b3f.png",
                "https://act.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_76512l/3f042834dd487f2561f93ee0fa479cc0.png"
            ],
            "status": "Finished",
            "remaining_time": 0,
            "name": "Winter Soldiers"
        },
        {
            "avatars": [
                "https://act.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_76512l/e8b133bacc72e35c04bda62470834edd.png",
                "https://act.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_76512l/989cc9be79c8a07a926ad11d767a1b52.png"
            ],
            "status": "Finished",
            "remaining_time": 0,
            "name": "Fire Lord Inflames Blades of War"
        },
        {
            "avatars": [
                "https://act.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_76512l/8634df91ca72ed023b77261c12a0e5cc.png",
                "https://act.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_76512l/12dfb0593f88f9bb903121b597d5a762.png"
            ],
            "status": "Finished",
            "remaining_time": 0,
            "name": "Nameless Land, Nameless People"
        },
        {
            "avatars": [
                "https://act.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_76512l/94eafa6314de2c87ccb13c957938f478.png",
                "https://act.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_76512l/906dae830cf8bc7057b50c73074869ec.png"
            ],
            "status": "Finished",
            "remaining_time": 0,
            "name": "The Invisible Hand"
        }
    ]
}
-->
