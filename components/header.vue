<template>
  <div>
    <mt-header title="">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>

</script>

<style lang="stylus">
.mint-header {
  position: relative
  z-index: 1
}
</style>
