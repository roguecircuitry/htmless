import { exponent, UIBuilder } from "./ui.js";

async function main() {
  //create a UI builder
  let ui = new UIBuilder() //register some default styles with the exponent function when creating elements
  .default(exponent) //create a stylesheet
  .create("style").style({
    ".bg": {
      backgroundColor: "gray",
      animationName: "anim",
      animationDuration: "1s",
      animationDirection: "alternate",
      animationIterationCount: "infinite"
    },
    "@keyframes anim": {
      "0%": {
        backgroundColor: "magenta"
      },
      "25%": {
        backgroundColor: "yellow"
      },
      "75%": {
        backgroundColor: "cyan"
      },
      "100%": {
        backgroundColor: "magenta"
      }
    }
  }).mount(document.head) //create a div
  .create("div", "content", "bg").style({
    color: "white",
    height: "100px"
  }).textContent("Hello World").on("click", evt => {
    console.log("clicked");
  }).mount(document.body);
}

main();