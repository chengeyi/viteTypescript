<template>
  <div id="home">
    <section class="carousel">
      <el-carousel
        class="elCarousel"
        autoplay="false"
        trigger="click"
        height="100%"
      >
        <el-carousel-item class="elCarouselItem">
          <img src="../assets/img/home/carouse1.jpg" alt="" />
        </el-carousel-item>
      </el-carousel>
      <div class="title">
        <h1 class="disign">DESIGN.</h1>
        <span class="creative">BEST & CREATIVE</span>
        <span class="about"
          >IT'S A LONG ESTABLISHED... FACT THAT A READER WILL BE
          DISTRACTED.</span
        >
        <div class="titleBtnContent">
          <button>VIEW NOW</button>
          <button>FOLLOW</button>
        </div>
      </div>
    </section>
  </div>
</template>
  
<script setup lang="ts">
</script>
  
<style lang="scss" scoped>
#home {
  .carousel {
    position: relative;
    z-index: 1;
    height: 100vh;
    width: 100%;
    .elCarousel {
      height: 100vh;
      width: 100%;

      .elCarouselItem {
        width: 100%;
        height: 100vh;
        img {
          object-fit: cover;
          width: 100%;
          height: 100vh;
          filter: brightness(50%);
        }
      }
    }
    .title {
      position: absolute;
      top: 50%;
      right: 25px;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      .disign {
        color: #ffffff;
        letter-spacing: 1px;
        font-size: 70px;
        font-weight: 500;
        margin-bottom: -30px;
      }
      .creative {
        letter-spacing: 1px;
        font-size: 70px;
        font-weight: 100;
        color: #b9923f;
        margin-bottom: -15px;
      }
      .about {
        letter-spacing: 1px;
        color: #919192;
      }
      .titleBtnContent {
        margin-top: 20px;
        button {
          border-color: #b9923f;
          color: #b9923f;
          background-color: transparent;
          margin-right: 10px;
          cursor: pointer;
          font-weight: 500;
          border-radius: 1px;
          transition: 0.3s;
          &:hover {
            color: #ffffff;
            background-color: #b9923f;
            transition: 0.3s;
          }
        }
      }
    }
  }
}
</style>