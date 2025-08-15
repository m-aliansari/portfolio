<template>
  <section id="hero" class="hero-section">
    <div class="hero-background">
      <NuxtImg
        v-if="$viewport.isGreaterThan('mobileStart')"
        src="/images/hero_image.PNG"
        :preload="{ fetchPriority: 'high' }"
        fetchpriority="high"
        loading="eager"
        alt="Modern development dashboard background"
        format="webp"
        quality="70"
        :width="
          $viewport.isGreaterThan('desktopMedium')
            ? '1600'
            : $viewport.isGreaterThan('desktop')
            ? '1280'
            : $viewport.isGreaterThan('tablet')
            ? '1024'
            : '768'
        "
        style="
          object-position: center;
          overflow: hidden;
          width: 100vw;
          height: 100vh;
          object-fit: cover;
        "
      />
      <NuxtImg
        v-else
        src="/images/hero_image_mobile.webp"
        :width="
          $viewport.isGreaterThan('mobileWide')
            ? '500'
            : $viewport.isGreaterThan('mobileMedium')
            ? '425'
            : $viewport.isGreaterThan('mobile')
            ? '375'
            : '320'
        "
        :preload="{ fetchPriority: 'high' }"
        fetchpriority="high"
        loading="eager"
        alt="Modern development dashboard background"
        format="webp"
        quality="50"
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
        <h1
          class="hero-title"
        >
          {{ personalInfo.name }}
        </h1>

        <h2
          class="hero-subtitle"
        >
          {{ personalInfo.title }}
        </h2>

        <p
          class="hero-description"
        >
          Crafting exceptional digital experiences with modern technologies.
          Specialized in Vue.js, React, Node.js, and cloud solutions.
        </p>

        <div class="hero-cta">
          <NuxtLink
            to="#contact"
            class="btn btn-primary"
          >
            Get In Touch
          </NuxtLink>
          <NuxtLink
            to="#experience"
            class="btn btn-secondary"
          >
            View Experience
          </NuxtLink>
        </div>
        <div
          class="hero-socials"
        >
          <NuxtLink
            :to="personalInfo.whatsapp"
            target="_blank"
            class="social-icon"
            aria-label="Whatsapp"
            external
          >
            <Icons
              :name="ICON_NAMES.WHATSAPP"
              :size="$viewport.isLessThan('mobileWide') ? '30' : '40'"
            />
          </NuxtLink>
          <NuxtLink
            :to="personalInfo.gmail"
            target="_blank"
            class="social-icon"
            aria-label="Gmail"
            external
          >
            <Icons
              :name="ICON_NAMES.GMAIL"
              :size="$viewport.isLessThan('mobileWide') ? '30' : '40'"
            />
          </NuxtLink>
          <NuxtLink
            :to="personalInfo.github"
            target="_blank"
            class="social-icon"
            aria-label="GitHub"
            external
          >
            <Icon
              name="simple-icons:github"
              :size="$viewport.isLessThan('mobileWide') ? '30' : '40'"
            />
          </NuxtLink>
          <NuxtLink
            :to="personalInfo.linkedin"
            target="_blank"
            class="social-icon"
            aria-label="LinkedIn"
            external
          >
            <Icons
              :name="ICON_NAMES.LINKEDIN"
              :size="$viewport.isLessThan('mobileWide') ? '38' : '45'"
            />
          </NuxtLink>
          <NuxtLink
            :to="personalInfo.fiverr"
            target="_blank"
            class="social-icon"
            aria-label="Fiverr"
            external
          >
            <Icons
              :name="ICON_NAMES.FIVERR"
              :size="$viewport.isLessThan('mobileWide') ? '30' : '40'"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PERSONAL_INFO } from "~/constants/personal";
import { NuxtLink } from "#components";
import { ICON_NAMES } from "~/constants/icons";

const personalInfo = PERSONAL_INFO;
</script>

<style lang="scss" scoped>
@use "./Hero.scss";
</style>
