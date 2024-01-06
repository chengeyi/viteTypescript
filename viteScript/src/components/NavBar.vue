<template>
  <div id="navBar">
    <div class="">
      <div class="pageSet">
        <div class="language col-md-3">
          <div>FR</div>
          <div>EN</div>
        </div>
        <div class="about col-md-6">
          <div class="currency">
            <div>EUR</div>
            <div>USD</div>
          </div>
          <div class="community">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="10"
                viewBox="0 0 320 512"
              >
                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                <path
                  fill="#676767"
                  d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                viewBox="0 0 448 512"
              >
                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                <path
                  fill="#676767"
                  d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
              >
                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                <path
                  fill="#676767"
                  d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="login col-md-3">
          <div @click="handlerLogin()">Registration / Log In</div>
        </div>
      </div>
    </div>
    <div class="pageCategory">
      <div class="title col-md-3" @click="handlerHome()">HERMES</div>
      <div class="category col-md-6">
        <div @click="handlerHome()">HOME</div>
        <div>MEN</div>
        <div>WOMEN</div>
        <div>ABOUT US</div>
      </div>
      <div class="tool col-md-3">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            viewBox="0 0 512 512"
          >
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
            <path
              fill="#676767"
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="22"
            viewBox="0 0 576 512"
          >
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
            <path
              fill="#676767"
              d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import axios from "axios";
import { ref, Ref } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAlignJustify,
  faEnvelope,
  faUser,
  faAngleDown,
  faWindowClose,
  faRedo,
  faCircleXmark,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  ...[
    faAlignJustify,
    faEnvelope,
    faUser,
    faAngleDown,
    faWindowClose,
    faRedo,
    faCircleXmark,
    faLock,
  ]
);
import { useRouter, RouteLocationNormalized } from "vue-router";
const router = useRouter();

const handlerHome = ():void => {
  // const homeRoute: RouteLocationNormalized = {
  //   name: 'Home'
  //   };
  router.push("Home");
}

const handlerLogin = ():void => {
  router.push("SignIn");
}

const isShow = ref<boolean>(true);
const handlerSinUpForm = (): void => {
  isShow.value = false;
};

const handlerSinInForm = (): void => {
  isShow.value = !isShow.value;
};

const send = (): void => {
  let obj = {
    year: "",
  };

  let dataType = `requestBody=${JSON.stringify(obj)}&requestHeader={}`;

  axios({
    method: "POST",
    url: "https://a97c-114-34-127-30.ngrok-free.app/server-java/apiM/ipo/V1/interfaces/test/test_API",
    data: dataType,
  }).then((res) => {
    console.log(res);
  });
};
</script>
  
<style scoped lang="scss">
#navBar {
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 114px;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: #1b1b1ded;
  .pageSet {
    border-bottom: 1px solid #555555;
    height: 38px;
    color: #676767;
    display: flex;
    font-size: 13px;

    .language {
      cursor: pointer;
      border-left: 1px solid #555555;
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 10px;
      padding-right: 20px;
    }

    .about {
      padding-right: 20px;
      padding-left: 20px;
      border-left: 1px solid #555555;
      border-right: 1px solid #555555;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .currency,
      .community {
        cursor: pointer;
        display: flex;
        gap: 10px;
        svg {
          color: #676767;
        }
      }

      .community {
        display: flex;
        gap: 15px;
      }
    }

    .login {
      cursor: pointer;
      padding-left: 20px;
      border-right: 1px solid #555555;
      display: flex;
      justify-content: start;
      align-items: center;
    }
  }

  .pageCategory {
    height: 76px;
    color: #676767;
    display: flex;

    .title {
      cursor: pointer;
      display: flex;
      justify-content: end;
      align-items: center;
      color: #ffffff;
      font-size: 18px;
      font-weight: 600;
      letter-spacing: 1px;
    }

    .category {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 40px;
      font-weight: 600;
      color: #cccccb;
      div {
        cursor: pointer;
      }
    }

    .tool {
      cursor: pointer;
      padding-left: 20px;
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 80px;
    }
  }
}

@media only screen and (max-width: 768px) {
  #sigIn {
    #formContent {
      width: 70%;
    }
  }
}

@media only screen and (max-width: 576px) {
  #sigIn {
    #formContent {
      width: 100%;

      div {
        width: 80%;
      }
    }
  }
}
</style>