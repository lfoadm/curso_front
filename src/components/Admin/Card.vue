<template>
    <div class="mb-8">
        <v-card v-for="post in posts" :key="post.id"        
          variant="outlined" class="mt-8 mb-4"  :title=post.title :subtitle="post.title" :text=post.body
        >
          <v-card-actions>
            <v-btn icon class="mr-2">
              <v-icon icon="mdi-heart-outline" />
            </v-btn>            
            <VCardSubtitle><strong>1.590 </strong> Curtidas</VCardSubtitle>
            
            <v-btn
            variant="text"
            color="teal-accent-4"
          >Login</v-btn>
          
            <!-- <v-btn color="primary" variant="outlined" :to="{ name: 'login' }">
              Curtir
            </v-btn> -->
            
          </v-card-actions>
        </v-card>


        <v-row>
          <v-col cols="12" lg="3" sm="6" >
              <v-card elevation="10" class="withbg" rounded="md">
                  <RouterLink :to="{ name: 'login' }">
                    <v-img
                    :width="200"
                    aspect-ratio="16/9"
                    cover
                    src="../../assets/logo.png"
                    ></v-img>
                  </RouterLink>
                  <div class="d-flex justify-end mr-4 mt-n5">
                      <v-btn size="40" icon class="bg-primary d-flex">
                          <v-avatar size="30" class="text-white">
                              avatar
                          </v-avatar>
                          <v-tooltip
                              activator="parent"
                              location="bottom"
                          >Add To Cart
                          </v-tooltip>
                      </v-btn>
                  </div>
                  <v-card-item class="pt-0">
                      <h6 class="text-h6"></h6>
                      <div class="d-flex align-center justify-space-between mt-1">
                          <div>
                              <span class="text-h6" ></span>
                              <span class="text-body-1 ml-2 text-medium-emphasis text-decoration-line-through"></span>
                          </div>
                          <v-rating density="compact" color="warning" size="small" readonly></v-rating>
                      </div>
                  </v-card-item>
              </v-card>
          </v-col>
      </v-row>
        
    </div>
    
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const posts = ref([]);
const router = useRouter();

const getPosts = () => {
    axios.get('api/posts')
    .then((response) => (
            posts.value = response.data.data
        )
    )
}

onMounted(() => getPosts());


</script>