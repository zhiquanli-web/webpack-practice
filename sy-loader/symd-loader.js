const marked = require("marked");
const hljs = require("highlight.js");

// module.exports = function (content) {
//   const htmlContent = marked(content);
//   // 1. 可以使用html-loader来进行处理
//   return htmlContent;
// };

module.exports = function (content) {
  marked.setOptions({
    highlight: function (code, lang) {
      return hljs.highlight(lang, code).value;
    },
  });
  const htmlContent = marked(content);
  // 2. 自己拼接
  const innerContent = "`" + htmlContent + "`";
  const moduleCode = `var code=${innerContent}; export default code`;
  return moduleCode;
};
