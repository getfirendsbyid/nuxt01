<template>
  <div class="fixed p-3 bottom-0 inset-x-0  h-20 bg-black text-white border-t-2 border-t-cyan-500">
    <div class=" flex flex-row justify-between ">

      <div class="flex flex-row justify-between  ">
        <img src="http://p4.music.126.net/5juuGuRTiWpevGMM5dN-lQ==/109951167249542347.jpg?param=34y34" />
        <div class="flex flex-col">
          <div>标题</div>
          <div>作者</div>
        </div>
      </div>

      <div class="flex flex-row justify-between h-3">

        <n-icon size="40">
          <PlaySkipBack />
        </n-icon>

        <n-icon size="40"  title="播放">
          <PlayCircle />
         
        </n-icon>
        <n-icon size="40" v-if="false" title="暂停">
          <Pause style="display:none" />
        </n-icon>
        
        <n-icon size="40"  title="下一首">
          <PlaySkipForward />
        </n-icon>
     
      </div>
      <div>菜单列表</div>

    </div>
  </div>

</template>

<script lang="ts">
import {} from 'vue'
import {
  PlaySkipBack,
  PlaySkipForward,
  PlayCircle,
  Pause,
  RepeatOutline,
} from '@vicons/ionicons5'
export default defineComponent({
  components: {
    PlaySkipBack,
    PlaySkipForward,
    PlayCircle,
    Pause,
    RepeatOutline,
  },
  setup() {
    return {
      PlaySkipBack,
      PlaySkipForward,
      PlayCircle,
      Pause,
      RepeatOutline,
    }
  },
})
</script>

<style scoped></style>