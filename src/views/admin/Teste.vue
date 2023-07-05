<template>
    <div>
        <h1>Testes</h1>
        <v-card flat class="border mb-4">
            <div class="d-flex justify-space-between">
                <v-card-title>Pesquisar</v-card-title>
                    <v-card-title>
                    </v-card-title>
                    <v-card-title>
                        <v-dialog width="300px">
                            <template #activator="{ props }">
                                <v-btn v-bind="props" color="primary" prepend-icon="mdi-plus" size="small">Usuário</v-btn>
                            </template>                            
                            <v-card>
                                <v-card-text>
                                    Ainda em desenvolvimento
                                </v-card-text>
                            </v-card>>
                        </v-dialog>
                    </v-card-title>
                </div>
                <div class="ml-6 mb-10">
                    Current Count: <h1>{{ counter.count }}</h1>
                    <v-btn class="mr-6" @click="counter.increment" color="primary" prepend-icon="mdi-plus" size="small">Somar</v-btn>
                    
                    <v-btn @click="counter.decrement" color="primary" prepend-icon="mdi-minus" size="small">Diminuir</v-btn>
                </div>
        </v-card>
    </div>    
</template>

<script setup>
import { useCounterStore } from '@/store/counter';

const counter = useCounterStore()

</script>