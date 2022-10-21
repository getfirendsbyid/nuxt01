<template>
    <NuxtLayout name="default">
      <template #content>
        <div class="bg-white">
          <div class="mx-auto max-w-2xl py-6 px-6 sm:py-6 sm:px-6 lg:max-w-6xl lg:px-8">
            <div class="flex items-center text-left justify-between gap-y-10 gap-x-6 sm:grid-cols-2 ">
              <h2 class="font-bold tracking-tight text-gray-900 sm:text-base md:text-2xl lg:text-2xl">原神语音</h2>
              <NuxtLink class="font-bold tracking-tight text-gray-400 "
                        to="/lol">更多</NuxtLink>
            </div>
            <ImgListHeroList :datas="heroListData.data" />
          </div>
        </div>
      </template>
      <template #footer>
        321
      </template>
    </NuxtLayout>
  </template>
  <script setup lang="ts">
  import { ref,reactive } from 'vue'
  import { getGenshinList } from '@/api/genshin.ts'
  import ImgListHeroList from '@/components/imgList/heroList';
  let heroListData = ref({});
  definePageMeta({
        layout: false
  });
  onMounted(()=>{
    getGenshinList({page:1,limit:10}).then(res=>{
        heroListData.value = res.value;
    }).catch(error=>{
        heroListData.value = {};
    })
  })
  
  </script>
  