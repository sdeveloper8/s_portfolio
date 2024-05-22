const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("#body");
let wpics = document.querySelectorAll(".weatherpics");
let showpics = document.querySelector(".showpics");
const count = 30;
const apiKey = 'jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
let totalImages = 0;

const getColors = () => {
    body.style.background = "linear-gradient(to right, "
    + color1.value 
    +","
    + color2.value
    +")";
}

color1.addEventListener("input", getColors);
color2.addEventListener("input", getColors);

const showImages = ()=>{   
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
    data.forEach((photo)=>{
        const item = document.createElement('div');
        item.classList.add('image-item');
        
        const img = document.createElement('img');
            img.src = photo.urls.regular;
            img.alt = photo.alt_description;
        item.appendChild(img);
        showpics.appendChild(item);
      
        //want to add lazy loading images...inside img using Javascript
    });
})
    
    
}
wpics[0].addEventListener("click", showImages);