<template>
  <div class="v-main-wrapper">
      <router-view></router-view>
  </div>
</template>

<script>
import vCatalog from './v-catalog.vue'
import vCart from './v-cart.vue'
import {mapGetters} from "vuex";
// arararararar
export default {
  name: 'v-main-wrapper',
  components: {vCatalog, vCart},
  props: {},
  data() {
    return {
      title: '',
    }
  },
  computed: {
...mapGetters(["CART"])
  },
  mounted() {
    console.log('hello im here');
  },
}
</script>

<style>
.v-main-wrapper{
  max-width: 900px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}
</style>