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

const h2Element = document.querySelector(".tit-sec")
console.log(h2Element)