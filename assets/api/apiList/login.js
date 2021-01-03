export default (axios, getData) => ({
    list(data) {
        return getData(axios, {url: './list.json', data})
    }
})

