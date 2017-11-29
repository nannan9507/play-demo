<template>
  <div class="flex-box">

    <div class="flex-header" :class="{'has-search-bar': options.search, 'has-nav-bar': options.nav}" v-if="!!$slots['app-header']">
      <slot name="app-header"></slot>
    </div>

    <div class="flex-body" :class="{'has-footer-bar': !!$slots['app-footer']}">
      <div id="mescroll" class="mescroll">
        <slot name="app-body"></slot>
      </div>
    </div>

    <div class="flex-footer" v-if="!!$slots['app-footer']">
      <slot name="app-footer"></slot>
    </div>

  </div>
</template>

<script>
import overscroll from '~/utils/touch-prevent'

export default {
  props: {
    options: {
      type: Object,
      default () {
        return {
          search: false,
          nav: false,
        }
      }
    },
  },
  mounted() {
    if (process.browser) {
      // {{ this.$slots }}
      overscroll(document.querySelector('.mescroll'))
    }
  },
}
</script>

<style lang="stylus" scoped>
header-height = 42px;
search-header-height = 82px;
nav-header-height = 90px;
footer-height = 55px;

.flex-box {
  display: flex
  flex-direction: column
  height: 100vh

  .flex-header {
    height: header-height
    &.has-search-bar {
      height: search-header-height
      & + .flex-body {
        height: "calc(100vh - %s)" % search-header-height
      }
      & + .flex-body.has-footer-bar {
        height: "calc(100vh - %s - %s)" % (search-header-height footer-height)
      }
    }
    &.has-nav-bar {
      height: nav-header-height
      & + .flex-body {
        height: "calc(100vh - %s)" % nav-header-height
      }
      & + .flex-body.has-footer-bar {
        height: "calc(100vh - %s - %s)" % (nav-header-height footer-height)
      }
    }
    & + .flex-body {
      height: "calc(100vh - %s)" % header-height
    }
    & + .flex-body.has-footer-bar {
      height: "calc(100vh - %s - %s)" % (header-height footer-height)
    }
  }

  .flex-body {
    height: 100vh
    &.has-footer-bar {
      height: "calc(100vh - %s)" % footer-height
    }
  }

  .flex-footer {
    height: footer-height
  }
}
</style>
