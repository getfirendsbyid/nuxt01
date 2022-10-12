<template>
  <div class="fixed  justify-center w-auto  h-auto bottom-0 inset-x-0  bg-white text-black border-t-2 border-t-red-500">
    <div class=" flex flex-row justify-around ">

      <div class="flex flex-row justify-between  items-center text-center  w-auto">
      <div class="flex flex-row justify-center items-center text-center h-8">

        <img class="rounded-full h-full w-8 object-top  flex items-center object-cover text-center justify-center" 
            src="https://game.gtimg.cn/images/lol/act/img/skinloading/1000.jpg" />
        <div class="flex flex-col ml-4  ">
         
        </div>
      </div>
    </div>
      <div class="flex flex-row justify-between  items-center">

        <n-icon size="30" @click="lastMusic" title="上一首">
          <PlaySkipBackSharp />
        </n-icon>

        <n-icon size="60" class="ml-2 mr-2" color="red" title="播放" @click="startPlayOrpause">
          <PlayCircle />
         
        </n-icon>
        <n-icon size="30" v-if="false" title="暂停">
          <Pause style="display:none" />
        </n-icon>
        
        <n-icon size="30"  @click="nextMusic" title="下一首">
          <PlaySkipForwardSharp />
        </n-icon>
     
      </div> 
      <div class="flex flex-row justify-between  items-center">
        <n-icon size="30" color="#000"  title="菜单">
          <MenuSharp />
        </n-icon>
        </div>

    </div>
  </div>

</template>

