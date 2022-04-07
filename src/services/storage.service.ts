import Product from "@/models/product";

class StorageService {
  setStorage(data: Product) {
    const storage = this.getStorage();
    storage.push(data);
    localStorage.setItem("data", JSON.stringify(storage));
  }

  setStorageAll(data: Product[]) {
    localStorage.setItem("data", JSON.stringify(data));
  }

  getStorage() {
    return localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data") as any)
      : [];
  }
}

export const storageService = new StorageService();
