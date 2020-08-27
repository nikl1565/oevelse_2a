window.addEventListener("DOMContentLoaded", start);


function start() {
    console.log("Start!");

    const images = [
        "img1",
        "img2",
        "img3",
        "img4",
        "img5",
        "img6",
        "img7",
        "img8"
    ];

    const button = document.querySelector("#next-image");

    const image = document.querySelector("#slideshow-image");

    let counter = 1;

    button.addEventListener("click", () => {
        counter++;

        image.src = "billeder/img" + counter + ".png";
    });
}
