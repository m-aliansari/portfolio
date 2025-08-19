<template>
  <section id="skills" :class="styles.skillsSection">
    <div class="container">
      <Motion
        is="div"
        class="section-header"
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
      >
        <h2 class="section-title">Skills</h2>
        <h3 class="section-subtitle">
          Full Stack expertise across Vue.js, React, Node.js, PostgreSQL, and
          Cloud Platforms (AWS, GCP, Firebase)
        </h3>
      </Motion>

      <Motion
        is="div"
        id="skills-featured"
        :class="[styles.skillCard, styles.featuredSkills]"
        :initial="{ opacity: 0, y: 30 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 200,
          },
        }"
      >
        <h3 :class="[styles.skillTitle, styles.featured]">Featured Skills</h3>
        <SkillsBadges :skills="featuredSkills" />
      </Motion>

      <Motion is="div" :class="styles.btnWrapper">
        <NuxtLink to="#skills-softSkills" :class="styles.btn">
          Jump to Soft Skills
        </NuxtLink>
      </Motion>

      <div :class="styles.skillsGrid">
        <Motion
          is="div"
          v-for="(category, index) in skillsData"
          :id="`skills-${category.id}`"
          :key="category.id"
          :class="styles.skillCard"
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
          <h4 :class="styles.skillTitle">{{ category.title }}</h4>
          <ul :class="styles.skillList">
            <li v-for="(item, i) in category.items" :key="i">
              <h5 :class="styles.skillLabel">
                <strong>{{ item.label }}</strong>
              </h5>
              <ul :class="styles.skillTextList">
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
import { FEATURED_SKILLS, SKILLS_DATA } from "~/constants/skills";
import styles from "./Skills.module.scss";

const skillsData = SKILLS_DATA;
const featuredSkills = FEATURED_SKILLS;
</script>
