var characters = 
{
  "default":{
    "poses":{
    },
    "name":""
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
		"image":"img/Cozinha2.jpg"
	},

	"festa" : {
		"name":"A festa",
		"image":"img/Cozinha2.jpg"
	},

	"quartohospital" : {
		"name":"O hospital",
		"image":"img/Cozinha2.jpg"
	}
}; 
 var story = 
[
	{
		"title": "Start",
		"tags": "",
		"body": "<<place quarto>>\n**TRIIIM** **TRIIIM** **TRIIIM**\n{{toby}}!!!\n{{toby}}(Nossa, já está de manhã)\n{{toby,doubt}}(Que sono...)\n{{narrador}}Toby então se levanta e vai até o bannheiro. Escova seus dentes e toma um banho rápido, a fim de conseguir se arrumar a tempo de ir à escola.\n[[{{narrador}}Voltando para o quarto...|camisa?]]"
	},
	
	{
		"title": "camisa?",
		"tags": "",
		"body": "{{toby}}(Qual camiseta eu vou usar hoje?)\n[[A de sempre|cafedamanha]]\n[[Uma preta com estampa de caveira|punk?]]\n[[Uma branca com estampa de anime|nerd?]]"
	},

	{
		"title": "punk?",
		"tags": "",
		"body": "{{toby,worried}}(Será que não me achariam punk demais?)\n[[O corpo é meu, eu decido o que vou usar nele|cafedamanha]]\n[[É, melhor não|camisa?]]"
	},
	
	{
		"title": "nerd?",
		"tags": "",
		"body": "{{toby,worried}}(Será que não me achariam nerd demais?)\n[[Bobagem, é algo que eu gosto, por que achariam isso?|acaocamiseta]]\n[[É, melhor não|camisa?]]"
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
		"body": "{{raquel,confused}}Nossa, Toby, que roupa é essa?\n<<number depressivo + 1>>\n{{toby,angry}}Oi pra você também, Raquel\n{{bruno,worried}}Que isso, Raquel, deixa o garoto se vestir.\n{{raquel,angry}}Ah, cala a boca Bruno\n[[{{toby,happy}}Eai, Bruno|escolhaespelho]]"
	},

	{
		"title": "normalroupa",
		"tags": "",
		"body": "{{raquel,happy}}Oi, Toby!\n{{bruno,happy}}Eai, Toby!\n[[{{toby,happy}}Oi gente!|escolhaespelho]]"
	},
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	{
		"title": "awkward_pause",
		"tags": "",
		"body": "{{bobby}} ...Okay.\n//This is awkward. Why did you say no?\n...\n{{bobby}} ...\n[[...]]\n[[...So, about that secret ending?|secret]] <<random 50>>\n{{bobby}} Can we...\n[[Yeah fine, let's start.|explanation]]\n[[I said no.|awkward_pause]]"
	},
	{
		"title": "explanation",
		"tags": "",
		"body": "{{bobby}} Well there's not much to say honestly.\n{{bobby}} The documentation in README.md should give you most of the information you need.\n{{bobby}} Have you read it?\n[[Yeah it's very well written.|you_lier]]\n[[Not yet.|go_read_it]]\n[[Yes and it sucks. I hated it.|i_know_right]]",
		"position": {
			"x": 615,
			"y": 540
		},
		"colorID": 0
	},
	{
		"title": "i_know_right",
		"tags": "",
		"body": "{{bobby,happy}} Hahaha I don't care, I'm just a character in this story.\n//Well, I care. But yeah, the doc sucks for now. Sorry.\n[[{{bobby}} Anyway...|thanks_bobby]]",
		"position": {
			"x": 856,
			"y": 887
		},
		"colorID": 0
	},
	{
		"title": "you_lier",
		"tags": "",
		"body": "<<string liedToBobby true>>\n{{bobby}} You don't have to lie to me...\n{{bobby,happy}} I know it sucks, that's why I'm here to provide at least a working example!\n[[{{bobby}} Anyway...|thanks_bobby]]",
		"position": {
			"x": 374,
			"y": 890
		},
		"colorID": 0
	},
	{
		"title": "go_read_it",
		"tags": "",
		"body": "{{bobby,happy}} Then do it now! It's a bit long but there are important things to know.\n{{bobby}} It should give you some advice on how to get started with your own game.\n{{bobby}} I'll just wait here.\n{{bobby}} ...\n[[{{bobby,happy}} Oh, you must be done reading since you're back here!|thanks_bobby]]",
		"position": {
			"x": 611,
			"y": 887
		},
		"colorID": 0
	},
	{
		"title": "thanks_bobby",
		"tags": "",
		"body": "{{bobby}} You can open this story file in your dialogue editor now.\n{{bobby,happy}} And then you should be ready to start working on your own game!\n{{alice}} Who's working on a game?\n{{bobby,happy}} Oh hi, Alice!\n{{alice}} Who are you talking to, Bobby?\n[[{{bobby}} I have no idea, but they're cool.]] <<string liedToBobby != true>>\n[[{{bobby}} I have no idea, but they're cool. Well they lied to me once but it's okay.]] <<string liedToBobby == true>>\n{{alice,happy}} Well good luck, stranger!\n[[{{bobby,happy}} See you soon!|end]]",
		"position": {
			"x": 606,
			"y": 1272
		},
		"colorID": 0
	},
	{
		"title": "secret",
		"tags": "",
		"body": "[[{{bobby,happy}} I'm glad you found it!|end]]",
		"position": {
			"x": 1210,
			"y": 1279
		},
		"colorID": 0
	}
]; 
