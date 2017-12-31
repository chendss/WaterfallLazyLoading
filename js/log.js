var callerList = function (args) {
    let result = []
    let fun = args.callee
    while (true) {
        try {
            caller = fun.caller
        } catch (error) {
            break
        }
        if (caller) {
            result.push(caller)
            fun = fun.arguments.callee.caller
        } else {
            break
        }
    }
    result = result.reverse()
    return result
}

var funName = function (name) {
    if (name === '') {
        name = '匿名函数'
    }
    return name
}

function callStack() {
    let callers = callerList(arguments)
    let result = []
    callers.forEach(caller => {
        let name = funName(caller.name)
        result.push(name)
    })
    return result
}

const log = function () {
    let args = [...arguments]
    args = args.map(arg => {
        let type_ = typeof arg
        let filterArray = '`|·|;|'.split('|')
        if (type_ === 'string' && arg.forIncludes(...filterArray)) {
            return `(${arg}) 类型：${type_}`
        } else {
            return arg
        }
    })
    let stack = callStack()
    let name = stack[0]
    console.log('主体信息：', ...args, `更多信息：\n函数名：·${name} \n调用栈：·${stack}`)
}