<template>
  <Motion
    is="div"
    v-once
    class="highlight-card"
    :initial="{ opacity: 0, y: 50 }"
    :visible-once="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, delay: index * 0.2 }"
  >
    <div class="card-image">
      <Swiper
        ref="swiperRef"
        :modules="[Navigation, Pagination]"
        :navigation="true"
        :pagination="true"
        class="image-carousel card"
      >
        <SwiperSlide
          v-for="(image, imgIndex) in highlight.images"
          :key="imgIndex"
          class="carousel-slide"
        >
          <NuxtImg
            :src="image.path"
            :alt="`${highlight.title} - Image ${imgIndex + 1}`"
            class="project-image card"
            height="250"
            width="350"
            loading="lazy"
            format="webp"
            quality="80"
          />
          <div class="image-overlay">
            <Motion
              is="div"
              class="stats-grid"
              :initial="{ opacity: 0, scale: 0.8 }"
              :hovered="{ opacity: 1, scale: 1 }"
              :transition="{ duration: 0.3 }"
            >
              <div
                v-for="(value, key) in highlight.stats"
                :key="key"
                class="stat-item"
              >
                <span class="stat-value">{{ key }}</span>
                <span class="stat-label">{{ value }}</span>
              </div>
            </Motion>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="card-content">
      <h3 class="highlight-title">{{ highlight.title }}</h3>
      <p class="highlight-description">{{ highlight.description }}</p>

      <div class="highlight-skills">
        <Motion
          is="div"
          v-for="(skill, skillIndex) in highlight.skills"
          :key="skillIndex"
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: index * 0.2 + 0.4,
            },
          }"
        >
          <span class="skill-badge">
            {{ skill }}
          </span>
        </Motion>
      </div>

      <div class="card-actions">
        <button
          class="btn-view"
          aria-label="View Details button"
          @click="openModal"
        >
          View Screenshot Details
        </button>
      </div>
    </div>
  </Motion>
  <div v-if="isModalOpen" class="modal-backdrop" @click.self="closeModal">
    <div class="modal-content">
      <div class="image-carousel">
        <Swiper
          ref="modalSwiperRef"
          :modules="[Navigation, Pagination]"
          :navigation="true"
          :pagination="true"
          class="image-carousel"
        >
          <SwiperSlide
            v-for="(image, imgIndex) in highlight.images"
            :key="imgIndex"
            class="modal-carousel-slide"
          >
            <div class="image-wrapper">
              <!-- Info label and hover info -->
              <div class="info-container">
                <span
                  class="info-label"
                  @mouseenter="hoverShowInfo = true"
                  @mouseleave="hoverShowInfo = false"
                  @click="toggleClickShowInfo"
                  >Hover or Click for more info</span
                >
                <div v-if="hoverShowInfo || clickShowInfo" class="image-info">
                  {{ image.description }}
                </div>
              </div>
              <NuxtImg
                :src="image.path"
                :alt="`${highlight.title} - Image ${imgIndex + 1}`"
                class="project-image"
                style="width: 80vw; border-radius: 10px"
                fit="cover"
                sizes="lg:80vw"
                loading="lazy"
                format="webp"
                quality="100"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <button class="close-button" @click="closeModal">&times;</button>
    </div>
  </div>
</template>

<script setup>
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  highlight: { type: Object, required: true },
  index: { type: Number, required: true },
});

const swiperRef = ref(null);

const isModalOpen = ref(false);
const selectedImage = ref(null);
const clickShowInfo = ref(false);
const hoverShowInfo = ref(false);

const toggleClickShowInfo = () => {
  clickShowInfo.value = !clickShowInfo.value;
};

const openModal = (image) => {
  selectedImage.value = image;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedImage.value = null;
  clickShowInfo.value = false;
};
</script>

<style lang="scss" scoped>
@use "./Card.scss";
</style>
