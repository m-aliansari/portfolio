<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <Motion
        is="div"
        class="section-header"
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
      >
        <h2 class="section-title">Skills</h2>
        <p class="section-subtitle">
          A breakdown of my technical expertise and tools I use
        </p>
      </Motion>

      <div class="skills-grid">
        <Motion
          is="div"
          v-for="(category, index) in skillsData"
          :id="`skills-${category.id}`"
          :key="category.id"
          class="skill-card"
          :initial="{ opacity: 0, y: 30 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 600,
              delay: 200 + index * 100,
            },
          }"
        >
          <h3 class="skill-title">{{ category.title }}</h3>
          <ul class="skill-list">
            <li v-for="(item, i) in category.items" :key="i">
              <h4 class="skill-label">
                <strong>{{ item.label }}</strong>
              </h4>
              <ul class="skill-text-list">
                <li v-for="(skill, j) in item.skills" :key="j">{{ skill }}</li>
              </ul>
            </li>
          </ul>
        </Motion>
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
