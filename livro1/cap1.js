function testeVar(){
    var a = 1;
    var b = 2;
    var soma = a + b;
    var nome;
    if(nome == undefined){
        console.log("teste 1) O nome não foi inicializado.");
    }
    if(typeof(nome)== "undefined"){
        console.log("teste2) O nome não foi inicializado.")
    }
}

testeVar()