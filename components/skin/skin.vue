<template>
  <div class="fixed bottom-1/4 right-2 h-12 w-12 shadow-md bg-white  z-10 rounded-sm flex text-center justify-center items-center skin">
    <n-icon size="30"
            @click="changeShow">
      <SkinTwotone></SkinTwotone>
    </n-icon>
    <transition enter-active-class="animate__animated animate__bounceInRight"
                leave-active-class="animate__animated animate__bounceOutDown">
      <div v-if="show"
           class="fixed  bottom-1/4  right-16  w-20 flex text-center  items-center flex-col group">
           <NuxtLink :to="item.link" v-for="(item,index) in data" :key="index">
          <button  :class="index==currentIndex?'h-12 w-20  bg-green-400 bg-opacity-50 px-2 py-2 flex  justify-center items-center':'h-12 w-20 bg-gray-400 focus:bg-green-400 bg-opacity-50 px-2 py-2 flex  justify-center items-center'  ">{{item.skin_name}}</button>
        </NuxtLink>
           </div>
    </transition>
  </div>

</template>

<script setup lang="ts">
import { SkinTwotone } from '@vicons/antd'
const show = ref(true)
const {data,currentIndex } = defineProps(['data','currentIndex'])

const changeShow = () => {
  show.value = !show.value
  console.log(show.value)
}
</script>

<style scoped>
</style>