<template>
  <Motion
    is="div"
    v-once
    :class="styles.highlightCard"
    :initial="{ opacity: 0, y: 50 }"
    :visible-once="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, delay: index * 0.2 }"
  >
    <div :class="styles.cardImage">
      <Swiper
        ref="swiperRef"
        :modules="[Navigation, Pagination]"
        :navigation="true"
        :pagination="true"
        :class="[styles.imageCarousel, styles.card]"
      >
        <SwiperSlide
          v-for="(image, imgIndex) in highlight.images"
          :key="imgIndex"
          :class="styles.carouselSlide"
        >
          <NuxtImg
            :src="image.path"
            :alt="`${highlight.title} - Image ${imgIndex + 1}`"
            :class="[styles.projectImage, styles.card]"
            width="500"
            loading="lazy"
            format="webp"
            quality="100"
          />
          <div :class="styles.imageOverlay">
            <Motion
              is="div"
              :class="styles.statsGrid"
              :initial="{ opacity: 0, scale: 0.8 }"
              :visible="{ opacity: 1, scale: 1 }"
              :transition="{ duration: 0.3 }"
            >
              <div
                v-for="(value, key) in highlight.stats"
                :key="key"
                :class="styles.statItem"
              >
                <span :class="styles.statValue">{{ key }}</span>
                <span :class="styles.statLabel">{{ value }}</span>
              </div>
            </Motion>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div :class="styles.cardContent">
      <h3 :class="styles.highlightTitle">{{ highlight.title }}</h3>
      <p :class="styles.highlightDescription">{{ highlight.description }}</p>

      <div :class="styles.highlightSkills">
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
          <span :class="styles.skillBadge">
            {{ skill }}
          </span>
        </Motion>
      </div>

      <div :class="styles.cardActions">
        <button
          :class="styles.btnView"
          aria-label="View Details button"
          @click="openModal"
        >
          View Screenshot Details
        </button>
      </div>
    </div>
  </Motion>
  <div
    v-if="isModalOpen"
    :class="styles.modalBackdrop"
    @click.self="closeModal"
  >
    <div :class="[styles.modalContent]">
      <Swiper
        ref="modalSwiperRef"
        :modules="[Navigation, Pagination, Zoom]"
        :navigation="true"
        :pagination="true"
        :class="[styles.imageCarousel, shouldRotate ? styles.rotated : '']"
        :direction="shouldRotate ? 'vertical' : 'horizontal'"
      >
        <SwiperSlide
          v-for="(image, imgIndex) in highlight.images"
          :key="imgIndex"
          :class="styles.modalCarouselSlide"
        >
          <div :class="[styles.imageWrapper]">
            <!-- Info label and hover info -->
            <!-- try s_498x1200&pos_right -->
            <NuxtImg
              :src="image.path"
              :alt="`${highlight.title} - Image ${imgIndex + 1}`"
              :class="[styles.projectImage, styles.modalImage]"
              :width="windowWidth"
              loading="lazy"
              format="webp"
              quality="100"
              :modifiers="{ rotate: shouldRotate ? 90 : 0 }"
            />
            
            <div :class="styles.infoContainer">
              <span :class="styles.infoLabel" @click="toggleClickShowInfo"
                >Hover or Click for more info</span
              >
              <div
                :class="[
                  styles.imageInfo,
                  hoverShowInfo || clickShowInfo ? styles.active : '',
                ]"
              >
                {{ image.description }}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <button :class="styles.closeButton" @click="closeModal">&times;</button>
    </div>
  </div>
</template>

<script setup>
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "./SwiperOverride.css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Zoom } from "swiper/modules";
import styles from "./Card.module.scss";

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

const { windowWidth, windowHeight } = useResponsive();

const shouldRotate = computed(() => {
  return windowHeight.value > windowWidth.value;
});
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
