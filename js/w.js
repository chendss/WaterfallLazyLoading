var dict = {
    'page': 1,
    'isLoading': false,
}

var page = function () {
    let p = dict.page
    dict.page += 1
    return p
}

var imageList = function () {
    let result = []
    for (let i = 0; i < 20; i++) {
        let img = {
            href: ``,
            message: `存放一些信息`,
            url: `../images/${i}.jpg`,
        }
        result.push(img)
    }
    return result
}

var columnsIndex = function (columnsLength, imageLength, index = 0) {
    let result = 0
    let n = Math.ceil(imageLength / columnsLength)
    for (let i = 1; i <= n; i++) {
        if (i * columnsLength < index && (i + 1) * columnsLength >= index) {
            result = i
            break
        }
    }
    return result
}

var htmlText = function () {
    let lazyClass = ".lazyLoad"
    let _src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC'
    let text = `
        <a class="article">
            <img data-src="" src="../images/loading.gif" class="lazyLoad loading" />
        </a>
    `
    return text
}

var columnsAddImage = function (columns, i, len) {
    let n = i
    let html = htmlText()
    for (let j = 0; j < columns.length; j++) {
        if (i >= len) {
            break
        }
        columns[j].insertAdjacentHTML('beforeend', html)
        n += 1
    }
    return n
}

/* 添加占位图
 * 
 */
var addBitmap = function (imageParent, len) {
    //  获得每一列
    //  分割len
    //  每一份len填入对应的列
    let columns = Array.from(document.querySelectorAll('.wall-column'))
    let i = 0
    while (i < len) {
        i = columnsAddImage(columns, i, len)
    }
}

var addBitmapInit = function (imageParent, len) {
    let html = htmlText()
    for (let i = 0; i < len; i++) {
        imageParent.insertAdjacentHTML('beforeend', html)
    }
}

var imgInit = function (apiValue) {
    let list = apiValue
    let images = Array.from(document.querySelectorAll('.lazyLoad.loading'))
    for (let i = 0; i < list.length; i++) {
        images[i].dataset.src = list[i]
        images[i].classList.remove('loading')
    }
    dict.isLoading = false
    console.log('请求结束')
}

var loadImage = function (add = addBitmap) {
    dict.isLoading = true
    let p = page()
    let imageParent = document.querySelector('#id-images-all')
    add(imageParent, 20)
    requestUrl(`images?page=${p}`, imgInit)
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

var bindScrollEvent = function () {
    window.addEventListener('scroll', function (e) {
        if (isBottom() && !dict.isLoading) {
            loadImage()
        }
    })
}

var errImage = function () {
    document.addEventListener("error", function (e) {
        var target = e.target;
        if (target.tagName.toLowerCase() == 'img') {
            log('图片爆炸`', e.target)
            target.src = '../images/error.jpg'
        }
    }, true)
}

const _main = function () {
    loadImage(addBitmapInit)
    libraryInit()
    bindScrollEvent()
    errImage()
}

_main()