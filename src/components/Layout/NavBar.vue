<script setup>
  
</script>

<template>

 <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item is-size-4 is-family-monospace" href="#">NotesList</a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <!-- <div class="navbar-start">
      <RouterLink :to="{ name: 'notes' }" class="navbar-item">
        Notes
      </RouterLink>

      <RouterLink :to="{ name: 'stats' }" class="navbar-item">
        Stats
      </RouterLink>

    </div> -->

    <div class="navbar-end">
      <RouterLink :to="{ name: 'notes' }" class="navbar-item">
        Notes
      </RouterLink>

      <RouterLink :to="{ name: 'stats' }" class="navbar-item">
        Stats
      </RouterLink>
    </div>
  </div>
</nav>
</template>

<style lang="scss" scoped>
  
</style>