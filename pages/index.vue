<template>
  <NuxtLayout name="default">
    <template #content>
      <div class="bg-white">
        <div class="mx-auto max-w-2xl py-6 px-6 sm:py-6 sm:px-6 lg:max-w-6xl lg:px-8">
          <div class="flex items-center text-left justify-between gap-y-10 gap-x-6 sm:grid-cols-2 ">
            <h2 class="font-bold tracking-tight text-gray-900 sm:text-base md:text-2xl lg:text-2xl">
              英雄联盟语音
            </h2>
            <NuxtLink
              class="font-bold tracking-tight text-gray-400 "
              to="/games/Genshin"
            >
              更多
            </NuxtLink>
          </div>
          <ImgListHeroList :datas="lolData.data.lol" />
        </div>
      </div>
    </template>
    <template #footer>
      321
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getHomeList } from '@/api/home'
const lolData = ref(await getHomeList())
definePageMeta({
  	layout: false
})
</script>
