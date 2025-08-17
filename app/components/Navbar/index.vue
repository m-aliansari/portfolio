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
        <NuxtLink to="/" class="logoLink">
          <span class="logoText">{{ personalInfo.name }}</span>
          <span class="logoSubtitle">{{ personalInfo.title }}</span>
        </NuxtLink>
      </Motion>

      <template v-if="$viewport.isGreaterOrEquals('tablet')">
        <NavbarDesktopLinks
          :handle-click="handleClick"
          :init-active-class="initActiveClass"
        />
      </template>
      <template v-else>
        <NavbarMobileLinks
          :handle-click="handleClick"
          :toggle-mobile-menu="toggleMobileMenu"
          :is-mobile-menu-open="isMobileMenuOpen"
          :init-active-class="initActiveClass"
        />
      </template>
    </div>
  </nav>
</template>

<script setup>
import { PERSONAL_INFO } from "~/constants/personal";

const personalInfo = PERSONAL_INFO;

const currentPath = ref("");
const isMobileMenuOpen = ref(false);

const { currentId } = useAnchorUpdate();
const { isMobile } = useResponsive();

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

const initActiveClass = () => {
  addActiveClass(currentPath.value);
};

const addActiveClass = (id) => {
  // id = /#skills-frontend
  const el = document.getElementById(id);

  if (el) el.classList.add("active");

  const splittedId = id.split("-");

  if (splittedId.length > 0) {
    const subEl = document.getElementById(splittedId[0]);
    if (subEl) subEl.classList.add("active");
  }
};

const removeActiveClass = (id, newId) => {
  // id = #skills-backend, newId = #skills-frontend
  const newIdSplitted = newId.split("-"); // [#skills, frontend]
  if (newIdSplitted[0] === id) return; //false
  const mainEl = document.getElementById(id);
  if (mainEl) mainEl.classList.remove("active"); // removed from #skills-backend

  const prevIdSplitted = id.split("-"); // [#skills, backend]

  if (prevIdSplitted.length > 1 && prevIdSplitted[0] !== newIdSplitted[0]) {
    // true && #skills !== #skills (false)
    const el = document.getElementById(prevIdSplitted[0]);
    if (el) el.classList.remove("active");
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
      removeActiveClass(prev, val);
    }
  }

  if (val === "" || !val) return;

  addActiveClass(val);
});
</script>
<style lang="scss">
@use "./Navbar.scss";
</style>
