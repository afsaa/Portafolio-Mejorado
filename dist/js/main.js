const burguerMenu = document.querySelector(".burguer-menu");
const menuNav = document.querySelector(".menu-nav");

const handleMenu = () => {
  menuNav.classList.contains("is-active")
    ? (menuNav.classList.remove("is-active"),
      burguerMenu.classList.remove("is-active"))
    : (menuNav.classList.add("is-active"),
      burguerMenu.classList.add("is-active"));
};

burguerMenu.addEventListener("click", handleMenu, false);

// Fetching latest posts
const post = document.querySelector("#post");
fetch(
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@andresfernandosaa"
)
  .then((res) => {
    return res.json();
  })
  .then(({ items, status }) => {
    if (status === "ok") {
      let postLink = document.querySelectorAll("#latest-posts > a");
      let postTitle = document.querySelectorAll(".post-title");
      let postThumbnail = document.querySelectorAll(".post-thumbnail");
      for (let i = 0; i < items.length; i++) {
        postLink[i].href = items[i].link;
        postTitle[i].innerHTML = items[i].title;
        postThumbnail[i].src = items[i].thumbnail;
      }
    }
  });
