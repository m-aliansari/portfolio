<template>
  <Motion
    is="div"
    v-once
    class="review-card"
    :initial="{ opacity: 0, y: 50 }"
    :visible-once="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.55, delay: index * 0.15 }"
  >
    <div class="card-top">
      <NuxtImg
        v-if="review.imagePath"
        :src="review.imagePath"
        :alt="`${review.name} avatar`"
        class="avatar"
        width="72"
        height="72"
        loading="lazy"
        format="webp"
        quality="100"
      />
      <div class="person">
        <h4 class="name">{{ review.name }}</h4>
        <span v-if="review.location" class="location">
          📍 {{ review.location }}
        </span>
        <span class="reference">{{ review.reference }}</span>

        <div
          class="rating"
          role="img"
          :aria-label="`${rating} out of 5 stars`"
          tabindex="-1"
        >
          <svg
            v-for="n in 5"
            :key="n"
            viewBox="0 0 24 24"
            class="star"
            :class="{ filled: n <= rating }"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
          <span class="sr-only">{{ rating }} out of 5</span>
        </div>
      </div>
    </div>

    <p class="review-text">{{ review.review }}</p>
  </Motion>
</template>

<script setup>
const props = defineProps({
  review: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

// rating is optional in the data; fallback to 5
const rating = computed(() => {
  const r = props.review.rating;
  if (typeof r === "number") return Math.max(0, Math.min(5, Math.round(r)));
  return 5;
});
</script>

<style lang="scss" scoped>
@use "./Card.scss";
</style>