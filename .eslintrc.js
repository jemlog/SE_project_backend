module.exports = {
  parser: '@typescript-eslint/parser', // 무조건 있어야 하는거
  plugins: ['@typescript-eslint'], // 얘 플러그인으로 설치하고
  extends: [
    'eslint:recommended', //일반 eslint관련 추천 규칙들
    'plugin:@typescript-eslint/recommended', //  eslint-plugin-prettier + eslint-config-prettier 동시적용
    // "prettier/@typescript-eslint" 이 녀석은 eslint-config-prettier에 흡수됨 따로 설정 필요 x
    //   plugin으로 등록한 typescript-eslint의 recommended되는 기능들 모두 사용
    'plugin:prettier/recommended', // 얘들은 prettier와 관련된 규칙들
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    node: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
