<template>
  <NuxtLayout name="default">
    <template #content>
      <n-empty
        v-if="heroInfo.audio.length == 0"
        class="mt-64"
        size="large"
        description="没有语音咯~"
      />

      <div class="">
        <n-list hoverable clickable>
          <n-list-item
            v-for="(item, index) in heroInfo.audio"
            :key="index"
            @click="selectAudio(index)"
          >
            <n-thing>
              <h1>{{ item.name }}</h1>
              <template #description>
                <n-space size="small" style="margin-top: 4px">
                  <n-tag :bordered="false" type="info" size="small">
                    {{ heroInfo.name }}
                  </n-tag>
                  <n-tag :bordered="false" type="info" size="small">
                    {{ heroInfo.title }}
                  </n-tag>
                  <n-tag :bordered="false" type="info" size="small">
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
      <Skin/>
    </template>
 
    <template #footer>
      <div
        v-if="heroInfo.audio.length != 0"
        class="w-auto h-auto bottom-0 inset-x-0 bg-white p-2"
      >
        <div class="flex justify-center ">
          <PaginationBasePagination/>
        </div>
        <AudioPlayer
          :audio-info="heroInfo"
          :current-index="selectedIndex"
          :cover="cover"
          @changeSelectIndex="selectAudio"
        />
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
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
if (heroInfo.audio.length !== 0) {
  heroInfo.audio.forEach((audio: { url: string }) => {
    audio.audioUrl = audioAPiBase + audio.url
    console.log(audio.url)
  })
}
console.log(heroInfo)

const cover =
  'https://game.gtimg.cn/images/lol/act/img/skinloading/' +
  heroInfo.heroId +
  '000.jpg'

const selectAudio = (index: Number) => {
  selectedIndex.value = index
  console.log(selectedIndex.value)
}
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
