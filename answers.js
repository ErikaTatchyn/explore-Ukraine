// 1.
//TODO ○	Research unshift(), shift() and split(). Write a short answer and explain what each one of them does. Use use unshift(), shift() and split()  each in an example with theme ‘CFGdegree’
// The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array. (https://developer.mozilla.org/)
const topics = ["HTML", "CSS", "JavaScript"];
topics.unshift("Python");
console.log(topics);

// The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
const removedCourse = topics.shift();
console.log(`Removed course: ${removedCourse}`);
console.log(topics);

//The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
const statement = "CFGdegree is cool";
const words = statement.split(" ");
console.log(words);

// 2.
//TODO ○	Research object methods ○	Write a short answer and explain what they are ○	Use object methods in an example by creating a new object and object methods with the theme ‘Programming Languages’ (worth 2 points instead of 1)
//methods are actions that can be performed on objects. Static methods:
//Object.values() Returns an array containing the values that correspond to all of a given object's own enumerable string properties.
//Object.keys() Returns an array containing the names of all of the given object's own enumerable string properties.
//Object.hasOwn() Returns true if the specified object has the indicated property as its own property, or false if the property is inherited or does not exist.
//Object.freeze() Freezes an object. Other code cannot delete or change its properties. (https://developer.mozilla.org/)

const programmingLanguage = {
  name: "Python",
  year: 1991,
  isPopular: true,
  getDescription: function () {
    return `${this.name} is a programming language created in ${
      this.year
    }. It is ${this.isPopular ? "popular" : "not popular"} among developers.`;
  },
  isOldLanguage: function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year >= 20;
  },
};

const description = programmingLanguage.getDescription();
console.log(description);

const isOld = programmingLanguage.isOldLanguage();
console.log(`Is it an old language? ${isOld}`);

// 3.
//TODO ○	Research 3 DOM events onmouseover and two of your choosing ○	Write a short answer and explain what each one of them does
//The onmouseover event occurs when the mouse pointer enters an element. (https://www.w3schools.com/)

// The onclick event occurs when the user clicks on an HTML element.
//<button onclick="showAlert()">Click Me</button>;

function showAlert() {
  alert("Button Clicked!");
}
//The onmouseleave event occurs when the mouse pointer leaves an element.
{
  /* <div
  class="hover-div"
  onmouseenter="changeColor(this)"
  onmouseleave="restoreColor(this)"
>
  Hover Me
</div>; */
}

function changeColor(element) {
  element.style.backgroundColor = "pink";
}

function restoreColor(element) {
  element.style.backgroundColor = "blue";
}
