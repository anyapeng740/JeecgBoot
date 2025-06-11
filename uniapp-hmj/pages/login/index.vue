<template>
  <view class="container">
    <input v-model="username" placeholder="用户名" />
    <input v-model="password" type="password" placeholder="密码" />
    <button @click="doLogin">登录</button>
    <text v-if="token">Token: {{ token }}</text>
  </view>
</template>

<script>
import { login } from '../../utils/api.js';
import { setToken, getToken } from '../../utils/auth.js';

export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      token: getToken()
    };
  },
  methods: {
    async doLogin() {
      try {
        const res = await login(this.username, this.password);
        const t = res.data.token;
        if (t) {
          setToken(t);
          this.token = t;
        }
      } catch (e) {
        console.log('login error', e);
      }
    }
  }
};
</script>

<style>
.container {
  padding: 20rpx;
  display: flex;
  flex-direction: column;
  gap: 10rpx;
}
</style>
