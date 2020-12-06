<template>
<div>
  <Mheader :navList="navList" />
  <nuxt />
</div>
</template>
<script>
import Mheader from '@/components/header';
export default {
  components: {
    Mheader
  }
}
</script>