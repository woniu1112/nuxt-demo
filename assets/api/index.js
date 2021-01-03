// api 模块入口

const modulesFiles = require.context('./apiList', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modulesObj, modulePath) => {
    const moduleName = modulePath.replace(/\.\/(.*?)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    console.log(value)
    modulesObj[moduleName] = value.default || value
    return modulesObj
},{})

export default modules