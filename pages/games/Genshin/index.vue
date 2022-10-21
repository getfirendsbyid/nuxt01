<template>
  <div class="genshin-container">
    <div class="back-container h-12">
      <img class="back-icon w-8  md:w-10 lg:w-12" src="../../../assets/image/genshin-back.png">
    </div>
    <div class="content-container flex justify-between">
      <AudioList :audio-list="data.audioList" @clickListEmit="clickListEmit" />
      <AutoDescription v-if="data.autoDescriptionPlugin" :audio-info="data.audioList[data.currentChoiseIndex]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AudioList from '../../../components/Genshin/audioList.vue'
import AutoDescription from '../../../components/Genshin/autoDescription.vue'
const data = reactive({
  audioList: [
    {
      name: '闲聊.守则',
      audio: '',
      expression: '',
      text: '突破感受.转',
      described: '谢谢你总是陪我一起收集研究用的材料！如果你想学炸弹的制作方法，我也可以来教你哦',
      checked: false
    },
    {
      name: '下雨的时候...',
      audio: '',
      expression: '',
      text: '突破感受.转',
      described: '谢谢你总是陪我一起收集研究用的材料！如果你想学炸弹的制作方法，我也可以来教你哦',
      checked: false
    },
    {
      name: '打雷的时候...',
      audio: '',
      expression: '',
      text: '突破感受.转',
      described: '谢谢你总是陪我一起收集研究用的材料！如果你想学炸弹的制作方法，我也可以来教你哦',
      checked: false
    },
    {
      name: '挂大风了...',
      audio: '',
      expression: '',
      text: '突破感受.转',
      described: '谢谢你总是陪我一起收集研究用的材料！如果你想学炸弹的制作方法，我也可以来教你哦',
      checked: false
    },
    {
      name: '关于可莉自己.肇事',
      audio: '',
      expression: '',
      text: '突破感受.转',
      described: '谢谢你总是陪我一起收集研究用的材料！如果你想学炸弹的制作方法，我也可以来教你哦',
      checked: false
    },
    {
      name: '关于可莉自己.赔偿',
      audio: '',
      expression: '',
      text: '突破感受.转',
      described: '谢谢你总是陪我一起收集研究用的材料！如果你想学炸弹的制作方法，我也可以来教你哦',
      checked: false
    },
    {
      name: '关于我们.骑士',
      audio: '',
      expression: '',
      text: '突破感受.转',
      described: '谢谢你总是陪我一起收集研究用的材料！如果你想学炸弹的制作方法，我也可以来教你哦',
      checked: false
    },
    {
      name: '有什么想要分享...',
      audio: '',
      expression: '',
      text: '突破感受.转',
      described: '谢谢你总是陪我一起收集研究用的材料！如果你想学炸弹的制作方法，我也可以来教你哦',
      checked: false
    },
    {
      name: '感兴趣的见闻...',
      audio: '',
      expression: '',
      text: '突破感受.转',
      described: '谢谢你总是陪我一起收集研究用的材料！如果你想学炸弹的制作方法，我也可以来教你哦',
      checked: false
    },
    {
      name: '想要了解可莉.其一',
      audio: '',
      expression: '',
      text: '突破感受.转',
      described: '谢谢你总是陪我一起收集研究用的材料！如果你想学炸弹的制作方法，我也可以来教你哦',
      checked: false
    },
    {
      name: '可莉的爱好',
      audio: '',
      expression: '',
      text: '突破感受.转',
      described: '谢谢你总是陪我一起收集研究用的材料！如果你想学炸弹的制作方法，我也可以来教你哦',
      checked: false
    },
    {
      name: '可莉的爱好',
      audio: '',
      expression: '',
      text: '突破感受.转',
      described: '谢谢你总是陪我一起收集研究用的材料！如果你想学炸弹的制作方法，我也可以来教你哦',
      checked: false
    },
    {
      name: '可莉的爱好',
      audio: '',
      expression: '',
      text: '突破感受.转',
      described: '谢谢你总是陪我一起收集研究用的材料！如果你想学炸弹的制作方法，我也可以来教你哦',
      checked: false
    },
    {
      name: '可莉的爱好',
      audio: '',
      expression: '',
      text: '突破感受.转',
      described: '谢谢你总是陪我一起收集研究用的材料！如果你想学炸弹的制作方法，我也可以来教你哦',
      checked: false
    }
  ],
  currentChoiseIndex: -1,
  autoDescriptionPlugin: true
})
onMounted(() => {
  watchWindowWidth()
})
const clickListEmit = (option:number):void => {
  data.audioList[option].checked = !data.audioList[option].checked
  data.currentChoiseIndex = option
}
const watchWindowWidth = () => {
  window.onresize = () => {
    console.log(document.body.clientWidth, 'window.screenWidth')
    document.body.clientWidth <= 640 ? data.autoDescriptionPlugin = false : data.autoDescriptionPlugin = true
  }
}
definePageMeta({
  layout: false
})
</script>

<style scoped lang="scss">
 .genshin-container{
    width: 100vw;
    height: 100vh;
    padding: 40px;
    box-sizing: border-box;
    .back-container{
        position: relative;
        width: auto;
        .back-icon{
            position: absolute;
            top: 0;
            right: 0px;
        }
    }
    .content-container{
      margin-top: 40px;
    }
 }
</style>
