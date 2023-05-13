function inserirNumeroVisor(botao, visor) {

    if(visor.value[visor.value.lenght -1] ||visor.value[visor.value.lenght -2] === '-' || visor.value[visor.value.lenght -2] === '*' || visor.value[visor.value.lenght -2] === '/' ){
        
        visor.value.slice(visor.value.lenght)
        
    }
}

const resultado = (visor) => {
    visor.value = eval(visor.value)
}

