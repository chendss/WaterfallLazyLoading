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