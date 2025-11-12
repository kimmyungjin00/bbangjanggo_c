<template>
  <!-- 메인페이지 -->
  <div class="wrap" v-if="!isSpecialPage">
    <Header />
    <main>
      <RouterView></RouterView>
      <Quick />
    </main>
    <Footer v-if="!route.meta.hideFooter" />
  </div>

    <!-- 관리자, 기사페이지 -->
  <div v-else>
    <router-view></router-view>
  </div>

</template>
<script setup>
import { useRoute } from "vue-router";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Quick from "./components/Quick.vue";

const route = useRoute()
</script>

<style lang="scss" scoped></style>
