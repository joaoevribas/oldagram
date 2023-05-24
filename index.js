const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const mainEl = document.getElementById("main-el");

function renderPostSections() {
  let sections = "";

  for (let i = 0; i < posts.length; i++) {
    sections += `<section class="post-section">
    <div class="container">
      <header class="post-header">
        <img
          class="avatar post-avatar"
          src="${posts[i].avatar}"
          alt="van gogh avatar"
        />
        <div>
          <p class="post-name">${posts[i].name}</p>
          <p class="post-location">${posts[i].location}</p>
        </div>
      </header>
      <img
        class="post-photo"
        src="${posts[i].post}"
        alt="van gogh photo"
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
