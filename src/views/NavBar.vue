<template>
  <nav>
    <div class="nav">
      <div ref="navBlock" class="nav-block">
        <div class="nav-icon">
          <img :src="require('@/assets/images/tt.png')" alt="table-tennis" />
          <span>Заголовок</span>
        </div>
        <div class="nav-auth">
          <a href="/#" class="btn">Регистрация</a>
          <a href="/#" class="btn">Вход</a>
        </div>
        <div ref="navButton" class="nav-button" @click="toggleMenu">
          <span ref="navOpenText" class="nav-button__text">Открыть</span>
          <div class="nav-button__icon-block">
            <div class="nav-button__icon">
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div ref="navMenu" class="nav-menu">
        <div ref="navMenuHeader" class="nav-menu__header">
          <div class="nav-menu__header__background"></div>
        </div>
        <div class="nav-menu__body">
          <div>
            <div class="nav-menu__body__section">
              <span class="nav-menu__block-title">Спорт</span>
              <ul class="nav-menu__list">
                <li>Календарь соревнований</li>
                <li>Спортивные объекты</li>
                <li>Игроки</li>
                <li>Школы</li>
              </ul>
            </div>
            <div class="nav-menu__body__section">
              <span class="nav-menu__block-title">Информация</span>
              <ul class="nav-menu__list">
                <li>Новости</li>
                <li>Медиа</li>
                <li>Вакансии</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div class="nav-menu__body__section">
              <span class="nav-menu__block-title">О нас</span>
              <ul class="nav-menu__list">
                <li>О нас</li>
                <li>Проекты</li>
                <li>Документы</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="nav-menu__footer">
          <a href="/#" class="nav-menu__footer__item icon__facebook"
            ><facebook-icon
          /></a>
          <a href="/#" class="nav-menu__footer__item icon__github"
            ><github-icon
          /></a>
          <a href="/#" class="nav-menu__footer__item icon__instagram"
            ><instagram-icon
          /></a>
          <img :src="require('@/assets/images/mini-table.png')" alt="table" />
        </div>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import FacebookIcon from "@/components/icons/FacebookIcon.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import { defineComponent } from "vue";
import useNavbar from "@/functions/hooks/useNavbar";

export default defineComponent({
  components: { FacebookIcon, GithubIcon, InstagramIcon },
  setup() {
    const {
      isNavbarOpened,
      navBlock,
      navButton,
      navOpenText,
      navMenu,
      navMenuHeader,
      toggleMenu,
    } = useNavbar();

    return {
      isNavbarOpened,
      navBlock,
      navButton,
      navOpenText,
      navMenu,
      navMenuHeader,
      toggleMenu,
    };
  },
});
</script>
