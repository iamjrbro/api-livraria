# Desuso do Nodemon

Recentemente, com as últimas versões do Node.js, a utilização do Nodemon para monitorar alterações no código tornou-se desnecessária. A partir da versão [18.11](https://nodejs.org/en/blog/release/v18.11.0), o Node.js introduziu uma funcionalidade nativa chamada `--watch`, que permite observar automaticamente as mudanças no código.

### Vantagens da Função Nativa

Ao aproveitar a função nativa de observação de mudanças do Node.js, elimina-se a necessidade de depender de ferramentas externas, como o Nodemon, para reiniciar automaticamente o servidor durante o desenvolvimento. Isso simplifica o processo e reduz a dependência de pacotes adicionais.

### Como Usar a Função --watch

Para utilizar a função nativa de observação de mudanças, basta adicionar a flag `--watch` ao comando Node.js ao iniciar o servidor. Por exemplo:

```bash
node --watch seu_arquivo.js
```

# Desaconselhado o uso de `export default` no JavaScript

No desenvolvimento JavaScript, é aconselhável evitar o uso da sintaxe `export default` ao trabalhar com módulos. Essa abordagem, embora comum, pode resultar em código menos explícito e mais difícil de rastrear, especialmente em projetos extensos.

Ao optar por exportações nomeadas, cada elemento é explicitamente definido, promovendo clareza e facilitando a compreensão do código. Por exemplo:

```javascript
// Em vez de export default
const minhaFuncao = () => {
  // código...
};

export { minhaFuncao };
```
