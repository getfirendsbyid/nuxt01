<template>
  <ImgListHeroList></ImgListHeroList>
</template>
<script setup lang="ts">
import {
  ref,
  reactive,
  onMounted,
  getCurrentInstance,
  defineComponent,
} from 'vue'
import { useNotification, NotificationPlacement } from 'naive-ui'
// content
definePageMeta({
  layout: 'default',
})

const params : {
    page: number;
    limit: number;
}

//获取游戏列表
function getHomeList() {
      getHomeList(params).then((res) => {
        if (res.code == 200) {
          this.homeList = res.data
          console.log(this.homeList)
        } else {
        }
      })
    }

</script>