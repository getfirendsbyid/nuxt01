<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <n-drawer v-model:show="active" :width="200" :placement="placement" :on-after-leave="close()">
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
      console.log(active)
      const placement = ref<DrawerPlacement>('left')

      function close() {
        console.log(active)
        
        context.emit('eventCloseOrOpen', true)
      }
        return {
      active: active,
      placement: placement,
      close
  }

}

})


</script>
