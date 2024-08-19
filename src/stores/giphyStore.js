import { defineStore } from "pinia";
import axios from "axios";
import { LocalStorage } from "quasar";

export const useGiphyStore = defineStore("giphy", {
  state: () => ({
    trendingGifs: [],
    categories: [],
    favorites: LocalStorage.getItem("favorites") || [],
  }),
  actions: {
    async fetchTrendingGifs() {
      const response = await axios.get(
        "https://api.giphy.com/v1/gifs/trending",
        {
          params: {
            api_key: "rU3jTyZ0HwrD0NoXapfTcqyRizTQzdF2",
            limit: 25,
          },
        }
      );
      this.trendingGifs = response.data.data;
    },
    async fetchCategories() {
      const response = await axios.get(
        "https://api.giphy.com/v1/gifs/categories",
        {
          params: {
            api_key: "rU3jTyZ0HwrD0NoXapfTcqyRizTQzdF2",
          },
        }
      );
      this.categories = response.data.data;
    },
    async fetchCategoryGifs(category) {
      const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "rU3jTyZ0HwrD0NoXapfTcqyRizTQzdF2",
          q: category,
          limit: 25,
        },
      });
      this.trendingGifs = response.data.data;
    },
    toggleFavorite(gif) {
      const index = this.favorites.findIndex((fav) => fav.id === gif.id);
      if (index === -1) {
        this.favorites.push(gif);
      } else {
        this.favorites.splice(index, 1);
      }
      LocalStorage.set("favorites", this.favorites);
    },
    isFavorite(gif) {
      return this.favorites.some((fav) => fav.id === gif.id);
    },
  },
});
