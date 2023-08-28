function Abastecimento(tipoComb, qntComb){

    let gasolina = 2.5;
    let alcool = 1.9;
    
    
    console.log(``)
    
    switch (tipoComb){
        case "A":
            if(qntComb <= 20){
                alcool *= 0.97;
                console.log(`Abastecido ${qntComb} Litros de Álcool 
                \n O valor a ser pago é de R$${qntComb * alcool}`);
            }
            else {
                alcool *= 0.95;
                console.log(`Abastecido ${qntComb} Litros de Álcool 
                \n O valor a ser pago é de R$${qntComb * alcool}`)}
            break;
        
        case "G":
            if(qntComb <= 20){
                gasolina *= 0.96;
                console.log(`Abastecido ${qntComb} Litros de Gasolina 
                \n O valor a ser pago é de R$${qntComb * gasolina}`);
            }
            else {
                gasolina *= 0.94;
                console.log(`Abastecido ${qntComb} Litros de Gasolina
                \n O valor a ser pago é de R$${qntComb * gasolina}`)}
            break;
    
    }

}

module.exports = Abastecimento;