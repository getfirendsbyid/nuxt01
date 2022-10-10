<!-- eslint-disable vue/no-multiple-template-root -->
<template>
<<<<<<< HEAD
  <n-drawer v-model:show="active" :width="200" :placement="placement" close-on-esc>
    <n-drawer-content title="关闭" closable>
      <NuxtLink v-for="(item,index) in navigation" :key="index" :class="[item.current ? 'bg-gray-900 text-black' : 'text-gray-700 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :to="item.href">
=======

  <n-drawer v-model:show="active" :width="200" :placement="placement"  class="bg-black ">
    <n-drawer-content  @click="close()">
      <NuxtLink @click="switchNav(index)" v-for="(item,index) in navigation" :key="index" :class="[item.current ? 'text-yellow-500' : 'text-white  hover:text-yellow-500', 'block px-3 py-2 rounded-md text-base font-medium']" :to="item.href">
>>>>>>> 16ac87fcb9766497eb07f983af33f4bdd3e361b1
        {{ item.name }}
      </NuxtLink>
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts">
<<<<<<< HEAD
import { ref, defineComponent } from 'vue'
=======
import { ref ,toRefs,defineComponent } from 'vue'
>>>>>>> 16ac87fcb9766497eb07f983af33f4bdd3e361b1
import type { DrawerPlacement } from 'naive-ui'

export default defineComponent({
  props: {
    active: Boolean,
    navigation: Array
  },
<<<<<<< HEAD
  setup (props, context) {
    const active = ref(props.active)
    const navigation = ref(props.navigation)
    const placement = ref<DrawerPlacement>('left')
    console.log(props, '子组件')
    return {
      active,
      navigation,
      placement
    }
  }
=======
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
>>>>>>> 16ac87fcb9766497eb07f983af33f4bdd3e361b1

})

</script>
