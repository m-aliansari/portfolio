<template>
  <section id="reviews" class="reviews-section">
    <div class="container">
      <Motion
        is="div"
        class="section-header"
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
      >
        <h2 class="section-title">Testimonials</h2>
        <p class="section-subtitle">What people say about working with me</p>
      </Motion>

      <div class="reviews-list">
        <ReviewsCard
          v-for="(review, index) in reviewsData"
          :key="review.name + index"
          :review="review"
          :index="index"
        />
      </div>
      <!-- More Reviews CTA -->
      <Motion
        is="div"
        class="more-reviews"
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 0.2 }"
      >
        <p class="more-text">
          Loved these stories? There’s more where that came from! 🌟
        </p>
        <NuxtLink
          href="https://www.fiverr.com/maa_coding"
          target="_blank"
          class="more-link"
        >
          View more reviews on Fiverr →
        </NuxtLink>
      </Motion>
    </div>
  </section>
</template>

<script setup>
import { REVIEWS_DATA } from "~/constants/reviews";

const reviewsData = REVIEWS_DATA;
</script>

<style lang="scss" scoped>
@use "./Reviews.scss";
</style>
