<template>
  <section>
    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Product name</th>
          <th>Price</th>
          <th>Qta</th>
          <th>Sum</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in products" :key="p.id">
          <td>
            <input type="checkbox" />
          </td>
          <td>{{ p.name }}</td>
          <td>{{ p.price }}$</td>
          <td>{{ p.quantity }}</td>
          <td>{{ p.price * p.quantity }}$</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import Product from "@/models/product";
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";

@Component
export default class ProductList extends Vue {
  @Getter("getProducts")
  products!: Product[];
}
</script>

<style scoped lang="scss"></style>
