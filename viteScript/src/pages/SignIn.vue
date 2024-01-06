<template>
  <div id="sigIn">
    <div id="formContent">
      <div class="sigInForm" :class="{ show: isShow }">
        <p @click="send()" class="title">Welcome Back</p>
        <div class="account">
          <input type="text" placeholder="Email Address" />
        </div>
        <div class="password">
          <input type="password" placeholder="Password" />
        </div>
        <div>
          <button>Login</button>
        </div>
        <div @click="handlerSinUpForm()" class="sinUp">
          <p>尚未有帳號嗎? 註冊</p>
        </div>
      </div>
      <div class="sigUPForm" :class="{ show: !isShow }">
        <p class="title">Sign Up</p>
        <div class="account">
          <input type="text" placeholder="Name" />
        </div>
        <div class="account">
          <input type="text" placeholder="Email Address" />
        </div>
        <div class="password">
          <input type="password" placeholder="Password" />
        </div>
        <div class="password">
          <input type="password" placeholder="Retype Password " />
        </div>
        <div>
          <button>Sign Up</button>
        </div>
        <div @click="handlerSinInForm()" class="sinIn">
          <p>已有帳號 登入</p>
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

  //   axios({
  //     method: "POST",
  //     url: "https://a97c-114-34-127-30.ngrok-free.app/server-java/apiM/ipo/V1/interfaces/test/test_API",
  //     data: dataType,
  //   }).then((res) => {
  //     console.log(res);
  //   });

  

  axios
    .get("https://197d-36-228-15-110.ngrok-free.app/123", {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};
</script>
  
<style scoped lang="scss">
#sigIn {
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background-image: url(../assets/img/sigin/siginBackGround2.jpg);
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  #formContent {
    box-sizing: border-box;
    width: 40%;
    height: 70vh;
    border: 1px solid #55505059;
    background-color: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(9px);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .sigInForm {
      opacity: 0;
    }

    .sigInForm.show,
    .sigUPForm {
      transition: 1.3s;
      opacity: 1;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .sigUPForm {
      transition: 1.3s;
      position: absolute;
      right: -200%;

      &.show {
        transition: 0.5s;
        opacity: 1;
        right: 0;
      }
    }

    .title {
      color: #fdfeff;
      letter-spacing: 1px;
      font-size: 20px;
      font-weight: 400;
    }

    input {
      border: none;
      background-color: transparent;
      border-bottom: 1px solid #fdfeff;
      width: 100%;
      height: 50px;
      color: #fdfeff;
      padding-top: 25px;

      &:focus {
        outline: none;
      }
    }

    input::placeholder {
      color: #fdfeff;
      letter-spacing: 1px;
      font-size: 13px;
      position: relative;
      left: 0px;
    }

    div {
      width: 50%;
    }

    button {
      margin-top: 15px;
      margin-bottom: 10px;
      width: 100%;
      background-color: #313131;
      color: #fdfeff;
      letter-spacing: 1px;
    }

    .sinUp,
    .sinIn {
      color: #fdfeff;
      font-size: 13px;
      cursor: pointer;
      text-align: center;

      &:hover {
        text-decoration: underline;
      }
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