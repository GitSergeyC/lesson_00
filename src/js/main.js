document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".header__burger-btn").addEventListener("click", function() {
    document.querySelector(".header__content").classList.toggle("open");
  });
});


const aboutUsReviewsBlock = document.querySelector(".about-us__reviews-block");
const aboutUsBlockReviews = document.querySelector(".about-us__block-reviews");
const buttonNext = document.querySelector(".button-right");
let currentReviewIndex = 0;
// console.log(buttonNext, buttonPrev);

function click() {}

// console.log(aboutUsReviewsBlock);

const arrayReviews = [
    "Заказывала в myMebel кухню. Сделали качественно и в срок. Очень довольна результатом",
    "myMebel — отличный выбор! Кухня прекрасна. Качество и сроки выполнения впечатляют.",
    "Заказала кухню в myMebel. Идеальное исполнение, соблюдение сроков. Результат супер.",
    "myMebel — профессионалы своего дела! Кухня выше всяких похвал. Качество и сроки на высоте.",
    "Кухня от myMebel — это искусство! Качество на высшем уровне, сроки соблюдены.",
];

// console.log(arrayReviews);

for (let i = 0; i < arrayReviews.length; i++) {
    const element = arrayReviews[i];
    // console.log(element);

    const newReview = document.createElement("p");

    newReview.innerText = element;

    aboutUsReviewsBlock.append(newReview);

    if (i !== currentReviewIndex) {
        newReview.classList.add("hidden");
    } else {
        newReview.setAttribute("data-active", "");
    }
}

buttonNext.addEventListener("click", buttonNext1);

function buttonNext1() {
    console.log("Клик");

    const currentReview = aboutUsReviewsBlock.querySelector(
        `:nth-child(${currentReviewIndex + 1})`
    );
    currentReview.classList.add("hidden");

    currentReviewIndex = (currentReviewIndex + 1) % arrayReviews.length;

    const newReview = aboutUsReviewsBlock.querySelector(
        `:nth-child(${currentReviewIndex + 1})`
    );
    newReview.classList.remove("hidden");
}



const buttonPrev = document.querySelector(".button-left");

buttonPrev.addEventListener("click", buttonPrevHandler);

function buttonPrevHandler() {
    console.log("Клик (левая кнопка)");

    const currentReview = aboutUsReviewsBlock.querySelector(
        `:nth-child(${currentReviewIndex + 1})`
    );
    currentReview.classList.add("hidden");

    currentReviewIndex =
        (currentReviewIndex - 1 + arrayReviews.length) % arrayReviews.length;

    const newReview = aboutUsReviewsBlock.querySelector(
        `:nth-child(${currentReviewIndex + 1})`
    );
    newReview.classList.remove("hidden");
}

const nameBlock = document.querySelector(".about-us__reviews_name");
let currentNameIndex = 0;

const nameArray = [
    "Марья Ивановна",
    "Анна Петровна",
    "Екатерина Александровна",
    "Ирина Сергеевна",
    "Ольга Дмитриевна",
];

for (let index = 0; index < nameArray.length; index++) {
	const element = nameArray[index];
	
	const newName = document.createElement('span')
	newName.innerText = element;

	nameBlock.append(newName)

	if (index !== currentNameIndex) {
		newName.classList.add("hidden")
	} else {
		newName.setAttribute("data-active", "")
	}
	
}

buttonNext.addEventListener("click", buttonNext4);

function buttonNext4() {
	console.log("Клик");

	const currentName = nameBlock.querySelector(
			`:nth-child(${currentNameIndex + 1})`
	);
	currentName.classList.add("hidden");

	currentNameIndex = (currentNameIndex + 1) % nameArray.length;

	const newName = nameBlock.querySelector(
			`:nth-child(${currentNameIndex + 1})`
	);
	newName.classList.remove("hidden");
}

buttonPrev.addEventListener("click", buttonNext5);

function buttonNext5() {
	console.log("Клик");

	const currentName = nameBlock.querySelector(
			`:nth-child(${currentNameIndex + 1})`
	);
	currentName.classList.add("hidden");

	currentNameIndex = (currentNameIndex - 1 + nameArray.length) % nameArray.length;

	const newName = nameBlock.querySelector(
			`:nth-child(${currentNameIndex + 1})`
	);
	newName.classList.remove("hidden");
}