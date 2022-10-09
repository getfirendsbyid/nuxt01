<!-- eslint-disable vue/no-multiple-template-root -->
<template>

  <n-drawer v-model:show="active" :width="200" :placement="placement" close-on-esc >
    <n-drawer-content title="关闭" closable>
      <NuxtLink v-for="(item,index) in navigation" :key="index" :class="[item.current ? 'bg-gray-900 text-black' : 'text-gray-700 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :to="item.href">
        {{ item.name }}
      </NuxtLink>
     
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts">
import { ref ,defineComponent } from 'vue'
import type { DrawerPlacement } from 'naive-ui'

export default defineComponent({
  props:{
  active: Boolean,
  navigation: Array
  },
  setup (props,context) {
      const active = ref(props.active)
      const placement = ref<DrawerPlacement>('left')
      console.log(props,'子组件')
      return {
        active: active,
        placement: placement,
      }
}

})


</script>
