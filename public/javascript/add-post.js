
// const skateArray = [];

// function figureSkatesHandler(event) {
//   event.preventDefault();
//   document.getElementById("mySkates").innerHTML = "Figure skates";
//   skateArray.push("Figure skates");
//   console.log(skateArray)
// } 

// function hockeySkatesHandler() {
//   console.log("hockey");
//   document.getElementById("mySkates").innerHTML = "Hockey skates";
//   skateArray.push("Hockey skates");
// } 

// function raceSkatesHandler() {
//   console.log("race");
//   document.getElementById("mySkates").innerHTML = "Race skates";
//   skateArray.push("Race skates");
// } 

// function touringSkatesHandler() {
//   console.log("tour");
//   document.getElementById("mySkates").innerHTML = "Touring skates";
//   skateArray.push("Touring skates");
// }
// var my_skates = ""

async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_text = document.querySelector('textarea[name="post-text"]').value;
  // let my_skates = skateArray.values();
  // console.log(my_skates);

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      post_text,
      // my_skates,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector("#createPost")
  .addEventListener("click", newFormHandler);
