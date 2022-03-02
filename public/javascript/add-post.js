async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_text = document.querySelector('textarea[name="post-text"]').value;

  function figureSkatesHandler() {
    document.getElementById("mySkates").innerHTML = "Figure skates";
  }

  function hockeySkatesHandler() {
    document.getElementById("mySkates").innerHTML = "Hockey skates";
  }

  function raceSkatesHandler() {
    document.getElementById("mySkates").innerHTML = "Race skates";
  }

  function touringSkatesHandler() {
    document.getElementById("mySkates").innerHTML = "Touring skates";
  }

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      post_text,
      mySkates,
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
