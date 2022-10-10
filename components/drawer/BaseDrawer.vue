<!-- eslint-disable vue/no-multiple-template-root -->
<template>

  <n-drawer v-model:show="active" :width="200" :placement="placement"  class="bg-black ">
    <n-drawer-content  @click="close()">
      <NuxtLink @click="switchNav(index)" v-for="(item,index) in navigation" :key="index" :class="[item.current ? 'text-yellow-500' : 'text-white  hover:text-yellow-500', 'block px-3 py-2 rounded-md text-base font-medium']" :to="item.href">
        {{ item.name }}
      </NuxtLink>
     
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts">
import { ref ,toRefs,defineComponent } from 'vue'
import type { DrawerPlacement } from 'naive-ui'

export default defineComponent({
  props:{
  active: Boolean,
  navigation: Array
  },
  setup (props,context) {
      
      const {active,navigation} = toRefs(props)
      console.log(navigation,'navio')
      const placement = ref<DrawerPlacement>('left')
      const close =() => {
        context.emit('eventClose',false)
      }
      const switchNav =(index: any) => {
        context.emit('eventSwitchNav',index)
      }
      
      return {
        active,
        placement,
        navigation,
        close,
        switchNav
      }
}

})


</script>
