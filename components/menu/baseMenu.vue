<template>
  <n-message-provider>
    <n-config-provider :theme-overrides="themeOverrides">
      <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" @update:value="handleUpdateValue" />
    </n-config-provider>
  </n-message-provider>
</template>

<script lang="ts">
import { defineComponent, h, ref, Component } from 'vue'
import { NIcon, GlobalThemeOverrides } from 'naive-ui'
import type { MenuOption } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#EAB308',
    primaryColorHover: '#EAB308',
    baseColor: '#EAB308',
    textColor2: '#FFF',
    railColor: 'rgb(219, 219, 223)',
    popoverColor: 'rgba(74,57,100,.58)',
    hoverColor: 'rgba(74,57,100,.58)'
  },
  Button: {
    textColor: '#EAB308'
  },
  Select: {
    peers: {
      InternalSelection: {
        textColor: '#EAB308'
      }
    }
  }
}

const menuOptions: MenuOption[] = [
  {
    label: '英雄联盟',
    key: 'lol',
    children: [
      {
        label: '英雄语音',
        key: 'hero',
        url: '/games/lol/hero'
      },
      {
        label: '地图语音',
        key: 'map',
        url: '/games/lol/map'
      }
    ]
  },
  {
    label: '原神',
    key: '原神'
  }
]
function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

export default defineComponent({

  setup () {
    const router = useRouter()
    return {
      activeKey: ref<string | null>(null),
      menuOptions,
      themeOverrides,
      handleUpdateValue (key: string, item: MenuOption) {
        router.push({ path: item.url })
        console.log('[onUpdate:value]: ' + JSON.stringify(key))
        console.log('[onUpdate:value]: ' + JSON.stringify(item))
      }
    }
  }
})
</script>
