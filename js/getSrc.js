String.prototype.forIncludes = function () {
    let result = false
    let args = [...arguments]
    for (m of args) {
        if (this.includes(m)) {
            result = true
            break
        }
    }
    return result
}

var Filter = function () {
    let filterList = [
        'duitang.com',
        'baidu',
        'nipic.com',
        'ph.126.net',
        'jisuxz.com',
        'i-2.yxdown.com',
        'img1.mydrivers.com',
        'www.duotegame.com',
        'lmdisk.com',
        'attimg.dospy.com',
        'img.lanrentuku.com',
        'img3.fengniao.com',
        'img2.pcgames.com',
        'img2.pconline.com',
    ]
    return filterList
}

var filterUrls = function (ulList) {
    let (
        liList = [],
        filterList = Filter()
    )
    ulList.forEach(ul => {
        let li = Array.from(ul.childNodes)
        liList = liList.concat(li)
    })
    let urlList = liList.map((l) => {
        return l.dataset.objurl
    }).filter(((li) => {
        return li !== undefined && !li.forIncludes(...filterList)
    }))
}

var src = function () {
    let (
        div = document.querySelector('#imgid'),
        ulList = div.querySelectorAll('.imglist'),
        urlList = filterUrls(ulList)
    )
    console.log('urlList', JSON.stringify(urlList))
}

src()