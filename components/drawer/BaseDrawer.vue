<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <n-drawer v-model:show="active" :width="200" :placement="placement" :on-after-leave="close()">
    <n-drawer-content title="关闭" closable>
      <NuxtLink v-for="(item,index) in navigation" :key="index" :class="[item.current ? 'bg-gray-900 text-black' : 'text-gray-700 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :to="item.href">
        {{ item.name }}
      </NuxtLink>
      {{ attrs }}
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { DrawerPlacement } from 'naive-ui'

defineProps({
  active: Boolean,
  navigation: Array
})

const placement = ref<DrawerPlacement>('left')
const emit = defineEmits(['closeOrOpen'])
function close () {
  emit('closeOrOpen', false)
}
</script>
