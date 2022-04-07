<template>
  <div class="home container">
    <h1 class="home__title">Vue Invoice Calc</h1>
    <add-product />
    <product-list />
    <product-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AddProduct from "@/components/AddProduct.vue";
import ProductList from "@/components/ProductList.vue";
import ProductFooter from "@/components/ProductFooter.vue";

@Component({
  components: {
    AddProduct,
    ProductList,
    ProductFooter,
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss">
.home {
  &__title {
    font-size: 3rem;
    text-align: left;
  }
}
</style>
