
let totalImages = 5;
const gallery = document.getElementById("gallery");
const galleryDir = "src/gallery/";
const defaultName = "model";
const defaultFormat = "webp";
const defaultClass = "gal-img";

for (let i = 1; i <= totalImages; i++) {
    let image = document.createElement("img");
    image.src = galleryDir + defaultName + i + '.' + defaultFormat;
    console.log(image.src);
    image.classList.add(defaultClass);
    image.alt = `Image${i}`;
    gallery.appendChild(image);
}

let isFullscreen;
        let modal = document.getElementById("modal");
        let modalImg = document.getElementById("modal-img");

        document.getElementsByClassName("gal-img").forEach(image => {
        image.addEventListener('click', () => {
                modalImg.src = image.src;
                console.log(image.src);
                modal.style.display = "flex";
            });
        });

        modal.addEventListener('click', () =>{
            modal.style.display = "none";
        });