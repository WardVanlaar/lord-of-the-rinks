let mySkates = "";
console.log(mySkates.length);

document.body.addEventListener("click", function (event) {
  if (event.target.matches(".skates")) {
    var skateName = event.target.getAttribute("name");
    console.log(skateName);
    mySkates = skateName;
    console.log(mySkates);
    console.log(mySkates.length);
  }
});

async function newFormHandler(event) {
  event.preventDefault();

  if (mySkates.length <= 0) {
    alert("Please chose a skate");
  } else {
    const title = document.querySelector('input[name="post-title"]').value;
    const post_text = document.querySelector(
      'textarea[name="post-text"]'
    ).value;
    // const my_skates = document.querySelector('input[name="skatesType"]').value;

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
}

document.querySelector("#createPost").addEventListener("click", newFormHandler);
