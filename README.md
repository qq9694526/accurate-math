# accurate-math
一个极简js库，用于解决js浮点数四则运算结果不准确的问题。
```javascript
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.14 / 0.2); // 0.7000000000000001
console.log(1 - 0.8); // 0.19999999999999996 
console.log(6 * 0.7); // 4.199999999999999 
console.log(0.1 + 0.2); // 0.30000000000000004 
console.log(0.1 + 0.7); // 0.7999999999999999 
console.log(1.2 / 0.2); // 5.999999999999999
```
## 安装
- Node：npm安装并引入
```javascript
$ npm i accurate-math -D

require("accurate-math")
```
- Browser：[下载js](https://github.com/qq9694526/accurate-math/releases)到本地项目并引入。在本项目/[release目录](https://github.com/qq9694526/accurate-math/tree/master/release)下也能获取完整js。
```javascript
<script src="./accurate-math.js"></script>
```
## 使用
```javascript
"1".sub(0.8); // string类型可直接调用

new Number(0.1).add(0.2); // 转换成number对象调用

"6".mul(0.7).div(0.2);  // 支持连缀调用

```
## 文档
- 加法 add
```javascript
new Number(0.1).add(0.2);
```
- 减法 sub
```javascript
new Number(1).sub(0.8);
```
- 乘法 mul
```javascript
new Number(6).mul(0.7);
```
- 除法 div
```javascript
new Number(1.2).div(0.2);
```
## 关于作者
- [CSDN博客：](https://blog.csdn.net/qq9694526) https://blog.csdn.net/qq9694526
- [博客园：](https://www.cnblogs.com/qq9694526/) https://www.cnblogs.com/qq9694526
