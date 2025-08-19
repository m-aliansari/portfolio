<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <Motion
    is="div"
    :class="styles.experienceCard"
    :initial="{ opacity: 0, y: 50 }"
    :visible-once="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, delay: index * 0.2 }"
  >
    <div :class="styles.cardHeader">
      <div :class="styles.companyInfo">
        <h3 :class="styles.jobTitle">{{ job.title }}</h3>
        <div :class="styles.companyDetails">
          <span :class="styles.companyName">{{ job.company }}</span>
          <span :class="styles.location">{{ job.location }}</span>
        </div>
        <div :class="styles.periodWebsite">
          <span :class="styles.period">{{ job.period }}</span>
          <a
            v-if="job.website"
            :href="`https://${job.website}`"
            target="_blank"
            rel="noopener noreferrer"
            :class="styles.websiteLink"
          >
            {{ job.website }}
          </a>
        </div>
      </div>
    </div>

    <div :class="styles.cardContent">
      <ul :class="styles.achievementsList">
        <Motion
          is="li"
          v-for="(achievement, achievementIndex) in job.achievements"
          :key="achievementIndex"
          :class="styles.achievementItem"
          :initial="{ opacity: 0, x: -20 }"
          :enter="{ opacity: 1, x: 0 }"
          :transition="{
            duration: 0.4,
            delay: index * 0.2 + achievementIndex * 0.1,
          }"
          :viewport="{ once: true }"
          v-html="achievement"
        />
      </ul>
    </div>
  </Motion>
</template>

<script setup>
import styles from "./Card.module.scss";
defineProps({
  job: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>
