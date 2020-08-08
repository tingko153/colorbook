<template>
  <div class="layout-container main">
    <div class="main-banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide swiper-slide1" style="background-color:pink">
                    <div class="swiper-content">
                    <span class="swiper-content-txt swiper-slide-txt-img">
                        <h2>
                        <span>준비물 쇼핑몰 오픈 기념</span>
                        무제한 수강권 할인!
                        </h2>
                        <p>쇼핑몰 오픈 기념으로 도로시에서 무제한 수강권을 할인합니다.</p>
                        <p>지금 바로 시작해보세요!</p>
                    </span>
                    <a class="swiper-slide-btn" href="#">이벤트 보러가기</a>
                    </div>
                </div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>

            <div class="swiper-pagination-wrap">
                <div class="swiper-pagination"></div>
                <div class="swiper-pagination2"></div>
            </div>
        </div>
    </div>
    <card></card>
  </div>
</template>

<script>
import Card from '@/components/card/Card'

export default {
    name: 'Main',
    components: {
        Card
    },
    data () {
        return {
            isLogin: false,
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>
