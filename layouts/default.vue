<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  head: {
    title: '谋杀助手',
  },
}
</script>

<style lang="stylus">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
a {
  -webkit-tap-highlight-color: transparent;
  color: #138EF9;
  text-decoration: none;
}

.container {
  display: flex
  flex-direction: column
  height: 100vh
  .flex-header {
    height: 42px
    &.search-bar {
      height: 82px
    }
    form {
      .app-header__search {
        height: auto
        .mint-searchbar {
          background: #26a2ff
          margin-top: 38px
        }
        .mint-searchbar-cancel {
          color: #FFF
        }
      }
    }
  }
  .flex-body {
    height: calc(100vh - 42px)
    padding-bottom: 20px
    &.has-footer {
      height: calc(100vh - 42px - 55px)
    }
    .list-box {
      display: flex
      flex-wrap: wrap
      justify-content: space-around
      text-align: center
      .el-card {
        margin-top: 20px
        width: 48%
        img {
          height: 200px
        }
      }
      .el-card-less {
        width: 49%
      }
      .button {
        margin-top: 10px
        padding: 5px 20px
      }
    }
  }
  .flex-footer {
    height: 55px
    background: green
  }
  .flex-header.search-bar + .flex-body {
    height: calc(100vh - 82px)
    &.has-footer {
      height: calc(100vh - 82px - 55px)
    }
  }
}
</style>
