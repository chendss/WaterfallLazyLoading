/* string 判断多个字符串是否在字符串内 (扩展)
 * 
 * @returns 
 */
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

var f = function () {
    var div = document.querySelector('#imgid')
    var ulList = div.querySelectorAll('.imglist')
    var liList = []
    ulList.forEach(ul => {
        let li = Array.from(ul.childNodes)
        liList = liList.concat(li)
    })
    var urlList = liList.map((l) => {
        return l.dataset.objurl
    }).filter(((li) => {
        let filterList = 'duitang.com|baidu|nipic.com|ph.126.net|jisuxz.com'.split('|')
        return li !== undefined && !li.forIncludes(...filterList)
    }))
    console.log('urlList', JSON.stringify(urlList))
}

f()