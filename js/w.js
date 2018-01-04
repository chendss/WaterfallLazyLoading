var imageList = function (n = 8) {
    let result = []
    for (let i = 1; i <= n; i++) {
        let img = {
            href: ``,
            message: `存放一些信息`,
            url: `../images/${i}.jpg`,
        }
        result.push(img)
    }
    return result
}

var addImage = function (imageParent, img) {
    let url = img.url
    let href = img.href
    let message = img.message
    let htmlText = `
        <a class="article" href="${href}">
            <img data-src="${url}" class="lazyLoad" />
            <h2>${message}</h2>
        </a>
    `
    imageParent.insertAdjacentHTML('beforeend', htmlText)
}

/* 添加占位图
 * 
 */
var addBitmap = function () {
    let lazyClass = ".lazyLoad"
    let _src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC'
    let images = document.querySelectorAll(lazyClass)
    console.log(images.length)
    images.forEach(img => {
        img.src = _src
    })
}

var loadImage = function (n = 8) {
    let imgList = imageList(n)
    let imageParent = document.querySelector('#id-images-all')
    imgList.forEach(img => {
        addImage(imageParent, img)
    })
    addBitmap()
}

var jaLisWallInit = function () {
    $(function () {
        $('.wall').jaliswall({
            item: '.article'
        })
    })
}

var libraryInit = function () {
    jaLisWallInit()
}

const _main = function () {
    loadImage(74)
    libraryInit()
}

_main()