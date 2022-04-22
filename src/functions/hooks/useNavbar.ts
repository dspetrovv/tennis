import { ref } from "vue";

function useNavbar() {
  const isNavbarOpened = ref<boolean>(false);
  const navBlock = ref<HTMLDivElement>();
  const navButton = ref<HTMLDivElement>();
  const navOpenText = ref<HTMLSpanElement>();
  const navMenu = ref<HTMLDivElement>();
  const navMenuHeader = ref<HTMLDivElement>();

  function toggleMenu() {
    if (!isNavbarOpened.value) {
      setTimeout(() => {
        navBlock.value!.removeChild(navButton.value!);
        navMenuHeader.value!.prepend(navButton.value!);
      }, 500);
      setTimeout(() => {
        navOpenText.value!.textContent = "Закрыть";
      }, 100);
      document.getElementsByTagName("body")[0].classList.add("locked");
      navButton.value!.classList.add("active");
      navButton.value!.querySelector(".nav-button__icon")!.className =
        "nav-button__icon_active";
      navMenu.value!.classList.toggle("nav-menu_active");
    } else {
      navMenuHeader.value!.removeChild(navButton.value!);
      navBlock.value!.append(navButton.value!);
      setTimeout(() => {
        navButton.value!.classList.remove("active");
        navButton.value!.querySelector(".nav-button__icon_active")!.className =
          "nav-button__icon";
      });
      setTimeout(() => {
        navOpenText.value!.textContent = "Открыть";
      }, 100);
      document.getElementsByTagName("body")[0].classList.remove("locked");
      navMenu.value!.classList.toggle("nav-menu_active");
    }
    isNavbarOpened.value = !isNavbarOpened.value;
  }

  return {
    isNavbarOpened,
    navBlock,
    navButton,
    navOpenText,
    navMenu,
    navMenuHeader,
    toggleMenu,
  };
}

export default useNavbar;
