# 和睦家书 UniApp 项目

此目录为和睦家书小程序的初始代码，采用 uni-app 框架，默认包含三
个页面：

- `pages/index/index` 首页
- `pages/todo/index` 代办
- `pages/mine/index` 我的
- `pages/login/index` 登录示例

在 `pages.json` 中已经配置好页面路由，可根据需要继续扩展。

登录示例会向 `http://localhost:8080/login` 发送 `POST` 请求，后端需返
回一个 `token` 字段。收到 token 后会存入本地缓存，可用于后续调
用需要身份验证的接口。
