<template>
  <section id="about" :class="styles.aboutSection">
    <div class="container">
      <Motion
        is="div"
        class="section-header"
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
      >
        <h2 class="section-title">Full-Stack Developer</h2>
        <h3 class="section-subtitle">
          Nuxt.js, Node.js & PostgreSQL Specialist with {{ personalInfo.experience }} of
          experience
        </h3>
      </Motion>

      <div :class="styles.aboutContent">
        <Motion
          is="div"
          :class="styles.aboutText"
          :initial="{ opacity: 0, x: -60 }"
          :visible-once="{ opacity: 1, x: 0 }"
          :transition="{ duration: 1.5, delay: 0.4 }"
        >
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p v-html="personalInfo.about.intro"/>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p v-html="personalInfo.about.current"/>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p v-html="personalInfo.about.passion"/>
        </Motion>

        <Motion
          is="div"
          :class="styles.aboutStats"
          :initial="{ opacity: 0, x: 60 }"
          :visible-once="{ opacity: 1, x: 0 }"
          :transition="{ duration: 1.5, delay: 0.4 }"
        >
          <div
            v-for="(stat, index) in personalInfo.stats"
            :key="index"
            :class="styles.statItem"
          >
            <h4>{{ stat.value }}</h4>
            <p>{{ stat.label }}</p>
          </div>
        </Motion>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PERSONAL_INFO } from "~/constants/personal";
import styles from "./About.module.scss";

const personalInfo = PERSONAL_INFO;
</script>
