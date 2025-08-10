<template>
  <section id="hero" class="hero-section">
    <div class="hero-background">
      <NuxtImg
        v-show="isMobile"
        src="/images/hero_image_mobile.png"
        sizes="md:100vw"
        preload
        alt="Hero Background image"
        format="webp"
        quality="100"
        style="
          object-position: center;
          overflow: hidden;
          width: 100vw;
          height: 100vh;
          object-fit: cover;
        "
      />
      <NuxtImg
        v-show="!isMobile"
        src="/images/hero_image.png"
        sizes="lg:100vw"
        preload
        alt="Hero Background image"
        format="webp"
        quality="100"
        style="
          object-position: center;
          overflow: hidden;
          width: 100vw;
          height: 100vh;
          object-fit: cover;
        "
      />
      <div class="dark-overlay" />
    </div>

    <div class="container">
      <div class="hero-content">
        <Motion
          is="h1"
          class="hero-title"
          :initial="{
            opacity: 0,
            x: -100,
          }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1000,
              type: 'spring',
              stiffness: 250,
              damping: 25,
            },
          }"
        >
          {{ personalInfo.name }}
        </Motion>

        <Motion
          is="h2"
          class="hero-subtitle"
          :initial="{
            opacity: 0,
            x: -100,
          }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1000,
              type: 'spring',
              stiffness: 250,
              damping: 25,
              delay: 200,
            },
          }"
        >
          {{ personalInfo.title }}
        </Motion>

        <Motion
          is="p"
          class="hero-description"
          :initial="{
            opacity: 0,
            x: -100,
          }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1000,
              type: 'spring',
              stiffness: 250,
              damping: 25,
              delay: 400,
            },
          }"
        >
          Crafting exceptional digital experiences with modern technologies.
          Specialized in Vue.js, React, Node.js, and cloud solutions.
        </Motion>

        <div class="hero-cta">
          <Motion
            :is="NuxtLink"
            to="#contact"
            class="btn btn-primary"
            :initial="{ opacity: 0, y: 20 }"
            :enter="{
              opacity: 1,
              y: 0,
              transitionDuration: '0.6s',
            }"
          >
            Get In Touch
          </Motion>
          <Motion
            :is="NuxtLink"
            to="#experience"
            class="btn btn-secondary"
            :initial="{ opacity: 0, y: 20 }"
            :enter="{
              opacity: 1,
              y: 0,
              transitionDuration: '0.6s',
              transitionDelay: '0.2s',
            }"
          >
            View Experience
          </Motion>
        </div>
        <Motion
          is="div"
          class="hero-socials"
          :initial="{ opacity: 0, y: 20 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 500,
              delay: 600,
            },
          }"
        >
          <NuxtLink
            :to="personalInfo.whatsapp"
            target="_blank"
            class="social-icon"
            aria-label="Whatsapp"
            external
          >
            <Icons :name="ICON_NAMES.WHATSAPP" size="40" />
          </NuxtLink>
          <NuxtLink
            :to="personalInfo.gmail"
            target="_blank"
            class="social-icon"
            aria-label="Gmail"
            external
          >
            <Icons :name="ICON_NAMES.GMAIL" size="40" />
          </NuxtLink>
          <NuxtLink
            :to="personalInfo.github"
            target="_blank"
            class="social-icon"
            aria-label="GitHub"
            external
          >
            <Icon name="simple-icons:github" size="40" />
          </NuxtLink>
          <NuxtLink
            :to="personalInfo.linkedin"
            target="_blank"
            class="social-icon"
            aria-label="LinkedIn"
            external
          >
            <Icons :name="ICON_NAMES.LINKEDIN" />
          </NuxtLink>
          <NuxtLink
            :to="personalInfo.fiverr"
            target="_blank"
            class="social-icon"
            aria-label="Fiverr"
            external
          >
            <Icons :name="ICON_NAMES.FIVERR" />
          </NuxtLink>
        </Motion>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PERSONAL_INFO } from "~/constants/personal";
import { NuxtLink } from "#components";
import { ICON_NAMES } from "~/constants/icons";

const { isMobile } = useResponsive();
const personalInfo = PERSONAL_INFO;
</script>

<style lang="scss" scoped>
@use "./Hero.scss";
</style>
