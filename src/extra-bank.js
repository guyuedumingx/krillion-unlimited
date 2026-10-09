// Each line defines a distinct prompt, six localized subjects, and an explicit answer set.
const geography=`
France|Belgium|Luxembourg|Germany|Switzerland|Italy|Monaco|Spain|Andorra|Brazil|Suriname
Spain|Portugal|France|Andorra|Morocco
China|Russia|Mongolia|North Korea|Vietnam|Laos|Myanmar|India|Bhutan|Nepal|Pakistan|Afghanistan|Tajikistan|Kyrgyzstan|Kazakhstan
India|Pakistan|China|Nepal|Bhutan|Bangladesh|Myanmar
Austria|Germany|Czechia|Slovakia|Hungary|Slovenia|Italy|Switzerland|Liechtenstein
Poland|Germany|Czechia|Slovakia|Ukraine|Belarus|Lithuania|Russia
Mexico|United States~USA~US|Guatemala|Belize
Canada|United States~USA~US|Denmark
Argentina|Chile|Bolivia|Paraguay|Brazil|Uruguay
Chile|Peru|Bolivia|Argentina
Russia|Norway|Finland|Estonia|Latvia|Lithuania|Poland|Belarus|Ukraine|Georgia|Azerbaijan|Kazakhstan|China|Mongolia|North Korea
Switzerland|France|Germany|Austria|Liechtenstein|Italy
Netherlands|Germany|Belgium|France
Belgium|France|Germany|Luxembourg|Netherlands
Norway|Sweden|Finland|Russia
Sweden|Norway|Finland
Finland|Sweden|Norway|Russia
Turkey|Greece|Bulgaria|Georgia|Armenia|Azerbaijan|Iran|Iraq|Syria
Greece|Albania|North Macedonia|Bulgaria|Turkey
Kenya|Tanzania|Uganda|South Sudan|Ethiopia|Somalia
Tanzania|Kenya|Uganda|Rwanda|Burundi|Democratic Republic of the Congo~DRC|Zambia|Malawi|Mozambique
`;
// Some European countries also share borders through overseas territories; those are included.
const topics={
Nature:`
a living canid|un cánido vivo|um canídeo vivo|un canidé vivant|ein lebender Hundeartiger|现存犬科动物|現生のイヌ科動物|Dog|Wolf|Red fox|Arctic fox|Coyote|Golden jackal|African wild dog|Dhole|Raccoon dog|Fennec fox
a living mustelid|un mustélido vivo|um mustelídeo vivo|un mustélidé vivant|ein lebender Marderartiger|现存鼬科动物|現生のイタチ科動物|Weasel|Otter|Badger|Ferret|Mink|Wolverine|Pine marten|Stoat~Ermine|Sable|Honey badger
a deer species|una especie de ciervo|uma espécie de cervo|une espèce de cervidé|eine Hirschart|鹿科动物物种|シカの仲間|Red deer|Roe deer|Fallow deer|White tailed deer|Mule deer|Reindeer~Caribou|Moose~Elk|Sika deer|Muntjac|Pudu
a toothed whale species|una especie de cetáceo dentado|uma espécie de cetáceo com dentes|une espèce de cétacé à dents|ein Zahnwal|齿鲸物种|ハクジラの仲間|Sperm whale|Orca~Killer whale|Bottlenose dolphin|Beluga|Narwhal|Harbour porpoise~Harbor porpoise|Spinner dolphin|Pilot whale|Amazon river dolphin
a pinniped|un pinnípedo|um pinípede|un pinnipède|ein Flossenfüßer|鳍足类动物|鰭脚類の動物|Walrus|Harbour seal~Harbor seal|Grey seal~Gray seal|Elephant seal|Harp seal|Leopard seal|California sea lion|Steller sea lion|Antarctic fur seal
an owl species|una especie de búho|uma espécie de coruja|une espèce de chouette ou de hibou|eine Eulenart|猫头鹰物种|フクロウの仲間|Barn owl|Snowy owl|Great horned owl|Eurasian eagle owl|Tawny owl|Little owl|Burrowing owl|Long eared owl|Short eared owl
a bird of prey|un ave rapaz|uma ave de rapina|un rapace|ein Greifvogel|猛禽|猛禽類|Golden eagle|Bald eagle|Peregrine falcon|Osprey|Red kite|Common buzzard|Harpy eagle|Kestrel|Secretary bird
a corvid|un córvido|um corvídeo|un corvidé|ein Rabenvogel|鸦科鸟类|カラス科の鳥|Crow|Raven|Magpie|Jay|Jackdaw|Rook|Chough|Clark's nutcracker
a living rodent|un roedor vivo|um roedor vivo|un rongeur vivant|ein lebendes Nagetier|现存啮齿动物|現生のげっ歯類|Mouse|Rat|Squirrel|Beaver|Hamster|Guinea pig|Capybara|Porcupine|Chinchilla|Marmot|Gerbil|Vole|Lemming|Dormouse
a marsupial|un marsupial|um marsupial|un marsupial|ein Beuteltier|有袋类动物|有袋類|Kangaroo|Koala|Wombat|Wallaby|Opossum|Tasmanian devil|Quokka|Sugar glider|Numbat|Bandicoot
a domestic dog breed|una raza de perro|uma raça de cão|une race de chien|eine Hunderasse|家犬品种|犬の品種|Labrador retriever~Labrador|Golden retriever|German shepherd|Poodle|Bulldog|Beagle|Chihuahua|Dachshund|Husky|Dalmatian|Shiba inu|Basenji|Whippet|Akita
a horse coat colour|un color de pelaje de caballo|uma cor de pelagem de cavalo|une robe de cheval|eine Fellfarbe beim Pferd|马的毛色|馬の毛色|Bay|Black|Chestnut|Grey~Gray|Palomino|Buckskin|Dun|Roan|Cremello
a shark species|una especie de tiburón|uma espécie de tubarão|une espèce de requin|eine Haiart|鲨鱼物种|サメの種類|Great white shark|Whale shark|Tiger shark|Bull shark|Basking shark|Greenland shark|Goblin shark|Nurse shark|Blue shark|Shortfin mako shark
a snake group|un grupo de serpientes|um grupo de serpentes|un groupe de serpents|eine Schlangengruppe|蛇的类群|ヘビの仲間|Python|Boa|Cobra|Viper|Rattlesnake|Mamba|Krait|Anaconda|Coral snake|Sea snake
a lizard group|un grupo de lagartos|um grupo de lagartos|un groupe de lézards|eine Echsengruppe|蜥蜴类群|トカゲの仲間|Gecko|Iguana|Chameleon|Skink|Monitor lizard|Komodo dragon|Bearded dragon|Anole|Gila monster
a crustacean group|un grupo de crustáceos|um grupo de crustáceos|un groupe de crustacés|eine Krebstiergruppe|甲壳动物类群|甲殻類の仲間|Crab|Lobster|Shrimp|Prawn|Crayfish|Krill|Barnacle|Copepod|Woodlouse|Amphipod
an arachnid group|un grupo de arácnidos|um grupo de aracnídeos|un groupe d’arachnides|eine Spinnentiergruppe|蛛形纲动物类群|クモ形類の仲間|Spider|Scorpion|Tick|Mite|Harvestman|Pseudoscorpion|Solifuge|Whip scorpion
an insect order|un orden de insectos|uma ordem de insetos|un ordre d’insectes|eine Insektenordnung|昆虫目|昆虫の目|Coleoptera~Beetles|Lepidoptera~Butterflies and moths|Diptera~Flies|Hymenoptera~Bees wasps and ants|Orthoptera~Grasshoppers and crickets|Odonata~Dragonflies and damselflies|Hemiptera~True bugs|Mantodea~Mantises|Phasmatodea~Stick insects|Blattodea~Cockroaches and termites
a conifer tree group|un grupo de coníferas|um grupo de coníferas|un groupe de conifères|eine Nadelbaumgruppe|针叶树类群|針葉樹の仲間|Pine|Fir|Spruce|Cedar|Cypress|Larch|Yew|Juniper|Redwood|Hemlock
a flowering tree group|un grupo de árboles con flores|um grupo de árvores com flores|un groupe d’arbres à fleurs|ein blühender Laubbaum|开花树木类群|花を咲かせる木|Cherry|Magnolia|Apple|Pear|Peach|Plum|Dogwood|Jacaranda|Hawthorn|Redbud
an edible cultivated mushroom|un hongo comestible cultivado|um cogumelo comestível cultivado|un champignon comestible cultivé|ein kultivierter Speisepilz|栽培食用菌|栽培される食用キノコ|Button mushroom|Shiitake|Oyster mushroom|Enoki|King oyster mushroom|Lion's mane|Shimeji|Wood ear|Maitake
`,
Science:`
an SI derived unit with a special name|una unidad derivada del SI con nombre propio|uma unidade derivada do SI com nome próprio|une unité dérivée du SI à nom spécial|eine abgeleitete SI-Einheit mit eigenem Namen|有专门名称的国际单位制导出单位|固有名称のあるSI組立単位|Newton|Joule|Watt|Pascal|Hertz|Volt|Ohm|Coulomb|Farad|Siemens|Weber|Tesla|Henry|Lumen|Lux|Becquerel|Gray|Sievert|Katal|Radian|Steradian|Degree Celsius
an alkali metal element|un metal alcalino|um metal alcalino|un métal alcalin|ein Alkalimetall|碱金属元素|アルカリ金属元素|Lithium|Sodium|Potassium|Rubidium|Caesium~Cesium|Francium
an alkaline earth metal|un metal alcalinotérreo|um metal alcalino-terroso|un métal alcalino-terreux|ein Erdalkalimetall|碱土金属元素|アルカリ土類金属|Beryllium|Magnesium|Calcium|Strontium|Barium|Radium
a halogen element|un halógeno|um halogênio|un halogène|ein Halogen|卤素元素|ハロゲン元素|Fluorine|Chlorine|Bromine|Iodine|Astatine|Tennessine
an actinide element|un actínido|um actinídeo|un actinide|ein Actinoid|锕系元素|アクチノイド元素|Uranium|Plutonium|Thorium|Actinium|Protactinium|Neptunium|Americium|Curium|Berkelium|Californium|Einsteinium|Fermium|Mendelevium|Nobelium|Lawrencium
a lanthanide element|un lantánido|um lantanídeo|un lanthanide|ein Lanthanoid|镧系元素|ランタノイド元素|Lanthanum|Cerium|Praseodymium|Neodymium|Promethium|Samarium|Europium|Gadolinium|Terbium|Dysprosium|Holmium|Erbium|Thulium|Ytterbium|Lutetium
a stage or remnant in stellar evolution|una etapa o remanente de evolución estelar|uma fase ou remanescente da evolução estelar|une phase ou un reste de l’évolution stellaire|eine Phase oder ein Überrest der Sternentwicklung|恒星演化阶段或遗迹|恒星進化の段階や残骸|Protostar|Main sequence star|Red giant|Red supergiant|White dwarf|Neutron star|Black hole
a rocky planet in our solar system|un planeta rocoso del sistema solar|um planeta rochoso do sistema solar|une planète rocheuse du système solaire|ein Gesteinsplanet im Sonnensystem|太阳系中的岩石行星|太陽系の岩石惑星|Mercury|Venus|Earth|Mars
a gas giant in our solar system|un gigante gaseoso del sistema solar|um gigante gasoso do sistema solar|une géante gazeuse du système solaire|ein Gasriese im Sonnensystem|太阳系中的气态巨行星|太陽系の巨大ガス惑星|Jupiter|Saturn
an ice giant in our solar system|un gigante helado del sistema solar|um gigante de gelo do sistema solar|une géante de glace du système solaire|ein Eisriese im Sonnensystem|太阳系中的冰巨星|太陽系の巨大氷惑星|Uranus|Neptune
an astronomical distance unit|una unidad astronómica de distancia|uma unidade astronômica de distância|une unité de distance astronomique|eine astronomische Entfernungseinheit|天文距离单位|天文学で使う距離の単位|Astronomical unit~AU|Light year|Parsec|Kiloparsec|Megaparsec
a type of object in the solar system|un tipo de objeto del sistema solar|um tipo de objeto do sistema solar|un type d’objet du système solaire|eine Objektart im Sonnensystem|太阳系天体类型|太陽系の天体の種類|Star|Planet|Dwarf planet|Moon~Natural satellite|Asteroid|Comet|Meteoroid
a triangle classification by sides or angles|una clasificación de triángulos por lados o ángulos|uma classificação de triângulos por lados ou ângulos|une catégorie de triangle selon ses côtés ou angles|eine Dreiecksart nach Seiten oder Winkeln|按边或角划分的三角形类型|辺や角による三角形の分類|Equilateral|Isosceles|Scalene|Right~Right angled|Acute|Obtuse
a three-dimensional geometric solid|un sólido geométrico tridimensional|um sólido geométrico tridimensional|un solide géométrique en trois dimensions|ein geometrischer Körper|三维几何体|立体の図形|Cube|Sphere|Cone|Cylinder|Pyramid|Tetrahedron|Octahedron|Dodecahedron|Icosahedron|Torus
an SI prefix|un prefijo del SI|um prefixo do SI|un préfixe du SI|ein SI-Präfix|国际单位制词头|SI接頭語|Kilo|Milli|Centi|Mega|Micro|Nano|Giga|Tera|Pico|Femto|Atto|Zetta|Yotta|Ronna|Quetta|Ronto|Quecto
a form of energy|una forma de energía|uma forma de energia|une forme d’énergie|eine Energieform|能量形式|エネルギーの形|Kinetic energy|Potential energy|Thermal energy|Chemical energy|Electrical energy|Nuclear energy|Radiant energy|Elastic potential energy
a classical simple machine|una máquina simple clásica|uma máquina simples clássica|une machine simple classique|eine einfache Maschine|经典简单机械|古典的な単純機械|Lever|Pulley|Wheel and axle|Inclined plane|Wedge|Screw
a particle in a basic atomic model|una partícula del modelo atómico básico|uma partícula do modelo atômico básico|une particule du modèle atomique simple|ein Teilchen im einfachen Atommodell|基础原子模型中的粒子|基本的な原子モデルの粒子|Proton|Neutron|Electron
a cell organelle|un orgánulo celular|uma organela celular|un organite cellulaire|ein Zellorganell|细胞器|細胞小器官|Nucleus|Mitochondrion~Mitochondria|Ribosome|Chloroplast|Golgi apparatus|Endoplasmic reticulum|Lysosome|Vacuole|Peroxisome
a human organ system|un sistema de órganos humano|um sistema de órgãos humano|un système d’organes humain|ein menschliches Organsystem|人体器官系统|人体の器官系|Digestive system|Respiratory system|Circulatory system|Nervous system|Skeletal system|Muscular system|Endocrine system|Urinary system|Lymphatic system|Reproductive system|Integumentary system
a renewable energy source|una fuente de energía renovable|uma fonte de energia renovável|une source d’énergie renouvelable|eine erneuerbare Energiequelle|可再生能源|再生可能エネルギー源|Solar|Wind|Hydropower~Hydro|Geothermal|Biomass|Tidal|Wave
`,
Food:`
a culinary herb|una hierba culinaria|uma erva culinária|une herbe aromatique|ein Küchenkraut|烹饪香草|料理に使うハーブ|Basil|Parsley|Cilantro~Coriander leaves|Thyme|Rosemary|Mint|Dill|Sage|Oregano|Tarragon|Chives|Marjoram
a leafy vegetable|una verdura de hoja|uma verdura folhosa|un légume-feuille|ein Blattgemüse|叶菜|葉物野菜|Lettuce|Spinach|Kale|Cabbage|Arugula~Rocket|Swiss chard|Bok choy|Watercress|Collard greens|Endive
an edible root or tuber vegetable|una raíz o tubérculo comestible|uma raiz ou tubérculo comestível|un légume-racine ou tubercule|ein essbares Wurzel- oder Knollengemüse|食用根茎类蔬菜|食用の根菜や塊茎|Potato|Carrot|Sweet potato|Beetroot~Beet|Turnip|Radish|Parsnip|Cassava|Yam|Celeriac
an edible pod vegetable|una verdura de vaina comestible|um vegetal de vagem comestível|un légume à gousse comestible|ein essbares Schotengemüse|可食荚蔬菜|さやを食べる野菜|Green bean|Sugar snap pea|Snow pea|Okra|Yardlong bean
an edible allium|un allium comestible|um allium comestível|un allium comestible|ein essbares Lauchgewächs|食用葱属植物|食用のネギ属植物|Onion|Garlic|Leek|Shallot|Chives|Scallion~Spring onion|Welsh onion
a culinary stone fruit|una fruta de hueso culinaria|uma fruta de caroço culinária|un fruit à noyau culinaire|ein Steinobst|烹饪中的核果|食用の核果|Peach|Plum|Cherry|Apricot|Nectarine|Mango|Olive|Date
a berry in everyday cooking|una baya de uso culinario|uma fruta vermelha ou baga culinária|une baie au sens culinaire|eine Beere im Küchengebrauch|日常烹饪中的浆果|料理でベリーと呼ばれる果物|Strawberry|Blueberry|Raspberry|Blackberry|Cranberry|Gooseberry|Blackcurrant|Redcurrant|Elderberry|Boysenberry
an apple cultivar|una variedad de manzana|uma variedade de maçã|une variété de pomme|eine Apfelsorte|苹果栽培品种|リンゴの品種|Gala|Fuji|Granny Smith|Honeycrisp|Golden Delicious|Red Delicious|Braeburn|Pink Lady|McIntosh|Jonagold
a dried bean used in cooking|un frijol seco de cocina|um feijão seco culinário|un haricot sec de cuisine|eine getrocknete Speisebohne|烹饪用干豆|料理に使う乾燥豆|Kidney bean|Black bean|Pinto bean|Navy bean|Cannellini bean|Adzuki bean|Mung bean|Lima bean|Fava bean~Broad bean|Soybean
a culinary lentil type|un tipo culinario de lenteja|um tipo culinário de lentilha|un type de lentille en cuisine|eine Linsensorte in der Küche|烹饪中的扁豆类型|料理に使うレンズ豆の種類|Red lentil|Green lentil|Brown lentil|Black lentil~Beluga lentil|Yellow lentil|Puy lentil
a dried fruit|una fruta deshidratada|uma fruta seca|un fruit séché|eine Trockenfrucht|干果制品|ドライフルーツ|Raisin|Prune|Dried apricot|Dried fig|Dried date|Dried mango|Dried cranberry|Dried apple|Dried banana
a bread style|un tipo de pan|um tipo de pão|un type de pain|eine Brotsorte|面包类型|パンの種類|Baguette|Sourdough|Brioche|Ciabatta|Focaccia|Pita|Naan|Challah|Rye bread|Bagel|Lavash|Injera
a fermented food|un alimento fermentado|um alimento fermentado|un aliment fermenté|ein fermentiertes Lebensmittel|发酵食品|発酵食品|Yogurt~Yoghurt|Kimchi|Sauerkraut|Miso|Tempeh|Natto|Kefir|Sourdough|Cheese|Kombucha
a cooking fat or oil|una grasa o aceite de cocina|uma gordura ou óleo de cozinha|une matière grasse de cuisine|ein Speisefett oder -öl|烹饪油脂|調理用の油脂|Butter|Olive oil|Sunflower oil|Canola oil~Rapeseed oil|Coconut oil|Sesame oil|Peanut oil|Ghee|Lard|Duck fat|Avocado oil
a culinary sweetener|un endulzante culinario|um adoçante culinário|un édulcorant culinaire|ein Süßungsmittel|烹饪甜味剂|料理の甘味料|Sugar|Honey|Maple syrup|Agave syrup|Molasses|Stevia|Date syrup|Corn syrup|Coconut sugar
a culinary mushroom|un hongo culinario|um cogumelo culinário|un champignon de cuisine|ein Küchenpilz|烹饪用蘑菇|料理用キノコ|Button mushroom|Shiitake|Oyster mushroom|Porcini|Chanterelle|Morel|Enoki|Maitake|King oyster mushroom|Wood ear
an edible seaweed|un alga comestible|uma alga comestível|une algue comestible|eine essbare Alge|食用海藻|食用海藻|Nori|Wakame|Kombu|Dulse|Sea lettuce|Hijiki|Arame|Irish moss
a noodle soup|una sopa de fideos|uma sopa de macarrão|une soupe de nouilles|eine Nudelsuppe|面条汤品|麺の入ったスープ料理|Ramen|Pho|Laksa|Khao soi|Chicken noodle soup|Boat noodles|Bun bo Hue|Soto mie
a cake or cake-like dessert|un pastel o postre similar|um bolo ou sobremesa semelhante|un gâteau ou dessert similaire|ein Kuchen oder ähnliches Dessert|蛋糕或类似甜品|ケーキや似たデザート|Cheesecake|Sponge cake|Chocolate cake|Carrot cake|Tiramisu|Pound cake|Angel food cake|Black forest cake|Tres leches cake|Battenberg cake
a basic baking ingredient|un ingrediente básico de repostería|um ingrediente básico de confeitaria|un ingrédient de pâtisserie|eine Backzutat|基础烘焙原料|基本的な製菓材料|Flour|Sugar|Butter|Egg|Milk|Yeast|Baking powder|Baking soda|Salt|Cocoa powder|Vanilla
a non-alcoholic hot drink|una bebida caliente sin alcohol|uma bebida quente sem álcool|une boisson chaude sans alcool|ein alkoholfreies Heißgetränk|不含酒精的热饮|アルコールを含まない温かい飲み物|Coffee|Tea|Hot chocolate|Chai|Matcha|Chamomile tea|Mint tea|Barley tea|Hot apple cider
`,
Arts:`
a percussion instrument|un instrumento de percusión|um instrumento de percussão|un instrument à percussion|ein Schlaginstrument|打击乐器|打楽器|Drum|Tambourine|Triangle|Cymbal|Xylophone|Marimba|Glockenspiel|Timpani|Bongo|Conga|Castanets|Djembe|Steelpan
a keyboard instrument|un instrumento de teclado|um instrumento de teclado|un instrument à clavier|ein Tasteninstrument|键盘乐器|鍵盤楽器|Piano|Organ|Harpsichord|Clavichord|Synthesizer|Celesta|Accordion
a plucked string instrument|un instrumento de cuerda pulsada|um instrumento de cordas dedilhadas|un instrument à cordes pincées|ein Zupfinstrument|弹拨弦乐器|弦をはじく楽器|Guitar|Harp|Ukulele|Banjo|Mandolin|Lute|Sitar|Koto|Pipa|Guzheng|Oud|Balalaika
a visual-art medium|un medio de artes visuales|um meio de artes visuais|un médium d’arts visuels|ein Medium der bildenden Kunst|视觉艺术媒介|視覚芸術の画材や媒体|Oil paint|Watercolour~Watercolor|Acrylic paint|Charcoal|Pastel|Ink|Graphite|Clay|Bronze|Digital art
a printmaking technique|una técnica de grabado|uma técnica de gravura|une technique d’estampe|eine Druckgrafiktechnik|版画技术|版画の技法|Woodcut|Linocut|Etching|Engraving|Lithography|Screen printing~Silkscreen|Aquatint|Drypoint|Monotype
a poetic form|una forma poética|uma forma poética|une forme poétique|eine Gedichtform|诗歌形式|詩の形式|Sonnet|Haiku|Limerick|Ode|Elegy|Ballad|Villanelle|Tanka|Sestina|Free verse
a fiction genre|un género de ficción|um gênero de ficção|un genre de fiction|ein Genre der Erzählliteratur|虚构文学类型|フィクションのジャンル|Fantasy|Science fiction|Mystery|Romance|Horror|Thriller|Historical fiction|Adventure|Dystopia|Magical realism
a dance style|un estilo de baile|um estilo de dança|un style de danse|ein Tanzstil|舞蹈类型|ダンスの種類|Ballet|Tango|Salsa|Waltz|Hip hop|Tap dance|Flamenco|Samba|Foxtrot|Bachata|Rumba|Kathak
one of the five basic ballet foot positions|una de las cinco posiciones básicas de pies de ballet|uma das cinco posições básicas dos pés no balé|une des cinq positions de pieds du ballet|eine der fünf Grundpositionen der Füße im Ballett|芭蕾五种基本脚位之一|バレエの5つの基本ポジション|First position~First~1|Second position~Second~2|Third position~Third~3|Fourth position~Fourth~4|Fifth position~Fifth~5
a line type in drawing|un tipo de línea de dibujo|um tipo de linha em desenho|un type de ligne en dessin|eine Linienart beim Zeichnen|绘画线条类型|描画の線の種類|Straight|Curved|Horizontal|Vertical|Diagonal|Zigzag|Wavy|Dashed|Dotted
a secondary colour in the traditional RYB model|un color secundario del modelo RYB tradicional|uma cor secundária do modelo RYB tradicional|une couleur secondaire du modèle traditionnel RJB|eine Sekundärfarbe im traditionellen RYB-Modell|传统红黄蓝模型中的二次色|伝統的なRYBモデルの二次色|Orange|Green|Purple~Violet
a secondary colour of light in RGB|un color secundario de luz RGB|uma cor secundária da luz RGB|une couleur secondaire de lumière RVB|eine Sekundärfarbe des Lichts im RGB-Modell|RGB 光模型中的二次色|RGBの光の二次色|Cyan|Magenta|Yellow
a completed Beethoven symphony by number|una sinfonía completa de Beethoven por número|uma sinfonia completa de Beethoven pelo número|une symphonie achevée de Beethoven par numéro|eine vollendete Beethoven-Sinfonie nach Nummer|贝多芬已完成交响曲编号|ベートーヴェンの完成した交響曲の番号|First~1~Symphony 1|Second~2~Symphony 2|Third~3~Eroica|Fourth~4|Fifth~5|Sixth~6~Pastoral|Seventh~7|Eighth~8|Ninth~9~Choral
a novel by a Brontë sister|una novela de una hermana Brontë|um romance de uma irmã Brontë|un roman d’une sœur Brontë|ein Roman einer Brontë-Schwester|勃朗特姐妹的小说|ブロンテ姉妹の小説|Jane Eyre|Wuthering Heights|The Tenant of Wildfell Hall|Agnes Grey|Villette|Shirley|The Professor
a Sherlock Holmes novel by Arthur Conan Doyle|una novela de Sherlock Holmes de Arthur Conan Doyle|um romance de Sherlock Holmes de Arthur Conan Doyle|un roman de Sherlock Holmes d’Arthur Conan Doyle|ein Sherlock-Holmes-Roman von Arthur Conan Doyle|柯南道尔的福尔摩斯长篇小说|コナン・ドイルのホームズ長編小説|A Study in Scarlet|The Sign of the Four~The Sign of Four|The Hound of the Baskervilles|The Valley of Fear
an Impressionist painter|un pintor impresionista|um pintor impressionista|un peintre impressionniste|ein impressionistischer Maler|印象派画家|印象派の画家|Claude Monet~Monet|Pierre Auguste Renoir~Renoir|Edgar Degas~Degas|Camille Pissarro~Pissarro|Berthe Morisot~Morisot|Alfred Sisley~Sisley|Mary Cassatt~Cassatt|Gustave Caillebotte~Caillebotte
a Baroque composer|un compositor barroco|um compositor barroco|un compositeur baroque|ein Barockkomponist|巴洛克时期作曲家|バロック時代の作曲家|Johann Sebastian Bach~Bach|George Frideric Handel~Handel|Antonio Vivaldi~Vivaldi|Claudio Monteverdi~Monteverdi|Henry Purcell~Purcell|Arcangelo Corelli~Corelli|Domenico Scarlatti~Scarlatti|Jean Philippe Rameau~Rameau
an Italian musical tempo term|un término italiano de tempo musical|um termo italiano de andamento musical|un terme italien de tempo musical|eine italienische Tempobezeichnung|意大利语音乐速度术语|イタリア語の速度記号|Allegro|Andante|Adagio|Presto|Largo|Lento|Moderato|Vivace|Grave|Prestissimo
a photography composition technique|una técnica de composición fotográfica|uma técnica de composição fotográfica|une technique de composition photographique|eine Kompositionstechnik in der Fotografie|摄影构图技巧|写真の構図の技法|Rule of thirds|Leading lines|Symmetry|Framing|Negative space|Golden ratio|Diagonals|Fill the frame|Repetition
a part of a theatre building|una parte de un teatro|uma parte de um teatro|une partie d’un théâtre|ein Teil eines Theatergebäudes|剧院建筑部位|劇場の建物の部分|Stage|Backstage|Wings|Orchestra pit|Auditorium|Balcony|Proscenium|Fly tower|Green room|Foyer
a film genre|un género de cine|um gênero de cinema|un genre cinématographique|ein Filmgenre|电影类型|映画のジャンル|Comedy|Drama|Action|Horror|Thriller|Documentary|Animation|Western|Musical|Science fiction|Fantasy|Romance
`,
Sports:`
a sport played with a ball|un deporte con pelota|um esporte com bola|un sport avec ballon ou balle|eine Ballsportart|使用球的运动|ボールを使うスポーツ|Football~Soccer|Basketball|Tennis|Volleyball|Baseball|Cricket|Rugby|Golf|Handball|Water polo|Squash|Table tennis
a sport played across a net|un deporte jugado sobre una red|um esporte jogado sobre uma rede|un sport avec un filet entre adversaires|ein Sport über ein Netz|隔网对抗运动|ネット越しに競うスポーツ|Tennis|Badminton|Volleyball|Table tennis|Beach volleyball|Sepak takraw|Pickleball|Padel
an ice sport|un deporte sobre hielo|um esporte no gelo|un sport sur glace|eine Eissportart|冰上运动|氷上のスポーツ|Ice hockey|Figure skating|Speed skating|Short track speed skating|Curling|Bobsleigh|Luge|Skeleton
a water sport|un deporte acuático|um esporte aquático|un sport nautique|eine Wassersportart|水上或水中运动|水中や水上のスポーツ|Swimming|Diving|Water polo|Rowing|Canoeing|Kayaking|Sailing|Surfing|Windsurfing|Artistic swimming|Wakeboarding
a combat sport|un deporte de combate|um esporte de combate|un sport de combat|eine Kampfsportart|格斗运动|格闘スポーツ|Boxing|Wrestling|Judo|Taekwondo|Karate|Fencing|Muay Thai|Kickboxing|Brazilian jiu jitsu|Sumo
an individual outdoor athletics running distance|una distancia individual de atletismo al aire libre|uma distância individual de atletismo ao ar livre|une distance individuelle de course en athlétisme en plein air|eine individuelle Laufdistanz in der Leichtathletik|户外田径个人跑步距离|屋外陸上競技の個人走の距離|100 metres~100m|200 metres~200m|400 metres~400m|800 metres~800m|1500 metres~1500m|5000 metres~5000m|10000 metres~10000m|Marathon
a decathlon event|una prueba del decatlón|uma prova do decatlo|une épreuve du décathlon|eine Zehnkampfdisziplin|十项全能项目|十種競技の種目|100 metres~100m|Long jump|Shot put|High jump|400 metres~400m|110 metres hurdles~110m hurdles|Discus throw|Pole vault|Javelin throw|1500 metres~1500m
a women’s outdoor heptathlon event|una prueba del heptatlón femenino al aire libre|uma prova do heptatlo feminino ao ar livre|une épreuve de l’heptathlon féminin en plein air|eine Disziplin im Frauen-Siebenkampf im Freien|女子户外七项全能项目|女子屋外七種競技の種目|100 metres hurdles~100m hurdles|High jump|Shot put|200 metres~200m|Long jump|Javelin throw|800 metres~800m
an association football restart|una reanudación en fútbol|um reinício no futebol|une reprise du jeu au football|eine Spielfortsetzung im Fußball|足球重新开始比赛方式|サッカーの再開方法|Kick off|Throw in|Goal kick|Corner kick|Free kick|Penalty kick|Dropped ball
a basketball position|una posición de baloncesto|uma posição no basquete|un poste au basket-ball|eine Basketballposition|篮球位置|バスケットボールのポジション|Point guard|Shooting guard|Small forward|Power forward|Center~Centre
a baseball fielding position|una posición defensiva de béisbol|uma posição defensiva no beisebol|un poste défensif au baseball|eine Feldposition im Baseball|棒球防守位置|野球の守備位置|Pitcher|Catcher|First baseman|Second baseman|Third baseman|Shortstop|Left fielder|Center fielder~Centre fielder|Right fielder
a cricket fielding position|una posición de campo de críquet|uma posição de campo no críquete|une position de champ au cricket|eine Feldposition im Cricket|板球守场位置|クリケットの守備位置|Wicketkeeper|Slip|Gully|Point|Cover|Mid off|Mid on|Square leg|Fine leg|Third man|Long on|Long off
a badminton shot|un golpe de bádminton|uma jogada de badminton|un coup au badminton|ein Badmintonschlag|羽毛球击球技术|バドミントンのショット|Serve|Clear|Drop shot|Smash|Drive|Net shot|Lift|Push
a golf scoring term|un término de puntuación de golf|um termo de pontuação de golfe|un terme de score au golf|ein Golf-Ergebnisbegriff|高尔夫计分术语|ゴルフのスコア用語|Par|Birdie|Eagle|Albatross~Double eagle|Bogey|Double bogey|Triple bogey|Hole in one~Ace
a snooker ball colour|un color de bola de snooker|uma cor de bola de sinuca inglesa|une couleur de bille au snooker|eine Snooker-Ballfarbe|斯诺克球颜色|スヌーカーの球の色|Red|Yellow|Green|Brown|Blue|Pink|Black|White
a volleyball position|una posición de voleibol|uma posição no voleibol|un poste au volley-ball|eine Volleyballposition|排球位置|バレーボールのポジション|Setter|Outside hitter|Opposite hitter|Middle blocker|Libero|Defensive specialist
a table-tennis stroke|un golpe de tenis de mesa|uma jogada de tênis de mesa|un coup au tennis de table|ein Tischtennisschlag|乒乓球击球技术|卓球の打法|Serve|Forehand|Backhand|Push|Block|Loop|Smash|Chop|Flick~Flip|Lob
a judo throwing technique|una técnica de proyección de judo|uma técnica de arremesso de judô|une technique de projection au judo|eine Judowurftechnik|柔道投技|柔道の投げ技|Seoi nage|O soto gari|Uchi mata|Harai goshi|Tai otoshi|Tomoe nage|O goshi|De ashi barai|Sumi gaeshi|Ippon seoi nage
a track-cycling event|una prueba de ciclismo en pista|uma prova de ciclismo de pista|une épreuve de cyclisme sur piste|eine Bahnradsportdisziplin|场地自行车项目|トラック自転車競技の種目|Sprint|Team sprint|Keirin|Team pursuit|Individual pursuit|Omnium|Madison|Points race|Scratch race|Elimination race|Time trial
one of the three triathlon disciplines|una de las tres disciplinas del triatlón|uma das três modalidades do triatlo|une des trois disciplines du triathlon|eine der drei Triathlondisziplinen|铁人三项的三个项目之一|トライアスロンの3種目|Swimming|Cycling|Running
a competitive climbing discipline|una disciplina de escalada competitiva|uma modalidade de escalada competitiva|une discipline d’escalade sportive|eine Wettkampfdisziplin im Klettern|竞技攀岩项目|競技クライミングの種目|Bouldering|Lead climbing~Lead|Speed climbing~Speed
`
};
const prefixes=['Nombra un ejemplo: ','Dê um exemplo: ','Donnez un exemple : ','Nenne ein Beispiel: ','举出一个例子：','例を一つ挙げて：'];
const sources={Nature:'https://animaldiversity.org/',Science:'https://www.bipm.org/en/measurement-units',Food:'https://www.britannica.com/topic/food',Arts:'https://www.britannica.com/art',Sports:'https://olympics.com/en/sports/'};
const notes={Nature:'Animal and plant names can refer to species or broader groups; follow the level requested by the prompt.',Science:'Scientific categories have specific definitions; check the requested group before answering.',Food:'These categories follow culinary usage rather than strict botanical classification.',Arts:'Titles and names can have different translations. English names remain accepted in every language.',Sports:'This prompt uses established sporting terms; accepted entries are shown in the answer review.'};
export const extraRows=[];
for(const line of geography.trim().split('\n')){const [country,...answers]=line.split('|');extraRows.push(['Geography',`Name a country sharing a land border with ${country}`,answers.join('|'),'Land borders include overseas territories. Maritime neighbours alone do not count.',`https://www.britannica.com/place/${country.replaceAll(' ','-')}`,{country}]);}
for(const [category,data] of Object.entries(topics))for(const line of data.trim().split('\n')){const [subject,...rest]=line.split('|'),localized=rest.splice(0,6);extraRows.push([category,`Name ${subject}`,rest.join('|'),notes[category],sources[category],localized.map((s,i)=>prefixes[i]+s)]);}
