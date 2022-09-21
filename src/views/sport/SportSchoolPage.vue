<template>
  <div>
    <div>
      <img :src="require('@/assets/images/tt.png')" alt="School" />
    </div>
    <div>
      <section class="mb-10 mt-10">
        <h2 class="mb-8">Описание</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          dicta dicta quia pariatur, quibusdam aspernatur possimus tempora, id
          officiis quos ab perferendis odit reprehenderit deleniti, odio maiores
          corrupti ipsam! A.
        </p>
      </section>
      <section class="mb-10 mt-10">
        <h2 style="margin-bottom: 14px">Тренеры</h2>
        <div class="cards-list_grid">
          <coach-card
            v-for="coach in coaches"
            :key="coach.id"
            :name="coach.name"
            :surname="coach.surname"
            :middlename="coach.middlename"
            :experience="coach.experience"
            :avatar="coach.avatar"
          />
        </div>
      </section>
      <section class="mb-10 mt-10">
        <h2 class="mb-8">Контакты</h2>
        <div>
          <table>
            <tbody>
              <tr>
                <td>Адрес:</td>
                <td>ул. Оплеснина, д. 34</td>
              </tr>
              <tr>
                <td>Телефон:</td>
                <td>+7900752259</td>
              </tr>
              <tr>
                <td>Эл. почта:</td>
                <td>example@example.example</td>
              </tr>
              <tr>
                <td>Соц. сети:</td>
                <td style="display: flex">
                  <a href="/#" class="socials icon__facebook">
                    <facebook-icon />
                  </a>
                  <a href="/#" class="socials icon__github">
                    <github-icon />
                  </a>
                  <a href="/#" class="socials icon__instagram">
                    <instagram-icon />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import CoachCard from "@/components/cards/CoachCard.vue";
import FacebookIcon from "@/components/icons/FacebookIcon.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import { Coach } from "@/types/players/players-interfaces";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { CoachCard, InstagramIcon, GithubIcon, FacebookIcon },
  setup() {
    const coaches = ref<Coach[]>([
      {
        id: 1,
        name: "Coach1",
        surname: "Surname",
        middlename: "Middlename",
        experience: 23,
        avatar: "tt",
        about:
          "Занимаюсь теннисом уже довольно догло, на моём счету несколько первых мест в городских соревнованиях. Второе и третье места в республиканских чемпионатах. Играл в стадии плей-офф во всероссийских турнирах.",
      },
      {
        id: 2,
        name: "Coach2",
        surname: "Surname",
        middlename: "Middlename",
        experience: 32,
        avatar: "tt",
        about:
          "Настольный теннис это моя жизнь, уже n-лет работаю тренером, мои подопечные участвуют во всероссийских чемпионатах, занимают призовые места в республиканских и городских соревнованиях.",
      },
    ]);

    return {
      coaches,
    };
  },
});
</script>
