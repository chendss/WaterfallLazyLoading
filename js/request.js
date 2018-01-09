var requestUrl = function (url, successCallBack) {
    $.ajax({
        url: url,
        type: 'get',
        contentType: 'application/json',
        success: function () {
            log('succ   ',arguments)
            let value = JSON.parse(arguments[0])
            successCallBack(value)
        },
        error: function () {
            log('神特么失败了？`')
            log(arguments)
        }
    })
}