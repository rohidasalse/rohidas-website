function handleResume() {
  var downloadUrl = "./img/resume/resume.pdf";
  var a = document.createElement("a");
  a.href = downloadUrl;
  a.download = "resume.pdf"; // Specify the file name
  a.click();
  a.remove();
}

const menuToggle = document.querySelector(".ham-menu");
const navLinks = document.querySelector(".off-screen-menu");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

let obj = [
  {
    project:
      "These content types may include games, entertainment, and news derived from APIs using HTML, CSS, and JavaScript",
  },
  {
    project:
      "They can make better decisions regarding their daily activities with the aid of forecasts along with additional weather-related data",
  },
  {
    project:
      " They can make better decisions regarding their daily activities with the aid of forecasts along with additional weather-related data.",
  },
  {
    project:
      " They can make better decisions regarding their daily activities with the aid of forecasts along with additional weather-related data.",
  },
];

const description = document.querySelectorAll(".load_more");
description.forEach((btn) => {
  btn.addEventListener("click", showData);
});
description.forEach((btn) => {
  btn.innerText = "Load More";
  btn.addEventListener("click", () => {
    if (btn.innerText === "Load More") {
      btn.innerText = "Show Less";
    } else {
      btn.innerText = "Load More";
    }
  });
});
function showData(e) {
  description.innerText = " Less";
  let des = e.target.previousElementSibling;
  des.classList.toggle("pic");
  // console.log(e);
}

obj.forEach((para, index) => {
  let paragraph = document.createElement("p");
  paragraph.className = "desc";
  // console.log(paragraph);

  paragraph.innerText = para.project;

  var test = description[index].insertAdjacentElement(
    "beforebegin",
    paragraph.cloneNode(true)
  );
});
function inner() {
  description.innerText = "less";
}

// Fetch the JSON data

// async function fetchData() {
//   try {
//     const response = await fetch("data/data.json");
//     const data = await response.json();

//     return data;
//   } catch (error) {
//     console.error("Fetch error:", error);
//     return [];
//   }
// }
// let newsec = document.getElementById("newsec");
// async function getData() {
//   let data = await fetchData();
//   console.log(data);
//   data.forEach((element) => {
//     let div = document.createElement("div");
//     let heading = document.createElement("h3");

//     let para = document.createElement("p");
//     let img = document.createElement("img");
//     let downloadbtn = document.createElement("button");
//     heading.textContent = element.description;

//     para.textContent = element.description;
//     img.src = element.imageUrl;
//     downloadbtn.textContent = "download";

//     //  classess
//     div.classList.add("training");
//     img.classList.add("ima");

//     // appending elements

//     div.append(heading, img, para, downloadbtn);
//     newsec.appendChild(div);
//   });
// }
// getData();
