const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 0,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 0,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 0,
  },
];

const mainEl = document.getElementById("main-el");
const postPhotoEl = document.getElementsByClassName("post-photo");
const postLikesEl = document.getElementsByClassName("post-likes");

// render posts
function renderPostSections() {
  let sections = "";

  for (let i = 0; i < posts.length; i++) {
    sections += `<section class="post-section">
    <div class="container">
      <header class="post-header">
        <img
          class="avatar post-avatar"
          src="${posts[i].avatar}"
          alt="${posts[i].name} avatar"
        />
        <div>
          <p class="post-name">${posts[i].name}</p>
          <p class="post-location">${posts[i].location}</p>
        </div>
      </header>
      <img
        class="post-photo"
        src="${posts[i].post}"
        alt="${posts[i].name} photo"
      />
      <div class="post-icons flex">
        <img class="icon" src="images/icon-heart.png" alt="heart icon" />
        <img
          class="icon"
          src="images/icon-comment.png"
          alt="comment icon"
        />
        <img
          class="icon"
          src="images/icon-dm.png"
          alt="direct message icon"
        />
      </div>
      <p class="post-likes">${posts[i].likes} likes</p>
      <div class="post-username-comment flex">
        <p class="post-username">${posts[i].username}</p>
        <p class="post-comment">${posts[i].comment}</p>
      </div>
    </div>
  </section>`;
  }
  mainEl.innerHTML += sections;
}
renderPostSections();

// EVENT LISTENERS

// increase likes when double clicking post photos
for (let i = 0; i < posts.length; i++) {
  postPhotoEl[i].addEventListener("dblclick", function () {
    let likes = ++posts[i].likes;
    postLikesEl[i].textContent = `${likes} likes`;
  });
}
