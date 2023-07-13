<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <!-- Custom label -->
    <label
      for=""
      v-if="label"
      class="text-base font-medium text-gray-500"
      :label="label"
    >
      <slot name="label" />
    </label>

    <!-- Show Selected value  -->
    <div
      class="pr-8 overflow-hidden selected"
      :class="{ open: open }"
      @click="open = !open"
    >
      {{ selected.name }}
    </div>

    <!-- Show custom icon -->

    <div
      class="absolute right-4 top-2"
      v-if="icon"
      :icon="icon"
      @click="open = !open"
    >
      <ChevronDownIcon />

      <slot name="icon" />
    </div>

    <!-- custom options for value -->
    <div class="w-full items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option
          open = false
          $emit('input', option)
        "
        class="px-4 mx-auto border-b border-gray-300"
      >
        {{ option.name }}
      </div>
      <slot name="option" />
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon } from '@vue-hero-icons/solid'

export default {
  components: {
    ChevronDownIcon,
  },

  props: {
    options: {
      type: Array,
      required: true,
    },
    icon: {
      type: Boolean,
      required: true,
    },
    default: {
      type: Object,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default,
      open: false,
    }
  },
  mounted() {
    this.$emit('input', this.selected)
  },
}
</script>

<style scoped>
.custom-select {
  display: inline-block;
  width: 125px;
  height: calc(1.5em + 0.75rem + 2px);
  /* padding: 0.375rem 1.75rem 0.375rem 0.75rem; */
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1;
  vertical-align: middle;
  /* border: 1px solid; */
  /* border-radius: 0.25rem; */
  -webkit-appearance: none;
  outline: none;
  -moz-appearance: none;
  appearance: none;
  /* color: #768192; */
  background: none;
  padding: 0;
}

.custom-select {
  outline: none;
  border: none;
  position: relative;
  text-align: left;
  outline: none;
  height: 38px;
  line-height: 38px;
  margin-left: 12%;
}

.custom-select .selected {
  /* background-color: #f4f6fc; */
  border-radius: 30px;
  color: black;
  padding-left: 1em;
  cursor: pointer;
  font-weight: 600;
  user-select: none;
}

.custom-select .selected.open {
  border-radius: 6px 6px 6px 6px;
}

.custom-select .selected:after {
  position: absolute;
  content: '';
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  /* border: 5px solid transparent; */
  /* border-color: #fff transparent transparent transparent; */
}

.custom-select .items {
  color: black;
  border-radius: 6px 6px 6px 6px;
  overflow: hidden;
  position: absolute;
  box-shadow: 0px 4px 16px -2px rgba(222, 213, 245, 0.54);
  background-color: white;
  left: 0px;
  right: 0;
  top: 39px;
  width: 125px;
  font-weight: 600;
  z-index: 1;
}

.custom-select .items div {
  color: black;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #e9ecef;
  color: #f2613c;
  transition: ease-in 0.3s;
  animation-duration: 400;
}

.selectHide {
  display: none;
}

.custom-select:focus {
  box-shadow: none;
}

.custom-select .selected:after {
  position: absolute;
  content: '';
  top: 20px;
  right: 1em;
  width: 0;
  display: none;
}
</style>
