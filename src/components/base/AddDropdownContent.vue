<template>
  <div>
    <transition name="dropdown-content">
      <div
        style="box-shadow: 0 0 10px rgb(0 0 0 / 28%)"
        v-if="active"
        :class="`absolute right-0 ${dropdownwidth} ${dropdownMargin} ${dropdownTop} origin-top-right bg-white border   z-40 rounded-lg`"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppDropdownContent',

  inject: ['sharedState'],

  props: {
    dropdownTop: {
      type: String,
      default: '',
    },

    dropdownwidth: {
      type: String,
      default: 'w-48',
    },
    dropdownMargin: {
      type: String,
      default: 'mt-2',
    },
  },

  computed: {
    active() {
      return this.sharedState.active
    },
  },
}
</script>

<style>
.dropdown-content-enter-active,
.dropdown-content-leave-active {
  transition: all 0.2s;
}
.dropdown-content-enter,
.dropdown-content-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
