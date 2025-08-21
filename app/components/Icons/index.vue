<template>
  <IconsLinkedin
    v-if="name === ICON_NAMES.LINKEDIN"
    :width="parseInt(size)"
  />
  <IconsFiverr
    v-if="name === ICON_NAMES.FIVERR"
    :width="size"
    :height="size"
  />
  <IconsWhatsapp
    v-if="name === ICON_NAMES.WHATSAPP"
    :width="size"
    :height="size"
  />
  <IconsEmail
    v-if="name === ICON_NAMES.EMAIL"
    :width="size"
    :height="size"
  />
  <IconsGmail
    v-if="name === ICON_NAMES.GMAIL"
    :width="size"
    :height="size"
  />
  <IconsPhone
    v-if="name === ICON_NAMES.PHONE"
    :width="size"
    :height="size"
  />
  <IconsGithub
    v-if="name === ICON_NAMES.GITHUB"
    :width="size"
    :height="size"
  />
</template>

<script setup>
import { ICON_NAMES } from "~/constants/icons";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  size: {
    type: String,
    default: "40",
  },
  name: {
    required: true,
    type: String,
  },
});
</script>
