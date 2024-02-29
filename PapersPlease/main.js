const gameDimensions = {
    width: 1280,
    height: 740,
}
    // Delimitando as constantes da largura e altura da onde nosso jogo vai ser espelhado na pagina
    const larguraJogo = 1260;
    const alturaJogo = 600;

    // Configurando o Phaser de acordo com as constantes
    const config = {
        type: Phaser.AUTO,
        width: larguraJogo,
        height: alturaJogo,

        // Ativando a física no jogo
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
    
    scene: [
        Privacy, Political, Brand, Netzero
    ]
};

// Cria o jogo passando a variável config como atributos
var game = new Phaser.Game(config);
