
// 参考资料：https://www.cnblogs.com/junjieok/p/3306155.html

/*
函数，加法函数，用来得到精确的加法结果  
说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
参数：arg1：第一个加数；arg2第二个加数；d要保留的小数位数（可以不传此参数，如果不传则不处理小数位数）
调用：accAdd(arg1,arg2,d)  
返回值：两数相加的结果
*/
function accAdd(arg1, arg2) {
    arg1 = arg1.toString(), arg2 = arg2.toString();
    var arg1Arr = arg1.split("."), arg2Arr = arg2.split("."), d1 = arg1Arr.length == 2 ? arg1Arr[1] : "", d2 = arg2Arr.length == 2 ? arg2Arr[1] : "";
    var maxLen = Math.max(d1.length, d2.length);
    var m = Math.pow(10, maxLen);
    var result = Number(((arg1 * m + arg2 * m) / m).toFixed(maxLen));
    var d = arguments[2];
    return typeof d === "number" ? Number((result).toFixed(d)) : result;
}
/*
函数：减法函数，用来得到精确的减法结果  
说明：函数返回较为精确的减法结果。 
参数：arg1：第一个加数；arg2第二个加数；d要保留的小数位数（可以不传此参数，如果不传则不处理小数位数
调用：accSub(arg1,arg2)  
返回值：两数相减的结果
*/
function accSub(arg1, arg2) {
    return accAdd(arg1, -Number(arg2), arguments[2]);
}


//除法函数，用来得到精确的除法结果
//说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
//调用：accDiv(arg1,arg2)
//返回值：arg1除以arg2的精确结果
function accDiv(arg1, arg2) {
    var t1 = 0, t2 = 0, r1, r2;
    try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
    try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
    // with (Math) {
    //     r1 = Number(arg1.toString().replace(".", ""))
    //     r2 = Number(arg2.toString().replace(".", ""))
    //     return (r1 / r2) * pow(10, t2 - t1);
    // }
    r1 = Number(arg1.toString().replace(".", ""))
    r2 = Number(arg2.toString().replace(".", ""))
    return (r1 / r2) * Math.pow(10, t2 - t1);
}


//乘法函数，用来得到精确的乘法结果
//说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
//调用：accMul(arg1,arg2)
//返回值：arg1乘以 arg2的精确结果
function accMul(arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try { m += s1.split(".")[1].length } catch (e) { }
    try { m += s2.split(".")[1].length } catch (e) { }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}

// 给Number类型增加一个mul方法，调用起来更加方便。
window.Number.prototype.add = function (arg) {
    return accAdd(this, arg);
}
window.String.prototype.add = function (arg) {
    return accAdd(this, arg);
}
window.Number.prototype.sub = function (arg) {
    return accSub(this, arg);
}
window.String.prototype.sub = function (arg) {
    return accSub(this, arg);
}
window.Number.prototype.mul = function (arg) {
    return accMul(this, arg);
}
window.String.prototype.mul = function (arg) {
    return accMul(this, arg);
}
window.Number.prototype.div = function (arg) {
    return accDiv(this, arg);
}
window.String.prototype.div = function (arg) {
    return accDiv(this, arg);
}
