var requestUrl = function (url, successCallBack = function () {}) {
    let result
    $.ajax({
        url: url,
        type: 'get',
        contentType: 'application/json',
        async: false,
        success: function () {
            result = JSON.parse(arguments[0])
            successCallBack(result)
        },
        error: function () {
            log('神特么失败了？`')
            log(arguments)
            result = null
        }
    })
    return result
}