<template>
  <div class="main-title">
    <h1 class="main-tt">{{ title }}</h1>
    <a 
      :href="path"
      target="_blank"
      class="main-tt-lk"
    >
      {{ linkName }}
    </a>
  </div>
</template>
<script>
export default {
  name: 'MainTitle',
  props: {
    title: String,
    path: String,
    linkName: {
      type: String,
      default () {
        return '查看更多';
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.main-title {
	width: 1200px;
	height: 80px;
	line-height: 80px;
	margin: 0 auto;
	border-bottom: 1px solid #ddd;

	.main-tt {
		display: inline-block;
	}

	.main-tt-lk {
		float: right;
		color: #999;
	}
}
</style>