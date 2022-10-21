<template>
  <div class="autoDescription-container sm:2 md:w-64 lg:w-64">
    <div class="text-container">
      {{ audioInfo.text }}
    </div>
    <div class="text-decription">
      {{ audioInfo.described }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  audioInfo: {
    type: Object,
    default () {
      return {}
    }
  }
})
</script>

<style scoped lang="scss">
    .autoDescription-container{
        height: auto;
        .text-container{
            margin-top: 20px;
            color: #fff;
        }
        .text-decription{
            line-height: 25px;
            color: #fff;
            margin-top: 17px;
        }
    }
</style>
