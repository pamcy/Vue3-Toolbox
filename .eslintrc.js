module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['@nuxtjs', 'plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    // 解決因為 Nuxt 3 具有自動導入，但是在 Vue SFC 中沒有 import 導致提示錯誤。
    'no-undef': 'off',
    'prettier/prettier': 'error'
  }
}
