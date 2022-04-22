import { Directions } from "@/types/competitions/competition-types";
import { ref, toRef, watch } from "vue";
import { goNext, goPrev, initButtons } from "../competitions-buttons";
import { changeClass } from "../competitions-tabs-functions";
import useWindowSize from "./useWindowSize";

function useMobileArrowButtons() {
  const width = toRef(useWindowSize(), "windowWidth");
  const isMobile = ref<boolean>(width.value <= 540);
  const isLeftDisabled = ref<boolean>(true);
  const isRightDisabled = ref<boolean>(true);

  function changeCompetition(direction: Directions) {
    if (direction === "left") {
      const [isLeft, isRight]: boolean[] = goPrev();
      updateButtons(isLeft, isRight);
    }
    if (direction === "right") {
      const [isLeft, isRight]: boolean[] = goNext();
      updateButtons(isLeft, isRight);
    }
  }

  function updateButtons(isLeft: boolean, isRight: boolean) {
    switch (isLeft) {
      case true:
        isLeftDisabled.value = true;
        break;
      default:
        isLeftDisabled.value = false;
        break;
    }
    switch (isRight) {
      case true:
        isRightDisabled.value = true;
        break;
      default:
        isRightDisabled.value = false;
        break;
    }
  }

  function beforeChangeClass(currentWidth: number, prevWidth: number) {
    const prevIsCard: boolean = prevWidth > 992;
    const prevIsMedium: boolean = prevWidth > 540;
    const isCard: boolean = currentWidth > 992;
    const isMedium: boolean = currentWidth > 540;

    if (prevIsCard !== isCard || prevIsMedium !== isMedium) {
      changeClass(currentWidth, isCard, isMedium);
    }

    isMobile.value = currentWidth <= 540;
    changeClass(currentWidth, isCard, isMedium);
  }

  watch(width, (currentWidth, prevWidth) => {
    beforeChangeClass(currentWidth, prevWidth);
    isMobile.value = currentWidth <= 540;
  });

  watch(isMobile, () => {
    console.log("isMobile", isMobile);
    if (isMobile.value) {
      initButtons();
    }
  });

  return {
    width,
    isMobile,
    isLeftDisabled,
    isRightDisabled,
    changeCompetition,
  };
}

export default useMobileArrowButtons;
