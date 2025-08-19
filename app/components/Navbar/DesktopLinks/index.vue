<template>
  <ul class="navbar__links">
    <Motion
      is="li"
      v-for="(link, index) in navLinks"
      :key="link.path"
      :initial="{ opacity: 0 }"
      :enter="{
        opacity: 1,
        transition: {
          duration: 600,
          delay: 100 + index * 100,
        },
      }"
    >
      <NuxtLink
        :id="link.path"
        :to="link.path"
        class="navLink"
        :title="link.title ?? link.name"
        @click="handleClick(link.path)"
      >
        {{ link.name }}
      </NuxtLink>
    </Motion>
  </ul>
</template>

<script setup>
import { NAV_LINKS } from "~/constants/navigation";

const props = defineProps({
  handleClick: {
    type: Function,
    default: () => {},
  },
  initActiveClass: {
    type: Function,
    default: () => {},
  },
});

onMounted(() => {
  props.initActiveClass();
});
const navLinks = NAV_LINKS;
</script>
<style lang="scss" scoped>
@use "./DesktopLinks.scss";
</style>
