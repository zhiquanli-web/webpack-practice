module.exports = function (content) {
  console.log("----这里是loader03----");
  return content;
};

// PitchLoader
module.exports.pitch = function () {
  console.log("----loader pitch 03----");
};
