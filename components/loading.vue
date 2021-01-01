<template>
    <div v-if="loading" class="loading-div"></div>
</template>
<script>
export default {
    data () {
        return {
            loading: false
        }
    },
    methods: {
        // start 和 finish 两个方法是 nuxt 内部约定好的，不可修改
        start () {
            this.loading = true
        },
        finish () {
            this.loading = false
        }
    }
}
</script>
<style scoped>
.loading-div {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 50px;
    height: 50px;
    border: 1px solid rgb(86, 238, 93);
    border-radius: 50%;
    border-bottom: none;
    border-left: none;
    animation: circle .5s infinite linear;
    z-index: 100000;
}
@keyframes circle {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
