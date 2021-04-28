<script>
import Layout from "../layouts/MainLayout.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Layout
  }
};
</script>

<template>
  <Layout class="Home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </Layout>
</template>
