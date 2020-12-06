<template>
  <div>
    <Mheader :navList="navList" />
    <Nuxt />
    <Mfooter />
  </div>
</template>
<script>
import Mheader from '@/components/header';
import Mfooter from '@/components/footer';

const { navList } = require('~/server/conf/navList');
export default {
  components: {
    Mheader,
    Mfooter 
  },
  data () {
    return {
      navList
    }
  }
}
</script>
<style>

</style>
