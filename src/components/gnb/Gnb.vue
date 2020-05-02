<template>
    <div style="background:yellow; width:100%; height:50px;">
        Gnb
        <!-- <button @click="goLogin">login</button> -->
        <router-link :to="{name: 'login'}">login</router-link>
    </div>
</template>

<script>
export default {
  name: 'Gnb',
  methods: {
  }
}
</script>
