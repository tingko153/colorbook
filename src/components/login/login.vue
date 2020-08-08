<template>
    <div class="layout-container subpage-member">
      <div class="layout-content layout-detail">
        <p class="content-tit mem-tit">로그인</p>
        <ul class="mem-list">
            <li>
              <p class="mem-list-tit">이메일 아이디</p>
              <div class="module-inputset mem-wrap">
                <div class="input-wrap">
                  <input type="text" value="" class="element-input input-base " placeholder="이메일 아이디 입력">
                  <span class="input-wrap-ic">
                    <span class="element-icon ic-caution-circle" type="submit">caution</span>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <p class="mem-list-tit">비밀번호</p>
              <div class="module-inputset mem-wrap">
                <div class="input-wrap">
                  <input type="text" value="" class="element-input input-base " placeholder="비밀번호 입력">
                  <span class="input-wrap-ic">
                    <button class="element-icon ic-pw-view-off" type="submit">비밀번호 암호와 풀고 보기</button>
                    <!--<button class="element-icon ic-pw-view-on" type="submit">비밀번호 암호와 풀고 보기</button>-->
                    <span class="element-icon ic-caution-circle" type="submit">caution</span>
                  </span>
                </div>
              </div>
            </li>
            <li>
                <p class="mem-list-tit">
                  <span class="element-checkbox ">
                    <input type="checkbox" name="" id="check1" class="checkbox-input">
                    <label class="blind" for="check1">체크박스</label>
                  </span>
                    자동 로그인
                </p>
            </li>
            <li>
                <button class="element-btn  btn-pink size-48 ">
                    <span class="btn-txt">확인</span>
                </button>
            </li>
            <li>
                <span class="mem-log-list">
                    <router-link :to="{name: 'findId'}">아이디 찾기</router-link>
                    <router-link :to="{name: 'findPassword'}">비밀번호 찾기</router-link>
                    <router-link :to="{name: 'regist'}">회원가입 하기</router-link>
                </span>
            </li>
        </ul>

        <ul class="mem-list-btn">
            <li>
              <!-- <button class="element-btn  btn-kakao size-48 ">
                <span class="btn-txt"><span class="element-icon ic-kakao"></span>카카오 계정 로그인</span>
              </button> -->
              <KakaoLogin
                api-key="10f7c8e22c14713641d45f9d11c74934"
                image="kakao_login_btn_large"
                :on-success="kakaoSuccess"
                :on-failure="kakaoFailure"
              />
            </li>
            <li>
              <button class="element-btn  btn-naver size-48 ">
                <span class="btn-txt"><span class="element-icon ic-naver"></span>네이버 계정 로그인</span>
              </button>
            </li>
            <li>
              <!-- <button class="element-btn  btn-google size-48 ">
                <span class="btn-txt"><span class="element-icon ic-google"></span>구글 계정 로그인</span>
              </button> -->
              <GoogleLogin :params="googleParams" :renderParams="renderParams" :onSuccess="googleSuccess" :onFailure="googleFailure">Login</GoogleLogin>
            </li>
        </ul>
      </div>
      <!-- <v-facebook-login app-id="587554052111413"></v-facebook-login> -->

      <!-- <button @click="logout">logout</button> -->
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
                client_id: '186008499491-ujtfu0oethgr6vllnj7tnfsgds3ntm7q.apps.googleusercontent.com'
            },
            renderParams: {
                width: 432,
                height: 48,
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
