class Carousel {
  constructor(element) {
    this.element = element;
    this.leftBtn = element.querySelector(".left-button");
    this.rightBtn = element.querySelector(".right-button");

    this.images = element.querySelectorAll("img");
    Array.from(this.images).map((img, i) => img.setAttribute("data-tab", i));

    this.current = 0;

    Array.from(this.images)[0].style.display = "block";

    this.left = element.querySelector(".left-button");
    this.right = element.querySelector(".right-button");

    this.left.onclick = () => this.btnClick("left");
    this.right.onclick = () => this.btnClick("right");
  }

  btnClick(btn) {
    if (btn === "right") {
      if (this.current < 3) {
        this.current++;
      } else {
        this.current = 0;
      }
    } else {
      if (this.current > 0) {
        this.current--;
      } else {
        this.current = 3;
      }
    }
    Array.from(this.images).forEach(img => {
      if (img.dataset.tab != this.current) {
        img.style.display = "none";
      } else {
        img.style.display = "block";
      }
    });
  }
}

let carousel = document.querySelector(".carousel");

new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
