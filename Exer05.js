function PromocaoCarne (tipoCarne, quantidadeCarne, tipoPagamento){

    
    let precoSemDescontos;
    let descontoCartao = 0.95;
    let fileDuploAte5kg = 4.9;
    let fileDuploMaior5kg = 5.8;
    let alcatraAte5kg = 5.90;
    let alcatraMaior5kg = 6.80;
    let picanhaAte5kg = 6.90;
    let picanhaMaior5kg = 7.90;

    if(tipoPagamento == "Cartao Assai"){
        switch (tipoCarne){
            case "File Duplo":
                if(quantidadeCarne <= 5){
                    precoSemDescontos = quantidadeCarne * fileDuploAte5kg;
                    console.log(`
                    \n Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${precoSemDescontos}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ ${precoSemDescontos - (precoSemDescontos * descontoCartao)}
                    \n Valor a pagar: R$ ${precoSemDescontos * descontoCartao}` )    
        
                }
                else{
                    precoSemDescontos = quantidadeCarne * fileDuploMaior5kg;
                    console.log(`
                    \n Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${precoSemDescontos}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ ${precoSemDescontos - (precoSemDescontos * descontoCartao)}
                    \n Valor a pagar: R$ ${(precoSemDescontos * descontoCartao)}` )    
        
                }
            break;

            case "Alcatra":
                if(quantidadeCarne <= 5){
                    precoSemDescontos = quantidadeCarne * alcatraAte5kg;
                    console.log(`
                    \n Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${precoSemDescontos}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ ${precoSemDescontos - (precoSemDescontos * descontoCartao)}
                    \n Valor a pagar: R$ ${precoSemDescontos * descontoCartao}` )    
        
                }
                else{
                    precoSemDescontos = quantidadeCarne * alcatraMaior5kg;
                    console.log(`
                    \n Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${precoSemDescontos}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ ${precoSemDescontos - (precoSemDescontos * descontoCartao)}
                    \n Valor a pagar: R$ ${(precoSemDescontos * descontoCartao)}` )    
        
                }
            break;

            case "Picanha":
                if(quantidadeCarne <= 5){
                    precoSemDescontos = quantidadeCarne * picanhaAte5kg;
                    console.log(`
                    \n Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${precoSemDescontos}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ ${precoSemDescontos - (precoSemDescontos * descontoCartao)}
                    \n Valor a pagar: R$ ${(precoSemDescontos * descontoCartao)}` )    
        
                }
                else{
                    precoSemDescontos = quantidadeCarne * picanhaMaior5kg;
                    console.log(`
                    \n Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${precoSemDescontos}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ ${precoSemDescontos - (precoSemDescontos * descontoCartao)}
                    \n Valor a pagar: R$ ${precoSemDescontos * descontoCartao}` )    
        
                }
            break;

            default:
                console.log("Digite um tipo válido de Carne: \n File Duplo, Alcatra ou Picanha!!");  

        }
        
    }
    else{ // sem desconto
        switch (tipoCarne){
            case "File Duplo":
                if(quantidadeCarne <= 5){
                    precoSemDescontos = quantidadeCarne * fileDuploAte5kg;
                    console.log(`
                    \n Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${precoSemDescontos}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ 
                    \n Valor a pagar: R$ ${precoSemDescontos}` )    
        
                }
                else{
                    precoSemDescontos = quantidadeCarne * fileDuploMaior5kg;
                    console.log(`
                    \n Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${precoSemDescontos}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ 
                    \n Valor a pagar: R$ ${precoSemDescontos}`)    
        
                }
            break;

            case "Alcatra":
                if(quantidadeCarne <= 5){
                    precoSemDescontos = quantidadeCarne * alcatraAte5kg;
                    console.log(`
                    \n Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${precoSemDescontos}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ 
                    \n Valor a pagar: R$ ${precoSemDescontos}` )    
        
                }
                else{
                    precoSemDescontos = quantidadeCarne * alcatraMaior5kg;
                    console.log(`
                    \n Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${precoSemDescontos}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ 
                    \n Valor a pagar: R$ ${precoSemDescontos}` )    
        
                }
            break;

            case "Picanha":
                if(quantidadeCarne <= 5){
                    precoSemDescontos = quantidadeCarne * picanhaAte5kg;
                    console.log(`
                    \n Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${precoSemDescontos}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ 
                    \n Valor a pagar: R$ ${(precoSemDescontos)}` )    
        
                }
                else{
                    precoSemDescontos = quantidadeCarne * picanhaMaior5kg;
                    console.log(`
                    \n Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${precoSemDescontos}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ }
                    \n Valor a pagar: R$ ${precoSemDescontos}` )    
        
                }
            break;

            default:
                console.log("Digite um tipo válido de Carne: \n File Duplo, Alcatra ou Picanha!!"); 
        }
    }

    

}

module.exports = PromocaoCarne;