<script lang="ts">
import {} from 'vue'
import {
  PlaySkipBackSharp,
  PlaySkipForwardSharp,
  PlayCircle,
  Pause,
  RepeatOutline,
  MenuSharp
} from '@vicons/ionicons5'
export default defineComponent({
  components: {
    PlaySkipBackSharp,
    PlaySkipForwardSharp,
    PlayCircle,
    Pause,
    RepeatOutline,
    MenuSharp
  },
  setup() {
    
let audio = ref()
let aplayer = ref('src/static/img/aplayer/play.png') // 当前时间
let MusiccurrentTime: Number = ref() // 歌曲总时间
let Musicduration: Number = ref() // 进度条
let progress: Number = ref() // 默认暂停状态

let playing: Boolean = false // 歌曲音量

let volumes: Number = ref(70)

let i: Number = 0

let audiobox = reactive([
  {
    index: 1,
    musicname: 'daisy',
    url: 'http://www.acgnb.com/ban/%E3%80%90%E9%BB%91%E6%9A%97%E4%B9%8B%E5%A5%B3%20%E5%AE%89%E5%A6%AE%E3%80%91%E5%86%8D%E7%83%A6%EF%BC%8C%E6%88%91%E5%B0%B1%E6%89%93%E4%BD%A0%E5%93%A6%E3%80%82-0_1.wav',
  },
  {
    index: 2,
    musicname: '千板',
    url: 'http://www.acgnb.com/ban/%E3%80%90%E9%BB%91%E6%9A%97%E4%B9%8B%E5%A5%B3%20%E5%AE%89%E5%A6%AE%E3%80%91%E5%86%8D%E7%83%A6%EF%BC%8C%E6%88%91%E5%B0%B1%E6%89%93%E4%BD%A0%E5%93%A6%E3%80%82-0_1.wav',
  },
  {
    index: 3,
    musicname: '千板55',
    url: 'http://www.acgnb.com/ban/%E3%80%90%E9%BB%91%E6%9A%97%E4%B9%8B%E5%A5%B3%20%E5%AE%89%E5%A6%AE%E3%80%91%E5%86%8D%E7%83%A6%EF%BC%8C%E6%88%91%E5%B0%B1%E6%89%93%E4%BD%A0%E5%93%A6%E3%80%82-0_1.wav',
  },
])
let playMode: Number = 0 //0:一次性(默认) 1：顺序 2：循环 3：随机 // 显示名字

let showname: any = ref('未选择歌曲') // 单曲播放
const singlePlay = () => {
  playMode = 0
} // 顺序
const orderPlay = () => {
  playMode = 1
} //循环
const cyclePlay = () => {
  playMode = 2
} // 随机播放
const randomPlay = () => {
  playMode = 3
} // 随机播放方法

const randdomPlayfn = () => {
  let i = audiobox.length
  while (i) {
    let j = Math.floor(Math.random() * i--)
    ;[audiobox[j], audiobox[i]] = [audiobox[i], audiobox[j]]
  }
} // 下一首

const nextMusic = () => {
  pause()
  if (++i > audiobox.length - 1) {
    i = 0
  }
  let song = audiobox[i]
  audio.value.src = song.url
  showname.value = song.musicname
  audioplay() // console.log('正在播放第' + (i + 1) + '首');
} // 上一首
const lastMusic = () => {
  pause()
  let song
  i > 0 ? --i : (i = audiobox.length - 1)
  audio.value.src = audiobox[i].url
  showname.value = audiobox[i].musicname

  audioplay() // console.log('正在播放第' + (i + 1) + '首');
}

const chancurren = () => {
  //改变进度
  let ct = (progress.value * Musicduration.value) / 100
  if (!isNaN(ct)) {
    audio.value.currentTime = ct
  } // console.log(progress)
} // 改变音量
const changevolumes = () => {
  let ct = volumes.value / 100 // if (!isNan(ct)) {
  audio.value.volume = ct // } // console.log(ct);
} // 加载当前播放时间
const getCurr = () => {
  // currentTime 当前时间
  MusiccurrentTime.value = parseInt(audio.value.currentTime)
  progress.value = (MusiccurrentTime.value / Musicduration.value) * 100
  if (MusiccurrentTime.value == Musicduration.value) {
    switch (playMode) {
      case 0:
        pause()
        return (aplayer.value = 'src/static/img/aplayer/play.png')
        break
      case 1:
        nextMusic()
        break
      case 2:
        audioplay()
        break
      case 3:
        pause()
        randdomPlayfn()
        if (i != 0) i = 0
        audio.value.src = audiobox[i].url
        showname.value = audiobox[i].musicname
        audioplay()
        console.log(audiobox[i])
        break

      default:
        break
    }
  }
} // 加载总时长
const onLoadedmetadata = () => {
  // duration 期间
  Musicduration.value = parseInt(audio.value.duration) // console.log(); // 默认声音70%
  volumes.value = parseInt(audio.value.volume) * 70
}

const toTime = (sec): Number => {
  //秒数转化为mm:ss形式
  let s = sec % 60 < 10 ? '0' + (sec % 60) : sec % 60
  let min =
    Math.floor(sec / 60) < 10
      ? '0' + Math.floor(sec / 60)
      : Math.floor(sec / 60)
  if (!isNaN(s)) {
    return min + ':' + s
  } else {
    return '00' + ':' + '00'
  } // console.log(min +" "+ s);
} // status 状态 // 播放或者暂停
const startPlayOrpause = () => {
  playing ? pause() : audioplay()
  playing
    ? (aplayer.value = 'src/static/img/aplayer/play.png')
    : (aplayer.value = 'src/static/img/aplayer/pause.png') // console.log(audio.value); // console.log(audiobox);
} // 播放
const audioplay = () => {
console.log(audio,'audio')

  if (audio.value.src == '') {
    audio.value.src = audiobox[i].url
    showname.value = audiobox[i].musicname
  }
  audio.value.play()

  return (aplayer.value = 'src/static/img/aplayer/pause.png')
} // 暂停
const pause = () => {
  audio.value.pause()
  return (aplayer.value = 'src/static/img/aplayer/pause.png')
} //是否暂停状态
const onPause = () => {
  playing = false
} //是否播放状态
const onPlay = () => {
  playing = true
}
    return {
      PlaySkipBackSharp,
      PlaySkipForwardSharp,
      PlayCircle,
      Pause,
      RepeatOutline,
      MenuSharp,
      nextMusic,
      lastMusic,
      randomPlay,
      startPlayOrpause
    }
  },
  
})
</script>

<style scoped></style>