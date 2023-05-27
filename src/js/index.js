const botaoAlterarTema = document.getElementById("botao-tema");
const body = document.querySelector("body");
const imagemTema = document.querySelector(".imagem-botao");
const container = document.querySelector("main");
const pokemonCount = 151

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemonCount; i++) {
        await getPokemons(i)
    }
}

const getPokemons = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const resp = await fetch(url)
    const data = await resp.json()
    createPokemonCard(data)

}

const createPokemonCard = (poke) => {
    const card = document.createElement('div')
    card.classList.add("cartao-pokemon")

    const name = poke.name[0] + poke.name.slice(1)
    const id = poke.id.toString().padStart(3, '0')

    const pokeTypes = poke.types.map(type => type.type.name)

    var type1 = pokeTypes[0]
    var type2 = pokeTypes[1]

    if (type2 == undefined) {
        type2 = 'no-type'
    }

    const pokemonInnerHTML = `
        <div class="informacoes">
            <span class="name">${name}</span>
            <span class="number">#${id}</span>
         </div>

         
        <ul class="bg-poke">
            <img src="https://raw.githubusercontent.com/marvieiradev/imgs-projetos/master/pokemon/png/${poke.id}.png" alt="${name}" class="png">
        </ul>
        <ul class="tipos">
            <li class="tipo ${type1}">${obterTipo(type1)}</li>
            <li class="tipo ${type2}">${obterTipo(type2)}</li>
        </ul>
        <p class="descricao">${dex[poke.id]}</p>
        `
    card.innerHTML = pokemonInnerHTML
    container.appendChild(card)
}

const obterTipo = (type) => {
    switch (type) {
        case 'normal':
            type = 'normal'
            break

        case 'fighting':
            type = 'lutador'
            break

        case 'flying':
            type = 'voador'
            break

        case 'poison':
            type = 'veneno'
            break

        case 'ground':
            type = 'terra'
            break

        case 'rock':
            type = 'pedra'
            break

        case 'bug':
            type = 'inseto'
            break

        case 'ghost':
            type = 'fantasma'
            break

        case 'steel':
            type = 'metal'
            break

        case 'fire':
            type = 'fogo'
            break

        case 'water':
            type = 'água'
            break

        case 'grass':
            type = 'grama'
            break

        case 'electric':
            type = 'elétrico'
            break

        case 'psychic':
            type = 'psíquico'
            break

        case 'ice':
            type = 'gelo'
            break

        case 'dragon':
            type = 'dragão'
            break

        case 'dark':
            type = 'escuro'
            break

        case 'fairy':
            type = 'fada'
            break
    }

    return type
}

