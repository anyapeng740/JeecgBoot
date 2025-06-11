<template>
  <view class="container">
    <text>我的</text>
    <button @click="goLogin">去登录</button>
    <text v-if="token">已登录，token: {{ token }}</text>
  </view>
</template>

<script>
import { getToken } from '../../utils/auth.js';

export default {
  name: 'MinePage',
  data() {
    return {
      token: getToken()
    };
  },
  methods: {
    goLogin() {
      uni.navigateTo({ url: '/pages/login/index' });
    }
  }
}
</script>

<style>
.container {
  padding: 20rpx;
}
</style>
