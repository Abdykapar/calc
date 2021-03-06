import Vue from "vue";
import Vuex from "vuex";
import Product from "@/models/product";
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "@/plugins/firebase";

Vue.use(Vuex);

interface State {
  products: Product[];
}

export default new Vuex.Store({
  state: {
    products: [],
  } as State,
  mutations: {
    SET_PRODUCTS(state, data) {
      state.products = data;
    },
  },
  actions: {
    async productCreate({ dispatch }, data) {
      await addProduct(data);
      dispatch("fetchProducts");
    },
    async productsRemove({ dispatch }, data) {
      const requests = data.map((i: Product) => deleteProduct(i.id));
      await Promise.all(requests);
      dispatch("fetchProducts");
    },
    async updateProducts({ dispatch }, data) {
      const requests = data.map((i: Product) => updateProduct(i));
      await Promise.all(requests);
      dispatch("fetchProducts");
    },
    fetchProducts({ commit }) {
      return getProducts().then((res) => {
        commit("SET_PRODUCTS", res);
      });
    },
  },
  getters: {
    getProducts: ({ products }) => products,
  },
});
