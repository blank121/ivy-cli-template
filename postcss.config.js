module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-aspect-ratio-mini": {},
    "postcss-px-to-viewport": {
      mediaQuery: false, // 是否允许在媒体查询中转换px
      minPixelValue: 0.99, // 小于1px 的值不转换为视窗单位
      selectorBlackList: [".ignore", ".hairlines"], // 制定不转换为视窗单位的类，可以自定义
      unitPrecision: 5, // px 转换为视窗单位值的小数位数
      viewportHeight: 1334, // 视窗高度，暂时没什么用
      viewportUnit: "vw", // 转换成的视窗单位
      viewportWidth: 750, // 视窗宽度，就是设计稿的宽度
    },
  },
};
