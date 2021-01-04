function directive1(el, binding, vnode) {
    console.log('全局指令1')
}

export default {
    bind (el, binding, vnode) {
        directive1(el, binding, vnode)
    }
}