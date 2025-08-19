<template>
  <div class="navbar__mobileToggle" @click="toggleMobileMenu">
    <div :class="['hamburger', { active: mobileMenuOpenRef }]">
      <span />
      <span />
      <span />
    </div>
  </div>
  <ul class="navbar__links" :class="{ mobileOpen: mobileMenuOpenRef }">
    <Motion
      is="li"
      v-for="(link, index) in navLinks"
      :key="link.path"
      :initial="{ opacity: 0 }"
      :enter="{
        opacity: 1,
        transition: {
          duration: 600,
          delay:
            100 + index * ($viewport.isLessOrEquals('tabletSmall') ? 0 : 100),
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
      <ul v-if="$viewport.isLessThan('tabletSmall')" class="nestedLinks">
        <li v-for="subPath in link.subPaths" :key="subPath.path">
          <NuxtLink
            :id="subPath.path"
            :to="subPath.path"
            class="nested"
            @click="handleClick(subPath.path)"
          >
            {{ subPath.name }}
          </NuxtLink>
        </li>
      </ul>
    </Motion>
  </ul>
</template>
<script setup>
import { NAV_LINKS } from "~/constants/navigation";

const props = defineProps({
  isMobileMenuOpen: Boolean,
  toggleMobileMenu: { type: Function, default: () => {} },
  handleClick: { type: Function, default: () => {} },
  initActiveClass: {
    type: Function,
    default: () => {},
  },
});

onMounted(() => {
  props.initActiveClass();
});

const mobileMenuOpenRef = toRef(() => props.isMobileMenuOpen);
const navLinks = NAV_LINKS;
</script>

<style lang="scss" scoped>
@use "./MobileLinks.scss";
</style>
