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

async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const post_text = document.querySelector('textarea[name="post-text"]').value;
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        post_text,
        mySkates,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', editFormHandler);