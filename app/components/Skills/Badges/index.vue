<template>
  <Motion
    is="ul"
    :class="styles.skillsList"
    :initial="{
      opacity: 0,
    }"
    :visible-once="{
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    }"
  >
    <Motion
      is="li"
      v-for="(skill, i) in skills"
      :key="i"
      :class="styles.skillBadge"
      :initial="{ opacity: 0, scale: 0.8, y: 20 }"
      :visible-once="{ opacity: 1, scale: 1, y: 0 }"
    >
      {{ skill }}
    </Motion>
  </Motion>
</template>

<script setup>
import styles from "./Badges.module.scss";
defineProps({
  skills: {
    type: Array,
    required: true,
  },
});
</script>
