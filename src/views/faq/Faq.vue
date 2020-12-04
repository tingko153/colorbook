<template>
    <div class="layout-container subpage-payment-wide">
        <div class="layout-content">
            <div class="content-tit subpage-tit">
                <div class="content-tit-tab-wrap">
                    FAQ
                    <!-- [D] 탭 매뉴 -->
                    <ul class="layout-tit-tab">
                        <li>
                            <a href="#" class="is-active">전체</a>
                        </li>
                        <li>
                            <a href="#">취소/환불</a>
                        </li>
                        <li>
                            <a href="#">주문/결제</a>
                        </li>
                        <li>
                            <a href="#">쿠폰</a>
                        </li>
                        <li>
                            <a href="#">회원가입</a>
                        </li>
                        <li>
                            <a href="#">사이트 오류</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="layout-faq">
                <faq-list></faq-list>
            </div>
        </div>
    </div>
</template>

<script>
import FaqList from '@/components/faq/FaqList'

export default {
    name: 'Faq',
    components: {
        FaqList
    }
}
</script>