const dex = ["",
/*001*/"Bulbasaur pode ser visto cochilando sob luz solar intensa. Há uma semente em suas costas. É o primeiro Pokémon da National Dex.",
/*002*/"Há um broto nas costas desse Pokémon. Para suportar seu peso, as pernas e o tronco de Ivysaur ficam grossos e fortes.",
/*003*/"Há uma flor grande nas costas de Venusaur. Diz-se que a flor adquire cores vivas se receber muita nutrição e luz solar.",
/*004*/"A chama que queima na ponta da cauda é uma indicação de suas emoções. A chama tremula quando Charmander está se divertindo.",
/*005*/"Charmeleon impiedosamente destrói seus inimigos usando suas garras afiadas. Se encontrar um inimigo forte, ele se torna agressivo.",
/*006*/"Charizard voa pelo céu em busca de oponentes poderosos. Ele respira um calor tão grande que derrete qualquer coisa.",
/*007*/"A forma arredondada da concha e as ranhuras na superfície ajudam a minimizar a resistência na água, permitindo que este Pokémon nade em alta velocidade.",
/*008*/"Sua cauda é grande e coberta com um pêlo rico e grosso. A cauda torna-se cada vez mais profunda na cor à medida que Wartortle envelhece.",
/*009*/"Blastoise tem bicos de água que se projetam de sua concha. Os bicos de água são muito precisos. Eles podem disparar balas de água com precisão suficiente para atingir latas vazias a uma distância de mais de 60 metros.",
/*010*/"Caterpie tem um apetite voraz. Ele pode devorar folhas maiores que seu corpo diante dos seus olhos. De sua antena, este Pokémon libera um odor terrivelmente forte.",
/*011*/"A concha que cobre o corpo deste Pokémon é tão dura quanto uma laje de ferro. Metapod não se move muito. Ele fica parado porque está preparando suas entranhas suaves para a evolução dentro da casca dura.",
/*012*/"Butterfree tem uma capacidade superior para procurar mel delicioso de flores. Pode até procurar, extrair e transportar mel de flores que estão desabrochando a mais de 10 quilômetros do ninho.",
/*013*/"Weedle tem um olfato extremamente agudo. Ele é capaz de distinguir seus tipos favoritos de folhas daqueles de que não gosta, apenas farejando com sua grande tromba vermelha (nariz).",
/*014*/"Kakuna permanece praticamente imóvel enquanto se agarra a uma árvore. No entanto, por dentro, é extremamente ocupado, enquanto se prepara para a sua evolução futura.",
/*015*/"Beedrill é extremamente territorial. Ninguém deve se aproximar de seu ninho, isso é para sua própria segurança. Se irritados, eles atacarão em um enxame furioso.",
/*016*/"Pidgey tem um senso de direção extremamente nítido. Ela é capaz de voltar para o seu ninho de forma infalível, por mais longe que possa ser removida de seu ambiente familiar.",
/*017*/"Pidgeotto reivindica uma grande área como seu próprio território. Este Pokémon voa, patrulhando seu espaço de vida.",
/*018*/"Este Pokémon tem uma plumagem deslumbrante de penas maravilhosamente brilhantes. Muitos treinadores são cativados pela impressionante beleza das penas em sua cabeça, obrigando-os a escolher Pidgeot como seu Pokémon.",
/*019*/"Seus dentes crescem continuamente ao longo de sua vida. Se seus incisivos ficarem muito longos, esse Pokémon se torna incapaz de comer e morre de fome.",
/*020*/"As presas fortes de Raticate crescem constantemente. Para mantê-los triturados, roem pedras e troncos. Pode até mastigar as paredes das casas. Seus bigodes são essenciais para manter o seu equilíbrio.",
/*021*/"Seu grito alto pode ser ouvido a mais de 800 metros de distância. Se seu grito alto e agudo for ouvido ecoando por toda parte, é um sinal de que eles estão alertando um ao outro sobre o perigo.",
/*022*/"Não há nenhum problema em voar continuamente por um dia inteiro carregando uma carga pesada. O medo é reconhecido pelo pescoço longo e pelo bico alongado.",
/*023*/"Ekans se enrola em espiral enquanto descansa. Assumindo essa posição, ele pode responder rapidamente a uma ameaça de qualquer direção com um brilho na cabeça erguida.",
/*024*/"Este Pokémon é terrivelmente forte para contrair as coisas com seu corpo. Pode até achatar tambores de óleo de aço.",
/*025*/"É de sua natureza armazenar eletricidade. Ele se sente estressado de vez em quando se não conseguir descarregar completamente sua eletricidade. É o mais popular de toda franquia Pokémon!",
/*026*/"À medida que a eletricidade se acumula dentro de seu corpo, ela se torna mais agressiva. Uma teoria é que o acúmulo de eletricidade está realmente causando estresse.",
/*027*/"Sandshrew tem uma pele muito seca que é extremamente resistente. Ele pode rolar virando uma bola que repele qualquer ataque do inimigo. À noite, ele se enterra na areia do deserto para dormir.",
/*028*/"O corpo do Sandslash é coberto por pontas duras, que são seções endurecidas de sua pele. Uma vez por ano, os picos antigos caem, para serem substituídos por novos picos que crescem por baixo dos antigos.",
/*029*/"Suas farpas altamente tóxicas se desenvolveram como proteção para este Pokémon de corpo pequeno. Quando enfurecido, libera uma toxina horrível do chifre.",
/*030*/"Quando Nidorina está com seus amigos ou familiares, eles mantêm suas farpas afastadas para evitar se machucar. Este Pokémon parece ficar nervoso se separado dos outros.",
/*031*/"O corpo de Nidoqueen é envolvido em escamas extremamente duras. É hábil em enviar inimigos voando com agressões severas. Este Pokémon é mais forte quando defende seus filhotes.",
/*032*/"O Nidoran macho desenvolveu músculos para mover seus ouvidos. Graças a eles, os ouvidos podem ser movidos livremente em qualquer direção. Mesmo o menor som não escapa à atenção deste Pokémon.",
/*033*/"Seu chifre é mais duro que um diamante. Se sente uma presença hostil, todas as farpas nas costas se arrepiam de uma só vez e desafia o inimigo com toda a sua força.",
/*034*/"A cauda grossa de Nidoking possui poder enormemente destrutivo. Com um balanço, pode derrubar uma torre de transmissão de metal. Uma vez que este Pokémon se enfurece, não há como detê-lo.",
/*035*/"Em todas as noites de lua cheia, eles saem para brincar. Quando o amanhecer chega, os cansados Clefairy's dormem aninhados um no outro em montanhas profundas e tranquilas.",
/*036*/"Clefable usa suas asas para pular levemente, como se estivesse voando. Seu passo saltitante permite que ele ande sobre a água.",
/*037*/"Dentro do corpo de Vulpix queima uma chama que nunca se apaga. Durante o dia, quando as temperaturas aumentam, este Pokémon libera chamas da boca para impedir que seu corpo fique muito quente.",
/*038*/"Ninetales lança uma luz sinistra de seus olhos vermelhos brilhantes para obter controle total sobre a mente de seu inimigo. Este Pokémon é altamente inteligente, ele pode entender a fala humana.",
/*039*/"Quando este Pokémon canta, nunca pára para respirar. Se estiver em uma batalha contra um oponente que não adormeça facilmente, o Jigglypuff não pode respirar, colocando em risco sua vida.",
/*040*/"O corpo de Wigglytuff é muito flexível. Ao inalar profundamente, este Pokémon pode se inflar aparentemente sem fim. Uma vez inflado, o Wigglytuff salta levemente como um balão.",
/*041*/"O Zubat permanece silenciosamente imóvel em um local escuro durante o dia claro. Isso ocorre porque a exposição prolongada ao sol faz com que seu corpo se torne ligeiramente queimado.",
/*042*/"Suas presas perfuram facilmente até peles grossas de animais. Adora se deliciar com o sangue das pessoas e dos Pokémon. Ele voa na escuridão e ataca por trás.",
/*043*/"Oddish procura solo fértil e rico em nutrientes para se plantar. Durante o dia, enquanto é plantado, acredita-se que os pés deste Pokémon mudam de forma e se tornam semelhantes às raízes das árvores, além de suas folhas ficarem mais brilhantes.",
/*044*/"Gloom libera uma fragrância suja do pistilo de sua flor. Quando confrontado com o perigo, o fedor piora. Se este Pokémon estiver calmo e seguro, ele não liberará seu aroma fedido habitual.",
/*045*/"Suas pétalas são as maiores do mundo. Espalha diabolicamente o pólen causador de alergias de suas pétalas. Nas estações em que produz mais pólen, o ar ao redor de um Vileplume fica amarelo com o pó enquanto caminha.",
/*046*/"Paras tem cogumelos parasitas crescendo nas costas, chamados 'tochukaso'. Eles crescem grandes, atraindo nutrientes deste Pokémon. Eles são altamente valorizados como remédio para prolongar a vida humana e dos Pokémon.",
/*047*/"O Parasect é conhecido por infestar grandes árvores em massa e drenar nutrientes do tronco e raízes inferiores. Quando uma árvore infestada morre, elas se movem para outra árvore ao mesmo tempo. O cogumelo grande nas costas o controla.",
/*048*/"Diz-se que todo seu pelo fino e rígido, que cobre todo o corpo, evoluiu para sua auto proteção. Possui olhos grandes que nunca deixam de detectar presas minúsculas.",
/*049*/"As asas são cobertas com escamas semelhantes a poeira. Toda vez que bate as asas, perde poeira altamente tóxica.",
/*050*/"Diglett são criados na maioria das fazendas. O motivo é simples: onde quer que esse Pokémon se enterre, o solo fica perfeitamente cultivado para qualquer plantação. Este solo é ideal para o cultivo de vegetais deliciosos.",
/*051*/"Dugtrio são na verdade trigêmeos que emergiram de um corpo. Como resultado, cada trigêmeo pensa exatamente como os outros dois trigêmeos.",
/*052*/"Meowth retira suas garras afiadas em suas patas para esgueirar-se lentamente sem dar passos incriminadores. Por alguma razão, este Pokémon adora moedas brilhantes que brilham com luz.",
/*053*/"Persian tem seis bigodes ousados que lhe conferem uma aparência de resistência. Os bigodes percebem os movimentos do ar para determinar o que há nas proximidades do Pokémon.",
/*054*/"Psyduck usa um poder misterioso. Quando faz isso, este Pokémon gera ondas cerebrais que supostamente são vistas apenas em pessoas que dormem.",
/*055*/"Golduck é o nadador mais rápido entre todos os Pokémon. Nada sem esforço, mesmo em um mar agitado e tempestuoso. Às vezes, resgata pessoas de navios naufragados que se debatem em alto mar.",
/*056*/"Quando Mankey começa a tremer e sua respiração nasal fica áspera, é um sinal claro de que está ficando com raiva. No entanto, como entra em uma fúria iminente quase instantaneamente, é impossível alguém fugir de sua ira.",
/*057*/"Quando Primeape fica furioso, sua circulação sanguínea é aumentada. Por sua vez, seus músculos são fortalecidos. No entanto, também se torna muito menos inteligente ao mesmo tempo.",
/*058*/"Growlithe tem um excelente olfato. Uma vez que cheira qualquer coisa, este Pokémon não esquece o perfume, não importa o quê. Ele usa seu sentido olfativo avançado para determinar as emoções de outros seres vivos.",
/*059*/"Arcanine é conhecido por sua alta velocidade. Diz-se que é capaz de percorrer mais de 10.000 quilômetros em um único dia e noite. O fogo que arde violentamente dentro do corpo deste Pokémon é sua fonte de energia.",
/*060*/"Poliwag tem uma pele muito fina. É possível ver as entranhas em espiral do Pokémon através da pele. Ainda não é muito bom para caminhar. Seus treinadores devem treinar esse Pokémon para andar todos os dias.",
/*061*/"A superfície do corpo da Poliwhirl está sempre molhada e escorregadia com um fluido viscoso. Por causa dessa cobertura escorregadia, ele pode facilmente escorregar e deslizar para fora das garras de qualquer inimigo em batalha.",
/*062*/"Os músculos fortes e desenvolvidos do Poliwrath nunca se cansam, por mais que exercite. É tão incansavelmente forte que este Pokémon pode nadar de um lado para o outro sem esforço. Poliwrath na região de Alola são nadadores fortes que usam o peito.",
/*063*/"Abra precisa dormir dezoito horas por dia. Caso contrário, este Pokémon perde sua capacidade de usar poderes telecinéticos. Se for atacado, Abra escapa usando o Teleport enquanto ele ainda está dormindo.",
/*064*/"Kadabra tem uma colher de prata na mão. A colher é usada para amplificar as ondas alfa em seu cérebro. Sem a colher, diz-se que o Pokémon está limitado à metade da quantidade usual de seus poderes telecinéticos.",
/*064*/"O cérebro de Alakazam cresce continuamente, multiplicando infinitamente as células cerebrais. Este cérebro incrível dá a este Pokémon um QI surpreendentemente alto de 5.000. Ele tem uma memória completa de tudo o que ocorreu no mundo.",
/*066*/"Os músculos de Machop são especiais, eles nunca ficam doloridos, por mais que sejam usados em exercícios. Este Pokémon tem poder suficiente para arremeçar uma centena de humanos adultos. É um Pokémon fitness padrãozinho, adora malhar.",
/*067*/"O Machoke realiza musculação todos os dias, ao mesmo tempo em que ajuda pessoas com trabalho duro, é exigente fisicamente. Nos dias de folga, esse Pokémon vai para os campos e montanhas para se exercitar e treinar.",
/*068*/"Machamp tem o poder de lançar qualquer coisa de lado. No entanto, tentar fazer qualquer trabalho que exija cuidado e destreza faz com que seus braços se enrosquem. Este Pokémon tende a entrar em ação antes de pensar.",
/*069*/"O corpo fino e flexível do Bellsprout permite que ele se curve e balance para evitar qualquer ataque, por mais forte que seja.",
/*070*/"Weepinbell tem um gancho grande na extremidade traseira. À noite, o Pokémon se conecta a um galho de árvore e vai dormir.",
/*071*/"Victreebel tem uma longa videira que se estende de sua cabeça. Esta videira é ondulada e sacudida como se fosse um animal para atrair presas. Quando uma presa desavisada se aproxima, esse Pokémon o engole inteiro.",
/*072*/"O corpo do Tentacool é basicamente composto de água. Se for removido do mar, seca como pergaminho. Se este Pokémon ficar desidratado, coloque-o novamente no mar. Absorve a luz do sol e a refrata usando água dentro de seu corpo para convertê-lo em energia do feixe.",
/*073*/"Tentacruel tem grandes esferas vermelhas em sua cabeça. Os orbes brilham antes de atacar a vizinhança com uma forte explosão ultrassônica. A explosão deste Pokémon cria ondas violentas ao seu redor.",
/*074*/"Quanto mais um Geodude vive, mais suas bordas ficam lascadas e desgastadas, tornando-a mais arredondada em sua aparência. No entanto, o coração deste Pokémon permanecerá duro e áspero para sempre.",
/*075*/"Rochas são a comida favorita de Graveler. Este Pokémon escalará uma montanha da base até o cume, banqueteando-se com pedras o tempo todo. Ao atingir o pico, ele volta ao fundo. Rola descidas para se mover.",
/*076*/"Golem vive nas montanhas. Se houver um grande terremoto, esses Pokémon virão rolando das montanhas em massa até o sopé abaixo. Mesmo a dinamite não pode prejudicar seu corpo duro e parecido com uma rocha.",
/*077*/"Ponyta é muito fraco ao nascer mal conseguindo se levantar. Este Pokémon se torna mais forte tropeçando e caindo para acompanhar seu pai. É capaz dar saltos incrivelmente altos.",
/*078*/"Rapidash geralmente pode ser visto casualmente galopando nos campos e planícies. No entanto, quando esse Pokémon fica sério, suas crinas ardentes brilham e brilham à medida que galopam até 240 km/h.",
/*079*/"Slowpoke usa sua cauda para capturar presas mergulhando-a na água ao lado de um rio. No entanto, esse Pokémon geralmente esquece o que está fazendo e muitas vezes passa dias inteiros apenas vagando à beira da água.",
/*080*/"A cauda de Slowbro tem um Shellder firmemente preso com uma mordida. Como resultado, a cauda não pode mais ser usada para pescar. Isso faz com que Slowbro nade de má vontade e pegue presas. Ele se abre enquanto olha para o mar.",
/*081*/"Magnemite se liga às linhas de energia para se alimentar de eletricidade. Se sua casa tiver uma queda de energia, verifique seus disjuntores. Você pode encontrar um grande número desse Pokémon agarrado à caixa de disjuntores.",
/*082*/"Magneton emite uma força magnética poderosa que é fatal para dispositivos mecânicos. Como resultado, grandes cidades soam sirenes para alertar os cidadãos sobre surtos em larga escala deste Pokémon.",
/*083*/"Eles vivem onde as plantas crescem. Farfetch'd raramente são vistos, então acredita-se que seus números estejam entrando em extinção. Não pode viver sem o nabo de alho-poró que segura.",
/*084*/"As duas cabeças de Doduo nunca dormem ao mesmo tempo. Suas duas cabeças se revezam no sono, para que uma sempre possa vigiar os inimigos enquanto a outra dorme. Suas asas curtas dificultam o vôo.",
/*085*/"Cuidado se as três cabeças de Dodrio estiverem olhando em três direções separadas. É um sinal claro de que está em guarda. Não chegue perto deste Pokémon se ele estiver cauteloso, ele pode decidir dar um selinho em você.",
/*086*/"Seel caça presas no mar gelado sob as camadas de gelo. Quando precisa respirar, faz um buraco no gelo com a seção acentuadamente saliente da cabeça. Graças à sua gordura espessa, os mares frios não o incomodam de forma alguma, mas se cansam facilmente em águas mornas.",
/*087*/"Dewgong adora adormecer no gelo amargamente frio. A visão deste Pokémon dormindo em uma geleira foi erroneamente considerada uma sereia por um marinheiro há muito tempo. Adora tomar banhos de sol na praia após as refeições. O aumento da temperatura corporal ajuda na digestão.",
/*088*/"O corpo lamacento e emborrachado de Grimer pode ser forçado através de qualquer abertura, por menor que seja. Este Pokémon entra em canos de esgoto para beber água suja. Feito de lodo congelado. Cheira muito podre ao toca-lo.",
/*089*/"Do corpo de Muk escoa um fluido imundo que emite um fedor horrível e dobrador de nariz. Apenas uma gota do fluido corporal deste Pokémon pode tornar uma piscina estagnada e rançosa com seu insuportável fedor.",
/*090*/"À noite, esse Pokémon usa sua língua larga para cavar um buraco na areia do fundo do mar e depois dormir nela. Enquanto dorme, Shellder fecha sua concha, mas deixa a língua para fora. A dureza de sua concha supera a dureza de um diamante!",
/*091*/"Cloyster é capaz de nadar no mar. Isso é feito engolindo água e depois jateando em direção à parte traseira. Este Pokémon dispara espinhos de sua concha usando o mesmo sistema.",
/*092*/"Gastly é amplamente composto de matéria gasosa. Quando exposto a um vento forte, o corpo gasoso diminui rapidamente. Grupos deste Pokémon agrupam-se sob os beirais das casas para escapar da devastação do vento.",
/*093*/"Haunter é um Pokémon perigoso. Se um acena para você enquanto flutua na escuridão, você nunca deve se aproximar dele. Este Pokémon tentará lamber você com a língua e roubar sua vida. É perigoso sair sozinho nas noites em que você está se sentindo triste.",
/*094*/"Às vezes, em uma noite escura, sua sombra lançada por uma luz da rua repentina e surpreendentemente o ultrapassa. Na verdade, é um Gengar passando por você, fingindo ser sua sombra.",
/*095*/"Onix tem um ímã em seu cérebro. Ele atua como uma bússola para que este Pokémon não perca a direção enquanto estiver em tunelamento. À medida que envelhece, seu corpo se torna cada vez mais redondo e suave.",
/*096*/"Se seu nariz coçar enquanto você dorme, é um sinal claro de que um desses Pokémon está em cima de seu travesseiro e tentará comer seu sonho pelas narinas.",
/*097*/"Hypno segura um pêndulo na mão. O movimento de arco e o brilho do pêndulo embalam o inimigo em um profundo estado de hipnose. Enquanto este Pokémon procura presas, ele pole o pêndulo.",
/*098*/"Krabby vive nas praias, escavadas dentro de buracos cavados na areia. Em praias arenosas com pouco alimento, esses Pokémon podem ser vistos brigando entre si por território.",
/*099*/"Kingler tem uma garra forte e enorme. Ele agita essa enorme garra no ar para se comunicar com os outros. No entanto, como a garra é muito pesada, o Pokémon se cansa rapidamente. Uma garra cresceu maciçamente e é tão dura quanto o aço.",
/*100*/"Voltorb foi avistado pela primeira vez em uma empresa que fabrica PokéBolas. A ligação entre esse avistamento e o fato desse Pokémon ser muito semelhante a uma Pokébola permanece um mistério. Voltorb é extremamente sensível, explode ao menor choque.",
/*101*/"O Electrode consome eletricidade na atmosfera. Nos dias em que um raio atinge, você pode ver este Pokémon explodindo em todo o lugar por comer muita eletricidade. Uma das características do Electrode é sua atração pela eletricidade.",
/*102*/"Seus seis ovos usam telepatia para se comunicar entre si. Acredita-se que carrega genes de plantas e os genes de outras espécies. Embora sejam do mesmo tamanho que outros Exeggcute, os produzidos em Alola são bastante pesados.",
/*103*/"O exeggutor veio originalmente dos trópicos. Suas cabeças ficam cada vez maiores com a exposição à forte luz do sol. Diz-se que quando as cabeças caem, elas se agrupam no chão para formar um Exeggcute.",
/*104*/"O crânio que usa na cabeça é o de sua mãe morta. Segundo alguns, ele evoluirá quando chegar a um acordo com a dor de sua morte. Ele sempre anseia pela mãe que nunca mais o verá.",
/*105*/"Marowak é a forma evoluída de um Cubone que superou sua tristeza pela perda de sua mãe e se tornou um Pokémon durão. O espírito temperado e endurecido deste Pokémon não é facilmente quebrado.",
/*106*/"As pernas de Hitmonlee se contraem e se esticam livremente. Usando essas pernas de mola, ele se curva sobre os inimigos com chutes devastadores. Após a batalha, esfrega as pernas e relaxa os músculos para superar a fadiga.",
/*107*/"Diz-se que Hitmonchan possui o espírito de um boxeador que estava trabalhando em direção a um campeonato mundial. Este Pokémon tem um espírito indomável e nunca desistirá diante das adversidades. Seus socos cortam o ar.",
/*108*/"Sempre que o Lickitung se deparar com algo novo, ele irá infalivelmente dar uma lambida. Esse Pokémon memoriza as coisas pela textura e pelo sabor. É um pouco desconcertado por coisas azedas.",
/*109*/"Se Koffing ficar agitado, ele aumenta a toxicidade de seus gases internos e os jorra de todo o corpo. Este Pokémon também pode inflar demais seu corpo redondo e explodir. Koffing contém substâncias tóxicas.",
/*110*/"Weezing adora os gases emitidos pelo lixo podre da cozinha. Este Pokémon encontrará uma casa suja e mal cuidada e fará dela seu lar. À noite, quando as pessoas da casa estão dormindo, ele vai para o lixo.",
/*111*/"Rhyhorn corre em linha reta, esmagando tudo em seu caminho. Ele não se incomoda nem mesmo se bater de cabeça em um bloco de aço. Este Pokémon pode sentir um pouco de dor com a colisão do dia seguinte, no entanto.",
/*112*/"O chifre de Rhydon pode esmagar até diamantes não lapidados. Um golpe violento de sua cauda pode derrubar um edifício. A pele deste Pokémon é extremamente resistente. Mesmo os golpes de canhão diretos não deixam um arranhão. Rhydon tem um chifre que serve de broca.",
/*113*/"Chansey põe ovos nutricionalmente excelentes todos os dias. Os ovos são tão deliciosos que são devorados fácil e avidamente, mesmo por aquelas pessoas que já perderam o apetite.",
/*114*/"As vinhas de Tangela se quebram facilmente se forem agarradas. Isso acontece sem dor, permitindo uma fuga rápida. As vinhas perdidas são substituídas por vinhas recém-cultivadas no dia seguinte.",
/*115*/"Se você encontrar um jovem Kangaskhan brincando sozinho, nunca deve perturbá-lo ou tentar pegá-lo. A mãe do bebê Pokémon com certeza está na área, e ela ficará violentamente furiosa com você.",
/*116*/"Horsea come pequenos insetos e musgo das rochas. Se a corrente do oceano se torna mais rápida, este Pokémon se ancora enrolando sua cauda em rochas ou corais para evitar que seja levado pela água.",
/*117*/"Seadra dorme depois de se contorcer entre os galhos de coral. Aqueles que tentam coletar corais são ocasionalmente picados pelas farpas venenosas deste Pokémon, caso não percebam. Seadra gera redemoinhos girando todo seu corpo.",
/*118*/"Goldeen é um Pokémon muito bonito com barbatanas que ondulam elegantemente na água. No entanto, não baixe a guarda em torno deste Pokémon, ele pode atingir você com força com seu chifre. Goldeen adora nadar livremente em rios e lagoas.",
/*119*/"No outono, os machos Seaking podem ser vistos realizando danças de corte no leito do rio para cortejar as fêmeas. Durante esta temporada, a coloração do corpo deste Pokémon fica mais bonita. Seaking é muito protetor de seus ovos.",
/*120*/"A seção central de Staryu tem um órgão denominado de núcleo que brilha em vermelho vivo. Se você for a uma praia no final do verão, os núcleos brilhantes desses Pokémon parecem estrelas no céu. Staryu aparentemente se comunica com as estrelas no céu noturno piscando o núcleo vermelho no centro de seu corpo.",
/*121*/"A seção central de Starmie (o núcleo) brilha intensamente em sete cores. Devido à sua natureza luminosa, este Pokémon recebeu o apelido de &#8220;a joia do mar&#8221;.",
/*122*/"O Mr. Mime é um mestre da pantomima. Seus gestos e movimentos convencem os observadores de que algo invisível realmente existe. Uma vez que os observadores estão convencidos, a coisa invisível começa a existir como se fosse real.",
/*123*/"Scyther é incrivelmente rápido. Sua velocidade incrível aumenta a eficácia das foices gêmeas em seus antebraços. As foices deste Pokémon são tão eficazes que podem cortar troncos grossos com um único golpe.",
/*124*/"Jynx caminha ritmicamente, balançando e balançando os quadris como se estivesse dançando. Seus movimentos são tão atraentes que as pessoas que o veem são compelidas a balançar os quadris sem se preocupar com o que estão fazendo.",
/*125*/"Quando uma tempestade chega, gangues deste Pokémon competem entre si para escalar alturas que provavelmente serão atingidas por raios. Algumas cidades do mundo Pokémon usam Electabuzz no lugar dos pára-raios.",
/*126*/"Na batalha, Magmar sopra chamas intensamente quentes por todo o corpo para intimidar seu oponente. As explosões de fogo deste Pokémon criam ondas de calor que incendiam a grama e as árvores ao redor.",
/*127*/"Pinsir é incrivelmente forte. Ele pode agarrar um inimigo com o dobro de seu peso em seus chifres e levantá-lo facilmente. Os movimentos deste Pokémon tornam-se lentos em locais frios. Ele agarra sua presa com as pinças e as divide.",
/*128*/"Este Pokémon não fica satisfeito a menos que esteja furioso o tempo todo. Se não houver oponente para Tauros lutar, ele irá atacar árvores grossas e derrubá-las para se acalmar.",
/*129*/"Magikarp é uma desculpa patética para um Pokémon que só é capaz de bater e espirrar. No entanto, é na verdade um Pokémon muito resistente que pode sobreviver em qualquer corpo d'água, não importa o quão poluído esteja.",
/*130*/"Quando Magikarp evolui para Gyarados, suas células cerebrais sofrem uma transformação estrutural. Diz-se que essa transformação é a culpada pela natureza violenta desse Pokémon. Depois que Gyarados começa a se alastrar, seu sangue ferozmente violento não se acalma até que tenha queimado tudo.",
/*131*/"As pessoas levaram Lapras quase à extinção. À noite, diz-se que este Pokémon canta melancolicamente enquanto busca o que poucos outros de sua espécie ainda permanecem. Sua alta inteligência permite compreender a fala humana.",
/*132*/"Ditto reorganiza sua estrutura celular para se transformar em outras formas. No entanto, se tentar se transformar em algo contando com sua memória, esse Pokémon consegue errar os detalhes. Com sua surpreendente capacidade de metamorfose, pode conviver com qualquer coisa.",
/*133*/"Eevee tem uma composição genética instável que sofre uma mutação repentina devido ao ambiente em que vive. A radiação de várias pedras evolutivas do mundo Pokémon faz com que este Pokémon evolua em várias formas e tipos.",
/*134*/"Vaporeon sofreu uma mutação espontânea e cultivou barbatanas e brânquias que lhe permitem viver debaixo d'água. Este Pokémon tem a capacidade de controlar livremente a água. Sua composição celular é semelhante às moléculas de água.",
/*135*/"As células de Jolteon geram um baixo nível de eletricidade. Esse poder é amplificado pela eletricidade estática de sua pelagem, permitindo que o Pokémon solte raios. O pelo eriçado é feito de agulhas carregadas com eletricidade.",
/*136*/"O pelo macio de Flareon tem um objetivo funcional, liberar calor no ar para que seu corpo não fique excessivamente quente. A temperatura corporal deste Pokémon pode subir para um máximo de 1.650 graus Fahrenheit.",
/*137*/"Porygon é capaz de se reverter inteiramente de volta aos dados do programa e entrar no ciberespaço (espaço das comunicações por redes de computação). Este Pokémon é protegido contra cópia, portanto não pode ser duplicado por cópia.",
/*138*/"Omanyte é um dos Pokémon antigos e já extintos que foram regenerados a partir de fósseis por pessoas. Se atacado por um inimigo, ele se retira dentro de sua casca dura. Este Pokémon usa o ar armazenado em sua concha para afundar e subir na água e nada torcendo seus 10 tentáculos de maneira inteligente.",
/*139*/"Omastar usa seus tentáculos para capturar suas presas. Acredita-se que tenha se extinguido porque sua concha ficou muito grande e pesada, fazendo com que seus movimentos se tornassem muito lentos e pesados.",
/*140*/"Kabuto é um Pokémon que foi regenerado a partir de um fóssil. No entanto, em casos extremamente raros, exemplos vivos foram descobertos. O Pokémon não mudou em nada por 300 milhões de anos.",
/*141*/"Os Kabutops nadavam debaixo d'água para caçar suas presas nos tempos antigos. Aparentemente, o Pokémon estava evoluindo de morador de água para morar em terra, como é evidente desde o início da mudança em suas brânquias e pernas.",
/*142*/"Aerodactyl é um Pokémon da era dos dinossauros. Foi regenerado a partir de material genético extraído de âmbar. Imagina-se que tenha sido o rei dos céus nos tempos antigos.",
/*143*/"O dia típico de Snorlax consiste em nada mais do que comer e dormir. É um Pokémon tão dócil que há crianças que usam sua barriga expansiva como um lugar para brincar. Come quase 900 quilos de comida todos os dias.",
/*144*/"Articuno é um Pokémon pássaro lendário que pode controlar o gelo. O bater de suas asas esfria totalmente o ar. Como resultado, diz-se que quando este Pokémon voa, a neve cai. Com sua cauda longa de trás, sua forma voadora é magnífica.",
/*145*/"Zapdos é um Pokémon lendário de pássaros que tem a capacidade de controlar a eletricidade. Geralmente vive em nuvens de trovoada. O Pokémon ganha poder se for atingido por raios. Diz-se que este Pokémon lendário pássaro aparece quando o céu fica escuro e os raios caem.",
/*146*/"Moltres é um Pokémon pássaro lendário que tem a capacidade de controlar o fogo. Se este Pokémon for ferido, é dito que ele mergulha seu corpo no magma derretido de um vulcão para queimar e curar a si próprio.",
/*147*/"Dratini muda constantemente e descama sua pele velha. Faz isso porque a energia da vida dentro de seu corpo aumenta constantemente para atingir níveis incontroláveis.",
/*148*/"Dragonair armazena uma enorme quantidade de energia dentro de seu corpo. Diz-se que altera as condições climáticas nas proximidades, descarregando energia dos cristais no pescoço e na cauda.",
/*149*/"Dragonite é capaz de circular o globo em apenas 16 horas. É um Pokémon de bom coração que leva navios perdidos e afundando em uma tempestade à segurança da terra.",
/*150*/"Mewtwo é um Pokémon que foi criado por manipulação genética. No entanto, embora o poder científico dos humanos tenha criado o corpo desse Pokémon, eles não conseguiram dotar Mewtwo de um coração compassivo.",
/*151*/"Diz-se que Mew possui a composição genética de todos os Pokémon. Ele é capaz de se tornar invisível à vontade, por isso evita a percepção, mesmo que se aproxime das pessoas. Quando é visto detalhadamente através de um microscópio, os cabelos curtos, finos e delicados deste Pokémon mítico podem ser vistos."
]

botaoAlterarTema.addEventListener("click", () => {
    if (body.classList.contains("modo-escuro")) {
        body.classList.remove("modo-escuro");
        imagemTema.setAttribute("src", "./imagens/sun.png");
    } else {
        body.classList.add("modo-escuro");
        imagemTema.setAttribute("src", "./imagens/moon.png");
    }
})

fetchPokemons()