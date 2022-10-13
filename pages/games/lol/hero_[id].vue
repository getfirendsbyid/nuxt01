<template>
	<div>
	
		
	</div>
	<AudioPlayer :urls="url" />
</template>
<script>

export default defineComponent({
	setup() {
		const url = [
			{url:'http://www.acgnb.com/audio/annie-安妮/base-黑暗之女 安妮/【黑暗之女 安妮】不要变成发抖的小喵喵。-1933305856.wav'},
			{url:'http://www.acgnb.com/audio/annie-安妮/base-黑暗之女 安妮/【黑暗之女 安妮】Yeah Tibers。-1035814192.wav'}
		]
		return {url}
	},
})
</script>
<style scoped>

</style>

