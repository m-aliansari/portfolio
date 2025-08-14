<template>
  <section id="about" class="about-section">
    <div class="container">
      <Motion
        is="div"
        class="section-header"
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
      >
        <h2 class="section-title">About Me</h2>
        <p class="section-subtitle">
          Passionate Full Stack Developer with {{ personalInfo.experience }} of
          experience
        </p>
      </Motion>

      <div class="about-content">
        <Motion
          is="div"
          class="about-text"
          :initial="{ opacity: 0, x: -60 }"
          :visible-once="{ opacity: 1, x: 0 }"
          :transition="{ duration: 1.5, delay: 0.4 }"
        >
          <p>{{ personalInfo.about.intro }}</p>
          <p>{{ personalInfo.about.current }}</p>
          <p>{{ personalInfo.about.passion }}</p>
        </Motion>

        <Motion
          is="div"
          class="about-stats"
          :initial="{ opacity: 0, x: 60 }"
          :visible-once="{ opacity: 1, x: 0 }"
          :transition="{ duration: 1.5, delay: 0.4 }"
        >
          <div
            v-for="(stat, index) in personalInfo.stats"
            :key="index"
            class="stat-item"
          >
            <h3>{{ stat.value }}</h3>
            <p>{{ stat.label }}</p>
          </div>
        </Motion>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PERSONAL_INFO } from "~/constants/personal";

const personalInfo = PERSONAL_INFO;
</script>

<style lang="scss" scoped>
@use "./About.scss";
</style>
