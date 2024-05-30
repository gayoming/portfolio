# gsap 사용법
## gsap 플러그인을 사용하여 스크롤 이벤트를 적용

</br></br>

### 1.html 파일에 스크립트를 연결시켜준다


<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js"> </script> </br>


<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollTrigger.min.js"> </script>
</br></br>
-----   
</br></br>
### 2. JS 파일에 gsap 사용하기 위해 gsap.registerPlugin(ScrollTrigger); 작성해준다
+ 포트폴리오에 사용한 코드</br>

              gsap
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
                x: innerWidth * 1,</br>
              });
trigger: 스크롤 이벤트를 적용시킬 class 나 id를 적용한다.</br>
start: 스크롤 이벤트를 시작하고 싶은 지점을 작성한다.</br>
end: 스크롤 이벤트가 끝나는 지점을 작성한다.</br>
scrub:스크롤이 사용될 때만 재생 되도록 만들어주는 속성,</br>
      스크롤 이벤트를 부드럽게 실행하고 싶을 때 숫자를 사용한다.</br>
pin: 특정 elenment가 고정 되도록 만들어주는 속성</br>

.from("적용시키고 싶은 class", {</br>
x나 y축으로 얼마나 이동 하고 싶은지 작성</br>
예) x: innerWidth * 1 = X축 안쪽 너비로 *1만큼 이동</br>
    y: -150px =y축 위로 150px 이동</br>
})        </br>    



