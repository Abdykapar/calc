<template>
  <section>
    <table v-if="!isLoading">
      <thead>
        <tr>
          <th>
            <input @change="onSelectAll" type="checkbox" />
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
            <input
              @click="onSelectProduct($event, p)"
              :checked="p.isChecked"
              type="checkbox"
            />
          </td>
          <td>{{ p.name }}</td>
          <td>{{ p.price }}$</td>
          <td>{{ p.quantity }}</td>
          <td>{{ p.price * p.quantity }}$</td>
        </tr>
      </tbody>
    </table>
    <span v-else>Loading...</span>
  </section>
</template>

<script lang="ts">
import Product from "@/models/product";
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class ProductList extends Vue {
  @Getter("getProducts")
  products!: Product[];

  @Action("updateProducts")
  onUpdateProducts!: (data: Product[]) => void;

  @Action("fetchProducts")
  onFetchProducts!: () => Promise<void>;

  private isLoading = false;

  mounted() {
    this.isLoading = true;
    this.onFetchProducts().finally(() => {
      this.isLoading = false;
    });
  }

  public onSelectAll(evt: any): void {
    const prods = this.products.map((i) => ({
      ...i,
      isChecked: evt.target.checked,
    }));
    this.onUpdateProducts(prods);
  }

  public onSelectProduct(evt: any, data: Product): void {
    const prods = this.products.map((i) =>
      i.id === data.id ? { ...i, isChecked: evt.target.checked } : i
    );
    this.onUpdateProducts(prods);
  }
}
</script>

<style scoped lang="scss"></style>
