<template>
    <div>
        <h1>Usuários cadastrados</h1>

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
            <v-table>
                <thead>
                <tr>
                    <th class="text-left">Registro</th>
                    <th class="text-left">Nome</th>
                    <th class="text-left">Sobrenome</th>
                    <th class="text-left">E-mail</th>
                    <th class="text-left">Ações</th>
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="user in users"
                    :key="user.id"
                >
                    <td>{{ user.id }}</td>
                    <td>{{ user.first_name }}</td>
                    <td>{{ user.last_name }}</td>
                    <td>{{ user.email }}</td>
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
import { useMe } from '../../store/me';
import { onMounted, ref } from 'vue';

const meStore = useMe();
const users = ref([]);

const getUsers = () => {
    axios.get('api/users')
    .then((response) => (
            users.value = response.data.data
        )
    )
}

onMounted(() => getUsers());
</script>