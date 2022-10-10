<template>
	  <n-config-provider :theme-overrides="themeOverrides">
      <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions"  />
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent, h, ref, Component } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'

import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
	common: {
		primaryColor: '#EAB308',
		primaryColorHover: "#EAB308",
		baseColor: "#EAB308",
		textColor2: "#FFF",
		railColor: "rgb(219, 219, 223)",
    popoverColor: "rgba(74,57,100,.58)", 
		hoverColor: "rgba(74,57,100,.58)",
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

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
	
  {
    label: '英雄联盟',
    key: 'lol',
    children: [
			{
        label: '英雄语音',
        key: 'hero',
      },
      {
        label: '地图语音',
        key: 'map',
        children: [
          {
            label: '召唤师峡谷-播报员凯影',
            key: '凯隐'
          },
					{
            label: '召唤师峡谷-播报员派克',
            key: '派克'
          },
					{
            label: '召唤师峡谷-播报员船长普朗克',
            key: '普朗克'
          },
					{
            label: '屠夫之桥',
            key: '屠夫之桥'
          },
					{
            label: '极地大乱斗',
            key: '极地大乱斗'
          },
					{
            label: '极限闪击战-女性播报员',
            key: '极限闪击战'
          },
					{
            label: '训练模式-女声播报员',
            key: '女声播报员'
          },
					{
            label: '训练模式-女声播报员2',
            key: '女声播报员2'
          },
					{
            label: '魄罗极地大乱斗-女声播报员',
            key: '魄罗极地大乱斗'
          },
        ]
				
      }
    ]
  },{
    		label: '原神',
    		key: '原神',
  		},
]
console.log(menuOptions)
export default defineComponent({
  setup () {
    return {
      activeKey: ref<string | null>(null),
      menuOptions,
			themeOverrides
    }
  }
})
</script>