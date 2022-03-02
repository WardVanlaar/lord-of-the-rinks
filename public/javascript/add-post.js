// function figureSkatesHandler() {
//   console.log("figure");
//   document.getElementById('mySkates').innerHTML = "Figure skates"
// }

// function hockeySkatesHandler() {
//   console.log("hockey");
//   document.getElementById('mySkates').innerHTML = "Hockey skates"
// }

// function raceSkatesHandler() {
//   console.log("race");
//   document.getElementById('mySkates').innerHTML = "Race skates"
// }

// function touringSkatesHandler() {
//   console.log("tour");
//   document.getElementById('mySkates').innerHTML = "Touring skates"
// }


async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_text = document.querySelector('textarea[name="post-text"]').value;
  let my_skates = document.querySelectorAll('input[name="skate"]:checked');
  console.log(my_skates)

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      post_text,
      my_skates
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
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
