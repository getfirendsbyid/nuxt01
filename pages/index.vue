<template>
 <ImgListHeroList></ImgListHeroList>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, getCurrentInstance }  from 'vue'
 //引入 api中对应的接口请求
interface ArrayList {
    banner: object
}
const state:ArrayList = reactive({
 		banner:[],
})

//config2
const params = {page:1,limit:8}

// useFetch('http://127.0.0.1/api/games/homeList',{method:'post',params}).then(({ data:cart }) => {
//   	console.log(cart)
   
//   })
  const res = await useFetch("http://127.0.01.1/api/games/homeList", {
  method: "get",
  params,
});
console.log(res)


definePageMeta({
  layout: "default",
});


</script>