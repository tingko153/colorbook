<template>
  <header class="layout-header">
    <div class="dorothy-gnb">
      <div class="gnb-inner">
        <h1 class="gnb-logo">
          <router-link :to="{name: 'main'}">dorothy</router-link>
        </h1>
        <ul class="nav-list">
            <li><router-link class="nav-list-link" :to="{name: 'login'}">스토리</router-link></li>
            <li><a class="nav-list-link" href="#">내강좌</a></li>
            <li><router-link class="nav-list-link" :to="{name: 'login'}">로그인</router-link></li>
            <li>
              <div class="element-select select-base base-square user-select active">
                <figure class="user-image" style="background-image: url(/src/assets/images/sample/card-list-sample.png)">
                    <img src="/src/assets/images/sample/card-list-sample.png" alt="">
                </figure>
                <select name="">
                    <option value="">type1</option>
                    <option value="">type2</option>
                    <option value="">type3</option>
                </select>
                <ul class="element-dropdown">
                  <li><button type="button" class="element-btn btn-square">
                        <span class="btn-txt">내 정보</span>
                  </button></li>
                  <li><button type="button" class="element-btn btn-square">
                        <span class="btn-txt">결제 내역</span>
                  </button></li>
                  <li><button type="button" class="element-btn btn-square">
                        <span class="btn-txt">쿠폰</span>
                  </button></li>
                  <li><button type="button" class="element-btn btn-square">
                        <span class="btn-txt">로그아웃</span>
                  </button></li>
                  </ul>
                </div>
              </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
    name: 'Gnb',
    methods: {
    }
}
</script>

<style scoped src="@/assets/css/modules/gnb.css" />
