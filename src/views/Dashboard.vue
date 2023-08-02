<template>
    <VContainer>
        Dashboard <br>
        <VBtn @click="subscribe()" :loading="loading">Assinar</VBtn>
        <h1 color="primary">Leandro Oliveira</h1>
        <hr>
        <br>
        <VBtn v-if="can('ship_product')">Despachar produtos</VBtn>
        <VBtn v-if="can('delete_user')">Despachar produtos</VBtn>
        <br>
        <hr>

        <pre>{{ user }}</pre>
    </VContainer>
</template>
  
<script setup>
import { useSubscription } from "@/store/subscription";
import { useMe } from "@/store/me";
import { ref } from "vue";

const loading = ref(false)
const { user, can } = useMe();

function subscribe() {
    loading.value = true

    const subscriptionStore = useSubscription()
    subscriptionStore.subscribe().then((response) => {
        //console.log(response.stripe_url);
        if (response?.stripe_url) {
            window.location.href = response?.stripe_url
        }
    }).catch(() => {
        loading.value = false
    })
}
</script>