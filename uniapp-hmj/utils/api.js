const BASE_URL = 'http://localhost:8080';

export function login(username, password) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + '/login',
      method: 'POST',
      data: {
        username,
        password
      },
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      }
    });
  });
}
