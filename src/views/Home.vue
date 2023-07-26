<template>
  <v-app>
    <v-main>
      <v-app-bar elevation="0" height="70" color="#efefef">
        <div class="d-flex align-center justify-space-between w-100">
          <VContainer >
            <div>
              <Logo />
            </div>
          </VContainer>
        </div>
      </v-app-bar>

      <v-container>

        <VCard v-if="!authStore.isLoggedIn">
          <h2>Faça o
            <RouterLink :to="{ name: 'login' }" class="text-primary">
              Login
            </RouterLink>
            para postar suas jogadas!
          </h2>
        </VCard>

        <Post v-if="authStore.isLoggedIn" />

        <Card/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Card from '@/components/Admin/Card.vue';
import Post from '@/components/Admin/Post.vue';
import Logo from '@/components/logo/Logo.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useAuth } from '@/store/auth';

const posts = ref([]);

const authStore = useAuth()

const getPosts = () => {
    axios.get('api/posts')
    .then((response) => (
            posts.value = response.data.data
        )
    )
}

onMounted(() => getPosts());


</script>
