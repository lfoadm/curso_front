<template>
    <div class="authentication">
        <v-container fluid class="pa-3">
            <v-row class="h-100vh d-flex justify-center align-center">
                <v-col cols="12" lg="4" xl="3" class="d-flex align-center">
                    <v-card rounded="md" elevation="10" class="px-sm-1 px-0 withbg mx-auto" max-width="500">
                        <v-card-item class="pa-sm-8">

                            <div class="d-flex justify-center py-4">
                                <Logo />
                            </div>

                            <div>
                                <div v-if="isLoading">
                                    <strong>VERIFICANDO............</strong>
                                </div>

                                <div v-else-if="!isReady">
                                    <div class="text-body-1 text-error text-center mb-6">
                                        Token inválido ou já foi verificado! 
                                    </div>
                                    <hr>
                                    <h6 class="text-h6 text-muted font-weight-medium d-flex justify-center align-center mt-3">
                                        Clique para
                                        <RouterLink :to="{ name: 'login' }"
                                            class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium pl-2">
                                            Entrar</RouterLink>
                                    </h6>
                                </div>

                                <div v-else class="text-success text-center">
                                    E-mail verificado com sucesso!
                                    Obrigado, <strong>{{ state.data.first_name }}</strong> por verificar seu e-mail.
                                </div>
                            </div> 
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
import { useAuth } from '@/store/auth';
import { useRoute } from 'vue-router';
import { useAsyncState } from '@vueuse/core'
import Logo from '@/components/logo/Logo.vue';

const authStore = useAuth();
const route = useRoute();

const { state, isReady, isLoading } = useAsyncState(
    authStore.verifyEmail(route.query.token).then(response => response.data),
)

</script>