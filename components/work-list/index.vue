<template>
  <div class="work-container">
    <div class="work-list" v-for="item in arrList" :key="item.id">
      <div class="item">
        <img :src="item.src" alt="" class="pic">
        <div class="detail">
          <div class="title"> {{ item.title }} </div>
          <div class="content" data-v-7227a360=""> {{ item.info }} </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WorkList',
  props: {
    arrList: Array
  }
}
</script>
<style lang="scss" scoped>
.work-container {
  width: 1200px;
  margin: 40px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.work-list {
  box-shadow: 1px 3px 5px #ccc;
  transition: box-shadow .3s;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 4px 6px #999;
  }

  .item {
    position: relative;
    height: 100%;   
  }

  .pic {
    width: 333px;
    height: 100%;
    border-radius: 20px;
  }

  .detail {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 54px;
    left: 0;
    background: #f7f9fc;
    color: #272c38;
    font-size: 14px;
    padding: 0 19px;
    transition: all .3s;
    overflow: hidden;
    border-radius: 0 0 17px 17px;

    &:hover {
      color: #276DB3;
      height: 85px;
      background: #fff;
    }
    .title {
      margin-top: 19px;
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: 700;
    }
    
    .content {
      padding-left: 6px;
    }
  }



}
</style>