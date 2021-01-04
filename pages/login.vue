<template>
    <div>login
        <h1>登录</h1>
        <button @click="loginHandler">login</button>
    </div>
</template>

<script>
export default {
    name: 'login',
    mounted () {
        // this.$axios({url: '/list.json'}).then(res => {
        //     console.log(res.data)
        // })
        this.$api.login.list({}).then(res => {
            console.log(res.data)
        })
    },
    methods: {
        loginHandler () {
            this.$axios({
                url: '/api/login',
                method: 'post',
                data: {
                    username: 'test',
                    pwd: '123456'
                }
                }).then(res => {
                    // 同步 vuex && cookie
                    this.$cookies.set('user', res.data)
                    this.$store.commit('user/M_UPDATE', res.data)
                    this.$router.replace('/goods')
                })
        }
    }
}
</script>

<style scoped>

</style>
