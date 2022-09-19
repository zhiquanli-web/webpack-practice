const { getOptions } = require("loader-utils"); // 3.x的有问题
const { validate } = require("schema-utils"); // 用于做参数的校验
const schema = require('../sy-schema/loader02-schema.json')
module.exports = function (content) {
  // 获取传入的参数
  const options = getOptions(this);
  console.log("传入的参数是", options);
  const callback = this.async();
  validate(schema, options, {
    name: "sy-loader02"
  })
  setTimeout(() => {
    callback(null, content);
  }, 1000);
  // return content;
};

// PitchLoader
module.exports.pitch = function () {
  console.log("----loader pitch 02----");
};
