<template>
  <div class="flex items-center justify-between  bg-white px-4  sm:px-6">
    <div class="flex flex-1 justify-between sm:hidden">
      <NuxtLink  :to="lastPageObj.value.link"  class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">上一页</NuxtLink>
      <NuxtLink :to="nextPageObj.value.link" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">下一页</NuxtLink>
    </div>
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      
      <div>
        <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        
            <NuxtLink :to="lastPageObj.value.link"  class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
            <span class="sr-only">上一页</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
          </NuxtLink>
          <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
          <NuxtLink :to="item.link" v-for="(item,index) in newPage" :key="index" 
          :class="item.page==currentPage?'relative z-10 inline-flex items-center border border-green-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-green-600 focus:z-20':' relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20'">
          {{item.page}}
          </NuxtLink>

          <NuxtLink :to="nextPageObj.value.link" class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
            <span class="sr-only">下一页</span>
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
          </NuxtLink>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'
const {pageArray,currentPage} = defineProps(['pageArray','currentPage'])

const pageTotal = pageArray.length
const truePageButtonCount = pageTotal - currentPage;
const preArray = reactive([]);
const nextArray = reactive([]);
const newPage = reactive([]);
const currentPageObj = reactive({});
if(truePageButtonCount>=6){
  if(currentPage>3){
    preArray.push(pageArray[Number(currentPage)-2])
    preArray.push(pageArray[Number(currentPage)-1])
    preArray.push(pageArray[Number(currentPage)])
    
  }else{
    if(currentPage==1){
    preArray.push(pageArray[Number(currentPage)-1])
    preArray.push(pageArray[Number(currentPage)])
    preArray.push(pageArray[Number(currentPage)+1])
    }else{
      preArray.push(pageArray[Number(currentPage)-2])
    preArray.push(pageArray[Number(currentPage)-1])
    preArray.push(pageArray[Number(currentPage)])
    }
   
  }
  console.log(preArray,'pre')
 

  pageArray.slice(-3).forEach(element => {
    nextArray.push(element) 
  });

  // console.log(nextArray,'next');
  for (let i = 0; i < preArray.length; i++) {
    newPage.push(preArray[i])
  }
  //插入中间...省略号
  newPage.push({'link':'#','disable':true,'page':'...'})
  for (let i = 0; i < nextArray.length; i++) {
    newPage.push(nextArray[i])
  }
  console.log(newPage,'all')  

}else{
  pageArray.slice(-6).forEach(element => {
    nextArray.push(element) 
  });
  for (let i = 0; i < nextArray.length; i++) {
    newPage.push(nextArray[i])
  }
}


const lastPageObj = reactive({});
if(currentPage==1){
  lastPageObj.value = pageArray[Number(currentPage)-1]
}else{
  lastPageObj.value = pageArray[Number(currentPage)-2]
}
const nextPageObj = reactive({});
if(currentPage==pageArray.length){
  nextPageObj.value = pageArray[Number(currentPage)-1]
}else{
  nextPageObj.value = pageArray[Number(currentPage)]
}
// console.log(lastPageObj)
console.log(nextPageObj)
</script>