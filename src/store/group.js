import { defineStore } from 'pinia';
import axios from 'axios';

export const useGroup = defineStore('groups', {
  state: () => ({}),

  actions: {
    group() {
      return axios.post('/api/group').then(r => r.data);
    }
  }
})