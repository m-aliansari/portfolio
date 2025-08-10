<template>
  <section id="hero" class="hero-section">
    <div class="hero-background">
      <NuxtImg
        src="/images/chatgpt_generated_hero_image_upscaled.png"
        sizes="lg:100vw"
        preload
        alt="Hero Background image"
        format="webp"
        quality="100"
        style="object-position: center;overflow: hidden; width: 100vw; height: 100vh; object-fit: cover;"
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
      </div>
    </div>
  </section>
</template>

<script setup>
import { PERSONAL_INFO } from "~/constants/personal";
import { NuxtLink } from "#components";

const personalInfo = PERSONAL_INFO;
</script>

<style lang="scss" scoped>
@use "./Hero.scss";
</style>
