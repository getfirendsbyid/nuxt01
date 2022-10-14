<template>
		



  <div ref="containerRef"
       >
    <div class="flex pl-4 pr-4 justify-center ">
      <div class="mt-4 h-auto">
        <n-list hoverable
                clickable>
          <n-list-item v-for="(item,index) in heroInfo.audio"
                       :key="index">
            <n-thing :title="item.url"
                     content-style="margin-top: 10px;">
              <template #description>
                <n-space size="small"
                         style="margin-top: 4px">
                  <n-tag :bordered="false"
                         type="info"
                         size="small">
                    暑夜
                  </n-tag>
                </n-space>
              </template>
            </n-thing>
          </n-list-item>
        </n-list>
      </div>
      
    </div>

    <div class="fixed  w-auto  h-auto bottom-0 inset-x-0  bg-white p-2">
      <div class="flex justify-center mb-2 ">
        <n-button dashed
                  v-for="(item,index) in heroInfo.skin"
                  :key="index">
          {{item.skin_name}}
        </n-button>
      </div>
      <div class="flex justify-center  mb-2 ">
        <clientg-only>
          <n-pagination v-model:page="heroParams.page"
                        :page-count="heroParams.limit"
                        :page-slot="6" />
        </clientg-only>
      </div>

      <AudioPlayer :urls="url" />
    </div>
    
  </div>

</template>
<script setup lang="ts">
import { getHeroInfo } from '@/api/lol'
import { ref, defineComponent } from 'vue'
const route = useRoute()

const url = [
  {
    url: 'http://www.acgnb.com/audio/annie-安妮/base-黑暗之女 安妮/【黑暗之女 安妮】不要变成发抖的小喵喵。-1933305856.wav',
  },
  {
    url: 'http://www.acgnb.com/audio/annie-安妮/base-黑暗之女 安妮/【黑暗之女 安妮】Yeah Tibers。-1035814192.wav',
  },
]
const heroParams = ref({
  id: route.params.id,
  skinId: '',
  page: 1,
  limit: 20,
})
const heroInfoRes = ref(await getHeroInfo(heroParams.value))
const heroInfo = heroInfoRes.value.data
// 分页组件到底部固定住
const containerRef = ref<HTMLElement | undefined>(undefined)
console.log(heroInfo)
</script>
<style scoped>
.absolute-anchor-container {
  width: 100%;
  height: 200px;
  position: relative;
}

.container {
  height: 100%;
  background-color: #b2b2b2;
  display: flex;
  flex-direction: column;
}

.padding {
  height: 150px;
  width: 100%;
  background-color: rgba(128, 128, 128, 0.15);
}

.content {
  flex: 1;
  background-color: sandybrown;
  overflow: auto;
  /* 一般不显示滚动条，仅当内容显示不下时显示滚动条 */
}
</style>

