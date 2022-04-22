import { onMounted, onUnmounted, ref } from "vue";

function useWindowSize() {
  const windowWidth = ref<number>(window.innerWidth);
  const windowHeight = ref<number>(window.innerHeight);
  onMounted(() => {
    window.addEventListener("resize", getSize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", getSize);
  });

  function getSize() {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;
  }

  return { windowWidth, windowHeight };
}

export default useWindowSize;
