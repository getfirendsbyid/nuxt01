<template>
  <div class="justify-center  bg-white text-black ">
    <n-progress
      type="line"
      :percentage=" parseInt(playProgress)"
      :border-radius="4"
      color="red"
      height="2"

      :rail-color="changeColor('#C20C0C', { alpha: 0.2 })"
    />
    <div class="flex flex-row justify-around  ">
      <div class="line-clamp-1">
        {{ audioInfo.audio[currentIndex].name }}
      </div>
    </div>
    <div class=" flex flex-row justify-around ">
      <div class="flex flex-row justify-between  items-center text-center  w-auto">
        <div class="flex flex-row justify-center items-center text-center h-8">
          <img
            class="rounded-full h-full w-8 object-top  flex items-center object-cover text-center justify-center"
            :src="cover"
          >
          <div class="flex flex-col ml-4  ">
            {{ transTime(audioCurrent) }}/{{ transTime(audioDuration) }}
          </div>
        </div>
      </div>

      <div class="flex flex-row justify-between  items-center">
        <n-icon
          size="20"
          title="上一首"
          class="ml-2 mr-2"
          @click="lastMusic"
        >
          <PlaySkipBackSharp />
        </n-icon>

        <n-icon
          v-if="!playStatus"
          size="40"

          color="red"
          title="播放"
          @click="onPlay"
        >
          <PlayCircle />
        </n-icon>
        <n-icon
          v-else
          size="40"

          color="red"
          title="暂停"
          @click="onPause"
        >
          <PauseCircleOutline />
        </n-icon>

        <n-icon
          size="20"
          class="ml-2 mr-2"
          title="下一首"
          @click="nextMusic"
        >
          <PlaySkipForwardSharp />
        </n-icon>
      </div>
      <div class="flex flex-row justify-between  items-center">
        <n-icon
          size="20"
          color="#000"
          title="菜单"
        >
          <MenuSharp />
        </n-icon>
      </div>
    </div>
  </div>

  <audio
    ref="audioRef"
    :src="audioInfo.audio[currentIndex].audioUrl"
    @canplay="onCanplay"
  />
</template>

<script lang="ts">
import { ref, toRefs } from 'vue'
import {
  PlaySkipBackSharp,
  PlaySkipForwardSharp,
  PlayCircle,
  PauseCircleOutline,
  RepeatOutline,
  MenuSharp
} from '@vicons/ionicons5'
import { changeColor } from 'seemly'
export default defineComponent({
  components: {
    PlaySkipBackSharp,
    PlaySkipForwardSharp,
    PlayCircle,
    PauseCircleOutline,
    MenuSharp
  },

  props: {
    audioInfo: Array,
    currentIndex: Number,
    cover: String
  },
  setup (props, context) {
    console.log(props)
    const { audioInfo, currentIndex } = toRefs(props)
    const speedVisible = ref<boolean>(false) // 设置音频播放速度弹窗
    const audioRef = ref() // 音频标签对象
    const activeSpeed = ref(1) // 音频播放速度
    const audioDuration = ref(0) // 音频总时长
    const audioCurrent = ref(0) // 音频当前播放时间
    const audioVolume = ref(1) // 音频声音，范围 0-1
    const playStatus = ref<boolean>(false) // 音频播放状态：true 播放，false 暂停
    const playProgress = ref(0) // 音频播放进度
    const timeInterval = ref() // 获取音频播放进度定时器
    const lastAudioIndex = ref(0)
    const nextAudioIndex = ref(0)

    // 音频加载完毕的回调
    const onCanplay = () => {
      audioDuration.value = audioRef?.value.duration || 0
    }

    const onPlay = async () => {
      // 音频播放完后，重新播放
      if (playProgress.value === 100) { audioRef.value.currentTime = 0 }
      await audioRef.value.play()
      playStatus.value = true
      audioDuration.value = audioRef.value.duration

      timeInterval.value = setInterval(() => {
        audioCurrent.value = audioRef.value.currentTime
        playProgress.value = audioCurrent.value / audioDuration.value * 100
        console.log(playProgress.value)
        if (playProgress.value === 100) { onPause() }
      }, 100)
    }
    const onPause = () => {
      audioRef.value.pause()
      playStatus.value = false
      clearInterval(timeInterval.value)
    }
    const lastMusic = () => {
      if (currentIndex.value - 1 < 0) {
        lastAudioIndex.value = 0
      } else {
        lastAudioIndex.value = currentIndex.value - 1
      }

      context.emit('changeSelectIndex', lastAudioIndex.value)
    }

    const nextMusic = () => {
      if (currentIndex.value + 1 > audioInfo.value.audio.length - 1) {
        nextAudioIndex.value = audioInfo.value.audio.length - 1
      } else {
        nextAudioIndex.value = currentIndex.value + 1
      }
      console.log(nextAudioIndex.value)
      context.emit('changeSelectIndex', nextAudioIndex.value)
    }

    // 音频播放时间换算
    const transTime = (value: number) => {
      let time = ''
      const h = parseInt(String(value / 3600))
      value %= 3600
      const m = parseInt(String(value / 60))
      const s = parseInt(String(value % 60))
      if (h > 0) {
        time = formatTime(h + ':' + m + ':' + s)
      } else {
        time = formatTime(m + ':' + s)
      }
      return time
    }
    // 格式化时间显示，补零对齐
    const formatTime = (value: string) => {
      let time = ''
      const s = value.split(':')
      let i = 0
      for (; i < s.length - 1; i++) {
        time += s[i].length == 1 ? '0' + s[i] : s[i]
        time += ':'
      }
      time += s[i].length == 1 ? '0' + s[i] : s[i]

      return time
    }

    return {
      PlaySkipBackSharp,
      PlaySkipForwardSharp,
      PlayCircle,
      PauseCircleOutline,
      RepeatOutline,
      MenuSharp,
      formatTime,
      transTime,
      onPause,
      onPlay,
      onCanplay,
      speedVisible,
      audioRef,
      activeSpeed,
      audioDuration,
      audioCurrent,
      audioVolume,
      playStatus,
      playProgress,
      timeInterval,
      changeColor,
      audioInfo,
      currentIndex,
      lastMusic,
      nextMusic
    }
  }
})

</script>
<style scoped>
.audio-player {
  width: 378px;
  height: 52px;
  background: linear-gradient(180deg, #505572 0%, #383b4f 100%);
  border-radius: 8px;
  padding: 9px 11px;
  margin: 40px 26px 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.play-icon {
    width: 34px;
    height: 34px;
    margin-right: 7px;
    cursor: pointer;
  }

  .play-time {
    width: 72px;
    display: inline-block;
    margin-right: 16px;
  }

  .play-progress {
    width: 160px;
    height: 4px;
    background-color: #323547;
    box-shadow: inset 0px 1px 0px 0px #20222d;
    border-radius: 2px;
    margin-right: 16px;
    position: relative;

  }
  .play-current-progress {
      height: 4px;
      background: #00e5ff;
      border-radius: 2px;
      position: absolute;
      top: 0;
      left: 0;
    }

  .play-voice {
    width: 20px;
    height: 20px;
    margin-right: 14px;
    cursor: pointer;
  }

  .play-speed {
    cursor: pointer;
    color: #00e5ff;
  }
</style>
