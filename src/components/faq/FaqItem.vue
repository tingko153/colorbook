<template>
    <li>
        <a class="qna-list-link" :class="{'is-active': isOpen}" href="#" @click.prevent="openAnswer">
            <span class="qna-category">강의수강 관련</span>
            <span class="qna-tit">Q. 결제를 완료했는데, 수강은 어떻게 하나요?</span>
        </a>
        <div class="qna-list-desc" v-if="isOpen">
            A. [로그인 &gt; 비밀번호 찾기] 페이지에서 새로운 비밀번호로 변경하실 수 있습니다.<br>
            가입하신 이메일 주소로 비밀번호 재설정 메일을 수신할 수 없는 경우에는 고객센터로 문의해주시기 바랍니다.
        </div>
    </li>
</template>

<script>
export default {
    name: 'FaqItem',
    data () {
        return {
            isOpen: false
        }
    },
    methods: {
        openAnswer () {
            this.isOpen = !this.isOpen
        }
    }
}
</script>
