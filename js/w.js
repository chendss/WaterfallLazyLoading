var imageList = function () {
    let result = []
    for (let i = 1; i <= 38; i++) {
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
            <img src="${url}" />
            <h2>${message}</h2>
        </a>
    `
    imageParent.insertAdjacentHTML('beforeend', htmlText)
}

var loadImage = function () {
    let imgList = imageList()
    let imageParent = document.querySelector('#id-images-all')
    imgList.forEach(img => {
        addImage(imageParent, img)
    })
}

var jaLisWallInit = function () {
    $(function () {
        $('.wall').jaliswall({
            item: '.article'
        })
    })
}

const _main = function () {
    loadImage()
    jaLisWallInit()
}

_main()