import {extraAnswerData} from './answer-translations.js';
const subjects=`
q1|un país que limita con Alemania|um país que faz fronteira com a Alemanha|un pays frontalier de l’Allemagne|ein Nachbarland Deutschlands|与德国陆地接壤的国家|ドイツと陸地で接する国
q2|una capital nacional de Sudamérica|uma capital nacional da América do Sul|une capitale nationale d’Amérique du Sud|eine nationale Hauptstadt in Südamerika|南美洲国家的首都|南米の国の首都
q3|uno de los cinco Grandes Lagos|um dos cinco Grandes Lagos|un des cinq Grands Lacs|einer der fünf Großen Seen|北美五大湖之一|北米五大湖の一つ
q4|un país atravesado por el ecuador en tierra|um país atravessado pelo equador em terra|un pays traversé par l’équateur sur terre|ein Land, dessen Landfläche der Äquator durchquert|赤道穿过陆地的国家|赤道が陸地を通る国
q5|uno de los siete continentes del modelo habitual|um dos sete continentes do modelo comum|un des sept continents du modèle courant|einer der sieben Kontinente im üblichen Modell|常见七大洲模型中的大洲|一般的な七大陸モデルの大陸
q6|un país que comparte frontera terrestre con Portugal|um país com fronteira terrestre com Portugal|un pays ayant une frontière terrestre avec le Portugal|ein Land mit Landgrenze zu Portugal|与葡萄牙陆地接壤的国家|ポルトガルと陸地で接する国
q7|un país que comparte frontera terrestre con Italia|um país com fronteira terrestre com a Itália|un pays ayant une frontière terrestre avec l’Italie|ein Land mit Landgrenze zu Italien|与意大利陆地接壤的国家|イタリアと陸地で接する国
q8|una de las ocho especies actuales de osos|uma das oito espécies atuais de ursos|une des huit espèces actuelles d’ours|eine der acht lebenden Bärenarten|八种现存熊类之一|現生の8種のクマの一つ
q9|un grupo de mamíferos que pone huevos|um grupo de mamíferos que põe ovos|un groupe de mammifères qui pondent des œufs|eine Gruppe eierlegender Säugetiere|卵生哺乳动物类群|卵を産む哺乳類の仲間
q10|un gran simio actual que no sea humano|um grande símio atual não humano|un grand singe actuel autre que l’humain|ein lebender Menschenaffe außer dem Menschen|人类以外的现存类人猿|人間以外の現生類人猿
q11|un animal de la familia de los felinos|um animal da família dos felinos|un animal de la famille des félidés|ein Tier aus der Katzenfamilie|猫科动物|ネコ科の動物
q12|uno de los tres grandes grupos actuales de anfibios|um dos três grupos atuais de anfíbios|un des trois groupes actuels d’amphibiens|eine der drei lebenden Amphibiengruppen|现存两栖动物的三大类群之一|現生両生類の3つの主要な仲間
q13|un ave que no puede volar|uma ave que não voa|un oiseau incapable de voler|ein flugunfähiger Vogel|不能飞的鸟|飛べない鳥
q14|una etapa del ciclo de vida de una mariposa|uma fase do ciclo de vida de uma borboleta|une étape du cycle de vie d’un papillon|eine Lebensphase eines Schmetterlings|蝴蝶生命周期中的阶段|チョウの一生の段階
q15|un planeta de nuestro sistema solar|um planeta do nosso sistema solar|une planète de notre système solaire|ein Planet unseres Sonnensystems|太阳系行星|太陽系の惑星
q16|un gas noble|um gás nobre|un gaz noble|ein Edelgas|稀有气体元素|希ガス元素
q17|una de las siete unidades básicas del SI|uma das sete unidades básicas do SI|une des sept unités de base du SI|eine der sieben SI-Basiseinheiten|七个国际单位制基本单位之一|SIの7つの基本単位
q18|un elemento cuyo símbolo químico tiene una letra|um elemento com símbolo químico de uma letra|un élément au symbole chimique d’une lettre|ein Element mit einem einbuchstabigen Symbol|化学符号只有一个字母的元素|元素記号が1文字の元素
q19|una de las cuatro bases del ADN|uma das quatro bases do DNA|une des quatre bases de l’ADN|eine der vier DNA-Basen|四种 DNA 碱基之一|DNAの4つの塩基
q20|una de las cuatro lunas galileanas de Júpiter|uma das quatro luas galileanas de Júpiter|une des quatre lunes galiléennes de Jupiter|einer der vier Galileischen Jupitermonde|木星四颗伽利略卫星之一|木星の4つのガリレオ衛星
q21|un estado entre sólido, líquido, gas y plasma|um estado entre sólido, líquido, gás e plasma|un état parmi solide, liquide, gaz et plasma|ein Zustand aus fest, flüssig, gasförmig und Plasma|固态、液态、气态和等离子态之一|固体・液体・気体・プラズマの状態
q22|un fruto seco culinario de la lista del juego|uma noz culinária da lista do jogo|un fruit à coque de la liste du jeu|eine kulinarische Nuss aus der Spielliste|游戏列表中的食用坚果|ゲーム一覧の食用ナッツ
q23|un cítrico de la lista del juego|uma fruta cítrica da lista do jogo|un agrume de la liste du jeu|eine Zitrusfrucht aus der Spielliste|游戏列表中的柑橘水果|ゲーム一覧の柑橘類
q24|una forma de pasta de la lista del juego|um formato de massa da lista do jogo|une forme de pâtes de la liste du jeu|eine Nudelform aus der Spielliste|游戏列表中的意面形状|ゲーム一覧のパスタの形
q25|un queso de la lista del juego|um queijo da lista do jogo|un fromage de la liste du jeu|eine Käsesorte aus der Spielliste|游戏列表中的奶酪|ゲーム一覧のチーズ
q26|un cereal o pseudocereal de la lista del juego|um cereal ou pseudocereal da lista do jogo|une céréale ou pseudocéréale de la liste du jeu|ein Getreide oder Pseudogetreide aus der Spielliste|游戏列表中的谷物或伪谷物|ゲーム一覧の穀物や擬似穀物
q27|una especia de la lista del juego|uma especiaria da lista do jogo|une épice de la liste du jeu|ein Gewürz aus der Spielliste|游戏列表中的香料|ゲーム一覧のスパイス
q28|una legumbre seca de la lista del juego|uma leguminosa seca da lista do jogo|un légume sec de la liste du jeu|eine Hülsenfrucht aus der Spielliste|游戏列表中的干豆类|ゲーム一覧の乾燥豆類
q29|una obra teatral de Shakespeare|uma peça de Shakespeare|une pièce de Shakespeare|ein Theaterstück von Shakespeare|莎士比亚戏剧|シェイクスピアの戯曲
q30|un instrumento de un cuarteto de cuerdas estándar|um instrumento de um quarteto de cordas padrão|un instrument d’un quatuor à cordes standard|ein Instrument im üblichen Streichquartett|标准弦乐四重奏的乐器|標準的な弦楽四重奏の楽器
q31|un instrumento de viento-madera de la lista del juego|um instrumento de sopro de madeira da lista do jogo|un bois de la liste du jeu|ein Holzblasinstrument aus der Spielliste|游戏列表中的木管乐器|ゲーム一覧の木管楽器
q32|un instrumento de viento-metal|um instrumento de sopro de metal|un instrument à vent de la famille des cuivres|ein Blechblasinstrument|铜管乐器|金管楽器
q33|una de las seis novelas completas de Jane Austen|um dos seis romances completos de Jane Austen|un des six romans achevés de Jane Austen|einer der sechs vollendeten Romane von Jane Austen|简·奥斯汀六部完整小说之一|ジェーン・オースティンの完成した6つの小説
q34|un tipo de pieza de ajedrez estándar|um tipo de peça de xadrez padrão|un type de pièce d’échecs standard|eine Schachfigur|标准国际象棋棋子|標準的なチェスの駒
q35|un color primario de luz del modelo RGB|uma cor primária da luz RGB|une couleur primaire de lumière du modèle RVB|eine Grundfarbe des Lichts im RGB-Modell|RGB 模型中的光三原色|RGBモデルの光の三原色
q36|una prueba olímpica de lanzamiento en atletismo|uma prova olímpica de lançamento no atletismo|une épreuve olympique de lancer en athlétisme|eine olympische Wurfdisziplin|奥运会田径投掷项目|オリンピック陸上の投てき種目
q37|un estilo de natación disputado individualmente en los Juegos|um estilo de natação disputado individualmente nos Jogos|une nage disputée individuellement aux Jeux|ein einzeln ausgetragener olympischer Schwimmstil|奥运会个人游泳项目泳姿|オリンピックの個人競技で使う泳法
q38|un torneo de Grand Slam de tenis|um torneio de Grand Slam de tênis|un tournoi du Grand Chelem de tennis|ein Tennis-Grand-Slam-Turnier|网球大满贯赛事|テニスのグランドスラム大会
q39|un aparato de gimnasia artística femenina|um aparelho de ginástica artística feminina|un agrès de gymnastique artistique féminine|ein Gerät im Frauen-Kunstturnen|女子竞技体操器械|女子体操競技の種目
q40|un aparato de gimnasia artística masculina|um aparelho de ginástica artística masculina|un agrès de gymnastique artistique masculine|ein Gerät im Männer-Kunstturnen|男子竞技体操器械|男子体操競技の種目
q41|un término de puntuación de un juego de tenis|um termo de pontuação de um game de tênis|un terme de score dans un jeu de tennis|ein Punktestandbegriff im Tennisspiel|网球一局中的计分术语|テニスのゲームの得点用語
q42|un arma de esgrima olímpica|uma arma da esgrima olímpica|une arme d’escrime olympique|eine olympische Fechtwaffe|奥运会击剑武器|オリンピックのフェンシングの剣
q43|un país soberano de Sudamérica|um país soberano da América do Sul|un pays souverain d’Amérique du Sud|ein souveränes Land in Südamerika|南美洲主权国家|南米の主権国家
q44|un país nórdico|um país nórdico|un pays nordique|ein nordisches Land|北欧国家|北欧の国
q45|un país miembro de la Unión Europea|um país membro da União Europeia|un pays membre de l’Union européenne|ein Mitgliedstaat der Europäischen Union|欧盟成员国|欧州連合の加盟国
q46|un país con costa en el Mediterráneo|um país com costa no Mediterrâneo|un pays avec une côte méditerranéenne|ein Land mit Mittelmeerküste|拥有地中海海岸线的国家|地中海に海岸を持つ国
q47|un país que comparte frontera terrestre con Brasil|um país com fronteira terrestre com o Brasil|un pays ayant une frontière terrestre avec le Brésil|ein Land mit Landgrenze zu Brasilien|与巴西陆地接壤的国家|ブラジルと陸地で接する国
q48|una capital nacional de Centroamérica|uma capital nacional da América Central|une capitale nationale d’Amérique centrale|eine nationale Hauptstadt in Mittelamerika|中美洲国家的首都|中米の国の首都
q49|uno de los ocho estados de EE. UU. cuyo nombre empieza por M|um dos oito estados dos EUA cujo nome começa com M|un des huit États américains commençant par M|einer der acht US-Bundesstaaten mit Anfangsbuchstaben M|英文名称以 M 开头的八个美国州之一|英語名がMで始まる米国の8州の一つ
q50|una especie actual de pingüino|uma espécie atual de pinguim|une espèce actuelle de manchot|eine lebende Pinguinart|现存企鹅物种|現生のペンギンの種類
q51|una especie actual de rinoceronte|uma espécie atual de rinoceronte|une espèce actuelle de rhinocéros|eine lebende Nashornart|现存犀牛物种|現生のサイの種類
q52|una especie actual de tortuga marina|uma espécie atual de tartaruga marinha|une espèce actuelle de tortue marine|eine lebende Meeresschildkrötenart|现存海龟物种|現生のウミガメの種類
q53|un grupo de insectos con metamorfosis completa|um grupo de insetos com metamorfose completa|un groupe d’insectes à métamorphose complète|eine Insektengruppe mit vollständiger Metamorphose|完全变态昆虫的主要类群|完全変態する昆虫の仲間
q54|un grupo actual de crocodilianos|um grupo atual de crocodilianos|un groupe actuel de crocodiliens|eine lebende Krokodilgruppe|现存鳄类类群|現生ワニの仲間
q55|una especie de ballena con barbas|uma espécie de baleia com barbatanas filtradoras|une espèce de baleine à fanons|eine Bartenwalart|须鲸物种|ヒゲクジラの種類
q56|un mamífero con alas que puede volar|um mamífero com asas que voa|un mammifère ailé capable de voler|ein Säugetier mit Flügeln und aktivem Flug|能主动飞行的有翼哺乳动物|翼があり飛べる哺乳類
q57|un elemento de gas noble|um elemento de gás nobre|un élément de gaz noble|ein Edelgaselement|稀有气体元素|希ガス元素
q58|un elemento cuyo símbolo empieza por C|um elemento cujo símbolo começa com C|un élément dont le symbole commence par C|ein Element, dessen Symbol mit C beginnt|化学符号以 C 开头的元素|元素記号がCで始まる元素
q59|un planeta enano reconocido por la UAI|um planeta anão reconhecido pela UAI|une planète naine reconnue par l’UAI|ein von der IAU anerkannter Zwergplanet|国际天文学联合会认可的矮行星|IAUが認定する準惑星
q60|una de las tres leyes de movimiento de Newton|uma das três leis do movimento de Newton|une des trois lois du mouvement de Newton|eines der drei Newtonschen Bewegungsgesetze|牛顿三大运动定律之一|ニュートンの3つの運動法則
q61|un tipo de radiación electromagnética|um tipo de radiação eletromagnética|un type de rayonnement électromagnétique|eine Art elektromagnetischer Strahlung|电磁辐射类型|電磁波の種類
q62|uno de los seis sabores de quarks|um dos seis sabores de quarks|une des six saveurs de quarks|eine der sechs Quark-Sorten|六种夸克味之一|クォークの6つのフレーバー
q63|una capa principal de la atmósfera terrestre|uma camada principal da atmosfera terrestre|une couche principale de l’atmosphère terrestre|eine Hauptschicht der Erdatmosphäre|地球大气层的主要层次|地球の大気の主要な層
q64|una forma de pasta|um formato de massa|une forme de pâtes|eine Nudelform|意面形状|パスタの形
q65|una fruta cítrica|uma fruta cítrica|un agrume|eine Zitrusfrucht|柑橘类水果|柑橘類の果物
q66|un tipo de queso|um tipo de queijo|un type de fromage|eine Käsesorte|奶酪种类|チーズの種類
q67|un fruto seco culinario comestible|uma noz culinária comestível|un fruit à coque culinaire|eine essbare kulinarische Nuss|食用坚果|食用ナッツ
q68|una especia culinaria|uma especiaria culinária|une épice de cuisine|ein Küchengewürz|烹饪香料|料理用スパイス
q69|un método de cocción|um método de preparo culinário|une méthode de cuisson|eine Garmethode|烹饪方法|調理法
q70|un grano de cereal|um grão de cereal|une céréale|eine Getreideart|谷物|穀物
q71|una obra de Shakespeare|uma obra de Shakespeare|une pièce de Shakespeare|ein Stück von Shakespeare|莎士比亚戏剧|シェイクスピアの戯曲
q72|un instrumento de cuerda orquestal estándar|um instrumento de cordas orquestral padrão|un instrument à cordes orchestral standard|ein übliches Orchester-Streichinstrument|标准管弦乐队弦乐器|標準的なオーケストラの弦楽器
q73|un instrumento principal de viento-madera|um instrumento principal de sopro de madeira|un instrument principal de la famille des bois|ein gängiges Holzblasinstrument|主要木管乐器|主な木管楽器
q74|una pintura de Vincent van Gogh|uma pintura de Vincent van Gogh|une peinture de Vincent van Gogh|ein Gemälde von Vincent van Gogh|梵高绘画作品|フィンセント・ファン・ゴッホの絵画
q75|una novela de Jane Austen|um romance de Jane Austen|un roman de Jane Austen|ein Roman von Jane Austen|简·奥斯汀小说|ジェーン・オースティンの小説
q76|un género dramático|um gênero dramático|un genre dramatique|ein dramatisches Genre|戏剧类型|演劇のジャンル
q77|una figura con al menos tres lados rectos|uma figura com pelo menos três lados retos|une figure avec au moins trois côtés droits|ein Vieleck mit mindestens drei geraden Seiten|至少有三条直边的平面图形|3本以上の直線で囲まれた図形
q78|un deporte de raqueta olímpico de verano|um esporte de raquete olímpico de verão|un sport de raquette olympique d’été|eine olympische Sommersportart mit Schläger|夏季奥运会球拍运动|夏季オリンピックのラケット競技
q79|un deporte olímpico de invierno|um esporte olímpico de inverno|un sport olympique d’hiver|eine Wintersportart bei Olympia|冬季奥运会运动项目|冬季オリンピックの競技
q80|una prueba de campo del atletismo|uma prova de campo do atletismo|une épreuve de concours en athlétisme|eine Sprung- oder Wurfdisziplin der Leichtathletik|田径田赛项目|陸上のフィールド種目
q81|una posición de fútbol|uma posição no futebol|un poste au football|eine Position im Fußball|足球队位置|サッカーのポジション
q82|una forma de eliminar a un bateador en críquet|uma forma de eliminar um batedor no críquete|une façon d’éliminer un batteur au cricket|eine Art, einen Schlagmann im Cricket auszumachen|板球击球手出局方式|クリケットの打者のアウトの種類
q83|una acción de puntuación de rugby union|uma ação de pontuação no rugby union|une action qui marque des points au rugby à XV|eine Wertungsaktion im Rugby Union|十五人制橄榄球得分方式|ラグビーユニオンの得点方法
q84|un golpe de tenis|uma jogada de tênis|un coup au tennis|ein Tennisschlag|网球击球技术|テニスのショット
`;
const prefixes=['Nombra un ejemplo: ','Dê um exemplo: ','Donnez un exemple : ','Nenne ein Beispiel: ','举出一个例子：','例を一つ挙げて：'];
export const promptTranslations=Object.fromEntries(subjects.trim().split('\n').map(line=>{const [id,...values]=line.split('|');return [id,values.map((v,i)=>prefixes[i]+v)];}));
const replacements=`
q22|una fruta tropical|uma fruta tropical|un fruit tropical|eine tropische Frucht|热带水果|熱帯の果物
q23|una variedad culinaria de melón|uma variedade culinária de melão|une variété culinaire de melon|eine Melonensorte|烹饪中的瓜类水果品种|食用のメロンやスイカの種類
q24|una pasta italiana rellena|uma massa italiana recheada|des pâtes italiennes farcies|eine gefüllte italienische Nudelform|意大利夹馅意面|イタリアの詰め物入りパスタ
q25|un queso fresco|um queijo fresco|un fromage frais|ein Frischkäse|新鲜奶酪|フレッシュチーズ
q27|una especia de corteza o tallo subterráneo|uma especiaria de casca ou caule subterrâneo|une épice d’écorce ou de tige souterraine|ein Gewürz aus Rinde oder unterirdischem Spross|树皮或地下茎制成的香料|樹皮や地下茎から作るスパイス
q29|una tragedia de Shakespeare|uma tragédia de Shakespeare|une tragédie de Shakespeare|eine Tragödie von Shakespeare|莎士比亚悲剧|シェイクスピアの悲劇
q31|un instrumento de viento de lengüeta simple|um instrumento de sopro de palheta simples|un instrument à anche simple|ein Holzblasinstrument mit einfachem Rohrblatt|单簧片木管乐器|シングルリードの木管楽器
q33|un personaje de Orgullo y prejuicio|um personagem de Orgulho e Preconceito|un personnage d’Orgueil et Préjugés|eine Figur aus Stolz und Vorurteil|《傲慢与偏见》人物|『高慢と偏見』の登場人物
q57|un elemento químico del grupo 14|um elemento químico do grupo 14|un élément chimique du groupe 14|ein chemisches Element der Gruppe 14|第 14 族化学元素|第14族の元素
`;
for(const line of replacements.trim().split('\n')){const [id,...values]=line.split('|');promptTranslations[id]=values.map((v,i)=>prefixes[i]+v);}
const terms=`
Germany|Alemania|Alemanha|Allemagne|Deutschland|德国|ドイツ
France|Francia|França|France|Frankreich|法国|フランス
Poland|Polonia|Polônia|Pologne|Polen|波兰|ポーランド
Austria|Austria|Áustria|Autriche|Österreich|奥地利|オーストリア
Switzerland|Suiza|Suíça|Suisse|Schweiz|瑞士|スイス
Belgium|Bélgica|Bélgica|Belgique|Belgien|比利时|ベルギー
Netherlands|Países Bajos|Países Baixos|Pays-Bas|Niederlande|荷兰|オランダ
Denmark|Dinamarca|Dinamarca|Danemark|Dänemark|丹麦|デンマーク
Czechia|Chequia|Tchéquia|Tchéquie|Tschechien|捷克|チェコ
Luxembourg|Luxemburgo|Luxemburgo|Luxembourg|Luxemburg|卢森堡|ルクセンブルク
Portugal|Portugal|Portugal|Portugal|Portugal|葡萄牙|ポルトガル
Italy|Italia|Itália|Italie|Italien|意大利|イタリア
Spain|España|Espanha|Espagne|Spanien|西班牙|スペイン
Brazil|Brasil|Brasil|Brésil|Brasilien|巴西|ブラジル
Argentina|Argentina|Argentina|Argentine|Argentinien|阿根廷|アルゼンチン
Chile|Chile|Chile|Chili|Chile|智利|チリ
Peru|Perú|Peru|Pérou|Peru|秘鲁|ペルー
Colombia|Colombia|Colômbia|Colombie|Kolumbien|哥伦比亚|コロンビア
Ecuador|Ecuador|Equador|Équateur|Ecuador|厄瓜多尔|エクアドル
Uruguay|Uruguay|Uruguai|Uruguay|Uruguay|乌拉圭|ウルグアイ
Paraguay|Paraguay|Paraguai|Paraguay|Paraguay|巴拉圭|パラグアイ
Bolivia|Bolivia|Bolívia|Bolivie|Bolivien|玻利维亚|ボリビア
Venezuela|Venezuela|Venezuela|Venezuela|Venezuela|委内瑞拉|ベネズエラ
Guyana|Guyana|Guiana|Guyana|Guyana|圭亚那|ガイアナ
Suriname|Surinam|Suriname|Suriname|Suriname|苏里南|スリナム
Sweden|Suecia|Suécia|Suède|Schweden|瑞典|スウェーデン
Norway|Noruega|Noruega|Norvège|Norwegen|挪威|ノルウェー
Finland|Finlandia|Finlândia|Finlande|Finnland|芬兰|フィンランド
Iceland|Islandia|Islândia|Islande|Island|冰岛|アイスランド
Greece|Grecia|Grécia|Grèce|Griechenland|希腊|ギリシャ
Turkey|Turquía|Turquia|Turquie|Türkei|土耳其|トルコ
Egypt|Egipto|Egito|Égypte|Ägypten|埃及|エジプト
Morocco|Marruecos|Marrocos|Maroc|Marokko|摩洛哥|モロッコ
Israel|Israel|Israel|Israël|Israel|以色列|イスラエル
Croatia|Croacia|Croácia|Croatie|Kroatien|克罗地亚|クロアチア
Cyprus|Chipre|Chipre|Chypre|Zypern|塞浦路斯|キプロス
Malta|Malta|Malta|Malte|Malta|马耳他|マルタ
Algeria|Argelia|Argélia|Algérie|Algerien|阿尔及利亚|アルジェリア
Tunisia|Túnez|Tunísia|Tunisie|Tunesien|突尼斯|チュニジア
Libya|Libia|Líbia|Libye|Libyen|利比亚|リビア
Lebanon|Líbano|Líbano|Liban|Libanon|黎巴嫩|レバノン
Syria|Siria|Síria|Syrie|Syrien|叙利亚|シリア
Albania|Albania|Albânia|Albanie|Albanien|阿尔巴尼亚|アルバニア
Montenegro|Montenegro|Montenegro|Monténégro|Montenegro|黑山|モンテネグロ
Bosnia and Herzegovina|Bosnia y Herzegovina|Bósnia e Herzegovina|Bosnie-Herzégovine|Bosnien und Herzegowina|波黑|ボスニア・ヘルツェゴビナ
Slovenia|Eslovenia|Eslovênia|Slovénie|Slowenien|斯洛文尼亚|スロベニア
Slovakia|Eslovaquia|Eslováquia|Slovaquie|Slowakei|斯洛伐克|スロバキア
Hungary|Hungría|Hungria|Hongrie|Ungarn|匈牙利|ハンガリー
Ireland|Irlanda|Irlanda|Irlande|Irland|爱尔兰|アイルランド
Romania|Rumanía|Romênia|Roumanie|Rumänien|罗马尼亚|ルーマニア
Bulgaria|Bulgaria|Bulgária|Bulgarie|Bulgarien|保加利亚|ブルガリア
Estonia|Estonia|Estônia|Estonie|Estland|爱沙尼亚|エストニア
Latvia|Letonia|Letônia|Lettonie|Lettland|拉脱维亚|ラトビア
Lithuania|Lituania|Lituânia|Lituanie|Litauen|立陶宛|リトアニア
Russia|Rusia|Rússia|Russie|Russland|俄罗斯|ロシア
Ukraine|Ucrania|Ucrânia|Ukraine|Ukraine|乌克兰|ウクライナ
Belarus|Bielorrusia|Bielorrússia|Biélorussie|Belarus|白俄罗斯|ベラルーシ
Georgia|Georgia|Geórgia|Géorgie|Georgien|格鲁吉亚|ジョージア
Armenia|Armenia|Armênia|Arménie|Armenien|亚美尼亚|アルメニア
Azerbaijan|Azerbaiyán|Azerbaijão|Azerbaïdjan|Aserbaidschan|阿塞拜疆|アゼルバイジャン
Iran|Irán|Irã|Iran|Iran|伊朗|イラン
Iraq|Irak|Iraque|Irak|Irak|伊拉克|イラク
China|China|China|Chine|China|中国|中国
India|India|Índia|Inde|Indien|印度|インド
Japan|Japón|Japão|Japon|Japan|日本|日本
Canada|Canadá|Canadá|Canada|Kanada|加拿大|カナダ
Mexico|México|México|Mexique|Mexiko|墨西哥|メキシコ
United States|Estados Unidos|Estados Unidos|États-Unis|Vereinigte Staaten|美国|アメリカ合衆国
Guatemala|Guatemala|Guatemala|Guatemala|Guatemala|危地马拉|グアテマラ
Belize|Belice|Belize|Belize|Belize|伯利兹|ベリーズ
Monaco|Mónaco|Mônaco|Monaco|Monaco|摩纳哥|モナコ
Andorra|Andorra|Andorra|Andorre|Andorra|安道尔|アンドラ
Liechtenstein|Liechtenstein|Liechtenstein|Liechtenstein|Liechtenstein|列支敦士登|リヒテンシュタイン
North Macedonia|Macedonia del Norte|Macedônia do Norte|Macédoine du Nord|Nordmazedonien|北马其顿|北マケドニア
Mongolia|Mongolia|Mongólia|Mongolie|Mongolei|蒙古|モンゴル
North Korea|Corea del Norte|Coreia do Norte|Corée du Nord|Nordkorea|朝鲜|北朝鮮
Vietnam|Vietnam|Vietnã|Viêt Nam|Vietnam|越南|ベトナム
Laos|Laos|Laos|Laos|Laos|老挝|ラオス
Myanmar|Myanmar|Mianmar|Myanmar|Myanmar|缅甸|ミャンマー
Bhutan|Bután|Butão|Bhoutan|Bhutan|不丹|ブータン
Nepal|Nepal|Nepal|Népal|Nepal|尼泊尔|ネパール
Pakistan|Pakistán|Paquistão|Pakistan|Pakistan|巴基斯坦|パキスタン
Bangladesh|Bangladés|Bangladesh|Bangladesh|Bangladesch|孟加拉国|バングラデシュ
Afghanistan|Afganistán|Afeganistão|Afghanistan|Afghanistan|阿富汗|アフガニスタン
Tajikistan|Tayikistán|Tajiquistão|Tadjikistan|Tadschikistan|塔吉克斯坦|タジキスタン
Kyrgyzstan|Kirguistán|Quirguistão|Kirghizistan|Kirgisistan|吉尔吉斯斯坦|キルギス
Kazakhstan|Kazajistán|Cazaquistão|Kazakhstan|Kasachstan|哈萨克斯坦|カザフスタン
Kenya|Kenia|Quênia|Kenya|Kenia|肯尼亚|ケニア
Uganda|Uganda|Uganda|Ouganda|Uganda|乌干达|ウガンダ
Tanzania|Tanzania|Tanzânia|Tanzanie|Tansania|坦桑尼亚|タンザニア
South Sudan|Sudán del Sur|Sudão do Sul|Soudan du Sud|Südsudan|南苏丹|南スーダン
Ethiopia|Etiopía|Etiópia|Éthiopie|Äthiopien|埃塞俄比亚|エチオピア
Somalia|Somalia|Somália|Somalie|Somalia|索马里|ソマリア
Rwanda|Ruanda|Ruanda|Rwanda|Ruanda|卢旺达|ルワンダ
Burundi|Burundi|Burundi|Burundi|Burundi|布隆迪|ブルンジ
Zambia|Zambia|Zâmbia|Zambie|Sambia|赞比亚|ザンビア
Malawi|Malaui|Malawi|Malawi|Malawi|马拉维|マラウイ
Mozambique|Mozambique|Moçambique|Mozambique|Mosambik|莫桑比克|モザンビーク
Democratic Republic of the Congo|República Democrática del Congo|República Democrática do Congo|République démocratique du Congo|Demokratische Republik Kongo|刚果民主共和国|コンゴ民主共和国
Republic of the Congo|República del Congo|República do Congo|République du Congo|Republik Kongo|刚果共和国|コンゴ共和国
Gabon|Gabón|Gabão|Gabon|Gabun|加蓬|ガボン
Indonesia|Indonesia|Indonésia|Indonésie|Indonesien|印度尼西亚|インドネシア
Sao Tome and Principe|Santo Tomé y Príncipe|São Tomé e Príncipe|Sao Tomé-et-Principe|São Tomé und Príncipe|圣多美和普林西比|サントメ・プリンシペ
Africa|África|África|Afrique|Afrika|非洲|アフリカ
Asia|Asia|Ásia|Asie|Asien|亚洲|アジア
Europe|Europa|Europa|Europe|Europa|欧洲|ヨーロッパ
North America|América del Norte|América do Norte|Amérique du Nord|Nordamerika|北美洲|北アメリカ
South America|América del Sur|América do Sul|Amérique du Sud|Südamerika|南美洲|南アメリカ
Antarctica|Antártida|Antártida|Antarctique|Antarktika|南极洲|南極
Australia|Australia|Austrália|Australie|Australien|澳大利亚|オーストラリア
Mercury|Mercurio|Mercúrio|Mercure|Merkur|水星|水星
Venus|Venus|Vênus|Vénus|Venus|金星|金星
Earth|Tierra|Terra|Terre|Erde|地球|地球
Mars|Marte|Marte|Mars|Mars|火星|火星
Jupiter|Júpiter|Júpiter|Jupiter|Jupiter|木星|木星
Saturn|Saturno|Saturno|Saturne|Saturn|土星|土星
Uranus|Urano|Urano|Uranus|Uranus|天王星|天王星
Neptune|Neptuno|Netuno|Neptune|Neptun|海王星|海王星
Pluto|Plutón|Plutão|Pluton|Pluto|冥王星|冥王星
Ceres|Ceres|Ceres|Cérès|Ceres|谷神星|ケレス
Eris|Eris|Éris|Éris|Eris|阋神星|エリス
Haumea|Haumea|Haumea|Hauméa|Haumea|妊神星|ハウメア
Makemake|Makemake|Makemake|Makémaké|Makemake|鸟神星|マケマケ
Helium|Helio|Hélio|Hélium|Helium|氦|ヘリウム
Neon|Neón|Neônio|Néon|Neon|氖|ネオン
Argon|Argón|Argônio|Argon|Argon|氩|アルゴン
Krypton|Kriptón|Criptônio|Krypton|Krypton|氪|クリプトン
Xenon|Xenón|Xenônio|Xénon|Xenon|氙|キセノン
Radon|Radón|Radônio|Radon|Radon|氡|ラドン
Oganesson|Oganesón|Oganessônio|Oganesson|Oganesson|鿫|オガネソン
Carbon|Carbono|Carbono|Carbone|Kohlenstoff|碳|炭素
Calcium|Calcio|Cálcio|Calcium|Calcium|钙|カルシウム
Chlorine|Cloro|Cloro|Chlore|Chlor|氯|塩素
Copper|Cobre|Cobre|Cuivre|Kupfer|铜|銅
Cobalt|Cobalto|Cobalto|Cobalt|Cobalt|钴|コバルト
Chromium|Cromo|Cromo|Chrome|Chrom|铬|クロム
Cadmium|Cadmio|Cádmio|Cadmium|Cadmium|镉|カドミウム
Caesium|Cesio|Césio|Césium|Caesium|铯|セシウム
Cerium|Cerio|Cério|Cérium|Cer|铈|セリウム
Curium|Curio|Cúrio|Curium|Curium|锔|キュリウム
Californium|Californio|Califórnio|Californium|Californium|锎|カリホルニウム
Copernicium|Copernicio|Copernício|Copernicium|Copernicium|鎶|コペルニシウム
Hydrogen|Hidrógeno|Hidrogênio|Hydrogène|Wasserstoff|氢|水素
Boron|Boro|Boro|Bore|Bor|硼|ホウ素
Nitrogen|Nitrógeno|Nitrogênio|Azote|Stickstoff|氮|窒素
Oxygen|Oxígeno|Oxigênio|Oxygène|Sauerstoff|氧|酸素
Fluorine|Flúor|Flúor|Fluor|Fluor|氟|フッ素
Phosphorus|Fósforo|Fósforo|Phosphore|Phosphor|磷|リン
Sulfur|Azufre|Enxofre|Soufre|Schwefel|硫|硫黄
Potassium|Potasio|Potássio|Potassium|Kalium|钾|カリウム
Vanadium|Vanadio|Vanádio|Vanadium|Vanadium|钒|バナジウム
Yttrium|Itrio|Ítrio|Yttrium|Yttrium|钇|イットリウム
Iodine|Yodo|Iodo|Iode|Iod|碘|ヨウ素
Tungsten|Tungsteno|Tungstênio|Tungstène|Wolfram|钨|タングステン
Uranium|Uranio|Urânio|Uranium|Uran|铀|ウラン
Lithium|Litio|Lítio|Lithium|Lithium|锂|リチウム
Sodium|Sodio|Sódio|Sodium|Natrium|钠|ナトリウム
Rubidium|Rubidio|Rubídio|Rubidium|Rubidium|铷|ルビジウム
Francium|Francio|Frâncio|Francium|Francium|钫|フランシウム
Beryllium|Berilio|Berílio|Béryllium|Beryllium|铍|ベリリウム
Magnesium|Magnesio|Magnésio|Magnésium|Magnesium|镁|マグネシウム
Strontium|Estroncio|Estrôncio|Strontium|Strontium|锶|ストロンチウム
Barium|Bario|Bário|Baryum|Barium|钡|バリウム
Radium|Radio|Rádio|Radium|Radium|镭|ラジウム
Bromine|Bromo|Bromo|Brome|Brom|溴|臭素
Astatine|Astato|Astato|Astate|Astat|砹|アスタチン
Tennessine|Teneso|Tenesso|Tennesse|Tenness|鿬|テネシン
Adenine|Adenina|Adenina|Adénine|Adenin|腺嘌呤|アデニン
Thymine|Timina|Timina|Thymine|Thymin|胸腺嘧啶|チミン
Cytosine|Citosina|Citosina|Cytosine|Cytosin|胞嘧啶|シトシン
Guanine|Guanina|Guanina|Guanine|Guanin|鸟嘌呤|グアニン
Solid|Sólido|Sólido|Solide|Fest|固态|固体
Liquid|Líquido|Líquido|Liquide|Flüssig|液态|液体
Gas|Gas|Gás|Gaz|Gas|气态|気体
Plasma|Plasma|Plasma|Plasma|Plasma|等离子态|プラズマ
Metre|Metro|Metro|Mètre|Meter|米|メートル
Kilogram|Kilogramo|Quilograma|Kilogramme|Kilogramm|千克|キログラム
Second|Segundo|Segundo|Seconde|Sekunde|秒|秒
Ampere|Amperio|Ampere|Ampère|Ampere|安培|アンペア
Kelvin|Kelvin|Kelvin|Kelvin|Kelvin|开尔文|ケルビン
Mole|Mol|Mol|Mole|Mol|摩尔|モル
Candela|Candela|Candela|Candela|Candela|坎德拉|カンデラ
Proton|Protón|Próton|Proton|Proton|质子|陽子
Neutron|Neutrón|Nêutron|Neutron|Neutron|中子|中性子
Electron|Electrón|Elétron|Électron|Elektron|电子|電子
Troposphere|Troposfera|Troposfera|Troposphère|Troposphäre|对流层|対流圏
Stratosphere|Estratosfera|Estratosfera|Stratosphère|Stratosphäre|平流层|成層圏
Mesosphere|Mesosfera|Mesosfera|Mésosphère|Mesosphäre|中间层|中間圏
Thermosphere|Termosfera|Termosfera|Thermosphère|Thermosphäre|热层|熱圏
Exosphere|Exosfera|Exosfera|Exosphère|Exosphäre|外逸层|外気圏
Lion|León|Leão|Lion|Löwe|狮子|ライオン
Tiger|Tigre|Tigre|Tigre|Tiger|老虎|トラ
Leopard|Leopardo|Leopardo|Léopard|Leopard|豹|ヒョウ
Jaguar|Jaguar|Onça-pintada|Jaguar|Jaguar|美洲豹|ジャガー
Cheetah|Guepardo|Guepardo|Guépard|Gepard|猎豹|チーター
Lynx|Lince|Lince|Lynx|Luchs|猞猁|オオヤマネコ
Puma|Puma|Puma|Puma|Puma|美洲狮|ピューマ
Snow leopard|Leopardo de las nieves|Leopardo-das-neves|Léopard des neiges|Schneeleopard|雪豹|ユキヒョウ
Dog|Perro|Cão|Chien|Hund|狗|犬
Wolf|Lobo|Lobo|Loup|Wolf|狼|オオカミ
Red fox|Zorro rojo|Raposa-vermelha|Renard roux|Rotfuchs|赤狐|アカギツネ
Arctic fox|Zorro ártico|Raposa-do-ártico|Renard polaire|Polarfuchs|北极狐|ホッキョクギツネ
Coyote|Coyote|Coiote|Coyote|Kojote|郊狼|コヨーテ
Golden jackal|Chacal dorado|Chacal-dourado|Chacal doré|Goldschakal|金豺|キンイロジャッカル
African wild dog|Licaón|Cão-selvagem-africano|Lycaon|Afrikanischer Wildhund|非洲野犬|リカオン
Dhole|Cuón|Dhole|Dhole|Rothund|豺|ドール
Raccoon dog|Perro mapache|Cão-guaxinim|Chien viverrin|Marderhund|貉|タヌキ
Fennec fox|Fénec|Feneco|Fennec|Fennek|耳廓狐|フェネック
Gorilla|Gorila|Gorila|Gorille|Gorilla|大猩猩|ゴリラ
Chimpanzee|Chimpancé|Chimpanzé|Chimpanzé|Schimpanse|黑猩猩|チンパンジー
Bonobo|Bonobo|Bonobo|Bonobo|Bonobo|倭黑猩猩|ボノボ
Orangutan|Orangután|Orangotango|Orang-outan|Orang-Utan|红毛猩猩|オランウータン
Platypus|Ornitorrinco|Ornitorrinco|Ornithorynque|Schnabeltier|鸭嘴兽|カモノハシ
Echidna|Equidna|Equidna|Échidné|Ameisenigel|针鼹|ハリモグラ
Polar bear|Oso polar|Urso-polar|Ours polaire|Eisbär|北极熊|ホッキョクグマ
Brown bear|Oso pardo|Urso-pardo|Ours brun|Braunbär|棕熊|ヒグマ
American black bear|Oso negro americano|Urso-negro-americano|Ours noir américain|Amerikanischer Schwarzbär|美洲黑熊|アメリカクロクマ
Asian black bear|Oso negro asiático|Urso-negro-asiático|Ours noir asiatique|Asiatischer Schwarzbär|亚洲黑熊|ツキノワグマ
Giant panda|Panda gigante|Panda-gigante|Panda géant|Großer Panda|大熊猫|ジャイアントパンダ
Sun bear|Oso malayo|Urso-malaio|Ours malais|Malaienbär|马来熊|マレーグマ
Sloth bear|Oso bezudo|Urso-beiçudo|Ours lippu|Lippenbär|懒熊|ナマケグマ
Spectacled bear|Oso de anteojos|Urso-de-óculos|Ours à lunettes|Brillenbär|眼镜熊|メガネグマ
Frog|Rana|Rã|Grenouille|Frosch|蛙|カエル
Salamander|Salamandra|Salamandra|Salamandre|Salamander|蝾螈|サンショウウオ
Caecilian|Cecilia|Cecília|Cécilie|Schleichenlurch|蚓螈|アシナシイモリ
Ostrich|Avestruz|Avestruz|Autruche|Strauß|鸵鸟|ダチョウ
Emu|Emú|Emu|Émeu|Emu|鸸鹋|エミュー
Cassowary|Casuario|Casuar|Casoar|Kasuar|鹤鸵|ヒクイドリ
Kiwi|Kiwi|Kiwi|Kiwi|Kiwi|几维鸟|キーウィ
Penguin|Pingüino|Pinguim|Manchot|Pinguin|企鹅|ペンギン
Rhea|Ñandú|Ema|Nandou|Nandu|美洲鸵|レア
Kakapo|Kakapo|Kakapo|Kakapo|Kakapo|鸮鹦鹉|カカポ
Takahe|Takahē|Takahe|Takahé|Takahe|南秧鸡|タカヘ
Egg|Huevo|Ovo|Œuf|Ei|卵|卵
Larva|Larva|Larva|Larve|Larve|幼虫|幼虫
Pupa|Pupa|Pupa|Chrysalide|Puppe|蛹|さなぎ
Adult|Adulto|Adulto|Adulte|Imago|成虫|成虫
Crab|Cangrejo|Caranguejo|Crabe|Krabbe|蟹|カニ
Lobster|Langosta|Lagosta|Homard|Hummer|龙虾|ロブスター
Shrimp|Camarón|Camarão|Crevette|Garnele|虾|エビ
Prawn|Langostino|Camarão grande|Crevette bouquet|Großgarnele|对虾|クルマエビ
Crayfish|Cangrejo de río|Lagostim|Écrevisse|Flusskrebs|螯虾|ザリガニ
Krill|Krill|Krill|Krill|Krill|磷虾|オキアミ
Spider|Araña|Aranha|Araignée|Spinne|蜘蛛|クモ
Scorpion|Escorpión|Escorpião|Scorpion|Skorpion|蝎子|サソリ
Tick|Garrapata|Carrapato|Tique|Zecke|蜱|マダニ
Mite|Ácaro|Ácaro|Acarien|Milbe|螨|ダニ
Mouse|Ratón|Camundongo|Souris|Maus|小鼠|ハツカネズミ
Rat|Rata|Rato|Rat|Ratte|大鼠|ドブネズミ
Squirrel|Ardilla|Esquilo|Écureuil|Eichhörnchen|松鼠|リス
Beaver|Castor|Castor|Castor|Biber|河狸|ビーバー
Hamster|Hámster|Hamster|Hamster|Hamster|仓鼠|ハムスター
Guinea pig|Cobaya|Porquinho-da-índia|Cochon d’Inde|Meerschweinchen|豚鼠|モルモット
Capybara|Capibara|Capivara|Capybara|Wasserschwein|水豚|カピバラ
Porcupine|Puercoespín|Porco-espinho|Porc-épic|Stachelschwein|豪猪|ヤマアラシ
Chinchilla|Chinchilla|Chinchila|Chinchilla|Chinchilla|毛丝鼠|チンチラ
Kangaroo|Canguro|Canguru|Kangourou|Känguru|袋鼠|カンガルー
Koala|Koala|Coala|Koala|Koala|考拉|コアラ
Wombat|Wombat|Vombate|Wombat|Wombat|袋熊|ウォンバット
Wallaby|Ualabí|Wallaby|Wallaby|Wallaby|小袋鼠|ワラビー
Opossum|Zarigüeya|Gambá|Opossum|Opossum|负鼠|オポッサム
Tasmanian devil|Demonio de Tasmania|Diabo-da-tasmânia|Diable de Tasmanie|Tasmanischer Teufel|袋獾|タスマニアデビル
Quokka|Quokka|Quokka|Quokka|Quokka|短尾矮袋鼠|クオッカ
Sugar glider|Petauro del azúcar|Petauro-do-açúcar|Phalanger volant|Kurzkopfgleitbeutler|蜜袋鼯|フクロモモンガ
Numbat|Numbat|Numbat|Numbat|Numbat|袋食蚁兽|フクロアリクイ
Bandicoot|Bandicut|Bandicoot|Bandicoot|Bandikut|袋狸|バンディクート
Violin|Violín|Violino|Violon|Geige|小提琴|ヴァイオリン
Viola|Viola|Viola|Alto|Bratsche|中提琴|ヴィオラ
Cello|Violonchelo|Violoncelo|Violoncelle|Cello|大提琴|チェロ
Double bass|Contrabajo|Contrabaixo|Contrebasse|Kontrabass|低音提琴|コントラバス
Flute|Flauta|Flauta|Flûte|Flöte|长笛|フルート
Clarinet|Clarinete|Clarinete|Clarinette|Klarinette|单簧管|クラリネット
Oboe|Oboe|Oboé|Hautbois|Oboe|双簧管|オーボエ
Bassoon|Fagot|Fagote|Basson|Fagott|巴松|ファゴット
Piccolo|Flautín|Flautim|Piccolo|Piccolo|短笛|ピッコロ
English horn|Corno inglés|Corne inglês|Cor anglais|Englischhorn|英国管|コールアングレ
Saxophone|Saxofón|Saxofone|Saxophone|Saxofon|萨克斯|サクソフォン
Recorder|Flauta dulce|Flauta doce|Flûte à bec|Blockflöte|竖笛|リコーダー
Trumpet|Trompeta|Trompete|Trompette|Trompete|小号|トランペット
Trombone|Trombón|Trombone|Trombone|Posaune|长号|トロンボーン
Tuba|Tuba|Tuba|Tuba|Tuba|大号|チューバ
French horn|Trompa|Trompa|Cor|Horn|圆号|ホルン
Cornet|Corneta|Corneta|Cornet|Kornett|短号|コルネット
Euphonium|Bombardino|Eufônio|Euphonium|Euphonium|次中音号|ユーフォニアム
Guitar|Guitarra|Violão|Guitare|Gitarre|吉他|ギター
Harp|Arpa|Harpa|Harpe|Harfe|竖琴|ハープ
Piano|Piano|Piano|Piano|Klavier|钢琴|ピアノ
Organ|Órgano|Órgão|Orgue|Orgel|管风琴|オルガン
Drum|Tambor|Tambor|Tambour|Trommel|鼓|ドラム
King|Rey|Rei|Roi|König|王|キング
Queen|Reina|Rainha|Reine|Dame|后|クイーン
Rook|Torre|Torre|Tour|Turm|车|ルーク
Bishop|Alfil|Bispo|Fou|Läufer|象|ビショップ
Knight|Caballo|Cavalo|Cavalier|Springer|马|ナイト
Pawn|Peón|Peão|Pion|Bauer|兵|ポーン
Red|Rojo|Vermelho|Rouge|Rot|红色|赤
Green|Verde|Verde|Vert|Grün|绿色|緑
Blue|Azul|Azul|Bleu|Blau|蓝色|青
Orange|Naranja|Laranja|Orange|Orange|橙子~橙色|オレンジ
Purple|Morado|Roxo|Violet|Violett|紫色|紫
Cyan|Cian|Ciano|Cyan|Cyan|青色|シアン
Magenta|Magenta|Magenta|Magenta|Magenta|品红|マゼンタ
Yellow|Amarillo|Amarelo|Jaune|Gelb|黄色|黄
Black|Negro|Preto|Noir|Schwarz|黑色|黒
White|Blanco|Branco|Blanc|Weiß|白色|白
Pink|Rosa|Rosa|Rose|Rosa|粉色|ピンク
Brown|Marrón|Marrom|Brun|Braun|棕色|茶色
Triangle|Triángulo|Triângulo|Triangle|Dreieck|三角形|三角形
Square|Cuadrado|Quadrado|Carré|Quadrat|正方形|正方形
Rectangle|Rectángulo|Retângulo|Rectangle|Rechteck|长方形|長方形
Pentagon|Pentágono|Pentágono|Pentagone|Fünfeck|五边形|五角形
Hexagon|Hexágono|Hexágono|Hexagone|Sechseck|六边形|六角形
Octagon|Octágono|Octógono|Octogone|Achteck|八边形|八角形
Sphere|Esfera|Esfera|Sphère|Kugel|球体|球
Cube|Cubo|Cubo|Cube|Würfel|立方体|立方体
Cone|Cono|Cone|Cône|Kegel|圆锥|円錐
Cylinder|Cilindro|Cilindro|Cylindre|Zylinder|圆柱|円柱
Pyramid|Pirámide|Pirâmide|Pyramide|Pyramide|棱锥|角錐
Football|Fútbol|Futebol|Football|Fußball|足球|サッカー
Basketball|Baloncesto|Basquete|Basket-ball|Basketball|篮球|バスケットボール
Tennis|Tenis|Tênis|Tennis|Tennis|网球|テニス
Badminton|Bádminton|Badminton|Badminton|Badminton|羽毛球|バドミントン
Table tennis|Tenis de mesa|Tênis de mesa|Tennis de table|Tischtennis|乒乓球|卓球
Volleyball|Voleibol|Voleibol|Volley-ball|Volleyball|排球|バレーボール
Baseball|Béisbol|Beisebol|Baseball|Baseball|棒球|野球
Cricket|Críquet|Críquete|Cricket|Cricket|板球|クリケット
Rugby|Rugby|Rugby|Rugby|Rugby|橄榄球|ラグビー
Golf|Golf|Golfe|Golf|Golf|高尔夫|ゴルフ
Handball|Balonmano|Handebol|Handball|Handball|手球|ハンドボール
Water polo|Waterpolo|Polo aquático|Water-polo|Wasserball|水球|水球
Swimming|Natación|Natação|Natation|Schwimmen|游泳|水泳
Cycling|Ciclismo|Ciclismo|Cyclisme|Radfahren|自行车|自転車
Running|Carrera|Corrida|Course à pied|Laufen|跑步|ランニング
Boxing|Boxeo|Boxe|Boxe|Boxen|拳击|ボクシング
Wrestling|Lucha|Luta olímpica|Lutte|Ringen|摔跤|レスリング
Judo|Judo|Judô|Judo|Judo|柔道|柔道
Taekwondo|Taekwondo|Taekwondo|Taekwondo|Taekwondo|跆拳道|テコンドー
Karate|Karate|Caratê|Karaté|Karate|空手道|空手
Fencing|Esgrima|Esgrima|Escrime|Fechten|击剑|フェンシング
Sumo|Sumo|Sumô|Sumo|Sumo|相扑|相撲
Ice hockey|Hockey sobre hielo|Hóquei no gelo|Hockey sur glace|Eishockey|冰球|アイスホッケー
Figure skating|Patinaje artístico|Patinação artística|Patinage artistique|Eiskunstlauf|花样滑冰|フィギュアスケート
Curling|Curling|Curling|Curling|Curling|冰壶|カーリング
Long jump|Salto de longitud|Salto em distância|Saut en longueur|Weitsprung|跳远|走幅跳
High jump|Salto de altura|Salto em altura|Saut en hauteur|Hochsprung|跳高|走高跳
Shot put|Lanzamiento de peso|Arremesso de peso|Lancer du poids|Kugelstoßen|铅球|砲丸投
Discus throw|Lanzamiento de disco|Lançamento de disco|Lancer du disque|Diskuswurf|铁饼|円盤投
Javelin throw|Lanzamiento de jabalina|Lançamento de dardo|Lancer du javelot|Speerwurf|标枪|やり投
Hammer throw|Lanzamiento de martillo|Lançamento de martelo|Lancer du marteau|Hammerwurf|链球|ハンマー投
Pole vault|Salto con pértiga|Salto com vara|Saut à la perche|Stabhochsprung|撑杆跳高|棒高跳
Triple jump|Triple salto|Salto triplo|Triple saut|Dreisprung|三级跳远|三段跳
Freestyle|Estilo libre|Nado livre|Nage libre|Freistil|自由泳|自由形
Backstroke|Espalda|Costas|Dos|Rückenschwimmen|仰泳|背泳ぎ
Breaststroke|Braza|Peito|Brasse|Brustschwimmen|蛙泳|平泳ぎ
Butterfly|Mariposa|Borboleta|Papillon|Schmetterling|蝶泳|バタフライ
Foil|Florete|Florete|Fleuret|Florett|花剑|フルーレ
Epee|Espada|Espada|Épée|Degen|重剑|エペ
Sabre|Sable|Sabre|Sabre|Säbel|佩剑|サーブル
Serve|Saque|Saque|Service|Aufschlag|发球|サーブ
Forehand|Derecha|Forehand|Coup droit|Vorhand|正手|フォアハンド
Backhand|Revés|Backhand|Revers|Rückhand|反手|バックハンド
Volley|Volea|Voleio|Volée|Volley|截击|ボレー
Lob|Globo|Lob|Lob|Lob|高吊球|ロブ
Smash|Remate|Smash|Smash|Schmetterball|扣杀|スマッシュ
Drop shot|Dejada|Deixadinha|Amortie|Stoppball|放小球|ドロップショット
Goalkeeper|Portero|Goleiro|Gardien|Torwart|守门员|ゴールキーパー
Striker|Delantero|Atacante|Avant-centre|Stürmer|前锋|ストライカー
Defender|Defensa|Defensor|Défenseur|Verteidiger|后卫|ディフェンダー
Midfielder|Centrocampista|Meio-campista|Milieu|Mittelfeldspieler|中场|ミッドフィルダー
`;
export const answerTranslations=Object.fromEntries((terms+extraAnswerData).trim().split('\n').filter(Boolean).map(line=>{const [name,...values]=line.split('|');if(values.length!==6)throw Error('Answer columns: '+name);return [name,values];}));

answerTranslations.Caterpillar=answerTranslations.Larva;answerTranslations.Chrysalis=answerTranslations.Pupa;
