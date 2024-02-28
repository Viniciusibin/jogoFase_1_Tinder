class Political extends Phaser.Scene {

    constructor() {

    super('political')


    var cong;
    var error;

    // Adicionando as Variáveis
    var formulário_1 = 1;
    var formulário_2 = 2;
    var formulário_3 = 3;
    var formulário_4 = 4;

    // Variáveis de arrasto dos formulários
    var arrastof_1;
    var arrastof_2;
    var arrastof_3;
    var arrastof_4;

    // Variáveis para controlar se o formulário está em cima do lixo
    var emcimaLixo = false;

    // Variáveis de arrasto dos formulários dentro da prancheta
    var arrastoR1;
    var arrastoR2;
    var arrastoR3;
    var arrastoR4;

    // Variáveis para o Formulário Aberto 2 e para conferir se ele foi aberto
    var formAberto_1;
    var formA_1VisibleRecente = false;

    var formAberto_2;
    var formA_2VisibleRecente = false;

    var formAberto_3;
    var formA_3VisibleRecente = false;

    var formAberto_4;
    var formA_4VisibleRecente = false;

    var emcimap;

    // Variavél para conferir se ta destruido os formulários
    var destruido = 0;

    }

preload() {

    // Carregando as imagens
    this.load.image('fundo', 'assets/mesa fundo.png');


    
    // Carregando as imagens dos Formulários
    this.load.image('formulário1_img', 'assets/formulario_1.png');
    this.load.image('formulário2_img', 'assets/formulario_2.png');
    this.load.image('formulário3_img', 'assets/formulario_3.png');
    this.load.image('formulário4_img', 'assets/formulario_4.png');



    this.load.image('linha_img', 'assets/linha_cropped_resized_resized.png');
    this.load.image('error_img', 'assets/error.png');
    this.load.image('correto_img', 'assets/congratulations.png');
    this.load.image('prancheta_img', 'assets/prancheta.png');
    this.load.image('lixo_img', 'assets/lixoOF_resized_resized_resized.png');
    this.load.image('aprovado_img', 'assets/orgAprovado.png');
    
    // Carregando as imagens dos Formulários Abertos
    this.load.image('formA1_img', 'assets/Political/Form1_Political.png');
    this.load.image('formA2_img', 'assets/Political/Form2_Political.png');
    this.load.image('formA3_img', 'assets/Political/Form3_Political.png');
    this.load.image('formA4_img', 'assets/Political/Form4_Political.png');

}

// Adicionando os elementos
create() {

    this.add.image(larguraJogo / 2.9, alturaJogo / 2.03, 'fundo').setScale(1.1);

    // Adicionando a imagem da "Prancheta"
    var prancheta = this.physics.add.sprite(1180, 293, 'prancheta_img').setScale(2);
    prancheta.setCollideWorldBounds(true);
    prancheta.body.allowGravity = false;

    // Adicionando a nossa linha
    var linha = this.physics.add.staticImage(440, 200, 'linha_img');
    linha.setVisible(false);

    // Adicionando o Aprovado
    var aprovado = this.physics.add.staticImage(480, 450, 'aprovado_img');

    // Adicionando o Lixo
    var lixo = this.physics.add.staticImage(90, 400, 'lixo_img');

    // Adicionando a imagem de "Error"
    error = this.add.image(630, 300, 'error_img').setScale(2.1);
    error.setVisible(false);

    // Adicionando a imagem de "Congratulations"
    cong = this.add.image(630, 300, 'correto_img').setScale(1.75);
    cong.setVisible(false);


    // Adicionando o Formulário Aberto 1
    formAberto_1 = this.physics.add.sprite(500, 500, 'formA1_img').setScale(1.0);
    formAberto_1.setCollideWorldBounds(true);
    formAberto_1.body.allowGravity = false;
    formAberto_1.setVisible(false);

    // Adicionando o Formulário Aberto 2
    formAberto_2 = this.physics.add.sprite(500, 500, 'formA2_img').setScale(1.0);
    formAberto_2.setCollideWorldBounds(true);
    formAberto_2.body.allowGravity = false;
    formAberto_2.setVisible(false);

    // Adicionando o Formulário Aberto 3
    formAberto_3 = this.physics.add.sprite(500, 500, 'formA3_img').setScale(1.0);
    formAberto_3.setCollideWorldBounds(true);
    formAberto_3.body.allowGravity = false;
    formAberto_3.setVisible(false);

    // Adicionando o Formulário Aberto 4
    formAberto_4 = this.physics.add.sprite(500, 500, 'formA4_img').setScale(1.0);
    formAberto_4.setCollideWorldBounds(true);
    formAberto_4.body.allowGravity = false;
    formAberto_4.setVisible(false);




    // Adicionando os Formulários e suas colisões
    formulário_1 = this.physics.add.sprite(260, 100, 'formulário1_img').setScale(0.20);
    formulário_1.setCollideWorldBounds(true);
    formulário_1.body.allowGravity = false;

    formulário_2 = this.physics.add.sprite(420, 100, 'formulário2_img').setScale(0.20);
    formulário_2.setCollideWorldBounds(true);
    formulário_2.body.allowGravity = false;

    formulário_3 = this.physics.add.sprite(580, 100, 'formulário3_img').setScale(0.20);
    formulário_3.setCollideWorldBounds(true);
    formulário_3.body.allowGravity = false;

    formulário_4 = this.physics.add.sprite(740, 100, 'formulário4_img').setScale(0.20);
    formulário_4.setCollideWorldBounds(true);
    formulário_4.body.allowGravity = false;

    // Adicionando a Física ao Lixo
    this.physics.add.collider(formulário_1, lixo);
    this.physics.add.collider(formulário_2, lixo);
    this.physics.add.collider(formulário_3, lixo);
    this.physics.add.collider(formulário_4, lixo);

    // Adicionando a Física ao Aprovado
    this.physics.add.collider(formulário_1, aprovado);
    this.physics.add.collider(formulário_2, aprovado);
    this.physics.add.collider(formulário_3, aprovado);
    this.physics.add.collider(formulário_4, aprovado);

    // Colocando o Formulário_1 como Interativo
    formulário_1.setInteractive();

    formulário_1.on('pointerdown', function () {
        arrastof_1 = true
    });
    formulário_1.on('pointerup', function () {
        arrastof_1 = false
    });

    // Colocando o Formulário_2 como Interativo
    formulário_2.setInteractive();

    formulário_2.on('pointerdown', function () {
        arrastof_2 = true
    });
    formulário_2.on('pointerup', function () {
        arrastof_2 = false
    });

    // Colocando o Formulário_3 como Interativo
    formulário_3.setInteractive();

    formulário_3.on('pointerdown', function () {
        arrastof_3 = true
    });
    formulário_3.on('pointerup', function () {
        arrastof_3 = false
    });

    // Colocando o Formulário_4 como Interativo
    formulário_4.setInteractive();

    formulário_4.on('pointerdown', function () {
        arrastof_4 = true
    });
    formulário_4.on('pointerup', function () {
        arrastof_4 = false
    });




    // Colocando o Formulário Aberto 1 como Interativo
    formAberto_1.setInteractive();

    formAberto_1.on('pointerdown', function () {
        arrastoR1 = true
    });
    formAberto_1.on('pointerup', function () {
        arrastoR1 = false
    });


    // Colocando o Formulário Aberto 2 como Interativo
    formAberto_2.setInteractive();

    formAberto_2.on('pointerdown', function () {
        arrastoR2 = true
    });
    formAberto_2.on('pointerup', function () {
        arrastoR2 = false
    });

    // Colocando o Formulário Aberto 3 como Interativo
    formAberto_3.setInteractive();

    formAberto_3.on('pointerdown', function () {
        arrastoR3 = true
    });
    formAberto_3.on('pointerup', function () {
        arrastoR3 = false
    });

    // Colocando o Formulário Aberto 4 como Interativo
    formAberto_4.setInteractive();

    formAberto_4.on('pointerdown', function () {
        arrastoR4 = true
    });
    formAberto_4.on('pointerup', function () {
        arrastoR4 = false
    });



    // Colocando a Prancheta como Interativa
    prancheta.setInteractive();

    prancheta.on('pointerover', function () {
        emcimap = true
    });

    prancheta.on('pointerout', function () {
        emcimap = false
    });

    // Funções de Tempo para "Error"
    function tempoDoerro() {
        error.setVisible(false);
    }

    // Funções de Tempo para "Congratulations"
    function tempoDecong() {
        cong.setVisible(false);
    }

    // Quando o formulário_1 encostar no Lixo
    this.physics.add.overlap(formulário_1, lixo, function () {
        formulário_1.x = 260;
        formulário_1.y = 100;
        error.setVisible(true);
        setTimeout(tempoDoerro, 1500);
    })

    // Quando o formulário_2 encostar no Lixo
    this.physics.add.overlap(formulário_2, lixo, function () {
        formulário_2.x = 420;
        formulário_2.y = 100;
        error.setVisible(true);
        setTimeout(tempoDoerro, 1500);
    })

    // Quando o formulário_3 encostar no Lixo
    this.physics.add.overlap(formulário_3, lixo, function () {
        formulário_3.setVisible(false);
        arrastof_3 = false;
        cong.setVisible(true);
        setTimeout(tempoDecong, 1600);
        formulário_3.destroy();
        formAberto_3.destroy();
        destruido = destruido + 1;
    
    })

    // Quando o formulário_4 encostar no Lixo
    this.physics.add.overlap(formulário_4, lixo, function () {
        formulário_4.x = 740;
        formulário_4.y = 100;
        error.setVisible(true);
        setTimeout(tempoDoerro, 1500);
        
    })

    // Quando o formulário_1 encostar no Aprovado
    this.physics.add.overlap(formulário_1, aprovado, function () {
        formulário_1.setVisible(false);
        arrastof_1 = false;
        cong.setVisible(true);
        setTimeout(tempoDecong, 1600);
        formulário_1.destroy();
        formAberto_1.destroy();
        destruido = destruido + 1;
    })

    // Quando o formulário_2 encostar no Aprovado
    this.physics.add.overlap(formulário_2, aprovado, function () {
        formulário_2.setVisible(false);
        arrastof_2 = false;
        cong.setVisible(true);
        setTimeout(tempoDecong, 1600);
        formulário_2.destroy();
        formAberto_2.destroy();
        destruido = destruido + 1;
    })

    // Quando o formulário_3 encostar no Aprovado
    this.physics.add.overlap(formulário_3, aprovado, function () {
        formulário_3.x = 580;
        formulário_3.y = 100;
        error.setVisible(true);
        setTimeout(tempoDoerro, 1500);
        
    })

    // Quando o formulário_4 encostar no Aprovado
    this.physics.add.overlap(formulário_4, aprovado, function () {
        formulário_4.setVisible(false);
        arrastof_4 = false;
        cong.setVisible(true);
        setTimeout(tempoDecong, 1600);
        formulário_4.destroy();
        formAberto_4.destroy();
        destruido = destruido + 1;
    })

    // Declarando as proximas Cenas
    if (destruido === 4) {
        this.scene.stop('political');
        this.scene.start('brand');
    }


}

//Atualizando os elementos no jogo
update() {

    // Arrastando o Formulário_1
    if (arrastof_1 === true) {
        formulário_1.x = this.input.x;
        formulário_1.y = this.input.y;
    }
    if (arrastof_1 === false) {
        // Gravidade do Jogo
    }

    // Arrastando o Formulário_2
    if (arrastof_2 === true) {
        formulário_2.x = this.input.x;
        formulário_2.y = this.input.y;
    }
    if (arrastof_2 === false) {
        // Gravidade do Jogo
    }

    // Arrastando o Formulário_3
    if (arrastof_3 === true) {
        formulário_3.x = this.input.x;
        formulário_3.y = this.input.y;
    }
    if (arrastof_3 === false) {
        // Gravidade do Jogo
    }

    // Arrastando o Formulário_4
    if (arrastof_4 === true) {
        formulário_4.x = this.input.x;
        formulário_4.y = this.input.y;
    }
    if (arrastof_4 === false) {
        // Gravidade do Jogo
    }




    // Se o formAberto_1 entrar na area da Prancheta
    if (formulário_1.x > 950) {

    formulário_1.setScale(0.20);

    if ( arrastof_1 === false && emcimap === true && !formA_1VisibleRecente ) {
        formulário_1.setVisible(false);
        formAberto_1.x = this.input.x;
        formAberto_1.y = this.input.y;
        formAberto_1.setVisible(true);
        formA_1VisibleRecente = true;                                   
    }

    if (arrastoR1 === true) {
        formAberto_1.x = this.input.x;
        formAberto_1.y = this.input.y;
        formulário_1.x = this.input.x;
        formulário_1.y = this.input.y;
    }

    if (arrastof_1 === false) {
        formAberto_1.setVisible(true);
        formulário_1.setVisible(false);
    }

    }

    // Se o formAberto_2 sair da Prancheta
    if (formulário_1.x < 950 || formAberto_1.x < 950) {

    formAberto_1.x = 960
    formulário_1.setScale(0.32);
    formAberto_1.setVisible(false);
    formulário_1.setVisible(true);

    } 

    // Reinicia a variável de controle do formAberto_1 após um curto período de tempo
    setTimeout(function() {
    formA_1VisibleRecently = false;
    }, 10);




    // Se o formAberto_2 entrar na area da Prancheta
    if (formulário_2.x > 950) {

    formulário_2.setScale(0.20);

    if ( arrastof_2 === false && emcimap === true && !formA_2VisibleRecente ) {
        formulário_2.setVisible(false);
        formAberto_2.x = this.input.x;
        formAberto_2.y = this.input.y;
        formAberto_2.setVisible(true);
        formA_2VisibleRecente = true;                                   
    }

    if (arrastoR2 === true) {
        formAberto_2.x = this.input.x;
        formAberto_2.y = this.input.y;
        formulário_2.x = this.input.x;
        formulário_2.y = this.input.y;
    }

    if (arrastof_2 === false) {
        formAberto_2.setVisible(true);
        formulário_2.setVisible(false);
    }

    }

    // Se o formAberto_2 sair da Prancheta
    if (formulário_2.x < 950 || formAberto_2.x < 950) {

    formAberto_2.x = 960
    formulário_2.setScale(0.32);
    formAberto_2.setVisible(false);
    formulário_2.setVisible(true);

    } 

    // Reinicia a variável de controle do formAberto_2 após um curto período de tempo
    setTimeout(function() {
    formA_2VisibleRecently = false;
    }, 10);




    // Se o formAberto_3 entrar na area da Prancheta
    if (formulário_3.x > 950) {

    formulário_3.setScale(0.20);

    if ( arrastof_3 === false && emcimap === true && !formA_3VisibleRecente ) {
        formulário_3.setVisible(false);
        formAberto_3.x = this.input.x;
        formAberto_3.y = this.input.y;
        formAberto_3.setVisible(true);
        formA_3VisibleRecente = true;                                   
    }

    if (arrastoR3 === true) {
        formAberto_3.x = this.input.x;
        formAberto_3.y = this.input.y;
        formulário_3.x = this.input.x;
        formulário_3.y = this.input.y;
    }

    if (arrastof_3 === false) {
        formAberto_3.setVisible(true);
        formulário_3.setVisible(false);
    }

    }

    // Se o formAberto_3 sair da Prancheta
    if (formulário_3.x < 950 || formAberto_3.x < 950) {

    formAberto_3.x = 960
    formulário_3.setScale(0.32);
    formAberto_3.setVisible(false);
    formulário_3.setVisible(true);

    } 

    // Reinicia a variável de controle do formAberto_3 após um curto período de tempo
    setTimeout(function() {
    formA_3VisibleRecently = false;
    }, 10);




    // Se o formAberto_4 entrar na area da Prancheta
    if (formulário_4.x > 950) {

    formulário_4.setScale(0.20);

    if ( arrastof_4 === false && emcimap === true && !formA_4VisibleRecente ) {
        formulário_4.setVisible(false);
        formAberto_4.x = this.input.x;
        formAberto_4.y = this.input.y;
        formAberto_4.setVisible(true);
        formA_4VisibleRecente = true;                                   
    }

    if (arrastoR4 === true) {
        formAberto_4.x = this.input.x;
        formAberto_4.y = this.input.y;
        formulário_4.x = this.input.x;
        formulário_4.y = this.input.y;
    }

    if (arrastof_4 === false) {
        formAberto_4.setVisible(true);
        formulário_4.setVisible(false);
    }

    }

    // Se o formAberto_4 sair da Prancheta
    if (formulário_4.x < 950 || formAberto_4.x < 950) {

    formAberto_4.x = 960
    formulário_4.setScale(0.32);
    formAberto_4.setVisible(false);
    formulário_4.setVisible(true);

    } 

    // Reinicia a variável de controle do formAberto_4 após um curto período de tempo
    setTimeout(function() {
    formA_4VisibleRecently = false;
    }, 10);

    }}