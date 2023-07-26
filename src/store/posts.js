import { defineStore } from 'pinia';
import axios from 'axios';

export const usePost = defineStore('post', {
  state: () => ({}),

  actions: {
  getPosts() {
      return axios.get('/api/posts').then(r => r.data);
    }
  }
})