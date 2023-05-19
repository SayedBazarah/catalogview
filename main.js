// Ref Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
console.log(nextBtn);

// EventListner
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Logic
let currentPage = 1;
let catalogPages = 3;

function openBook() {
  book.style.transform = "translateX(50%)";
  prevBtn.style.transform = "translateX(-280px)";
  nextBtn.style.transform = "translateX(280px)";
}

function closeBook(isAtBeginning) {
  if (isAtBeginning) {
    book.style.transform = "translateX(0%)";
  } else {
    book.style.transform = "translateX(100%)";
  }

  prevBtn.style.transform = "translateX(0px)";
  nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
  if (currentPage < catalogPages + 1) {
    switch (currentPage) {
      case 1:
        openBook();
        p1.classList.add("flipped");
        p1.style.zIndex = 1;
        break;
      case 2:
        p2.classList.add("flipped");
        p2.style.zIndex = 2;
        break;
      case 3:
        p3.classList.add("flipped");
        p3.style.zIndex = 3;
        closeBook(false);
        break;
      default:
        throw new Error("unkown state");
    }
    currentPage++;
  }
}

function goPrevPage() {
  if (currentPage > 1) {
    switch (currentPage) {
      case 2:
        closeBook(true);
        p1.classList.remove("flipped");
        p1.style.zIndex = 3;
        break;
      case 3:
        p2.classList.remove("flipped");
        p2.style.zIndex = 2;
        break;
      case 4:
        openBook();
        p3.classList.remove("flipped");
        p3.style.zIndex = 1;
        break;
      default:
        throw new Error("unkown state");
    }

    currentPage--;
  }
}
