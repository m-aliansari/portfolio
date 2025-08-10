<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <Motion
        is="div"
        class="section-header"
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
      >
        <h2 class="section-title">Technical Skills</h2>
        <p class="section-subtitle">Technologies and tools I work with</p>
      </Motion>

      <div class="skills-content">
        <SkillsCategoryCard
          v-for="(category, index) in skillsData"
          :key="category.name"
          :category="category"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { SKILLS_DATA } from "~/constants/skills";

const skillsData = SKILLS_DATA;
</script>

<style lang="scss" scoped>
@use "./Skills.scss";
</style>
