<template>
  <div>
    <v-navigation-drawer
      left
      elevation="0"
      app
      class="leftSidebar"
      v-model="sidebarDrawer"
    >
      <div class="pa-5">
        <Logo />
      </div>
      <div>
        <!-- <perfect-scrollbar class="scrollnavbar"> -->
          <v-list class="pa-6">
            <v-list-subheader color="darkText" class="smallCap text-uppercase text-subtitle-2 mt-5 font-weight-bold">MENU</v-list-subheader>
            
            <v-list-item :to="{ name: 'home' }" rounded class="mb-1" color="primary">
              <template v-slot:prepend>
                <v-icon icon="mdi-home" color="#66cb66" />
              </template>              
                <v-list-item-title>Início</v-list-item-title>
            </v-list-item>

            <v-list-item :to="{ name: 'dashboard' }" rounded class="mb-1" color="primary">
              <template v-slot:prepend>
                <v-icon icon="mdi-view-dashboard" color="#66cb66"/>
              </template>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item>

            <v-list-group value="Submenu1">
              <template #activator="{ props }">
                <v-list-item
                v-bind="props"
                prepend-icon="mdi-chart-timeline"
                class="text-red-lighten-5"
                >Relatórios</v-list-item>
              </template>
                <v-list-item prepend-icon="mdi-currency-usd">Vendas</v-list-item>
                
                <v-list-item prepend-icon="mdi-chart-line">Clientes</v-list-item>
                
                <v-list-item :to="{ name: 'groupUsers' }" rounded class="mb-1" color="primary">
                  <template v-slot:prepend>
                    <v-icon class="mr-2" icon="mdi-account-outline" color="#66cb66"/>
                  </template>
                  <v-list-item-title>Grupo de usuários</v-list-item-title>
                </v-list-item>

                <v-list-item :to="{ name: 'users' }" rounded class="mb-1" color="primary">
                  <template v-slot:prepend>
                    <v-icon class="mr-2" icon="mdi-account-outline" color="#66cb66"/>
                  </template>
                  <v-list-item-title>Usuários</v-list-item-title>
                </v-list-item>

                <v-list-item :to="{ name: 'tests' }" rounded class="mb-1" color="primary">
                  <template v-slot:prepend>
                    <v-icon class="mr-2" icon="mdi-all-inclusive" color="#66cb66"/>
                  </template>
                  <v-list-item-title>Testes</v-list-item-title>
                </v-list-item>
                
            </v-list-group>
          </v-list>

          <div class="pa-4">
            <!-- <ExtraBox /> -->
          </div>
        <!-- </perfect-scrollbar> -->
      </div>
    </v-navigation-drawer>
    <v-app-bar elevation="0" height="70" color="#f1f1f1">
      <div class="d-flex align-center justify-space-between w-100">
        <div>
          <v-btn
            class="hidden-lg-and-up ms-md-3 ms-sm-5 ms-3 text-muted"
            @click="sidebarDrawer = !sidebarDrawer"
            icon
            variant="flat"
            size="small"
          >
            <v-icon icon="mdi-menu" />
          </v-btn>
        </div>
        <div>
          <UserDropdown />
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Logo from "@/components/logo/Logo.vue";
import UserDropdown from "../UserDropdown.vue";
import { RouterLink } from 'vue-router';

const sidebarDrawer = ref(true);
</script>