import code from "./doc.md";
import "highlight.js/styles/default.css";
console.log("hello world");

const foo = () => {
  console.log("foo");
};

foo();

document.body.innerHTML = code;
