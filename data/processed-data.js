var characters = 
{
  "default":{
    "poses":{
    },
    "name":""
  },

  "professor":{
    "poses":{
    },
    "name":"Professor"
  },

  "narrador":{
    "poses":{
    },
    "name":"Narrador"
  },

  "toby":{
    "poses":{
      "default":"img/Tpadrao.png",
      "happy":"img/Tfeliz.png",
      "doubt":"img/Tduvida.png",
      "worried":"img/Tpreocupado.png",
      "sad":"img/Ttriste.png",
      "angry":"img/Tbravo.png"
    },
    "name":"Toby"
  },

  "raquel":{
    "poses":{
      "default":"img/Rpadrão.png",
      "happy":"img/Rfeliz.png",
      "sad":"img/Rtriste.png",
      "confused":"img/Rconfusa.png",
      "mocking":"img/Rdebochada.png",
      "angry":"img/Rbrava.png"
    },
    "name":"Raquel"
  },

  "bruno":{
    "poses":{
      "default":"img/Bpadrão.png",
      "happy":"img/Bfeliz.png",
      "sad":"img/Btriste.png",
      "confused":"img/Bconfuso.png",
      "worried":"img/Bpreocupado.png",
      "angry":"img/Bbravo.png"
    },
    "name":"Bruno"
  },

  "mae":{
    "poses":{
      "default":"img/Mpadrão.png",
      "sad":"img/Mtriste.png",
      "confused":"img/Mconfusa.png",
      "disappointed":"img/Mdecepcionada.png",
      "happy":"img/Mfeliz.png"
    },
    "name":"Mãe"
  },

  "pai":{
    "poses":{
      "default":"img/Ppadrão.png",
      "sad":"img/Ptriste.png",
      "angry":"img/Pbravo.png",
      "disappointed":"img/Pdecepcionado.png",
      "happy":"img/Pfeliz.png"
    },
    "name":"Pai"
  },

  "depersona":{
    "poses":{
      "default":"img/Sdepressivo.png"
    },
    "name":"Depersona"
  },

  "personiaca":{
    "poses":{
      "default":"img/Smaniaco.png"
    },
    "name":"Personíaca"
  }
}; 
 var places = 
{
	"quarto" : {
		"name":"Quarto",
		"image": "img/Quarto.png"
	},
	
	"cozinha" : {
		"name":"Cozinha",
		"image":"img/Cozinha.jpg"
	},

	"rua" : {
		"name":"Rua",
		"image":"img/Rua.jpg"
	},
	
	"entrada" : {
		"name":"Entrada da Escola",
		"image":"img/EntradaEscola.jpg"
	},

	"corredor" : {
		"name":"Corredor da Escola",
		"image":"img/CorredorEscola.jpg"
	},

	"saladeaula" : {
		"name":"Sala de Aula",
		"image":"img/SaladeAula.jpg"
	},

	"festa" : {
		"name":"A festa",
		"image":"img/Festa.jpg"
	},

	"quartohospital" : {
		"name":"O hospital",
		"image":"img/QuartoHospital.jpg"
	},

	"saladotecnico" : {
		"name":"Sala de Robótica",
		"image":"img/SaladoTecnico.jpg"
	},

	"..." : {
		"name":"???",
		"image":""
	}
}; 
 var story = 
