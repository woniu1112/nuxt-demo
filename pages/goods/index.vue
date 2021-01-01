<template>
  <div>
    goods
    {{title}}
    <!--<nuxt-link to="/goods/1">detail</nuxt-link>-->
  </div>
</template>

<script>
import {mapState, mapMutations,mapActions,mapGetters} from 'vuex'

export default {
  name: 'goods',
  head: {
    meta: [
      {name: 'keywords', content: 'mayssr我的第一个ssr'}
    ]
  },
  middleware (context) {
    let {store, route, redirect, params, query, req, res} = context
    // console.log(redirect)
    // redirect('/index')
    // 前置全局路由守卫业务
    // store 状态树信息
    // route 一条目标路由信息
    // redirect 强制跳转
    // params， query 校验参数合理性
    console.log('middleware pages 组件独享路由守卫')
    // redirect('/')
  },
  async asyncData (context) {
    let {$axios} = context
    let res = await $axios({url: '/list.json',responseType: 'json'})
    return {
      title: res.data.title
    }
  },
  async fetch (context) {
    let {$axios, store} = context
    let res = await $axios({url: '/list.json',responseType: 'json'})
    console.log(res.data.title)
    // 更新 store home
    if (res.data) {
      store.commit('home/M_UPDATE_HOME', res.data)
    }
  },
  methods: {
    handlerClick () {
      // this.aUpadateHome({err: 1, data: {title: 'test'}})
      // this.$store.dispatch('home/aUpadateHome',{err: 1, data: {title: 'test'}})
      // this.$store.commit('home/M_UPDATE_HOME', {err: 1, data: {title: 'test'}})
      this.M_UPDATE_HOME({err: 1, data: {title: 'test'}})
    },
    // 获取 home 模块下的  aUpatateHome
    ...mapActions('home', ['aUpadateHome']),
    // 获取 home 模块下的， M_UPDATE_HOME
    ...mapMutations('home', ['M_UPDATE_HOME'])
  },
  computed: {
    // 主模块下（index）的不用加模块
    ...mapGetters(['getNav']),
    ...mapState(['bnav']),
    ...mapState('home', ['data']),
    ...mapState({
      home: state => state.home.data
    })
  },
  beforeRouteLeave (to, from, next) {
    let bl = window.confirm('是否要离开')
    next(bl)
  }
}
</script>

<style scoped>

</style>
