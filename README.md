# Youtube-clone
드림코딩 엘리 유튜브 클론코딩
<br/>

## 구현화면
### 모바일
<img src="https://i.esdrop.com/d/KwrGH1p1Zl/35U6kn11wr.png' border='0'></a>" width="200" height="auto">

### 데스크탑
<img src="https://i.esdrop.com/d/KwrGH1p1Zl/BY3JXq4doy.png" width="450" height="auto">
<br/>

## 컴포넌트 구분
1. **Header** (좌측에 유튜브 로고와 타이틀, 우측에 검색 및 메뉴 아이콘)
2. **Video Player** (유튜브 영상)
3. **Metadata** (영상 정보)
    - **Info** (해쉬태그, 영상 제목과 더보기 버튼, 조회수)
    - **Actions** (좋아요, 싫어요, 공유, 저장, 신고 버튼)
    - **Channel** (프로필 사진, 채널 이름, 구독자 수)
4. **UpNext** (썸네일 이미지, 제목, 채널 이름, 조회수)
<br/>

## 세부 요구사항
1. **반응형** (Mobile First) - 모바일을 기본으로 데스크탑 반응형으로 구현
2. **sticky** **기능** - scroll 하면 비디오 플레이어도 같이 내려오는 듯 하다가 상단에 고정
3. **line-clamp 기능** - Metadata의 영상 제목을 2줄까지만 보여주고 오른쪽 더보기 버튼 누르면 전체 보여주기
<br/>

## 추가 구현 예정
1. SUBSCRIBE 버튼 클릭 시
    - 버튼 텍스트와 배경색 및 글자색 toggle
    - 구독된 경우(subscribed 상태) → 옆에 종 모양(알림) 아이콘 추가
2. 우측 상단 search 아이콘 클릭 시 검색창 스르륵 나타나게
<br/>

## 어려웠던 점
### 문제: 액션 버튼에 각각 active 효과 따로 부여하기

강의에서 사용한 querySelector로는 맨 앞의 좋아요 버튼 하나만 선택되었음

(좋아요 버튼에만 active 클래스가 toggle되었고, 나머지 버튼에는 먹히지 않음)

### 첫번째 시도

querySelectorAll로 한 번에 버튼들 다 선택한 다음에 for문을 돌리려 했는데

querySelectorAll로 만들어지는 NodeArray~ 배열은 addEventListener가 먹히지 않는다는 걸 알게 됨

 => 우선은 버튼 하나하나를 DOM으로 잡고 addEventListener 각각 넣어서 하드코딩으로 구현

### 두번째 시도 - 해결

출처 — 스택오버플로우 ([https://stackoverflow.com/questions/63448582/how-to-toggle-multiple-html-text-elements-using-vanilla-js](https://stackoverflow.com/questions/63448582/how-to-toggle-multiple-html-text-elements-using-vanilla-js))

toggle 시 html 버튼 안의 텍스트를 바꾸는 코드를 응용해서 해결

포인트는 **e.target** - 첫번째 시도에서의 **querySelectorAll**도

NodeArray~ 배열 상관없이 for문 돌려서 사용 가능하다는 걸 알게 됨

### 해결한 코드

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

    (함수가 실행되면 e.target(선택된 버튼)의 클래스에 active가 토글됨)

3. for문으로 actionBtn을 차례로 탐색하다가 

    i번째 버튼에 click 이벤트 발생 시 toggle 함수를 실행
