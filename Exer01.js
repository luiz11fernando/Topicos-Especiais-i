let salario = 280;
let salreaj = salario + (salario * 0.20);

if ( salario <= 280){
    console.log("Seu salário sem reajuste é de R$" + salario, "reais");
    console.log("Irá ser acrescido no seu salário 20% de aumento");
    console.log("Seu novo salário é de R$" + salreaj, "reais");  
    console.log("Você teve de aumento R$", (salreaj- salario), "reais");
}

let salario2 = 281;
let salreaj2 = salario2 + (salario2 * 0.15);

if ( salario2 > 280 && salario2 <= 700){
    console.log("Seu salário sem reajuste é de R$" + salario2, "reais");
    console.log("Irá ser acrescido no seu salário 15% de aumento");
    console.log("Seu novo salário é de R$" + salreaj2, "reais");  
    console.log("Você teve de aumento R$", (salreaj2- salario2), "reais");
}

let salario3 = 701;
let salreaj3 = salario3 + (salario3 * 0.10);

if ( salario3 > 700 && salario3 <= 1500){
    console.log("Seu salário sem reajuste é de R$" + salario3, "reais");
    console.log("Irá ser acrescido no seu salário 10% de aumento");
    console.log("Seu novo salário é de R$" + salreaj3, "reais");  
    console.log("Você teve de aumento R$", (salreaj3 - salario3), "reais");
}

let salario4 = 1500;
let salreaj4 = salario4 + (salario4 * 0.5);

if ( salario4 >= 1500){
    console.log("Seu salário sem reajuste é de R$" + salario4, "reais");
    console.log("Irá ser acrescido no seu salário 5% de aumento");
    console.log("Seu novo salário é de R$" + salreaj4, "reais");  
    console.log("Você teve de aumento R$", (salreaj4 - salario4), "reais");
}