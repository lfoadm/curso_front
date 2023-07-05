<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card
        class="mx-auto"
        max-width="344"
        variant="outlined"
        >
        <v-card-item>
          <div>
            <div class="text-overline mb-1">
              HOME
            </div>
            <div class="text-h6 mb-1">
              Página inicial
            </div>
            <div class="text-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam qui, deserunt error asperiores voluptatem ipsa, vel facere tempora maiores sit dolorem, consectetur modi distinctio voluptas quos aliquam cum assumenda? Voluptates.</div>
          </div>
        </v-card-item>
    
        <v-card-actions>
          <v-btn variant="outlined"
          :to="{ name:'login' }"
          >
            Entrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  //import HelloWorld from '@/components/HelloWorld.vue'
</script>
