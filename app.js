let visibleImage = document.querySelector(".slide");
const rightBtn = document.querySelector(".rightArrow");
const imagesContainer = document.querySelector(".imagesContainer")

const buttons = document.querySelectorAll(".buttons");
const CircleBtns = document.querySelectorAll(".circle");
let CircleBtnsArray = [...CircleBtns];

buttonsArray = [...buttons];

buttonsArray.forEach(function (e) {
  e.addEventListener("click", function (ele) {
    const whichButton = ele.target.parentNode.id;
    const firstDiv = document.getElementById("birdCircle");
    const lastDiv = document.getElementById("zebraCircle");
    console.log(whichButton);
    let invisibleImage = "";
    if (whichButton === "rightArrow") {
      invisibleImage = visibleImage.nextElementSibling;
      if (invisibleImage === null) {
        invisibleImage = firstDiv;
      }
    } else {
      invisibleImage = visibleImage.previousElementSibling;
      if (invisibleImage === null) {
        invisibleImage = lastDiv;
      }
    }
    console.log(invisibleImage);

    visibleImage.classList.remove("slide");
    visibleImage.classList.add("slideHidden");

    invisibleImage.classList.remove("slideHidden");
    invisibleImage.classList.add("slide");

    visibleImage = invisibleImage;

  });
});


 console.log(imagesContainer.childNodes);
     const imagesArr = [...imagesContainer.childNodes];
     console.log(imagesArr);
CircleBtnsArray.forEach(function(e){
   
  e.addEventListener("click", function(ele){
     console.log( );
      const btnName = ele.target.getAttribute("data-name");
      imagesArr.forEach(function(e){
        if(btnName === e.id){
          console.log(e);
          invisibleImage = e;
          console.log(invisibleImage);
          visibleImage.classList.remove("slide");
    visibleImage.classList.add("slideHidden");

    invisibleImage.classList.remove("slideHidden");
    invisibleImage.classList.add("slide");

    visibleImage = invisibleImage;

        }
        else{
          return;
        }
      })
  })
});

 
// rightBtn.addEventListener("click", function (e) {
//   const invisibleImage = visibleImage.nextElementSibling;
//   console.log(invisibleImage);

//   visibleImage.classList.remove("slide");
//   visibleImage.classList.add("slideHidden");

//   invisibleImage.classList.remove("slideHidden");
//   invisibleImage.classList.add("slide");

//   visibleImage = invisibleImage;
// });
