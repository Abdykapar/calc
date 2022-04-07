<template>
  <div>
    <ValidationObserver ref="form">
      <form class="form" @submit.prevent="onSubmit">
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
import { v4 as uuidv4 } from "uuid";
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
import { ValidationObserver } from "vee-validate";

const initialForm = () => ({
  id: uuidv4(),
  name: "",
  price: "",
  quantity: "",
});

@Component
export default class AddProduct extends Vue {
  $refs!: {
    form: InstanceType<typeof ValidationObserver>;
  };

  private form: Product = initialForm();

  @Action("productCreate")
  onCreate!: (data: Product) => void;

  public onSubmit(): void {
    this.$refs.form.validate().then((success) => {
      if (!success) {
        return;
      }

      this.onCreate(this.form);
      this.$nextTick(() => {
        this.$refs.form.reset();
        this.form = initialForm();
      });
    });
  }
}
</script>
