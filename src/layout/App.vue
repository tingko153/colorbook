<template>
  <div id="layout layout-base">
    <layout-gnb></layout-gnb>
    <div class="layout-body">
        <router-view />
        <layout-footer></layout-footer>
        <confirm v-if="isConfirm"></confirm>
    </div>
  </div>
</template>

<script>
import LayoutGnb from '@/components/gnb/Gnb'
import LayoutFooter from './Footer'
import Confirm from '@/components/alert/Confirm'

export default {
    name: 'App',
    components: {
        LayoutGnb,
        LayoutFooter,
        Confirm
    },
    data () {
        return {
            isConfirm: false
        }
    }
}
</script>
