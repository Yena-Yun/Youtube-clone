// 더보기 버튼 눌렀을 때 제목 라인 클램프
const moreBtn = document.querySelector(".metadata .titleAndmoreBtn .moreBtn");
const title = document.querySelector(".metadata .titleAndmoreBtn .title");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});

// 액션버튼 별로 active 클래스 따로 동작하게 하기
const actionBtn = document.querySelectorAll(".metadata .actions button i");

const toggle = (e) => {
  const element = e.target;
  element.classList.toggle("active");
};

for (let i = 0; i < actionBtn.length; i++) {
  actionBtn[i].addEventListener("click", toggle);
}

// 구독 버튼 클릭 시 버튼 텍스트와 색깔 바꾸고 구독(subscribed) 시 버튼 옆에 종 모양(알림) 아이콘 추가
