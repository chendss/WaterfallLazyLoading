/* 浏览器滚动条偏移量
 * 
 * @returns 
 */
function scrollTop() {　　
    let scrollTop = 0
    if (document.body.scrollTop !== 0) {
        scrollTop = document.body.scrollTop
    } else {
        scrollTop = document.documentElement.scrollTop
    }
    return scrollTop
}

/* 文档的总高度
 * 
 * 
 * @returns 
 */
function scrollHeight() {
    let scrollHeight = 0
    if (document.body.scrollHeight !== 0) {
        scrollHeight = document.body.scrollHeight
    } else {
        scrollHeight = document.documentElement.scrollHeight
    }
    return scrollHeight
}

/* 浏览器视口的高度
 * 
 * @returns 
 */
function windowHeight() {　
    let result = 0
    if (document.compatMode == "CSS1Compat") {
        result = document.documentElement.clientHeight
    } else {
        result = document.body.clientHeight
    }
    return result
}

const isBottom = function () {
    let scrollY = scrollTop()
    let sHeight = scrollHeight()
    let winHeight = windowHeight()
    if (scrollY + winHeight >= sHeight) {
        return true
    } else {
        return false
    }
}