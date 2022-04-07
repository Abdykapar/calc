<template>
  <div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form class="form" @submit.prevent="handleSubmit(onSubmit)">
        <div class="row">
          <ValidationProvider name="name" rules="required" v-slot="{ errors }">
            <input
              v-model="form.name"
              class="column"
              :class="{ err: !!errors[0] }"
              placeholder="Product name"
              type="text"
            />
            <span class="error" v-if="errors[0]">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider name="price" rules="required" v-slot="{ errors }">
            <input
              v-model="form.price"
              class="column"
              :class="{ err: !!errors[0] }"
              placeholder="Price"
              type="number"
            />
            <span class="error" v-if="errors[0]">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider name="qty" rules="required" v-slot="{ errors }">
            <input
              v-model="form.quantity"
              placeholder="Qty"
              :class="{ err: !!errors[0] }"
              class="column"
              type="number"
            />
            <span class="error" v-if="errors[0]">{{ errors[0] }}</span>
          </ValidationProvider>
          <button type="submit">Add</button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>
<script lang="ts">
import Product from "@/models/product";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AddProduct extends Vue {
  private form: Product = {
    name: "",
    price: "",
    quantity: "",
  };

  public onSubmit(): void {
    console.log("submitted", this.form);
  }
}
</script>
