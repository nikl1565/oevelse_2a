// Øvelse 2A

const header = document.querySelector("header");
console.log(header);


const titel = document.querySelector("h1");
console.log(titel);



const main = document.querySelector("main");
console.log(main);


const section = document.querySelector("section");
console.log(section);

const article2 = document.querySelector("article:nth-child(2)");
console.log(article2);

// Øvelse 2B
// 2.
titel.textContent = "Ny titel";

// 3. overskrifter
const overskrift1 = document.querySelector("h3:nth-of-type(1)");

overskrift1.textContent = "Pink billede";

console.log(overskrift1);


const overskrift2 = document.querySelector("article:nth-of-type(2) h3");

overskrift2.textContent = "Gult billede";

console.log(overskrift2);

// 3. tekst

const tekst1 = document.querySelector("p:nth-of-type(1)");

tekst1.textContent = "Det her er lyserød maling.";

console.log(tekst1);


const tekst2 = document.querySelector("article:nth-of-type(2) p");

tekst2.textContent = "Det her er en gul væg.";

console.log(tekst2);


// Øvelse 3 - Udskift billeder
// 2. Udskift billede
const billede1 = document.querySelector("article:nth-of-type(1) img");

billede1.src = "yellow.jpg";

const billede2 = document.querySelector("article:nth-of-type(2) img");

billede2.src = "pink.jpg";

// 3. Udskift alt tekst
billede1.alt = "Det her er et gult billede";
billede2.alt = "Det her er et lyserødt billede";

// Øvelse 4 - Tilføj nyt element
// 1. opretter et nyt article-element( createElement).
let newArticle = document.createElement("article");

// 2. tilføjer et billede, en overskrift og noget tekst til den nye article.
let newArticlePicture = document.createElement("img");
newArticlePicture.src = "pink.jpg";
newArticlePicture.alt = "Pink billede nr. 2";

let newArticleHeadline = document.createElement("h3");
let newArticleHeadlineText = document.createTextNode("Article 3");
newArticleHeadline.appendChild(newArticleHeadlineText);

let newArticleText = document.createElement("p");
let newArticleTextText = document.createTextNode("Se vores super seje tekst 😉");
newArticleText.appendChild(newArticleTextText);


// 3. Indsætter det nye element efter de eksisterende article elementer
newArticle.appendChild(newArticlePicture);
newArticle.appendChild(newArticleHeadline);
newArticle.appendChild(newArticleText);

// Har allerede defineret section på linje 16, så det er derfor vi ikke laver en ny let variabel.
section.appendChild(newArticle);

// Øvelse 5 - test om DOM'en er loadet
document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    console.log("loaded!");
}

// Øvelse 6 - click event
// 2. Arbejd videre på indholdet: Når der klikkes på det første billede, skal billedet skiftes ud.
billede1.addEventListener("click", skiftBillede);

function skiftBillede() {
    let myRandomNumber = Math.floor(Math.random() * 11);
    this.src = "https://placeimg.com/800/534/arch?t=" + myRandomNumber;
}

// Øvelse 7 - Styling med Javascript
newArticle.classList.add("shadow");

const article1 = document.querySelector("article:nth-of-type(1)");

article1.addEventListener("mouseout", mouseOver);
article2.addEventListener("mouseout", mouseOver);
newArticle.addEventListener("mouseout", mouseOver);

function mouseOver() {
    this.classList.toggle("shadow");
}

article1.addEventListener("mouseover", mouseOut);
article2.addEventListener("mouseover", mouseOut);
newArticle.addEventListener("mouseover", mouseOver);

function mouseOut() {
    this.classList.toggle("shadow");
}

// Øvelse 9 - Array
const yndlingsNumre = [
                        "Sound of Music",
                        "Dancing in the Rain",
                        "What a wonderful world",
                        "Lille Peter Edderkop",
                        "Yesterday",
                        "Den knaldrøde gummibåd",
                        "Krøller eller hvad",
                        "Ved landsbyens gadekær",
                        "Smilende Sussi",
                        "Så længe jeg lever"
                       ];

const yndlingsNumreListe = document.querySelector("#display");

//yndlingsNumre.forEach(yndlingsNummer => yndlingsNumreListe.insertAdjacentHTML("beforeend", "<li>" + yndlingsNummer + "</li>"));

//Øvelse 8b - Skift billedkategori ved klik

//2. Byg videre på dit script, så det andet billede skifter kategori i stedet, når der klikkes på det.



//3. Lav først et array med de fem kategorier som der tilbydes fra placeimg.com: ["animals", "arch", "people", "nature", "tech"]

const categories = [
    "animals",
    "arch",
    "people",
    "nature",
    "tech"
];

//4. Tilføj en eventlistener til det andet billede som kalder funktionen skift() ved click.

billede2.addEventListener("click", skiftKategori);


//5. Lav funktionen skift() så den vælger en tilfældig kategori fra dit nye array og skifter både src og alt på billedet til denne kategori.

function skiftKategori() {
    let myRandomCategory = Math.round(Math.random() * 4);

    this.src = "https://placeimg.com/800/534/" +
        categories[myRandomCategory];

    this.alt = categories[myRandomCategory];
}
