<template>
  <div>
    <gnb></gnb>
    <div class="mainbanner">main banner</div>
    <card></card>
  </div>
</template>

<script>
import Gnb from '@/components/gnb/Gnb'
import Card from '@/components/card/Card'

export default {
  name: 'Main',
  components: {
    Gnb,
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
