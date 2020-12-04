<template>
    <ul class="qna-list">
        <faq-item></faq-item>
        <faq-item></faq-item>
        <faq-item></faq-item>
    </ul>
</template>

<script>
import FaqItem from '@/components/faq/FaqItem'

export default {
    name: 'FaqList',
    components: {
        FaqItem
    }
}
</script>
