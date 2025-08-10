<template>
  <div class="layout">
    <Navbar />
    <main class="main-content">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
.layout {
  min-height: 100vh;
  max-width: 100vw;
}

.main-content {
  padding-top: 80px;
}
</style>
