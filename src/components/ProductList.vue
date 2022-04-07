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
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td>dfs</td>
          <td>100$</td>
          <td>1</td>
          <td>100$</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ProductList extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss"></style>
