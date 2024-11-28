/* Estilo de fundo e fonte */
body {
    font-family: 'Arial', sans-serif;
    background-color: #f9f3f3;
    margin: 0;
    padding: 0;
}

main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
}

#container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.cartao {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 250px;
    padding: 20px;
    transition: transform 0.3s;
}

.cartao:hover {
    transform: scale(1.05);
}

.cartao__conteudo {
    display: flex;
    flex-direction: column;
}

.cartao__conteudo h3 {
    font-size: 1.2rem;
    color: #ff6f61;
    margin-bottom: 10px;
}

.cartao__conteudo__pergunta,
.cartao__conteudo__resposta {
    margin: 10px 0;
}

.cartao__conteudo__pergunta p,
.cartao__conteudo__resposta p {
    font-size: 1rem;
    color: #333;
}

footer {
    background-color: #ff6f61;
    color: white;
    text-align: center;
    padding: 10px;
}
