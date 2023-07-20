<template>
  <v-app>
    <v-main>
      <v-container class="bg-pink-lighten-1">
        <v-card variant="outlined" color="dark" class="mx-auto bg-blue-darken-4" :title=titlePost :subtitle=userPost :text=textPost max-width="800">
          <v-card-actions>
            <v-btn icon class="mr-2">
              <v-icon icon="mdi-heart-outline" />
            </v-btn>
            <VCardSubtitle><strong>1.590 </strong> Curtidas</VCardSubtitle>
            <!-- <v-btn color="primary" variant="outlined" :to="{ name: 'login' }">
              Curtir
            </v-btn> -->
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>

import { ref } from 'vue';

const titlePost = ref('Post do usuário');
const userPost = ref('@usuário');
const textPost = ref('LEANDRO Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam qui, deserunt error asperiores voluptatem ipsa, vel facere tempora maiores sit dolorem, consectetur modi distinctio voluptas quos aliquam cum assumenda? Voluptates.');

</script>
