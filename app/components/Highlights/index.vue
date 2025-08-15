<template>
  <section id="highlights" :class="styles.highlightsSection">
    <div class="container">
      <Motion
        is="div"
        class="section-header"
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
      >
        <h2 class="section-title">Key Achievements</h2>
        <p class="section-subtitle">
          Notable projects and accomplishments
        </p>
      </Motion>

      <div :class="styles.highlightsGrid">
        <HighlightsCard
          v-for="(highlight, index) in highlightsData"
          :key="highlight.id"
          :highlight="highlight"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { HIGHLIGHTS_DATA } from "~/constants/highlights";
import styles from "./Highlights.module.scss";

const highlightsData = HIGHLIGHTS_DATA;
</script>
