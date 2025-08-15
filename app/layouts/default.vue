<template>
  <div class="layout">
    <Navbar />
    <main class="mainContent">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup></script>

<style lang="scss">
.layout {
  min-height: 100vh;
  max-width: 100vw;
}

.mainCntent {
  padding-top: 80px;
}
</style>
