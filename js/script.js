const btn = document.getElementById("meu-btn");

// transformar botao em rgb
btn.addEventListener("click", function(){
    //console.log(btn.textContent);
    // func matematica Math
    // randon = retorna num aleatorio entre 0 1
    // floor = arredonda o num para baixo
    // ceil = arredonda para cima
    // round = arredonda para num aleatorio

    let r=0,g=0,b=0;

    r = Math.round(Math.random() * 255)
    g = Math.round(Math.random() * 255)
    b = Math.round(Math.random() * 255)

    btn.setAttribute("style", `background-color:rgb(${r}, ${g}, ${b});`);



});

// pegando img do html

const imgElements = [...document.getElementsByTagName("img")] // criando array com as imagens
console.log(imgElements)


imgElements.forEach(img => {
    console.log(img.setAttribute("width", "10%"))
})

const pElements = document.querySelectorAll("p")