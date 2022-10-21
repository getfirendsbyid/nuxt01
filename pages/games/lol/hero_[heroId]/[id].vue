<template>
  <NuxtLayout name="default">
    <template #content>
      <n-empty
        v-if="heroInfo.audio.length==0"
        class="mt-64"
        size="large"
        description="没有语音咯~"
      />

      <div class=" pl-4 pr-4 justify-center ">
        <div class=" ">
          <n-list
            hoverable
            clickable
          >
            <n-list-item
              v-for="(item,index) in heroInfo.audio"
              :key="index"
            >
              <n-thing
                :title="item.name"
                content-style="margin-top: 10px;"
                @click="selectAudio(index)"
              >
                <template #description>
                  <n-space
                    size="small"
                    style="margin-top: 4px"
                  >
                    <n-tag
                      :bordered="false"
                      type="info"
                      size="small"
                    >
                      {{ heroInfo.name }}
                    </n-tag>
                    <n-tag
                      :bordered="false"
                      type="info"
                      size="small"
                    >
                      {{ heroInfo.title }}
                    </n-tag>
                    <n-tag
                      :bordered="false"
                      type="info"
                      size="small"
                    >
                      {{ heroInfo.skin[0].skin_name }}
                    </n-tag>
                  </n-space>
                </template>
              </n-thing>
              <template #suffix>
                <n-button>下载</n-button>
              </template>
            </n-list-item>
          </n-list>
        </div>
      </div>
    </template>

    <template #footer>
      <div v-if="heroInfo.audio.length!=0" class=" w-auto  h-auto bottom-0 inset-x-0  bg-white p-2">
        <div class="flex justify-center mb-2 ">
          <n-button
            v-for="(item,index) in heroInfo.skin"
            :key="index"
            dashed
          >
            {{ item.skin_name }}
          </n-button>
        </div>
        <div class="flex justify-center  mb-2 ">
          <!-- <clientg-only>
            <n-pagination
              v-model:page="heroParams.page"
              :page-count="heroInfo.pageCount"
              :page-slot="6"
              :on-update:page="changePage"
              :on-update:page-size="changeLimit"
            />
          </clientg-only> -->

        </div>
        <AudioPlayer
          :audio-info="heroInfo"
          :current-index="selectedIndex"
        />
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { reject } from 'lodash'
import { ref, reactive } from 'vue'
import { getHeroInfo } from '@/api/lol'
const route = useRoute()
const page = route.params.id
const heroId = route.params.heroId
const selectedIndex = ref(0)
definePageMeta({
  layout: false
})
const config = useRuntimeConfig()
const audioAPiBase = config.public.audioApiBase // 你的接口地址

const heroParams = reactive({
  id: heroId,
  skinId: Number,
  page,
  limit: 20
})

const heroInfoRes = reactive(await getHeroInfo(heroParams))

const heroInfo = heroInfoRes.value.data
console.log(heroInfo.audio.length != 0, 'bool')
if (heroInfo.audio != []) {
  heroInfo.audio.forEach((audio: { url: string }) => {
    audio.audioUrl = audioAPiBase + audio.url
  })
}

const selectAudio = (index: Number) => {
  selectedIndex.value = index
  console.log(selectedIndex)
}
const changePage = (page: Number) => {
  page = page
}
const changeLimit = (limit: Number) => {}
// 分页组件到底部固定住
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
