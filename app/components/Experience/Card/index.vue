<template>
  <Motion
    is="div"
    class="experience-card"
    :initial="{ opacity: 0, y: 50 }"
    :visible-once="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, delay: index * 0.2 }"
  >
    <div class="card-header">
      <div class="company-info">
        <h3 class="job-title">{{ job.title }}</h3>
        <div class="company-details">
          <span class="company-name">{{ job.company }}</span>
          <span class="location">{{ job.location }}</span>
        </div>
        <div class="period-website">
          <span class="period">{{ job.period }}</span>
          <a
            v-if="job.website"
            :href="`https://${job.website}`"
            target="_blank"
            rel="noopener noreferrer"
            class="website-link"
          >
            {{ job.website }}
          </a>
        </div>
      </div>
    </div>

    <div class="card-content">
      <ul class="achievements-list">
        <Motion
          is="li"
          v-for="(achievement, achievementIndex) in job.achievements"
          :key="achievementIndex"
          class="achievement-item"
          :initial="{ opacity: 0, x: -20 }"
          :enter="{ opacity: 1, x: 0 }"
          :transition="{
            duration: 0.4,
            delay: index * 0.2 + achievementIndex * 0.1,
          }"
          :viewport="{ once: true }"
        >
          {{ achievement }}
        </Motion>
      </ul>
    </div>
  </Motion>
</template>

<script setup>
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

<style lang="scss" scoped>
@use "./Card.scss";
</style>
