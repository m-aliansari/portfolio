<template>
  <Motion
    is="div"
    v-once
    :class="styles.reviewCard"
    :initial="{ opacity: 0, y: 50 }"
    :visible-once="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.55, delay: index * 0.15 }"
  >
    <div :class="styles.cardTop">
      <NuxtImg
        v-if="review.imagePath"
        :src="review.imagePath"
        :alt="`${review.name} avatar`"
        :class="styles.avatar"
        width="72"
        height="72"
        loading="lazy"
        format="webp"
        quality="100"
      />
      <div :class="styles.person">
        <h3 :class="styles.name">{{ review.name }}</h3>
        <span v-if="review.location" :class="styles.location">
          📍 {{ review.location }}
        </span>
        <span :class="styles.reference">{{ review.reference }}</span>

        <div
          :class="styles.rating"
          role="img"
          :aria-label="`${rating} out of 5 stars`"
          tabindex="-1"
        >
          <svg
            v-for="n in 5"
            :key="n"
            viewBox="0 0 24 24"
            :class="[styles.star, n <= rating ? styles.filled : '']"
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

    <p :class="styles.reviewText">{{ review.review }}</p>
  </Motion>
</template>

<script setup>
import styles from "./Card.module.scss";
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
