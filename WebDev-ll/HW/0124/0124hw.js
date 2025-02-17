/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text 
  (with a yellow background for example)
*/
let p = document.querySelector("p");
p.innerHTML = p.innerHTML
  .split(" ")
  .map((word) => {
    let a = word.indexOf(".");
    let b = word.indexOf(",");
    let c = word.indexOf("!");
    let d = word.indexOf("?");
    let e = word.indexOf("/");

    if (a !== -1) {
      word = word.replace(".", "");
      if (word.length > 8) {
        return "<span style='background-color: yellow'>" + word + "</span>";
      }
      return word + ".";
    } else if (b !== -1) {
      word = word.replace(",", "");
      if (word.length > 8) {
        return "<span style='background-color: yellow'>" + word + "</span>";
      }
      return word + ",";
    } else if (c !== -1) {
      word = word.replace("!", "");
      if (word.length > 8) {
        return "<span style='background-color: yellow'>" + word + "</span>";
      }
      return word + "!";
    } else if (d !== -1) {
      word = word.replace("?", "");
      if (word.length > 8) {
        return "<span style='background-color: yellow'>" + word + "</span>";
      }
      return word + "?";
    } else if (e !== -1) {
      word = word.split("/");
      for (let i = 0; i < word.length; i++) {
        if (word[i].length > 8) {
          return (
            "<span style='background-color: yellow'>" + word[i] + "</span>"
          );
        } else if (word[i].length <= 8) {
          return word.join("/");
        }
      }
      return word.join("/");
    } else if (word.length > 8) {
      return "<span style='background-color: yellow'>" + word + "</span>";
    }
    return word;
  })
  .join(" ");

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
const a = document.createElement("a");
a.href = "http://officeipsum.com/";
a.innerText = "Link";
p.after(a);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
p.innerHTML = p.innerHTML.split(".").join(".<br>");

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
const div = document.createElement("div");
div.innerText = p.innerText.split(" ").length + " words";
document.querySelector("h1").after(div);

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
p.innerHTML = p.innerHTML.split("?").join("🤔");
p.innerHTML = p.innerHTML.split("!").join("😲");
