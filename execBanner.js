function mudarBanner(){
    const img1 = document.querySelector(".banner-1 img")
    const img2 = document.querySelector(".banner-2 img")

    let nr = Math.ceil(Math.random() * 3);
    img1.scr = "./img/banner-lateral-"+nr+".png"

    let nr2 = Math.ceil(Math.random() * 3);
    img2.scr = "./img/banner-lateral-"+nr2+".png"

    setTimeout(mudarBanner, 1000)
}