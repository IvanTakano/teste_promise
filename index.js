/* const { rejects } = require("assert");
const fs = require("fs/promises");
const { resolve } = require("path/posix");

const lerArquivo = async () => {
  try {
    const conteudo = await fs.readFile("./arquivo.txt");

    console.log(conteudo);
  } catch (error) {
    console.log("Deu ruim");
    enviaEmailProDev();
  } finally {
  }
};

lerArquivo();

console.log("Teste depois da leitura");

// await fs.readFile("./arquivo.txt").then().catch().finally()


const promise = new Promise((resolve, rejects) =>{
    const soma = 10 + 10;

    if(soma != 20){
        rejects("Olha deu ruim")
    }
    resolve(soma)
});

promise.then((resultado) => console.log(resultado))
.catch((error) => console.log(error));

function criarCartao(nome) {
    return new Promise(async (reject, resolve) => {
      if (nome == "vinicius") {
        return reject("Nome não é permitido");
      }
  
      await fs.appendFile("cartao-visita.txt", `Olá meu nome é ${nome}`);
      resolve();
    });
  }
  
  criarCartao("vinicius");


 let soma1 = new Promise((resolve, rejects) =>{
    const soma = num1 + num2;

    if(soma != 20){
        rejects("Olha deu ruim")
    }
    resolve(soma)
});

soma1.then((resultado) => console.log(resultado))
.catch((error) => console.log(error));
 */

const fs = require("fs/promises")
function soma (num1, num2){
    return new Promise(async (reject, resolve) => {
        if(typeof num1 != "number"  || typeof num2 != "number"){
            return("Não são números")
        }
        let soma = num1 + num2;
        await fs.appendFile("resultado.txt", `A soma de ${num1} + ${num2} é igual a ${soma}\n`);
    }      
    )
}

soma(10, 20);
