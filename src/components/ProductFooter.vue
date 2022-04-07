<template>
  <footer>
    <button @click="onDelete" :disabled="isLoading">Delete</button>
    <div>
      <strong>Total: </strong>
      <strong>${{ totalPrice }}</strong>
    </div>
  </footer>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import Product from "@/models/product";

@Component
export default class ProductFooter extends Vue {
  @Getter("getProducts")
  products!: Product[];

  @Action("productsRemove")
  onProductsRemove!: (data: Product[]) => Promise<void>;

  private isLoading = false;

  get totalPrice(): number {
    return this.products.reduce(
      (acc: number, p): number => acc + Number(p.price) * Number(p.quantity),
      0
    );
  }

  public onDelete(): void {
    this.isLoading = true;
    const checkedProds = this.products.filter((i) => i.isChecked);
    this.onProductsRemove(checkedProds).finally(() => {
      this.isLoading = false;
    });
  }
}
</script>
