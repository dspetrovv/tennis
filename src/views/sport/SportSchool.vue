<template>
  <div class="school">
    <div class="school__info">
      <h1>{{ name }}</h1>
      <div>{{ description }}</div>
      <h4>Адрес</h4>
      <span>{{ address }}</span>
      <h4>Контакты</h4>
      <div class="school__contacts">
        <template v-for="(contact, idx) in contacts" :key="idx">
          <div class="school__contact-name">
            {{ contact.name }}
          </div>
          <div class="school__contact-communication">
            {{ contact.contact }}
          </div>
        </template>
      </div>
      <h4>Социальные сети</h4>
      <span>
        <a
          v-for="(social, idx) in socials"
          :key="idx"
          :href="`/${social.href}`"
        >
          {{ social.name }}
        </a>
      </span>
    </div>
    <div class="school__image">
      <img :src="require(`@/assets/images/${image}.png`)" alt="school" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import {
  SportObjectContacts,
  SportObjectSocials,
} from "@/types/sports/sport-interfaces";

export default defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
      required: true,
    },
    description: {
      type: String as PropType<string>,
      required: true,
    },
    address: {
      type: String as PropType<string>,
      required: true,
    },
    contacts: {
      type: Array as PropType<SportObjectContacts[]>,
      required: true,
    },
    image: {
      type: String as PropType<string>,
      required: true,
    },
    socials: {
      type: Array as PropType<SportObjectSocials[]>,
      required: true,
    },
  },
});
</script>
