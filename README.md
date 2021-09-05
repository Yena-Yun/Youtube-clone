# Youtube-clone
드림코딩 엘리 유튜브 클론코딩

## 구현화면
### 모바일
<img src="https://i.esdrop.com/d/KwrGH1p1Zl/JZQ54lv8dn.png" width="200" height="auto">

### 데스크탑
<img src="https://i.esdrop.com/d/KwrGH1p1Zl/PDuorpqjAE.png" width="500" height="auto">

## 컴포넌트 구분
1. **Header** (좌측에 유튜브 로고와 타이틀, 우측에 검색 및 메뉴 아이콘)
2. **Video Player** (유튜브 영상)
3. **Metadata** (영상 정보)
    - **Info** (해쉬태그, 영상 제목과 더보기 버튼, 조회수)
    - **Actions** (좋아요, 싫어요, 공유, 저장, 신고 버튼)
    - **Channel** (프로필 사진, 채널 이름, 구독자 수)
4. **UpNext** (썸네일 이미지, 제목, 채널 이름, 조회수)

## 요구사항
1. **반응형** (Mobile First) - 모바일을 기본으로 데스크탑 반응형으로 구현
2. **sticky** **기능** - scroll 하면 비디오 플레이어도 같이 내려오는 듯 하다가 상단에 고정
3. **line-clamp 기능** - Metadata의 영상 제목을 처음엔 2줄까지만 보여주다가 더보기 버튼 누르면 전체를 보여주도록

## 추가 구현 예정
1. SUBSCRIBE 버튼 클릭 시
    - 버튼 텍스트와 배경색 및 글자색 toggle
    - 구독된 경우(subscribed 상태) → 옆에 종 모양(알림) 아이콘 추가
2. 우측 상단 search 아이콘 클릭 시 검색창 스르륵 나타나게

## 어려웠던 점
## 액션 버튼에 각각 active 효과 따로 부여하기

강의에서 사용한 querySelector로는 맨 앞의 좋아요 버튼 하나만 선택되었음

(좋아요 버튼에만 active 클래스가 toggle되었고, 나머지 버튼에는 먹히지 않음)

### 첫번째 시도

querySelectorAll로 한 번에 버튼들 다 선택한 다음에 for문을 돌려보려 했는데

찾아보니 querySelectorAll로 만들어지는 NodeArray~ 배열은 

addEventListener가 먹지 않는다고 함

그래서 우선은 버튼 하나하나를 DOM으로 잡고 addEventListener 각각 넣어서 

거의 하드코딩 식으로 구현

### 두번째 시도 - 해결

출처 — 스택오버플로우 ([https://stackoverflow.com/questions/63448582/how-to-toggle-multiple-html-text-elements-using-vanilla-js](https://stackoverflow.com/questions/63448582/how-to-toggle-multiple-html-text-elements-using-vanilla-js))

스택오버플로우에는 toggle 시 html 버튼 안의 텍스트를 바꾸는 내용이었지만 

해당 코드를 응용해서 해결

포인트는 **e.target**이었다..! 클릭한 것만 선택하게 해줌

(HTML에서 대충 외우고 넘어갔는데 이렇게 써먹힘)

그리고 **querySelectorAll**은 아무 잘못 없었음

NodeArray 어쩌구 해도 for문 돌려서 쓸 수 있음

for문 안의 실행문만 잘 쓰면 됨

```python
const actionBtn = document.**querySelectorAll**(".metadata .actions button i");

const **toggle** = (**e**) => {
  const element = **e.target**;
  element.classList.toggle("active");
};

for (let i = 0; i < actionBtn.length; i++) {
  actionBtn[i].addEventListener("click", ***toggle***);
}
```

1. 액션버튼들을 querySelectorAll로 모두 DOM으로 가져온다.
2. e.target을 활용한 toggle 함수를 만든다.

    (함수가 실행되면 e.target(선택된 버튼)의 클래스에 active가 toggle됨)

3. for문으로 actionBtn을 차례로 탐색하다가 

    i번째 버튼에 click 이벤트 발생 시 toggle 함수를 실행
    
## 강의로 얻은 Tips

첨에 시작할 때 **필요한 아이콘**들을 
font-awesome에서 찾아서 **한 곳에 모아두고** 
작업 시 복사해서 사용

<img src="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/16e44b36-3157-41f4-a39b-da4d1979f68a/Untitled.png" width="350" height="auto">

**단위별로 주석** 넣어주기 
(' Header ', ' Video Player ' , ' Video Info ' 등등)
   ⇒ 접어가며 볼 때 편함

버튼으로 된 아이콘
<**button** class="moreBtn">
    <**i** class="fas fa-caret-down"></i>
</**button**>

채널명, 조회수 등 자잘한 정보들은 
모두 **metadata(= 특정 내용에 대한 관련 정보)**로 통일
 
