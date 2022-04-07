<template>
  <div>
    <form class="form">
      <div class="row">
        <input placeholder="Product name" type="text" />
        <input placeholder="Price" type="number" />
        <input placeholder="Qty" type="number" />
        <button type="submit">Add</button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AddProduct extends Vue {
  @Prop() private msg!: string;
}
</script>
