<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in imgList" :key="item.img">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../images/home/menu1.png" alt=""> 
          <div class="mui-media-body">新闻资讯</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../images/home/menu2.png" alt=""> 
          <div class="mui-media-body">图片分享</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../images/home/menu3.png" alt=""> 
          <div class="mui-media-body">商品购买</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../images/home/menu4.png" alt=""> 
          <div class="mui-media-body">留言反馈</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../images/home/menu5.png" alt=""> 
          <div class="mui-media-body">视频专区</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../images/home/menu6.png" alt=""> 
          <div class="mui-media-body">联系我们</div>
        </a></li>
    </ul>
  </div>
</template>
<script>
import "../lib/mui/css/mui.css";
export default {
  data() {
    return {
      imgList: []
    };
  },
  methods: {
    getSwipe() {
      this.$axios.get("/api/getlunbo").then(result => {
        if (result.data.status == 0) {
          this.imgList = result.data.message;
        } else {
          console.log("轮播图加载失败");
        }
      });
    }
  },
  created() {
    this.getSwipe();
  }
};
</script>

<style scoped lang="scss">
.mint-swipe {
  height: 200px;
  /* background-color: blue; */
  img {
    width: 100%;
    height: 100%;
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  .mui-table-view-cell {
    border: none;
    a {
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>
