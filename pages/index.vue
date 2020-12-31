<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        myssr
      </h1>
      <nuxt-link to="/goods">goods</nuxt-link>
      <nuxt-link :to="{name: 'goods-id', params: {id: 3}}">detail</nuxt-link>
      <test></test>
      <nuxt />
    </div>
  </div>
</template>

<script>
import test from '~/components/test.vue'
export default {
  conponents: {test},
  middleware (context) {
    console.log('pages')
  },
  // 参数的有效性
  validate (context) {
    let {params, query} = context
    return true // return false 则是 404页面
  },
  // 读数据，返回给组件
  asyncData () {
    // 异步业务逻辑，读取服务端数据
    return {
      b: 2
    }
  },
  // 读数据，返回vuex
  fetch (context) {
    // 异步业务逻辑，读取服务端数据提交给 vuex
    let {store} = context
    console.log('fetch')
  },
  data () {
    return {
      b: 1
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted')
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
