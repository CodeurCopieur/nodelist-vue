<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../../stores/AuthStore';

const authStore = useAuthStore();
const showNavBarMenu = ref(false);

  const handleLogout = () => {
    authStore.logoutUser();
  }

</script>

<template>
  <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
    <div class="container px-2">
      <div class="navbar-brand">
        <RouterLink class="navbar-item is-size-4 is-family-monospace" 
        :to="{ name: 'notes' }" active-class="is-active">NotesList</RouterLink>

        <a role="button"
          :class="{ 'is-active' : showNavBarMenu}" 
          @click.prevent="showNavBarMenu = !showNavBarMenu"
          class="navbar-burger" 
          aria-label="menu" 
          aria-expanded="false" 
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" 
        class="navbar-menu"
        :class="{ 'is-active' : showNavBarMenu}">
        <div class="navbar-start">
          <button v-if="authStore.user?.uid" class="button is-info is-small m-3 ml-3" @click="handleLogout">
            Logout {{ authStore.user?.email }}
          </button>
        </div>
        
        <div class="navbar-end">
          <RouterLink :to="{ name: 'notes' }" active-class="is-active" class="navbar-item">
            Notes
          </RouterLink>

          <RouterLink :to="{ name: 'stats' }" active-class="is-active" class="navbar-item">
            Stats
          </RouterLink>

          <!-- <RouterLink :to="{ name: 'AuthView' }" active-class="is-active" class="navbar-item">
            AuthView
          </RouterLink> -->
        </div>
      </div>
    </div>  
  </nav>
</template>

<style scoped>
  @media (max-width: 1023px) {
    .navbar-menu {
      position: absolute;
      left: 0;
      right: 0;
    }
  }

  .router-link-exact-active, .navbar-burger {
    color: #fff;
  }
</style>