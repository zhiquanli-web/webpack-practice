module.exports = function (content) {
  console.log("----这里是loader02----");
  return content;
};

// PitchLoader
module.exports.pitch = function() {
  console.log("----loader pitch 02----");
}
