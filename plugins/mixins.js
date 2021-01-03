import Vue from 'vue'

// 全局方法
Vue.prototype.$console = () => {
    console.log('全局方法')
}

// 全局过滤器
import * as filters from '../assets/filters/index'
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

// 全局指令
import directives1 from '../assets/directives/directives1'
Vue.directive('directives1', directives1)

// 全局组件
import myButton from '../components/myButton.vue'
Vue.component('myButton', myButton)

// 混入 methods, 设置一个 $seo 方法，这样可以不用在每个组件中多次写共同的配置
Vue.mixin({
    methods: {
        $seo (title, content, payload = []) {
            return {
                title,
                meta: [
                    {hid: 'description', name: 'keywords', content}
                ].concat(payload)
            }
        }
    }
})
