<template>
  <div class=" mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-6">
    <div v-for="(item,index) in datas" :key="index">
      <NuxtLink :to="'/games/lol/'+item.id" :href="item.href">
        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img :src="item.imgUrl" :alt="item.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75">
        </div>
        <h3 class="text-center mt-4 text-sm text-gray-700">
          {{ item.name }}
        </h3>
      </NuxtLink>
      <div> <audio :src="item.selectAudio" controls /> 选中</div>
      <div>  <audio :src="item.banAudio" controls />ban掉</div>
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

    return {
      datas
    }
  }
})

</script>
