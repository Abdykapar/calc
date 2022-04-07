<template>
  <footer>
    <button>Delete</button>
    <div>
      <strong>Total: </strong>
      <strong>$1020</strong>
    </div>
  </footer>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ProductFooter extends Vue {
  @Prop() private msg!: string;
}
</script>
