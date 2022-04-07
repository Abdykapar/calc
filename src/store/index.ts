import { storageService } from "./../services/storage.service";
import Vue from "vue";
import Vuex from "vuex";
import Product from "@/models/product";

Vue.use(Vuex);

interface State {
  products: Product[];
}

const storageProducts = storageService.getStorage();

export default new Vuex.Store({
  state: {
    products: storageProducts,
  } as State,
  mutations: {
    ADD_PRODUCT(state, data: Product) {
      state.products.push({ ...data });
      storageService.setStorage(data);
    },
    REMOVE_PRODUCTS(state, data: Product[]) {
      state.products = state.products.filter(
        (i) => !data.some((j) => j.id === i.id)
      );
      storageService.setStorageAll(state.products);
    },
  },
  actions: {
    productCreate({ commit }, data) {
      commit("ADD_PRODUCT", data);
    },
    productsRemove({ commit }, data) {
      commit("REMOVE_PRODUCTS", data);
    },
  },
  getters: {
    getProducts: ({ products }) => products,
  },
});
