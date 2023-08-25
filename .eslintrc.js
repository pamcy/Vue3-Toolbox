/* eslint-env node */
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  plugins: ['vue', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  }
}

// 參考：
// Vue3+Vite项目，如何配置ESLint和Prettier实现代码规范化？
// https://zhuanlan.zhihu.com/p/619030608
