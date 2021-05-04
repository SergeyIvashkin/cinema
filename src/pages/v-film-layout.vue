<template>
  <div>
    <MainHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from "../components/v-main-header";
export default {
  components: {
    MainHeader,
  },
};
</script>