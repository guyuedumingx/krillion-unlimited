const languageOrder = ['en', 'es', 'pt', 'fr', 'de', 'zh', 'ja'];

// Describe the actual task on each page, in the same language as its content.
const descriptions = {
  '': [
    'Play Krillion Unlimited free: seven questions per dive, 210 prompts, six themes, daily challenges and seven languages. Replay without a daily limit.',
    'Juega Krillion Unlimited gratis: siete preguntas por partida, 210 preguntas, seis temas, retos diarios y siete idiomas. Repite sin límite diario.',
    'Jogue Krillion Unlimited grátis: sete perguntas por partida, 210 perguntas, seis temas, desafios diários e sete idiomas. Jogue sem limite diário.',
    'Jouez à Krillion Unlimited gratuitement : sept questions par partie, 210 questions, six thèmes, défis quotidiens et sept langues. Rejouez sans limite.',
    'Spiele Krillion Unlimited kostenlos: sieben Fragen pro Runde, 210 Fragen, sechs Themen, tägliche Challenges und sieben Sprachen. Beliebig oft spielen.',
    '免费玩 Krillion Unlimited：每局七题，210 道题、六大主题、每日挑战和七种语言。寻找冷门答案，潜入更深的海域，无每日游玩次数限制。',
    'Krillion Unlimitedを無料プレイ。1回7問、全210問、6テーマ、デイリー挑戦、7言語対応。珍しい答えで深く潜ろう。1日の回数制限なし。',
  ],
  guides: [
    'Find Krillion Unlimited rules, scoring, rare-answer tips, daily challenges and six theme guides. Choose a guide, learn the game and start a free dive.',
    'Consulta reglas, puntuación, consejos, retos diarios y seis guías temáticas de Krillion Unlimited. Aprende a jugar y empieza una inmersión gratis.',
    'Veja regras, pontuação, dicas, desafios diários e seis guias temáticos de Krillion Unlimited. Aprenda a jogar e comece um mergulho grátis.',
    'Retrouvez règles, scores, conseils, défis quotidiens et six guides thématiques de Krillion Unlimited. Apprenez à jouer et lancez une plongée gratuite.',
    'Entdecke Regeln, Punkte, Tipps, tägliche Challenges und sechs Themenratgeber für Krillion Unlimited. Lerne das Spiel und starte einen kostenlosen Tauchgang.',
    'Krillion Unlimited 攻略目录：游戏规则、计分与深度、冷门答案技巧、每日挑战及六大主题指南。了解玩法后直接开始免费潜航。',
    'Krillion Unlimitedのガイド一覧。ルール、得点と深度、珍しい答えのコツ、デイリー挑戦、6テーマの解説から選んで無料で遊ぼう。',
  ],
  'how-to-play': [
    'Learn how to play Krillion Unlimited: enter one answer, retry mistakes, use the timer and review all seven results. Includes scoring and replay rules.',
    'Aprende a jugar a Krillion Unlimited: responde, reintenta, usa el reloj y revisa las siete preguntas. Incluye reglas de puntuación y nuevas partidas.',
    'Aprenda a jogar Krillion Unlimited: responda, tente novamente, use o cronômetro e reveja as sete perguntas. Veja como pontuar e começar outra partida.',
    'Apprenez à jouer à Krillion Unlimited : saisissez une réponse, réessayez, utilisez le chrono et consultez vos sept résultats, les scores et les nouvelles parties.',
    'So spielst du Krillion Unlimited: eine Antwort eingeben, Fehler erneut versuchen, den Timer nutzen und sieben Ergebnisse ansehen. Mit Punkte- und Wiederholungsregeln.',
    'Krillion Unlimited 游戏规则：输入一个答案、重试错误、使用计时器、跳过题目并回顾七题结果。了解计分、恢复游戏与无限重玩方式。',
    'Krillion Unlimitedの遊び方。答えを一つ入力し、誤答を再入力、タイマーを使用、7問の結果を確認。得点、再開、繰り返しプレイも解説。',
  ],
  scoring: [
    'Understand Krillion Unlimited scoring: the 10, 30, 60, 85 and 100-point tiers, depth conversion, 700-point maximum and editorial rarity model.',
    'Entiende los puntos de Krillion Unlimited: niveles de 10, 30, 60, 85 y 100, profundidad, máximo de 700 y rareza definida por el banco del juego.',
    'Entenda a pontuação de Krillion Unlimited: níveis de 10, 30, 60, 85 e 100, profundidade, máximo de 700 e raridade definida pelo banco do jogo.',
    'Comprenez le score de Krillion Unlimited : paliers de 10, 30, 60, 85 et 100 points, conversion en profondeur, maximum de 700 et rareté éditoriale.',
    'Verstehe Krillion Unlimited: 10, 30, 60, 85 und 100 Punkte, Umrechnung in Tauchtiefe, maximal 700 Punkte und die redaktionellen Seltenheitsstufen.',
    'Krillion Unlimited 计分说明：10、30、60、85、100 分如何换算下潜深度，七题最高 700 分，以及题库编辑设置的冷门答案档位。',
    'Krillion Unlimitedの得点を解説。10・30・60・85・100点と深度の換算、7問で最大700点、問題集に設定された珍しさの段階を確認。',
  ],
  tips: [
    'Find less obvious Krillion Unlimited answers with family trees, regions and related concepts. Practise without a timer and learn from accepted-answer reviews.',
    'Encuentra respuestas menos evidentes usando familias, regiones y conceptos relacionados. Practica Krillion Unlimited sin reloj y aprende al revisar las respuestas.',
    'Encontre respostas menos óbvias usando famílias, regiões e conceitos relacionados. Pratique Krillion Unlimited sem tempo e aprenda ao rever as respostas.',
    'Trouvez des réponses moins évidentes avec les familles, régions et idées associées. Entraînez-vous sans chrono et apprenez grâce aux réponses acceptées.',
    'Finde weniger offensichtliche Antworten über Familien, Regionen und verwandte Begriffe. Übe Krillion Unlimited ohne Timer und lerne aus den Antwortlisten.',
    'Krillion Unlimited 冷门答案技巧：从分类家族、地区和关联概念寻找思路。关闭计时器练习，并通过每局答案回顾积累知识。',
    '分類の仲間、地域、関連する概念からKrillion Unlimitedの意外な答えを探すコツ。時間制限なしで練習し、答えの一覧から学ぼう。',
  ],
  daily: [
    'Learn how the Krillion Unlimited daily challenge works: seven fixed questions per UTC day, archive replay and the difference from unlimited practice.',
    'Descubre el reto diario de Krillion Unlimited: siete preguntas fijas por día UTC, partidas anteriores y diferencias con la práctica ilimitada.',
    'Conheça o desafio diário de Krillion Unlimited: sete perguntas fixas por dia UTC, partidas anteriores e diferenças para a prática ilimitada.',
    'Découvrez le défi quotidien de Krillion Unlimited : sept questions fixes par jour UTC, archives rejouables et différences avec les parties illimitées.',
    'So funktioniert die tägliche Krillion-Unlimited-Challenge: sieben feste Fragen pro UTC-Tag, Archiv zum Wiederholen und Unterschiede zur freien Übung.',
    '了解 Krillion Unlimited 每日挑战：按 UTC 日期固定七道题、回放历史挑战，以及每日题组和无限练习模式的区别。',
    'Krillion Unlimitedのデイリー挑戦を解説。UTC日付ごとの固定7問、過去の問題の再プレイ、無制限練習との違いを確認。',
  ],
  themes: [
    'Choose a Krillion Unlimited theme: geography, nature, science, food, arts or sports. Each has 35 prompts, sample questions and free seven-question dives.',
    'Elige geografía, naturaleza, ciencia, comida, arte o deportes en Krillion Unlimited. Cada tema tiene 35 preguntas, ejemplos y partidas gratis de siete preguntas.',
    'Escolha geografia, natureza, ciência, comida, artes ou esportes em Krillion Unlimited. Cada tema tem 35 perguntas, exemplos e partidas grátis de sete perguntas.',
    'Choisissez géographie, nature, sciences, cuisine, arts ou sports. Chaque thème de Krillion Unlimited propose 35 questions, des exemples et des parties gratuites.',
    'Wähle Geografie, Natur, Wissenschaft, Essen, Kunst oder Sport. Jedes Krillion-Unlimited-Thema bietet 35 Fragen, Beispiele und kostenlose Runden mit sieben Fragen.',
    '选择 Krillion Unlimited 地理、自然、科学、美食、艺术或体育主题。每类 35 道题，附问题与答案示例，直接开始七题免费潜航。',
    'Krillion Unlimitedの地理・自然・科学・食べ物・芸術・スポーツから選ぼう。各テーマ35問、問題と答えの例、無料の7問ダイブを用意。',
  ],
  faq: [
    'Krillion Unlimited FAQ: free unlimited replay, score rules, supported languages, saved games and browser data. Get answers before your next dive.',
    'Preguntas frecuentes de Krillion Unlimited: partidas gratis, puntos, idiomas, partidas guardadas y datos del navegador. Resuelve dudas antes de jugar.',
    'Perguntas frequentes de Krillion Unlimited: partidas grátis, pontos, idiomas, jogos salvos e dados do navegador. Tire dúvidas antes de jogar.',
    'FAQ Krillion Unlimited : parties gratuites, scores, langues, sauvegardes et données du navigateur. Trouvez vos réponses avant votre prochaine plongée.',
    'Krillion Unlimited FAQ: kostenlose Wiederholungen, Punkte, Sprachen, gespeicherte Runden und Browserdaten. Antworten für deinen nächsten Tauchgang.',
    'Krillion Unlimited 常见问题：是否免费无限游玩、分数如何计算、支持哪些语言、怎样保存进度，以及浏览器数据如何处理。',
    'Krillion Unlimitedのよくある質問。無料で何度でも遊べるか、得点の仕組み、対応言語、途中の保存、ブラウザ内データを解説。',
  ],
  about: [
    'About this independent Krillion Unlimited edition: original code, artwork and question bank, six themes, seven languages and personal browser records.',
    'Conoce esta edición independiente de Krillion Unlimited: código, arte y preguntas propios, seis temas, siete idiomas y registros personales en el navegador.',
    'Conheça esta edição independente de Krillion Unlimited: código, arte e perguntas próprios, seis temas, sete idiomas e registros pessoais no navegador.',
    'Découvrez cette édition indépendante de Krillion Unlimited : code, graphismes et questions propres, six thèmes, sept langues et records dans le navigateur.',
    'Über diese unabhängige Krillion-Unlimited-Ausgabe: eigener Code, eigene Grafik und Fragen, sechs Themen, sieben Sprachen und persönliche Browserrekorde.',
    '关于独立实现的 Krillion Unlimited：自己的代码、画面与题库，六大主题、七种语言和浏览器个人记录。了解本站与原作的关系。',
    '独立実装のKrillion Unlimitedについて。独自のコード、画像、問題集、6テーマ、7言語、ブラウザの個人記録と原作との関係を紹介。',
  ],
  privacy: [
    'Krillion Unlimited privacy: what your browser stores, how to delete saved games, challenge-link data and Cloudflare technical requests.',
    'Privacidad de Krillion Unlimited: datos del navegador, cómo borrar partidas, información en enlaces de retos y solicitudes técnicas de Cloudflare.',
    'Privacidade de Krillion Unlimited: dados do navegador, como apagar partidas, informações nos links de desafios e requisições técnicas da Cloudflare.',
    'Confidentialité de Krillion Unlimited : stockage local, suppression des parties, données des liens de défis et requêtes techniques Cloudflare.',
    'Krillion Unlimited Datenschutz: lokale Browserdaten, Spielstände löschen, Daten in Challenge-Links und technische Anfragen bei Cloudflare.',
    'Krillion Unlimited 隐私说明：浏览器本地保存哪些数据，如何删除游戏记录，挑战链接包含什么，以及 Cloudflare 的技术请求处理。',
    'Krillion Unlimitedのプライバシー。ブラウザに保存するデータ、ゲーム記録の削除、挑戦URLの内容、Cloudflareの技術的な処理を説明。',
  ],
};

