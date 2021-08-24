const moreBtn = document.querySelector(".info .metadata .moreBtn");
const title = document.querySelector(".info .metadata .title");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});

const likesBtn = document.querySelector(".actions .likes i");
console.log(likesBtn);

const dislikesBtn = document.querySelector(".actions .dislikes i");
console.log(dislikesBtn);

const shareBtn = document.querySelector(".actions .share i");
console.log(likesBtn);

const saveBtn = document.querySelector(".actions .save i");
console.log(saveBtn);

const reportBtn = document.querySelector(".actions .report i");
console.log(reportBtn);

likesBtn.addEventListener("click", () => {
  likesBtn.classList.toggle("active");
});

dislikesBtn.addEventListener("click", () => {
  dislikesBtn.classList.toggle("active");
});

shareBtn.addEventListener("click", () => {
  shareBtn.classList.toggle("active");
});

saveBtn.addEventListener("click", () => {
  saveBtn.classList.toggle("active");
});

reportBtn.addEventListener("click", () => {
  reportBtn.classList.toggle("active");
});
