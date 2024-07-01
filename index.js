let next= document.querySelector(".next");
let previous= document.querySelector(".previous");
let bg= document.querySelector(".bg");



// HERO SECTION IMG CHANGE...
let n=1;
next.addEventListener("click", ()=>{
    if(n<5){
        n++;
        bg.setAttribute("src", `images/img/bg${n}.jpg`);
    }else{
        n=1;
        bg.setAttribute("src", `images/img/bg${n}.jpg`);
    }
})
previous.addEventListener("click", ()=>{
    if(n>1){
        n--;
        bg.setAttribute("src", `images/img/bg${n}.jpg`);
    }else{
        n=5;
        bg.setAttribute("src", `images/img/bg${n}.jpg`);
    }
})
//  SLIDER PRODUCTS MOVEMENT (books)...

  const slideProductsBooks=()=>{
      const slideButtons=document.querySelectorAll(".slider-books button");
      const productList=document.querySelector(".product-list-books");
      const scrollThumb=document.querySelector(".thumb-books");
      const scrollBar=document.querySelector(".scrollbar-books");
      const maxScroll= (productList.scrollWidth)-(productList.clientWidth);
      const maxScroll2=(productList.clientWidth)*1.5;

  slideButtons.forEach((button)=>{
      button.addEventListener("click", ()=>{
          const direction=button.id==="slider-prev-books" ? -1 : 1;
          const scrollAmmount=productList.clientWidth*direction;
          productList.scrollBy({left: scrollAmmount, behavior: "smooth"});
      })
  })
  let scrolling=()=>{
      const scrollPosition= productList.scrollLeft;
      const thumbPosition= (scrollPosition/maxScroll)*(scrollBar.clientWidth - scrollThumb.offsetWidth);
      scrollThumb.style.left= `${thumbPosition}px`
  }

  productList.addEventListener("scroll", ()=>{
      slideButtons[0].style.display= productList.scrollLeft<= 0 ? "none" : "block";
      slideButtons[1].style.display= productList.scrollLeft>= maxScroll2 ? "none" : "block";
      scrolling();
  })


  }
  window.addEventListener("load", slideProductsBooks);

  //  SLIDER PRODUCTS MOVEMENT (sports equipment)...
  
  const slideProductsSports=()=>{
    const slideButtons=document.querySelectorAll(".slider-sports button");
    const productList=document.querySelector(".product-list-sports");
    const scrollThumb=document.querySelector(".thumb-sports");
    const scrollBar=document.querySelector(".scrollbar-sports");
    const maxScroll= (productList.scrollWidth)-(productList.clientWidth);
    const maxScroll2=(productList.clientWidth)*2.2;

slideButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        const direction=button.id==="slider-prev-sports" ? -1 : 1;
        const scrollAmmount=productList.clientWidth*direction;
        productList.scrollBy({left: scrollAmmount, behavior: "smooth"});
    })
})
let scrolling=()=>{
    const scrollPosition= productList.scrollLeft;
    const thumbPosition= (scrollPosition/maxScroll)*(scrollBar.clientWidth - scrollThumb.offsetWidth);
    scrollThumb.style.left= `${thumbPosition}px`
}

productList.addEventListener("scroll", ()=>{
    slideButtons[0].style.display= productList.scrollLeft<= 0 ? "none" : "block";
    slideButtons[1].style.display= productList.scrollLeft>= maxScroll2 ? "none" : "block";
    scrolling();
})


}
window.addEventListener("load", slideProductsSports);

 //  SLIDER PRODUCTS MOVEMENT (dresses)...

 const slideProductsDress=()=>{
    const slideButtons=document.querySelectorAll(".slider-dress button");
    const productList=document.querySelector(".product-list-dress");
    const scrollThumb=document.querySelector(".thumb-dress");
    const scrollBar=document.querySelector(".scrollbar-dress");
    const maxScroll= (productList.scrollWidth)-(productList.clientWidth);

slideButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        const direction=button.id==="slider-prev-dress" ? -1 : 1;
        const scrollAmmount=productList.clientWidth*direction;
        productList.scrollBy({left: scrollAmmount, behavior: "smooth"});
    })
})
let scrolling=()=>{
    const scrollPosition= productList.scrollLeft;
    const thumbPosition= (scrollPosition/maxScroll)*(scrollBar.clientWidth - scrollThumb.offsetWidth);
    scrollThumb.style.left= `${thumbPosition}px`
}

productList.addEventListener("scroll", ()=>{
    slideButtons[0].style.display= productList.scrollLeft<= 0 ? "none" : "block";
    slideButtons[1].style.display= productList.scrollLeft>= maxScroll ? "none" : "block";
    scrolling();
})


}
window.addEventListener("load", slideProductsDress);











        