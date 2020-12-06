<template>
  <div>
    <Mswiper :sliderData="sliderData" />
    <!-- <main-title :title="mainTitleList[0].title"/> -->
    <main-title :title="mainTitleList[1].title"/>
    <WorkList :arrList="workList" />
    <main-title :title="mainTitleList[2].title"/>
    <Teacher :teacher="teacher"/>
  </div>
  
</template>

<script>
import MainTitle from '@/components/main-title';
import WorkList from '@/components/work-list';
import Teacher from '@/components/teacher';
import Mswiper from '@/components/swiper';
export default {
  components: {
    MainTitle,
    WorkList,
    Teacher,
    Mswiper
  },
  asyncData () {
    const { mainTitleList } = require('@/server/conf/mainTitle');
    const { workList } = require('@/server/conf/workList');
    const { teacher } = require('@/server/conf/teacher');
    return {
      mainTitleList,
      workList,
      teacher
    }
  },
  data () {
    return {
      
      sliderData: [
        {
          src: 'https://static-nginx-online.fbcontent.cn/tutor/tutor-ybc-official-site/part-two3.1ce7cac2dca600f6d5ea270b93e620f0.png',
          title: '获得思维锻炼和能力迁移',
          content: '孩子逻辑思维、创造力、专注力、抗挫折能力、自主纠错能力全方位提升。'
        },
        {
          src: 'https://static-nginx-online.fbcontent.cn/tutor/tutor-ybc-official-site/part-two4.7a1657780e78ee33216bb1265b8f1ab9.png',
          title: '帮助全科进步',
          content: '掌握体系化学习方法和科学的思维链条，提升举一反三能力。'
        },
        {
          src: 'https://static-nginx-online.fbcontent.cn/tutor/tutor-ybc-official-site/part-two1.d1d5a6e5294829608ceb0ca81c02a6e5.png',
          title: '赢在人工智能时代起跑线',
          content: '未来70%的工作都和编程有关，有47%的工作有很大几率被人工智能取代。'
        },
        {
          src: 'https://static-nginx-online.fbcontent.cn/tutor/tutor-ybc-official-site/part-two2.2470151e499c8bc636ea4a6064d77060.png',
          title: '抢先备战提升竞争力',
          content: '全球已有超24个国家将编程教育纳入中小学课程大纲及教学场景，全国多地将编程技术纳入高考范围。'
        }
      ]
    }
  }
}
</script>

<style>

</style>
