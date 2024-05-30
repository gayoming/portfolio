# portfolio
Lee kayeun portfolio

gsap 플러그인을 사용하여 스크롤 이벤트를 적용시켰습니다
gspa 사용법

1.html 파일에 스크립트를 연결시켜준다
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollTrigger.min.js"></script>

2. gsap
  .timeline({
    scrollTrigger: {
      trigger: ".box",
      start: "1000px 1000px",
      end: "bottom top",
      scrub: 1,
      pin: true,
    },
  })
  .from(".text1", {
    x: innerWidth * 1,
  })
  .from(".text2", {
    x: innerWidth * -1,
  })
  .from(".text3", {
    x: innerWidth * 1,
  });
trigger: 스크롤 이벤트를 적용시킬 class 나 id를 적용한다.
start: 스크롤 이벤트를 시작하고 싶은 지점을 작성한다.
end: 스크롤 이벤트가 끝나는 지점을 작성한다.
scrub:스크롤이 사용될 때만 재생 되도록 만들어주는 속성,
      스크롤 이벤트를 부드럽게 실행하고 싶을 때 숫자를 사용한다.
pin: 특정 elenment가 고정 되도록 만들어주는 속성

.from("적용시키고 싶은 class", {
x나 y축으로 얼마나 이동 하고 싶은지 작성
예) x: innerWidth * 1 = X축 안쪽 너비로 *1만큼 이동
    y: -150px =y축 위로 150px 이동
})



