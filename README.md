# web3-practice-guide

## web1.0

## web2.0

### URL encoded

URI vs. URL vs. URN

```js
const url = 'https://fanyi.youdao.com/hello world!/'

console.log(encodeURI(url))
console.log(encodeURIComponent(url))

```

[Google Fonts](https://www.googlefonts.cn/)

[CSS Stacking Context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)

```html
<meta http-equiv="x-ua-compatible" content="ie=edge">

<!-- 响应式媒体体资源 -->
<img srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w" 
  sizes="(max-width: 600px) 480px, 800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy" />

<picture>
  <source srcset="/media/cc0-images/surfer-240-200.jpg" media="(orientation: portrait)" />
  <img src="/media/cc0-images/painted-hand-298-332.jpg" alt="" />
</picture>


```

[Web Components](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components)

[WebGL](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API)

### 浏览器安全策略

- 同源策略(Same-Origin Policy)

> JSONP(JSON with Padding)

HTTP请求: 简单请求和复杂请求

预检请求(OPTIONS)的请求头:

- `Origin`
- `Access-Control-Request-Headers`
- `Access-Control-Request-Method`

## web3.0

区块链技术原理

相关概念:

- [ ] 区块链账户
- [ ] 智能合约
- [ ] 去中心化
- [ ] 公链
- [ ] 节点和RPC
- [ ] DAPP
- [ ] token
