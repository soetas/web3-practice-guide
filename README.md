# web3-practice-guide

## web1.0

**只读**静态内容、信息聚合

## web2.0

可读写和**交互**、用户 **生成内容**/社交媒体、数据存储在 **中心化**服务器

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

### 密码学

> 柯尔霍夫原则: 对于一个密码学系统，应当仅有密钥是保密的，其余算法和一切参数都应该是公开的

- [ ] 对称加密

- 凯撒密码
- 维吉尼亚密码
- 分组密码(DES、AES ...)
- 流密码(伪随机数生成器PRC)

- [ ] 非对称加密

公钥和*私钥*

> 椭圆加密曲线函数

- [ ] 数字签名

- [ ] 哈希函数

> 默克尔树

### 区块链技术

- [ ] 比特币

- 去中心化的P2P电子记账系统
- 工作量证明Pow共识机制
- 不可篡改

- [ ] 以太坊和Layer

- [ ] 区块链账户

交易过程: 挖矿(竞争记账权) -> 记账验证

> UTXO模型

- [ ] 智能合约

- [ ] 去中心化

- [ ] 公链

- [ ] 节点和RPC

- [ ] DAPP

- [ ] 代币

### 应用

- 加密钱包
- DeFi（去中心化金融）
- NFT（非同质化代币）
- DAO（去中心化自治组织）
  