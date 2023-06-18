export class Jogo{
    id : number;
    nome : String;
    imagem : String;
    descricao : String;

    constructor(id : number, nome : String, imagem : String, descricao : String){
        this.id = id;
        this.nome = nome;
        this.imagem = imagem;
        this.descricao = descricao;
    }
}