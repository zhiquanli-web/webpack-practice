// NormalLoader： 从后往前依次执行
module.exports = function (content) {
  console.log("----这里是loader01----");
  return content;
};

// PitchLoader：从前往后依次执行
module.exports.pitch = function () {
  console.log("----loader pitch 01----");
};