[
	{
		"title": "Start",
		"tags": "",
		"body": "<<place ...>>\n{{narrador}}...\n{{narrador}}...hm?\n{{narrador}}Ah!\n{{narrador}}Olá, seja bem vindo a demo da nossa história interativa chamada: 'The Both Sides of Toby'! (ou 'os dois lados de Toby').\n{{narrador}}Nela, você acompanhará a narrativa do Toby.\n{{toby}}...\n{{toby,worried}}Onde eu tô?\n{{narrador}}Ele é um garoto que sofre de Transtorno Bipolar.\n{{narrador}}E você tomará decisões que podem (e <b>VÃO</b>) mudar a história dele.\n{{narrador}}Sem mais enrolação, vamos começar!\n<<place quarto>>\n...\n**TRIIIM** **TRIIIM** **TRIIIM**\n{{toby}}!!!\n{{toby}}(Nossa, já está de manhã)\n{{toby,doubt}}(Que sono...)\n{{narrador}}Toby então se levanta e vai até o bannheiro. Escova seus dentes e toma um banho rápido, a fim de conseguir se arrumar a tempo de ir à escola.\n[[{{narrador}}Voltando para o quarto...|camisa?]]"
	},
	
	{
		"title": "camisa?",
		"tags": "",
		"body": "{{toby}}(Qual camiseta eu vou usar hoje?)\n[[A de sempre.|cafedamanha]]\n[[Uma preta com estampa de caveira.|punk?]]\n[[Uma branca com estampa de anime.|nerd?]]"
	},

	{
		"title": "punk?",
		"tags": "",
		"body": "{{toby,worried}}(Será que não me achariam punk demais?)\n[[O corpo é meu, eu decido o que vou usar nele.|cafedamanha]]\n[[É, melhor não.|camisa?]]"
	},
	
	{
		"title": "nerd?",
		"tags": "",
		"body": "{{toby,worried}}(Será que não me achariam nerd demais?)\n[[Bobagem, é algo que eu gosto, por que achariam isso?|acaocamiseta]]\n[[É, melhor não.|camisa?]]"
	},

	{
		"title": "acaocamiseta",
		"tags": "",
		"body": "<<string camiseta julgada>>\n{{narrador}}Toby desce as escadas e encontra sua mãe, que está na mesa mexendo no celular.\n<<place cozinha>>\n{{toby}}Bom dia.\n{{mae}}Bom dia, Toby. Fiz café, está em cima da mesa caso você queira um pouco.\n{{toby}}Ok, obrigado.\n{{toby}}O pai já acordou?\n{{mae,confused}}Não sei. Ele está dormindo no quarto de hóspedes.\n{{toby,worried}}...\n{{narrador}}Ele abre a geladeira e encontra uma <b>caixa de suco</b>, uma de <b>leite</b>, alguns <b>ovos</b> e <b>margarina</b>.\n{{narrador}}Abrindo o armário, ele encontra um <b>pacote de bolacha</b>, um <b>achocolatado</b> e um pacote de <b>pão de forma.</b>\n{{toby}}O que vou comer?\n[[Ovos|bebida?]]\n[[Bolacha|cdepressivo]]\n[[Pão|complemento]]"
	},

	{
		"title": "cafedamanha",
		"tags": "",
		"body": "{{narrador}}Toby desce as escadas e encontra sua mãe, que está na mesa mexendo no celular.\n<<place cozinha>>\n{{toby}}Bom dia.\n{{mae}}Bom dia, Toby. Fiz café, está em cima da mesa caso você queira um pouco.\n{{toby}}Ok, obrigado.\n{{toby}}O pai já acordou?\n{{mae,confused}}Não sei. Ele está dormindo no quarto de hóspedes.\n{{toby,worried}}...\n{{narrador}}Ele abre a geladeira e encontra uma <b>caixa de suco</b>, uma de <b>leite</b>, alguns <b>ovos</b> e <b>margarina</b>.\n{{narrador}}Abrindo o armário, ele encontra um <b>pacote de bolacha</b>, um <b>achocolatado</b> e um pacote de <b>pão de forma.</b>\n{{toby}}O que vou comer?\n[[Ovos|bebida?]]\n[[Bolacha|cdepressivo]]\n[[Pão|complemento]]"
	},
	
	{
		"title": "complemento",
		"tags": "",
		"body": "{{toby,doubt}}Com margarina ou torrado?\n[[Margarina|cdepressivo]]\n[[Torrado|cdepressivo]]"
	},

	{
		"title": "cdepressivo",
		"tags": "",
		"body": "<<number depressivo + 1>>\n{{toby}}O que vou beber?\n[[Suco|indoescola]]\n[[Leite|indoescola]]\n[[Café|comleite?]]"
	},
	
	{
		"title": "bebida?",
		"tags": "",
		"body": "{{toby}}O que vou beber?\n[[Suco|indoescola]]\n[[Leite|indoescola]]\n[[Café|comleite?]]"
	},

	{
		"title": "comleite?",
		"tags": "",
		"body": "{{toby,doubt}}Com leite?\n[[Sim|comachocolatado?]]\n[[Não|comachocolatado?]]"
	},

	{
		"title": "comachocolatado?",
		"tags": "",
		"body": "{{toby}}E se eu colocar achocolatado?\n[[Sim|indoescola]]\n[[Não|indoescola]]"
	},
	
	{
		"title": "indoescola",
		"tags": "",
		"body": "{{narrador}}Enquanto Toby come, o pai aparece na cozinha.\n{{pai,happy}}Bom dia, Toby.\n{{toby}}Bom dia, pai.\n{{pai}}Hoje eu vou sair pra trabalhar mais cedo. Quer que eu te leve pra escola de carro?\n{{toby}}Claro.\n<<place entrada>>\n{{pai}}Tenha um bom dia de aula, Toby.\n{{toby,happy}}Obrigado, pai.\n[[{{narrador}}Toby desce do carro e caminha até seus amigos.|consequenciaroupa]] <<string camiseta == julgada>> \n[[{{narrador}}Toby desce do carro e caminha até seus amigos.|normalroupa]] <<string camiseta != julgada>>"
	},
	
	{
		"title": "consequenciaroupa",
		"tags": "",
		"body": "{{raquel,confused}}Nossa, Toby, que roupa é essa?\n<<number depressivo + 1>>\n{{toby,angry}}Oi pra você também, Raquel.\n{{bruno,worried}}Que isso, Raquel, deixa o garoto se vestir.\n{{raquel,angry}}Ah, cala a boca Bruno.\n[[{{toby,happy}}Eai, Bruno|escolhaespelho]]"
	},

	{
		"title": "normalroupa",
		"tags": "",
		"body": "{{raquel,happy}}Oi, Toby!\n{{bruno,happy}}Eai, Toby!\n[[{{toby,happy}}Oi gente!|escolhaespelho]]"
	},
	
	{
		"title": "escolhaespelho",
		"tags": "",
		"body": "{{raquel,confused}}Tem alguma coisa no seu rosto, Toby.\n{{toby,worried}}O que eu faço?\n[[Tenho um espelho na mochila, vou pegá-lo e ver o que tem no meu rosto.|pegouespelho]]\n[[Deve ser só uma das brincadeiras de mal gosto de Raquel, vou ignorar.|semespelho]]"
	},
	
	{
		"title": "pegouespelho",
		"tags": "",
		"body": "<<string espelho pegou>>\n{{narrador}}Toby retira o espelho da mochila e se olha nele para tirar a remela de seu olho.\n{{toby,happy}}Obrigado pelo aviso.\n[[{{raquel}}Bom, vamos entrar então?|spinoff]]"
	},
	
	{
		"title": "semespelho",
		"tags": "",
		"body": "{{bruno,worried}}Toby, realmente te-\n[[{{toby,angry}}Ah para, Bruno! Eu conheço vocês. Vamos entrar, tá bom?|spinoff]]"
	},
	
	{
		"title": "spinoff",
		"tags": "",
		"body": "<<place corredor>>\n{{narrador}}Eles começam a andar enquanto raquel diz:\n{{raquel,happy}}Sabiam que vão lançar um spin-off do meu jogo favorito?!\n{{toby,happy}}Sério? Pensei que os criadores não fossem fazer mais nada.\n{{raquel}}Não são os mesmos criadores, nem a mesma história, mas vai ter a mesma pegada.\n{{bruno,confused}}Então não é um spin-off, Raquel.\n{{raquel,angry}}Ah, mas vocês entenderam.\n<<place saladotecnico>>\n{{narrador}}Eles entram em uma sala cheia de circuitos e peças.\n{{narrador}}Toby começa a programar em seu notebook, enquanto Raquel está soldando uma peça na outra e Bruno montando chips.\n{{bruno,worried}}Estou preocupado. Estamos entrando em Agosto e nosso projeto não está saindo como o esperado...\n{{raquel}}Como está a programação, Toby?\n{{toby,doubt}}Ainda não consegui resolver este maldito erro!\n{{bruno,worried}}Também, com o tanto de trabalhos que jogam em cima da gente, não da tempo de pensar no nosso projeto.\n{{raquel,angry}}Pare de reclamar tanto, Bruno!\n{{bruno,angry}}Temos 5 trabalhos pendentes fora o nosso projeto, Raquel, 5!\n{{raquel,confused}}Eu sei, mas o quanto antes você terminar a sua parte, mais tempo teremos para fazê-los.\n{{raquel,confused}}Agora anda logo que a aula acaba em 10 minutos.\n{{toby,worried}}10 minutos e eu ainda não consegui resolver o erro no código...\n{{toby,worried}}O que devo fazer?\n[[Preciso resolver este problema, não temos mais tempo para gastar!|prova]]\n[[Vou garantir que meus arquivos estejam salvos e seguros. Resolvo isso em casa.|prova]]"
	},
	
	{
		"title": "prova",
		"tags": "",
		"body": "<<place saladeaula>>\n{{narrador}}Após a aula do técnico finalizar, Toby vai até a sala onde o professor de química está e senta em seu lugar, no aguardo para o início da prova.\n{{narrador}}5 minutos depois...\n{{professor}}Todos sentem em seus lugares, começarei a distribuir as provas a partir de agora!\n{{narrador}}O professor então, vai até o lugar onde Toby está sentado e o entrega a prova.\n{{narrador}}Olhando fixamente em seus olhos, o professor diz:\n[[{{professor}}Olha só essas remelas. Alguém aqui decidiu estudar para a prova só de última hora, não é mesmo?|risos]] <<string espelho != pegou>> \n [[{{professor}}Boa prova.|conclusao]] <<string espelho == pegou>>"
	},
	
	{
		"title": "risos",
		"tags": "",
		"body": "[[{{narrador}}Toby ouve risos da sala inteira.|conclusao]]"
	},
	
	{
		"title": "conclusao",
		"tags": "",
		"body": "<<place rua>>\n{{narrador}}Um dia muito estressante de aula depois...\n{{bruno,happy}}O que acharam da prova de química?\n{{raquel,confused}}Foi um saco.\n{{raquel,happy}}Mas eu gostei da parte das substâncias.\n{{toby}}Bom, é aqui que nos despedimos.\n{{raquel,happy}}Até mais, Toby!\n[[{{bruno,happy}}Falou, Toby.|final]] <<string espelho == pegou>> \n[[{{bruno,worried}}Não se preocupe com a recuperação, você é inteligente e se sairá bem!|agdcmento]] <<string espelho != pegou>>"
	},
	
	{
		"title": "agdcmento",
		"tags": "",
		"body": "[[{{toby}}Agradeço.|final]]"
	},
	
	{
		"title": "final",
		"tags": "",
		"body": "<<place quarto>>\n{{narrador}}Chegando em casa, Toby vai direto ao seu quarto. Joga sua mochila na mesa e capota na cama.\n[[{{narrador}}Fim da Demo.|end]]"
	}
]; 