const topics = {
  geography: ['countries, capitals and borders', 'países, capitales y fronteras', 'países, capitais e fronteiras', 'pays, capitales et frontières', 'Länder, Hauptstädte und Grenzen', '国家、首都与陆地边界', '国・首都・国境'],
  nature: ['animals, plants and biological families', 'animales, plantas y familias biológicas', 'animais, plantas e famílias biológicas', 'animaux, plantes et familles biologiques', 'Tiere, Pflanzen und biologische Familien', '动物、植物与生物分类', '動物・植物・生物の分類'],
  science: ['elements, space and scientific units', 'elementos, espacio y unidades científicas', 'elementos, espaço e unidades científicas', 'éléments, espace et unités scientifiques', 'Elemente, Weltraum und wissenschaftliche Einheiten', '化学元素、太空与科学单位', '元素・宇宙・科学の単位'],
  food: ['ingredients, dishes and food families', 'ingredientes, platos y familias de alimentos', 'ingredientes, pratos e famílias de alimentos', 'ingrédients, plats et familles alimentaires', 'Zutaten, Gerichte und Lebensmittelgruppen', '食材、菜品与食物分类', '食材・料理・食べ物の分類'],
  arts: ['music, literature and visual arts', 'música, literatura y artes visuales', 'música, literatura e artes visuais', 'musique, littérature et arts visuels', 'Musik, Literatur und bildende Kunst', '音乐、文学与视觉艺术', '音楽・文学・美術'],
  sports: ['sports, positions and competition events', 'deportes, posiciones y pruebas', 'esportes, posições e provas', 'sports, postes et épreuves', 'Sportarten, Positionen und Wettkämpfe', '运动项目、位置与竞赛', '競技・ポジション・大会種目'],
};

