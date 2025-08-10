<template>
  <Motion
    is="div"
    class="skills-category"
    :initial="{ opacity: 0, y: 30 }"
    :visible-once="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, delay: index * 0.1 }"
  >
    <h3 class="category-title">{{ category.name }}</h3>
    <div class="skills-list">
      <Motion
        is="div"
        v-for="(skill, skillIndex) in category.skills"
        :key="skill.name"
        class="skill-item"
        :initial="{ opacity: 0, x: -20 }"
        :visible-once="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }"
      >
        <div class="skill-header">
          <span class="skill-name">{{ skill.name }}</span>
          <span class="skill-level">{{ skill.level }}%</span>
        </div>
        <div class="progress-bar">
          <Motion
            is="div"
            class="progress-fill"
            :initial="{ width: '0%' }"
            :visible-once="{
              width: `${skill.level}%`,
              transition: {
                duration: 1000,
                delay: index * 10 + skillIndex * 50 + 200,
              },
            }"
          />
        </div>
      </Motion>
    </div>
  </Motion>
</template>

<script setup>
defineProps({
  category: {
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
@use "./CategoryCard.scss";
</style>
