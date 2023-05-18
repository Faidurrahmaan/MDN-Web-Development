const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "image/computer.jpg") {
    myImage.setAttribute("src", "image/codingman.jpg");
  } else {
    myImage.setAttribute("src", "image/computer.jpg");
  }
};

let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");



function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome to my Front End development Practice Session, ${myName}`;
    }
    let myButton2 = document.querySelector("button");
    myButton2.textContent = `Thank you Mr, ${myName}`;

  }

  
  

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName ="";
    myHeading.textContent = `Welcome to Front End development Session ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };
  
