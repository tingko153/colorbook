<template>
  <div id="layout layout-base">
    <layout-gnb></layout-gnb>
    <div class="layout-body">
      <router-view />
      <layout-footer></layout-footer>
    </div>
  </div>
</template>

<script>
import LayoutGnb from '@/components/gnb/Gnb'
import LayoutFooter from './Footer'

export default {
    name: 'App',
    components: {
        LayoutGnb,
        LayoutFooter
    }
}
</script>
