<template>
  <div class="layout-container main">
    <main-banner></main-banner>

    <div class="layout-content">
        <div class="layout-main-list">
            <p class="layout-main-tit">도로시의 새로운 클래스</p>
            <ul class="card-list">
                <li class="card-item">
                    <card></card>
                </li>
                <li class="card-item">
                    <card></card>
                </li>
            </ul>
        </div>
    </div>

    <div class="layout-main-dorothy-desc">
      <div class="dorothy-desc-wrap">
          <p class="dorothy-desc-tit">
              국내 NO.1 반영구 아카데미 도로시
          </p>
          <div class="dorothy-desc-txt">
              <p>누구나 반영구를 배울 수 있지만 누구나 제대로 배울 순 없습니다.</p>
              <p>너무나 빠르게 변화하는 이 시대에 가장 큰 수익을 보장하는 투자는 ‘배움’이며
                  <span>행동하지 않고서는 얻을 수 없을 것입니다.</span></p>
          </div>
      </div>
    </div>

    <div class="layout-main-content">
        <div class="layout-main-partner">
            <p class="layout-main-subtit is-center">도로시의 새로운 클래스</p>
            <div class="layout-main-partner-wrap">
                <!-- Swiper -->
                <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
                    <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
                        <a href="#" class="swiper-slide swiper-slide-active" style="width: 202.833px; margin-right: 30px;">
                            <img src="/static/images/main/partner-img1.png" alt="">
                        </a>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
            </div>
        </div>

        <div class="layout-main-sub-banner">
            <a href="#" class="layout-main-subtit">
                이벤트
            </a>
            <div class="layout-main-event-wrap">
                <!-- Swiper -->
                <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
                    <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
                        <a href="#" class="swiper-slide swiper-slide-active" style="width: 430.333px; margin-right: 38px;">
                            <img src="/static/images/main/event-thumb1.png" alt="">
                            <span class="main-event-tit">전 강좌 무한 PASS! 이벤트</span>
                            <span class="main-event-txt">2020. 02. 04 ~ 2020. 03. 03</span>
                        </a>
                        <a href="#" class="swiper-slide swiper-slide-next" style="width: 430.333px; margin-right: 38px;">
                            <img src="/static/images/main/event-thumb2.png" alt="">
                            <span class="main-event-tit">전 강좌 무한 PASS! 이벤트</span>
                            <span class="main-event-txt">2020. 02. 04 ~ 2020. 03. 03</span>
                        </a>
                        <a href="#" class="swiper-slide" style="width: 430.333px; margin-right: 38px;">
                            <img src="/static/images/main/event-thumb3.png" alt="">
                            <span class="main-event-tit">전 강좌 무한 PASS! 이벤트</span>
                            <span class="main-event-txt">2020. 02. 04 ~ 2020. 03. 03</span>
                        </a>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                    <!-- Add Arrows -->
                    <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide" aria-disabled="false"></div>
                    <div class="swiper-button-prev swiper-button-disabled" tabindex="0" role="button" aria-label="Previous slide" aria-disabled="true"></div>

                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
            </div>

            <div class="layout-main-sub-banner-wrap">
                <div class="sub-banner-txt-wrap">
                    <p class="sub-banner-tit">마스터 지원하기</p><p>
                </p><p class="sub-banner-txt">지금 바로 도로시의 마스터가 되어보세요!</p><p>
                </p></div>
                <a class="sub-banner-btn" href="#">마스터 지원하기</a>
            </div>

        </div>

        <div class="layout-faq">
            <router-link :to="{name: 'faq'}" class="layout-main-subtit">FAQ</router-link>
            <faq-list></faq-list>
        </div>
    </div>


  </div>
</template>

<script>
import Card from '@/components/card/Card'
import MainBanner from './banner/MainBanner'
import FaqList from '@/components/faq/FaqList'

export default {
    name: 'Main',
    components: {
        Card,
        MainBanner,
        FaqList
    },
    data () {
        return {
            isLogin: false,
            msg: 'welcome'
        }
    }
}
</script>

<style src="@/assets/css/modules/card.css" />

