<template>
  <section id="experience" :class="styles.experienceSection">
    <div class="container">
      <Motion
        is="div"
        class="section-header"
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
      >
        <h2 class="section-title">Professional Experience</h2>
        <p class="section-subtitle">My journey in software development</p>
      </Motion>

      <div :class="styles.timeline">
        <ExperienceCard
          v-for="(job, index) in experienceData"
          :key="job.id"
          :job="job"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { EXPERIENCE_DATA } from "~/constants/experience";
import styles from "./Experience.module.scss"

const experienceData = EXPERIENCE_DATA;
</script>
