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
              delay: 100 + index * ($viewport.isLessOrEquals('tabletSmall') ? 0 : 100),
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
          <ul class="nested-links">
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

const addActiveClass = (id) => {
  // id = /#skills-frontend
  const el = document.getElementById(id);

  if (el) el.classList.add("active");

  const splittedId = id.split("-");

  if (splittedId.length > 0) {
    const el = document.getElementById(splittedId[0]);
    if (el) el.classList.add("active");
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

<style lang="scss" scoped>
@use "./Navbar.scss";
</style>
