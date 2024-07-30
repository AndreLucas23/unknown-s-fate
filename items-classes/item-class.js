// Criação da classe "Item" usada para construir qualquer item usado no projeto
// Essa classe serve como classe mãe para subdivisões de diversos outros itens, como armas e armaduras
class Item {
    constructor(name, description) {
        // O atributo "name" é usado para identificar o objeto durante o projeto
        this.name = name;
        // Todos os itens apresentam uma descrição para que, no momento da sua apresentação,
        // possam ser melhor e mais dinamicamente definidos
        this.description = description;
    }
}

module.exports = Item
