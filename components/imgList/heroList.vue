<template>
  <div class=" mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-6">
    <div v-for="(item,index) in datas" :key="index">
      <NuxtLink :to="'/lol/hero_'+item.id+'/1'" :alt="item.name +','+ item.alias +','+ item.title">
        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img :src="item.imgUrl" :alt="item.name +','+ item.alias +','+ item.title" class="h-full w-full object-cover object-center group-hover:opacity-75">
        </div>
        <h3 class="text-center mt-4 text-sm text-gray-700">
          {{ item.name }}
        </h3>
      </NuxtLink>
  
    </div>
  </div>

</template>

<script lang="ts">
import { ref, toRefs, defineComponent } from 'vue'

export default defineComponent({
  props: {
    datas: Array
  },
  setup (props, context) {
    const { datas } = toRefs(props)
    console.log(datas,'data')
    return {
      datas
    }
  }
})

</script>
