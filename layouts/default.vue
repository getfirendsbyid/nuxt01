<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col">
  <div ref="headerRef" id="header" class="bg-local bg-clip-border bg-no-repeat bg-center md:bg-clip-padding  h-16 sm:h-16 md:h-52 lg:h-52 fixed  top-0 inset-x-0">
  <NavBarBaseNav />
  </div>
  <!-- <slot /> -->
  <div ref="contentRef" id="content" :style="contentStyle" class="overflow-auto  mt-16 sm:mt-16 md:mt-52 lg:mt-52">
    <n-scrollbar >
      <slot name="content"></slot>
  </n-scrollbar>
</div>
 <div ref="footerRef" id="footer" class="fixed  w-auto  h-auto bottom-0 inset-x-0  bg-white p-2">
  <slot name="footer"></slot>
</div> 
</div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref, nextTick,toRefs } from 'vue'
const window = useWindowSize()
const headerRef = ref<HTMLElement>();
const footerRef = ref<HTMLElement>();
const contentStyle = reactive({
     height:String
});
onMounted(() => {
  console.log('header高度是：', headerRef.value?.clientHeight)
  console.log('footer的高度是：', footerRef.value?.clientHeight)
  console.log('窗体的高度是：', window)
  contentStyle.height = String(window.height.value - Number(headerRef.value?.clientHeight) -  Number(footerRef.value?.clientHeight)) + 'px';
  console.log('content的高度是：', contentStyle ) 
});
watch(
  () => window.height.value,
  (pev, old) => {
    console.log(old,'old')
    console.log(pev) 
    contentStyle.height = String(window.height.value - Number(headerRef.value?.clientHeight) -  Number(footerRef.value?.clientHeight)) + 'px';
    console.log(contentStyle)
    toRefs(contentStyle)
  },{deep: true} 
);
// console.log(contentHeight)
// console.log(footerHeight)
</script>
