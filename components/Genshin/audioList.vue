<template>
  <div class="audioList-container  w-full sm:w-full md:w-64 lg:w-96">
    <div v-for="(item,index) in audioList" :key="index" class="audioList-list flex" :class="item.checked ? 'active' : 'default'" @click="clickList(index)">
      <div class="list-play" />
      <div class="list-name text-base flex-1">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  audioList: {
    type: Array,
    default () {
      return []
    }
  }
})
const emits = defineEmits(['clickListEmit'])
const clickList = (index) => {
  emits('clickListEmit', index)
}
</script>

<style scoped lang="scss">
    .audioList-container{
        height: 70vh;
        overflow-y: scroll;
        .audioList-list{
            height: 38px;
            margin-top: 10px;
            .list-play{
                width: 38px;
                height: 36px;
                background: rgba(0,0,0,0.7);
            }
            .list-name{
                width: auto;
                height: 36px;
                background: rgba(0,0,0,0.5);
                text-align: left;
                line-height: 36px;
                color: #fff;
                padding-left: 20px;
            }
        }
        .audioList-list.default{
          border:1px solid #888585d8
        }
        .audioList-list.active{
          border:1px solid #fff
        }
        .audioList-list:first-of-type{
            margin-top: 0!important;
        }
    }
    .audioList-container::-webkit-scrollbar {
      display: none;
    }
</style>
