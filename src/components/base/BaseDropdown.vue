<template>
  <div id="app">
    <div class="mt-4" :class="showDrawer ? '' : ''" @click="show">
      <slot />
      <i
        v-if="icon"
        class="icon fas fa-chevron-down"
        :style="{ transform: showDrawer ? 'rotate(180deg)' : '' }"
      ></i>
    </div>

    <transition name="slide">
      <div class="shadow-xl language-drawer" v-if="showDrawer">
        <ul class="drawer-list">
          <li class="drawer-list-item">
            <div class="drawer-list-name">
              <slot name="options" :options="options" />
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  // name: 'Base Dropdown',

  props: {
    options: {
      type: [String, Number, Array],
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: Boolean,
      default: null,
    },
    hideShow: {
      type: Boolean,
      default: null,
    },
  },

  data() {
    return {
      showDrawer: false,
    }
  },

  watch: {
    hideShow: function (newValue) {
      this.showDrawer = newValue
    },
  },

  mounted() {},

  methods: {
    show() {
      this.showDrawer = !this.showDrawer
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
#app {
  position: relative;
}

.language {
  padding: 10px;
  position: relative;
  border-radius: 5px;
  border: 1px solid #8f9cb2;
  box-shadow: 0 0 10px rgb(0 0 0 / 28%);
  z-index: 1;
  transition: 0.4s border ease;
  background: white;
  cursor: pointer;
}

.language-copy {
  font-size: 14px;
  color: #6f7887;
}

.language .icon {
  color: #8f9cb2;
  transition: 0.5s transform ease;
  transform-origin: 50%;
}

.language-drawer {
  background: white;
  z-index: 1;
  position: absolute;
  height: auto;
  top: 80%;
  right: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 10px 0;
  padding: 0px;
  border-radius: 8px;
}

.language-drawer .drawer-list,
.language-drawer .drawer-list-item {
  padding: 0;
  margin: 0;
}

.language-drawer .drawer-list-item {
  list-style-type: none;
  margin: 20px 0;
  color: #606f87;
}

.language-drawer .drawer-list-item:first-child,
.language-drawer .drawer-list-item:last-child {
  margin: 0;
}

.language-drawer .drawer-list-item .drawer-list-name {
}

.language-drawer .drawer-list-item .drawer-list-name input {
  margin-right: 8px;
}

.language-drawer .drawer-list-item .drawer-list-value {
  height: 30px;
  font-size: 12px;
  background: #f4f5f7;
  padding: 8px;
  border-radius: 20px;
  color: #858688;
}

.highlight {
  border: 1px solid #889ded;
}

.highlight .language-copy,
.highlight .icon {
  color: #889ded;
}

.slide-enter {
  opacity: 0;
  transform: translateY(-20px);
  transition: 0.5s all ease;
}

.slide-enter-to {
  opacity: 1;
  transform: translateY(0px);
  transition: 0.5s all ease;
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
  transition: 0.5s all ease;
}

@media (max-width: 250px) {
  .drawer-language-value {
    opacity: 0;
  }
}
</style>
