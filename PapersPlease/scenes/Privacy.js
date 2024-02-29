class Privacy extends Phaser.Scene {

    constructor() {

        super({ key: "Privacity" });


        this.cong;
        this.error;

        // Adicionando as Variáveis
        this.formulário_1 = 1;
        this.formulário_2 = 2;
        this.formulário_3 = 3;
        this.formulário_4 = 4;

        // Variáveis de arrasto dos formulários
        this.arrastof_1;
        this.arrastof_2;
        this.arrastof_3;
        this.arrastof_4;

        // Variáveis para controlar se o formulário está em cima do lixo
        this.emcimaLixo = false;

        // Variáveis de arrasto dos formulários dentro da prancheta
        this.arrastoR1;
        this.arrastoR2;
        this.arrastoR3;
        this.arrastoR4;

        // Variáveis para o Formulário Aberto 2 e para conferir se ele foi aberto
        this.formAberto_1;
        this.formA_1VisibleRecente = false;

        this.formAberto_2;
        this.formA_2VisibleRecente = false;

        this.formAberto_3;
        this.formA_3VisibleRecente = false;

        this.formAberto_4;
        this.formA_4VisibleRecente = false;

        this.emcimap;
        this.lixo;
        this.aprovado;

        // Variavél para conferir se ta destruido os formulários
        this.destruido = 0;

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
        this.load.image('formA1_img', 'assets/Security/Form1_Security.png');
        this.load.image('formA2_img', 'assets/Security/Form2_Security.png');
        this.load.image('formA3_img', 'assets/Security/Form3_Security.png');
        this.load.image('formA4_img', 'assets/Security/Form4_Security.png');

    }

    // Adicionando os elementos
    create() {

        this.add.image(larguraJogo / 2.9, alturaJogo / 2.03, 'fundo').setScale(1.1);

        // Adicionando a imagem da "Prancheta"
        var prancheta = this.physics.add.sprite(1180, 293, 'prancheta_img').setScale(2);
        prancheta.setCollideWorldBounds(true);
        prancheta.body.allowGravity = false;

        // Adicionando o Aprovado
        this.aprovado = this.physics.add.staticImage(480, 450, 'aprovado_img');

        // Adicionando o Lixo
        this.lixo = this.physics.add.staticImage(90, 400, 'lixo_img');

        // Adicionando a imagem de "Error"
        this.error = this.add.image(630, 300, 'error_img').setScale(2.1);
        this.error.setVisible(false);

        // Adicionando a imagem de "Congratulations"
        this.cong = this.add.image(630, 300, 'correto_img').setScale(1.75);
        this.cong.setVisible(false);


        // Adicionando o Formulário Aberto 1
        this.formAberto_1 = this.physics.add.sprite(500, 500, 'formA1_img').setScale(1.0);
        this.formAberto_1.setCollideWorldBounds(true);
        this.formAberto_1.body.allowGravity = false;
        this.formAberto_1.setVisible(false);

        // Adicionando o Formulário Aberto 2
        this.formAberto_2 = this.physics.add.sprite(500, 500, 'formA2_img').setScale(1.0);
        this.formAberto_2.setCollideWorldBounds(true);
        this.formAberto_2.body.allowGravity = false;
        this.formAberto_2.setVisible(false);

        // Adicionando o Formulário Aberto 3
        this.formAberto_3 = this.physics.add.sprite(500, 500, 'formA3_img').setScale(1.0);
        this.formAberto_3.setCollideWorldBounds(true);
        this.formAberto_3.body.allowGravity = false;
        this.formAberto_3.setVisible(false);

        // Adicionando o Formulário Aberto 4
        this.formAberto_4 = this.physics.add.sprite(500, 500, 'formA4_img').setScale(1.0);
        this.formAberto_4.setCollideWorldBounds(true);
        this.formAberto_4.body.allowGravity = false;
        this.formAberto_4.setVisible(false);




        // Adicionando os Formulários e suas colisões
        this.formulário_1 = this.physics.add.sprite(260, 100, 'formulário1_img').setScale(0.20);
        this.formulário_1.setCollideWorldBounds(true);
        this.formulário_1.body.allowGravity = false;

        this.formulário_2 = this.physics.add.sprite(420, 100, 'formulário2_img').setScale(0.20);
        this.formulário_2.setCollideWorldBounds(true);
        this.formulário_2.body.allowGravity = false;

        this.formulário_3 = this.physics.add.sprite(580, 100, 'formulário3_img').setScale(0.20);
        this.formulário_3.setCollideWorldBounds(true);
        this.formulário_3.body.allowGravity = false;

        this.formulário_4 = this.physics.add.sprite(740, 100, 'formulário4_img').setScale(0.20);
        this.formulário_4.setCollideWorldBounds(true);
        this.formulário_4.body.allowGravity = false;

        // Adicionando a Física ao Lixo
        this.physics.add.collider(this.formulário_1, this.lixo);
        this.physics.add.collider(this.formulário_2, this.lixo);
        this.physics.add.collider(this.formulário_3, this.lixo);
        this.physics.add.collider(this.formulário_4, this.lixo);

        // Adicionando a Física ao Aprovado
        this.physics.add.collider(this.formulário_1, this.aprovado);
        this.physics.add.collider(this.formulário_2, this.aprovado);
        this.physics.add.collider(this.formulário_3, this.aprovado);
        this.physics.add.collider(this.formulário_4, this.aprovado);

        // Colocando o Formulário_1 como Interativo
        this.formulário_1.setInteractive();

        this.formulário_1.on('pointerdown', () => {
            this.arrastof_1 = true
        });
        this.formulário_1.on('pointerup', () => {
            this.arrastof_1 = false
        });

        // Colocando o Formulário_2 como Interativo
        this.formulário_2.setInteractive();

        this.formulário_2.on('pointerdown', () => {
            this.arrastof_2 = true
        });
        this.formulário_2.on('pointerup', () => {
            this.arrastof_2 = false
        });

        // Colocando o Formulário_3 como Interativo
        this.formulário_3.setInteractive();

        this.formulário_3.on('pointerdown', () => {
            this.arrastof_3 = true
        });
        this.formulário_3.on('pointerup', () => {
            this.arrastof_3 = false
        });

        // Colocando o Formulário_4 como Interativo
        this.formulário_4.setInteractive();

        this.formulário_4.on('pointerdown', () => {
            this.arrastof_4 = true
        });
        this.formulário_4.on('pointerup', () => {
            this.arrastof_4 = false
        });




        // Colocando o Formulário Aberto 1 como Interativo
        this.formAberto_1.setInteractive();

        this.formAberto_1.on('pointerdown', () => {
            this.arrastoR1 = true
        });
        this.formAberto_1.on('pointerup', () => {
            this.arrastoR1 = false
        });


        // Colocando o Formulário Aberto 2 como Interativo
        this.formAberto_2.setInteractive();

        this.formAberto_2.on('pointerdown', () => {
            this.arrastoR2 = true
        });
        this.formAberto_2.on('pointerup', () => {
            this.arrastoR2 = false
        });

        // Colocando o Formulário Aberto 3 como Interativo
        this.formAberto_3.setInteractive();

        this.formAberto_3.on('pointerdown', () => {
            this.arrastoR3 = true
        });
        this.formAberto_3.on('pointerup', () => {
            this.arrastoR3 = false
        });

        // Colocando o Formulário Aberto 4 como Interativo
        this.formAberto_4.setInteractive();

        this.formAberto_4.on('pointerdown', () => {
            this.arrastoR4 = true
        });
        this.formAberto_4.on('pointerup', () => {
            this.arrastoR4 = false
        });



        // Colocando a Prancheta como Interativa
        prancheta.setInteractive();

        prancheta.on('pointerover', () => {
            this.emcimap = true
        });

        prancheta.on('pointerout', () => {
            this.emcimap = false
        });

        // Funções de Tempo para "Error"
        const tempoDoerro = () => {
            this.error.setVisible(false);
        }

        // Funções de Tempo para "Congratulations"
        const tempoDecong = () => {
            this.cong.setVisible(false);
        }

        // Quando o formulário_1 encostar no Lixo
        this.physics.add.overlap(this.formulário_1, this.lixo, () => {
            this.formulário_1.setVisible(false);
            this.arrastof_1 = false;
            this.cong.setVisible(true);
            setTimeout(tempoDecong, 1600);
            this.formulário_1.destroy();
            this.formAberto_1.destroy();
            this.destruido = this.destruido + 1;
        })

        // Quando o formulário_2 encostar no Lixo
        this.physics.add.overlap(this.formulário_2, this.lixo, () => {
            this.formulário_2.x = 420;
            this.formulário_2.y = 100;
            this.error.setVisible(true);
            setTimeout(tempoDoerro, 1500);
        })

        // Quando o formulário_3 encostar no Lixo
        this.physics.add.overlap(this.formulário_3, this.lixo, () => {
            this.formulário_3.x = 580;
            this.formulário_3.y = 100;
            this.error.setVisible(true);
            setTimeout(tempoDoerro, 1500);
        })

        // Quando o formulário_4 encostar no Lixo
        this.physics.add.overlap(this.formulário_4, this.lixo, () => {
            this.formulário_4.setVisible(false);
            this.arrastof_4 = false;
            this.cong.setVisible(true);
            setTimeout(tempoDecong, 1600);
            this.formulário_4.destroy();
            this.formAberto_4.destroy();
            this.destruido = this.destruido + 1;
        })

        // Quando o formulário_1 encostar no Aprovado
        this.physics.add.overlap(this.formulário_1, this.aprovado, () => {
            this.formulário_1.x = 260;
            this.formulário_1.y = 100;
            this.error.setVisible(true);
            setTimeout(tempoDoerro, 1500);
        })

        // Quando o formulário_2 encostar no Aprovado
        this.physics.add.overlap(this.formulário_2, this.aprovado, () => {
            this.formulário_2.setVisible(false);
            this.arrastof_2 = false;
            this.cong.setVisible(true);
            setTimeout(tempoDecong, 1600);
            this.formulário_2.destroy();
            this.formAberto_2.destroy();
            this.destruido = this.destruido + 1;
        })

        // Quando o formulário_3 encostar no Aprovado
        this.physics.add.overlap(this.formulário_3, this.aprovado, () => {
            this.formulário_3.setVisible(false);
            this.arrastof_3 = false;
            this.cong.setVisible(true);
            setTimeout(tempoDecong, 1600);
            this.formulário_3.destroy();
            this.formAberto_3.destroy();
            this.destruido = this.destruido + 1;
        })

        // Quando o formulário_4 encostar no Aprovado
        this.physics.add.overlap(this.formulário_4, this.aprovado, () => {
            this.formulário_4.x = 740;
            this.formulário_4.y = 100;
            this.error.setVisible(true);
            setTimeout(tempoDoerro, 1500);
        })

        

        
    };

    //Atualizando os elementos no jogo
    update() {


        // Declarando as próximas Cenas
        if (this.destruido === 4) {
            this.scene.stop('Privacy');
            this.scene.start('Political');
            }

        // Arrastando o Formulário_1
        if (this.arrastof_1 === true) {
            this.formulário_1.x = this.input.x;
            this.formulário_1.y = this.input.y;
        }
        if (this.arrastof_1 === false) {
            // Gravidade do Jogo
        }

        // Arrastando o Formulário_2
        if (this.arrastof_2 === true) {
            this.formulário_2.x = this.input.x;
            this.formulário_2.y = this.input.y;
        }
        if (this.arrastof_2 === false) {
            // Gravidade do Jogo
        }

        // Arrastando o Formulário_3
        if (this.arrastof_3 === true) {
            this.formulário_3.x = this.input.x;
            this.formulário_3.y = this.input.y;
        }
        if (this.arrastof_3 === false) {
            // Gravidade do Jogo
        }

        // Arrastando o Formulário_4
        if (this.arrastof_4 === true) {
            this.formulário_4.x = this.input.x;
            this.formulário_4.y = this.input.y;
        }
        if (this.arrastof_4 === false) {
            // Gravidade do Jogo
        }

    // Se o formAberto_1 entrar na área da Prancheta
    if (this.formulário_1.x > 950) {

    this.formulário_1.setScale(0.20);

    if (this.arrastof_1 === false && this.emcimap === true && !this.formA_1VisibleRecente) {
        this.formulário_1.setVisible(false);
        this.formAberto_1.x = this.input.x;
        this.formAberto_1.y = this.input.y;
        this.formAberto_1.setVisible(true);
        this.formA_1VisibleRecente = true;                                   
    }

    if (this.arrastoR1 === true) {
        this.formAberto_1.x = this.input.x;
        this.formAberto_1.y = this.input.y;
        this.formulário_1.x = this.input.x;
        this.formulário_1.y = this.input.y;
    }

    if (this.arrastof_1 === false) {
        this.formAberto_1.setVisible(true);
        this.formulário_1.setVisible(false);
    }

    }

    // Se o formAberto_1 sair da Prancheta
    if (this.formulário_1.x < 950 || this.formAberto_1.x < 950) {

    this.formAberto_1.x = 960
    this.formulário_1.setScale(0.32);
    this.formAberto_1.setVisible(false);
    this.formulário_1.setVisible(true);

    } 

    // Reinicia a variável de controle do formAberto_1 após um curto período de tempo
    setTimeout(() => {
    this.formA_1VisibleRecente = false;
    }, 10);




    // Se o formAberto_2 entrar na área da Prancheta
    if (this.formulário_2.x > 950) {

    this.formulário_2.setScale(0.20);

    if (this.arrastof_2 === false && this.emcimap === true && !this.formA_2VisibleRecente) {
        this.formulário_2.setVisible(false);
        this.formAberto_2.x = this.input.x;
        this.formAberto_2.y = this.input.y;
        this.formAberto_2.setVisible(true);
        this.formA_2VisibleRecente = true;                                   
    }

    if (this.arrastoR2 === true) {
        this.formAberto_2.x = this.input.x;
        this.formAberto_2.y = this.input.y;
        this.formulário_2.x = this.input.x;
        this.formulário_2.y = this.input.y;
    }

    if (this.arrastof_2 === false) {
        this.formAberto_2.setVisible(true);
        this.formulário_2.setVisible(false);
    }

    }

    // Se o formAberto_2 sair da Prancheta
    if (this.formulário_2.x < 950 || this.formAberto_2.x < 950) {

    this.formAberto_2.x = 960
    this.formulário_2.setScale(0.32);
    this.formAberto_2.setVisible(false);
    this.formulário_2.setVisible(true);

    } 

    // Reinicia a variável de controle do formAberto_2 após um curto período de tempo
    setTimeout(() => {
    this.formA_2VisibleRecente = false;
    }, 10);




    // Se o formAberto_3 entrar na área da Prancheta
    if (this.formulário_3.x > 950) {

    this.formulário_3.setScale(0.20);

    if (this.arrastof_3 === false && this.emcimap === true && !this.formA_3VisibleRecente) {
        this.formulário_3.setVisible(false);
        this.formAberto_3.x = this.input.x;
        this.formAberto_3.y = this.input.y;
        this.formAberto_3.setVisible(true);
        this.formA_3VisibleRecente = true;                                   
    }

    if (this.arrastoR3 === true) {
        this.formAberto_3.x = this.input.x;
        this.formAberto_3.y = this.input.y;
        this.formulário_3.x = this.input.x;
        this.formulário_3.y = this.input.y;
    }

    if (this.arrastof_3 === false) {
        this.formAberto_3.setVisible(true);
        this.formulário_3.setVisible(false);
    }

    }

    // Se o formAberto_3 sair da Prancheta
    if (this.formulário_3.x < 950 || this.formAberto_3.x < 950) {

    this.formAberto_3.x = 960
    this.formulário_3.setScale(0.32);
    this.formAberto_3.setVisible(false);
    this.formulário_3.setVisible(true);

    } 

    // Reinicia a variável de controle do formAberto_3 após um curto período de tempo
    setTimeout(() => {
    this.formA_3VisibleRecente = false;
    }, 10);




    // Se o formAberto_4 entrar na área da Prancheta
    if (this.formulário_4.x > 950) {

    this.formulário_4.setScale(0.20);

    if (this.arrastof_4 === false && this.emcimap === true && !this.formA_4VisibleRecente) {
        this.formulário_4.setVisible(false);
        this.formAberto_4.x = this.input.x;
        this.formAberto_4.y = this.input.y;
        this.formAberto_4.setVisible(true);
        this.formA_4VisibleRecente = true;                                   
    }

    if (this.arrastoR4 === true) {
        this.formAberto_4.x = this.input.x;
        this.formAberto_4.y = this.input.y;
        this.formulário_4.x = this.input.x;
        this.formulário_4.y = this.input.y;
    }

    if (this.arrastof_4 === false) {
        this.formAberto_4.setVisible(true);
        this.formulário_4.setVisible(false);
    }

    }

    // Se o formAberto_4 sair da Prancheta
    if (this.formulário_4.x < 950 || this.formAberto_4.x < 950) {

    this.formAberto_4.x = 960
    this.formulário_4.setScale(0.32);
    this.formAberto_4.setVisible(false);
    this.formulário_4.setVisible(true);

    } 

    // Reinicia a variável de controle do formAberto_4 após um curto período de tempo
    setTimeout(() => {
    this.formA_4VisibleRecente = false;
    }, 10);

    }
}
