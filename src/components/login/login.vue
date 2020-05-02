<template>
    <div>
      <KakaoLogin
        api-key="10f7c8e22c14713641d45f9d11c74934"
        image="kakao_login_btn_large"
        :on-success="kakaoSuccess"
        :on-failure="kakaoFailure"
      />
      <v-facebook-login app-id="587554052111413"></v-facebook-login>
      <GoogleLogin :params="googleParams" :renderParams="renderParams" :onSuccess="googleSuccess" :onFailure="googleFailure">Login</GoogleLogin>

      <button @click="logout">logout</button>
    </div>
</template>

<script>
import KakaoLogin from 'vue-kakao-login'
import VFacebookLogin from 'vue-facebook-login-component'
import GoogleLogin from 'vue-google-login'

export default {
  name: 'Login',
  components: {
    KakaoLogin,
    VFacebookLogin,
    GoogleLogin
  },
  data: () => {
    return {
      googleParams: {
        client_id: '0000'
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      }
    }
  },
  methods: {
    kakaoSuccess: (data) => {
      this.isLogin = true
      console.log('success', data)
    },
    kakaoFailure: (data) => {
      console.log('fail', data)
    },
    googleSuccess: (data) => {
      this.isLogin = true
      console.log('success', data)
    },
    googleFailure: (data) => {
      console.log('fail', data)
    },
    logout: () => {
      this.isLogin = false
    }
  }
}
</script>
