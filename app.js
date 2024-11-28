/* Estilo geral */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f9;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
}

footer {
    text-align: center;
    color: #555;
    font-size: 0.9rem;
    margin-top: 20px;
}

/* Estilo dos cartões */
#container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.cartao {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 250px;
    padding: 20px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform-style: preserve-3d;
    position: relative;
    overflow: hidden;
}

.cartao:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.cartao__conteudo {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.cartao__conteudo h3 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 10px;
    font-weight: bold;
}

.cartao__conteudo__pergunta,
.cartao__conteudo__resposta {
    font-size: 1rem;
    color: #555;
    margin-bottom: 15px;
}

/* Estilo para o estado ativo (resposta visível) */
.cartao.active .cartao__conteudo__resposta {
    display: block;
}

.cartao__conteudo__resposta {
    display: none;
}