export function metaDescription(lang, slug) {
  const index = languageOrder.indexOf(lang);
  if (index < 0) throw new Error('Unknown metadata language: ' + lang);
  if (descriptions[slug]) return descriptions[slug][index];
  const category = slug.replace(/^themes\//, '');
  if (!topics[category]) throw new Error('Missing metadata for: ' + slug);
  const topic = topics[category][index];
  return [
    `Practise Krillion Unlimited with questions about ${topic}: 35 prompts, sample answers and learning references. Start a free seven-question themed dive.`,
    `Practica ${topic} en Krillion Unlimited: 35 preguntas, respuestas de ejemplo y referencias. Inicia una partida temática gratis de siete preguntas.`,
    `Pratique ${topic} em Krillion Unlimited: 35 perguntas, exemplos de respostas e referências. Comece uma partida temática grátis de sete perguntas.`,
    `Révisez le thème « ${topic} » dans Krillion Unlimited : 35 questions, exemples de réponses et références. Lancez une plongée thématique gratuite de sept questions.`,
    `Übe ${topic} in Krillion Unlimited: 35 Fragen, Beispielantworten und Lernquellen. Starte eine kostenlose Themenrunde mit sieben Fragen.`,
    `练习 Krillion Unlimited 的${topic}题目：35 道题，附真实问题、答案示例和学习来源，直接开始免费的七题主题潜航。`,
    `Krillion Unlimitedで${topic}を練習。35問、問題と答えの例、学習用の参照先を掲載。無料の7問テーマダイブを始めよう。`,
  ][index];
}

export const socialLocales = {en: 'en_US', es: 'es_ES', pt: 'pt_BR', fr: 'fr_FR', de: 'de_DE', zh: 'zh_CN', ja: 'ja_JP'};
