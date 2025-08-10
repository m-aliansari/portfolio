<template>
  <nav class="navbar">
    <div class="navbar__shine" />
    <div class="navbar__content">
      <Motion
        is="div"
        class="navbar__logo"
        :initial="{ scale: 1 }"
        :hovered="{ scale: 1.05 }"
        :tapped="{ scale: 0.95 }"
      >
        <NuxtLink to="/" class="logo-link">
          <span class="logo-text">{{ personalInfo.name }}</span>
          <span class="logo-subtitle">{{ personalInfo.title }}</span>
        </NuxtLink>
      </Motion>

      <div class="navbar__mobile-toggle" @click="toggleMobileMenu">
        <div class="hamburger" :class="{ active: isMobileMenuOpen }">
          <span />
          <span />
          <span />
        </div>
      </div>

      <ul class="navbar__links" :class="{ 'mobile-open': isMobileMenuOpen }">
        <Motion
          is="li"
          v-for="(link, index) in navLinks"
          :key="link.path"
          :initial="{ opacity: 0 }"
          :enter="{
            opacity: 1,
            transition: {
              duration: 600,
              delay: isMobile ? 0 : 300 + index * 100,
            },
          }"
        >
          <NuxtLink
            :id="link.path"
            :to="link.path"
            class="nav-link"
            @click="handleClick(link.path)"
          >
            {{ link.name }}
          </NuxtLink>
        </Motion>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { useAnchorUpdate } from "~/composables/anchorUpdate";
import { NAV_LINKS } from "~/constants/navigation";
import { PERSONAL_INFO } from "~/constants/personal";

const navLinks = NAV_LINKS;
const personalInfo = PERSONAL_INFO;

const isMobileMenuOpen = ref(false);
const currentPath = ref("");

const { isMobile } = useResponsive();
const { currentId } = useAnchorUpdate();

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const handleClick = (path) => {
  currentPath.value = path;
  if (isMobile) {
    closeMobileMenu();
  }
};

watch(currentId, (val, prev) => {
  if (val !== prev) currentPath.value = `/${val}`;
});

watch(currentPath, (val, prev) => {
  if (!import.meta.client) return;

  if (val === prev) return;

  if (prev) {
    if (prev !== "") {
      const prevEl = document.getElementById(prev);
      if (prevEl) prevEl.classList.remove("active");
    }
  }

  if (val === "" || !val) return;

  const id = val;

  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add("active");
});
</script>

<style lang="scss" scoped>
@use "./Navbar.scss";
</style>
