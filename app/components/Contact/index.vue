<template>
  <section id="contact" :class="styles.contactSection">
    <div class="container">
      <Motion
        is="div"
        class="section-header"
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
      >
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">Let's discuss your next project</p>
      </Motion>

      <div :class="styles.contactContent">
        <Motion
          is="div"
          :class="styles.contactInfo"
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.6, delay: 0.2 }"
        >
          <NuxtLink
            :to="personalInfo.gmail"
            external
            target="_blank"
            style="text-decoration: none; color: unset"
          >
            <div :class="styles.contactItem">
              <div :class="styles.contactIcon">
                <Icons :name="ICON_NAMES.GMAIL" size="30" />
              </div>
              <div>
                <h3>Email</h3>
                <p>{{ personalInfo.email }}</p>
              </div>
            </div>
          </NuxtLink>
        </Motion>
        <Motion
          is="div"
          :class="styles.contactInfo"
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.6, delay: 0.2 }"
        >
          <div :class="styles.contactItem">
            <div :class="styles.contactIcon">
              <Icon name="mdi:phone-incoming" size="30" />
            </div>
            <div>
              <h3>Phone</h3>
              <p>{{ personalInfo.phone }}</p>
            </div>
          </div>
        </Motion>
        <Motion
          is="div"
          :class="styles.contactInfo"
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.6, delay: 0.2 }"
        >
          <NuxtLink
            :to="personalInfo.whatsapp"
            external
            target="_blank"
            style="text-decoration: none; color: unset"
          >
            <div :class="styles.contactItem">
              <div :class="styles.contactIcon">
                <Icons :name="ICON_NAMES.WHATSAPP" size="30" />
              </div>
              <div>
                <h3>WhatsApp</h3>
                <p>Chat on WhatsApp</p>
              </div>
            </div>
          </NuxtLink>
        </Motion>
        <Motion
          is="div"
          :class="styles.contactInfo"
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.6, delay: 0.2 }"
        >
          <NuxtLink
            :href="personalInfo.linkedin"
            target="_blank"
            external
            style="text-decoration: none; color: unset"
          >
            <div :class="styles.contactItem">
              <div :class="styles.contactIcon">
                <Icons :name="ICON_NAMES.LINKEDIN" size="30" />
              </div>
              <div>
                <h3>LinkedIn</h3>
                <p>
                  {{ personalInfo.linkedin.replace("https://www.", "") }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </Motion>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ICON_NAMES } from "~/constants/icons";
import { PERSONAL_INFO } from "~/constants/personal";
import styles from "./Contact.module.scss"

const personalInfo = PERSONAL_INFO;
</script>
