<template>
    <div>
        <h1>Grupo de usuários</h1>

        <v-card flat class="border mb-4">
            <div class="d-flex justify-space-between">
                <v-card-title>Pesquisar</v-card-title>
                    <v-card-title>
                    </v-card-title>
                    <v-card-title>
                        <v-dialog width="300px">
                            <template #activator="{ props }">
                                <v-btn v-bind="props" color="primary" prepend-icon="mdi-plus" size="small">Grupo</v-btn>
                            </template>                            
                            
                            <v-card>
                                <v-card-text>
                                    <v-text-field label="Nome do grupo" variant="outlined"></v-text-field>
                                    <v-textarea variant="outlined" label="Descrição"></v-textarea>
                                    <v-btn align-content-end color="primary">Adicionar</v-btn>
                                </v-card-text>
                            </v-card>

                        </v-dialog>
                    </v-card-title>
                </div>
            <v-table>
                <thead>
                <tr>
                    <th class="text-left">Nome</th>
                    <th class="text-left">Descrição</th>
                    <th class="text-left">Criado em</th>
                    <th class="text-left">Ações</th>
                </tr>
                </thead>
                <tbody>
                    
                <tr
                    v-for="role in roles"
                    :key="role.id"
                >
                    <td>{{ role.name }}</td>
                    <td>{{ role.label }}</td>
                    <td>{{ role.created_at }}</td>
                    <td>
                        <v-btn variant="tonal" prepend-icon="mdi-pencil" color="info">Editar</v-btn>
                    </td>
                </tr>
                </tbody>
            </v-table>
        </v-card>
    </div>    
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const roles = ref([]);

const getRoles = () => {
    axios.get('api/group-users')
    .then((response) => (
            roles.value = response.data.data
        )
    )
}

onMounted(() => getRoles());
</script>