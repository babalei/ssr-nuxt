<template>
    <swiper :options="swiperOptions" ref="indexSwiper" class="container">
        <swiper-slide
          v-for="(item, index) in sliderData"
          :key="index">
            <div class="item">
              <img :src="item.src" class="pic" />
              <div class="detail">
                <div class="title"> {{ item.title }}</div>
                <div> {{ item.content }} </div>
              </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
import { Swiper, SwiperSlider } from 'vue-awesome-swiper';

export default {
  name: 'Mswiper',
  props: {
    sliderData: Array
  },
  components: {
    Swiper,
    SwiperSlider
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        slidesPerView : 2,
        centeredSlides: true,
        loop: true
      }
    }
  },
  mounted () {
    console.log('mounted')
  }
}
</script>
<style lang="scss" scoped>
.container {
  padding: 80px 0px;
}
.swiper-slide {
  padding: 0 12px;
  width: 894px;
  height: 415px;

  .item {
    position: relative;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
  }

  .pic {
    width: 894px;
    height: 100%;
  }

  .detail {
    display: none;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 125px;
    left: 0;
    background: url(https://static-nginx-online.fbcontent.cn/tutor/tutor-ybc-official-site/text-bg.decba93….png) 50%/100% no-repeat;
    color: #fff;
    font-size: 14px;
    padding: 0 30px;
    box-sizing: border-box;

    .title {
      font-size: 20px;
      font-weight: 700;
      margin: 52px 0 15px;
    }
  }
}

.swiper-slide-active .detail {
  display: block;
}
  
</style>