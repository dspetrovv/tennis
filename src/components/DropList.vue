<template>
  <div ref="dropdown" class="dropdown-block">
    <a href="/#" class="btn dropdown__btn" @click="(evt) => toggleList(evt)">
      <slot name="btn-text">Выберите...</slot>
    </a>
    <ul :class="{ 'dropdown-list': true, show: isDropListOpened }">
      <li
        v-for="item in items"
        :key="item.id"
        :class="`dropdown-list__item${item.selected ? '_active' : ''}`"
        @click="selectItem(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  PropType,
  toRefs,
  ref,
  onUnmounted,
} from "vue";
import { Dropdown } from "@/types/globals";

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<Dropdown[]>,
      required: true,
    },
    itemsName: {
      type: String as PropType<string>,
      required: true,
    },
  },
  emits: ["selectDropdownItem"],

  setup(props, { emit }) {
    const dropdown = ref();
    const isDropListOpened = ref<boolean>(false);

    onMounted(() => {
      document.addEventListener("click", mouseClick);
    });
    onUnmounted(() => {
      document.removeEventListener("click", mouseClick);
    });
    function mouseClick(evt: MouseEvent) {
      if (
        evt.target !== dropdown.value &&
        !dropdown.value?.contains(evt.target)
      ) {
        closeDropList();
      }
    }

    function toggleList(evt: Event) {
      evt.preventDefault();
      isDropListOpened.value = !isDropListOpened.value;
    }

    function closeDropList() {
      isDropListOpened.value = false;
    }

    function selectItem(item: Dropdown) {
      emit("selectDropdownItem", item, props.itemsName);
      closeDropList();
    }

    return {
      dropdown,
      isDropListOpened,
      ...toRefs(props),
      toggleList,
      closeDropList,
      selectItem,
    };
  },
});
</script>
