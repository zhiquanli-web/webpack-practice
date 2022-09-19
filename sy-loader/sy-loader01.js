// NormalLoader： 从后往前依次执行
// 同步loader
module.exports = function (content) {
  console.log("----这里是loader01----");
  return content; // 1. 第一种返回方式
  // this.calback(null, content) // 第二种返回方式
};

// 异步loader
module.exports = function (content) {
  console.log("----这里是loader01----");
  const callback = this.async();
  setTimeout(() => {
    callback(null, content);
  }, 1000);
};

// PitchLoader：从前往后依次执行
module.exports.pitch = function () {
  console.log("----loader pitch 01----");
};
