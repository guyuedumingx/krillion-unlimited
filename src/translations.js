// English key | Spanish | Portuguese | French | German | Simplified Chinese | Japanese.
const rows=`
Prompt {n}: {points} points|Pregunta {n}: {points} puntos|Pergunta {n}: {points} pontos|Question {n} : {points} points|Frage {n}: {points} Punkte|第 {n} 题：{points} 分|第{n}問：{points}点
{n} PTS|{n} PTS|{n} PTS|{n} PTS|{n} PKT|{n} 分|{n} 点
THE ENDLESS DIVE|LA INMERSIÓN SIN FIN|O MERGULHO SEM FIM|LA PLONGÉE SANS FIN|DER ENDLOSE TAUCHGANG|无尽潜航|終わりなきダイブ
Rarer answers. Deeper dives.|Respuestas más raras. Inmersiones más profundas.|Respostas mais raras. Mergulhos mais profundos.|Des réponses rares. Des plongées profondes.|Seltene Antworten. Tiefere Tauchgänge.|答案越冷门，下潜越深。|珍しい答えで、もっと深く。
UNLIMITED · SEVEN PROMPTS|SIN LÍMITE · SIETE PREGUNTAS|SEM LIMITES · SETE PERGUNTAS|ILLIMITÉ · SEPT QUESTIONS|UNBEGRENZT · SIEBEN FRAGEN|无限畅玩 · 每局七题|無制限 · 1回7問
{category} · THEMED DIVE|{category} · INMERSIÓN TEMÁTICA|{category} · MERGULHO TEMÁTICO|{category} · PLONGÉE À THÈME|{category} · THEMENRUNDE|{category} · 主题潜航|{category} · テーマダイブ
DAILY DIVE · {date}|INMERSIÓN DIARIA · {date}|MERGULHO DIÁRIO · {date}|PLONGÉE DU JOUR · {date}|TAGESRUNDE · {date}|每日潜航 · {date}|今日のダイブ · {date}
RESUME YOUR DIVE ↘|CONTINUAR INMERSIÓN ↘|RETOMAR MERGULHO ↘|REPRENDRE LA PLONGÉE ↘|TAUCHGANG FORTSETZEN ↘|继续上次潜航 ↘|ダイブを再開 ↘
OPEN THE DIVE LOG ∞|VER HISTORIAL ∞|VER HISTÓRICO ∞|VOIR LE JOURNAL ∞|TAUCHBUCH ÖFFNEN ∞|查看潜航记录 ∞|ダイブログを開く ∞
This shared dive uses an older question set. Start a fresh dive.|Este enlace usa un banco antiguo. Inicia otra inmersión.|Este link usa um banco antigo. Comece um novo mergulho.|Ce lien utilise un ancien jeu de questions. Lancez une nouvelle plongée.|Dieser Link nutzt alte Fragen. Starte einen neuen Tauchgang.|这个挑战使用旧版题库，请开始新的一局。|このリンクは旧問題集です。新しいダイブを始めてください。
BEGIN DESCENT|EMPEZAR|COMEÇAR|COMMENCER|ABTAUCHEN|开始下潜|ダイブ開始
PLAY THIS CHALLENGE|JUGAR ESTE RETO|JOGAR ESTE DESAFIO|JOUER CE DÉFI|CHALLENGE SPIELEN|接受这个挑战|このチャレンジを遊ぶ
ENDLESS DIVE #{n}|INMERSIÓN SIN FIN #{n}|MERGULHO SEM FIM #{n}|PLONGÉE SANS FIN Nº {n}|ENDLOSER TAUCHGANG #{n}|无尽潜航 第 {n} 局|無制限ダイブ #{n}
THEMED DIVES|TEMAS|TEMAS|THÈMES|THEMEN|主题潜航|テーマ別
TODAY’S DIVE|RETO DE HOY|DESAFIO DE HOJE|DÉFI DU JOUR|HEUTIGE RUNDE|今日挑战|今日の挑戦
UNLIMITED ∞|SIN LÍMITE ∞|SEM LIMITES ∞|ILLIMITÉ ∞|UNBEGRENZT ∞|无限模式 ∞|無制限 ∞
PROMPT {n} OF 7|PREGUNTA {n} DE 7|PERGUNTA {n} DE 7|QUESTION {n} SUR 7|FRAGE {n} VON 7|第 {n} 题 / 共 7 题|第 {n} 問 / 全7問
▼ rarer answers take you deeper ▼|▼ las respuestas raras te llevan más profundo ▼|▼ respostas raras levam você mais fundo ▼|▼ les réponses rares vous font descendre ▼|▼ seltene Antworten führen tiefer ▼|▼ 越冷门的答案，带你潜得越深 ▼|▼ 珍しい答えほど深く潜れる ▼
READY TO DIVE|PREPÁRATE|PREPARE-SE|PRÊT À PLONGER|BEREIT ZUM TAUCHEN|准备下潜|準備はいい？
Time remaining|Tiempo restante|Tempo restante|Temps restant|Verbleibende Zeit|剩余时间|残り時間
Your answer|Tu respuesta|Sua resposta|Votre réponse|Deine Antwort|你的答案|あなたの答え
type one answer…|escribe una respuesta…|digite uma resposta…|saisissez une réponse…|eine Antwort eingeben…|输入一个答案…|答えを一つ入力…
DIVE|BAJAR|MERGULHAR|PLONGER|TAUCHEN|下潜|潜る
PASS|PASAR|PULAR|PASSER|PASSEN|跳过|パス
25 SECONDS · ONE ANSWER|25 SEGUNDOS · UNA RESPUESTA|25 SEGUNDOS · UMA RESPOSTA|25 SECONDES · UNE RÉPONSE|25 SEKUNDEN · EINE ANTWORT|25 秒 · 一个答案|25秒 · 答えは一つ
RELAXED DIVE · NO TIMER|MODO RELAJADO · SIN RELOJ|MODO TRANQUILO · SEM TEMPO|MODE DÉTENTE · SANS CHRONO|ENTSPANNT · OHNE ZEITLIMIT|休闲模式 · 不限时|ゆったり · 時間制限なし
Did you mean “{answer}”? Press DIVE to confirm.|¿Querías decir «{answer}»? Pulsa BAJAR para confirmar.|Você quis dizer “{answer}”? Confirme em MERGULHAR.|Vouliez-vous dire « {answer} » ? Appuyez sur PLONGER.|Meintest du „{answer}“? Bestätige mit TAUCHEN.|你是想输入“{answer}”吗？点击下潜确认。|「{answer}」ですか？「潜る」で確定。
YES|SÍ|SIM|OUI|JA|确认|はい
Not recognised. Try another answer — the clock is still running.|Respuesta no reconocida. Prueba otra; el reloj sigue.|Resposta não reconhecida. Tente outra; o tempo continua.|Réponse non reconnue. Réessayez, le chrono continue.|Nicht erkannt. Probiere etwas anderes; die Zeit läuft.|未识别，请尝试其他答案，倒计时仍在继续。|認識できません。別の答えを。時間は進んでいます。
Not recognised. Try another answer.|Respuesta no reconocida. Prueba otra.|Resposta não reconhecida. Tente outra.|Réponse non reconnue. Réessayez.|Nicht erkannt. Probiere eine andere Antwort.|未识别，请尝试其他答案。|認識できません。別の答えを試してください。
THE TRENCH|LA FOSA|A FOSSA|LA FOSSE|TIEFSEEGRABEN|深海宝藏|海溝の発見
ABYSSAL|ABISAL|ABISSAL|ABYSSAL|ABYSSAL|深渊之选|深淵の答え
DEEP WATER|AGUAS PROFUNDAS|ÁGUAS PROFUNDAS|EAUX PROFONDES|TIEFES WASSER|深水发现|深海の発見
OPEN OCEAN|MAR ABIERTO|MAR ABERTO|PLEINE MER|OFFENER OZEAN|远洋发现|外洋の答え
PLANKTON|PLANCTON|PLÂNCTON|PLANCTON|PLANKTON|浮游之选|プランクトン
NOTHING LANDED|SIN CAPTURA|SEM CAPTURA|RIEN ATTRAPÉ|KEIN TREFFER|暂未命中|見つからなかった
A discovery from the deepest waters.|Un hallazgo de las aguas más profundas.|Uma descoberta das águas mais profundas.|Une découverte au fond de l’océan.|Eine Entdeckung aus den tiefsten Gewässern.|从海洋最深处带回的发现。|最も深い海からの発見。
A beautifully unexpected answer.|Una respuesta inesperada.|Uma resposta inesperada.|Une réponse inattendue.|Eine unerwartete Antwort.|一个令人意外的好答案。|意外な答えを発見。
You went beyond the obvious.|Fuiste más allá de lo evidente.|Você foi além do óbvio.|Vous avez dépassé l’évidence.|Du bist über das Offensichtliche hinaus.|你想到了常见答案之外。|定番の先へ進めた。
A little less obvious. A little deeper.|Menos evidente. Un poco más profundo.|Menos óbvio. Um pouco mais fundo.|Moins évident. Un peu plus profond.|Weniger offensichtlich. Etwas tiefer.|少一点常见，多一点深度。|少し珍しく、少し深く。
A familiar answer. There is more below.|Una respuesta conocida. Hay más abajo.|Uma resposta conhecida. Há mais lá embaixo.|Une réponse familière. Il y a plus au fond.|Eine bekannte Antwort. Unten wartet mehr.|熟悉的答案，下面还有更多。|なじみの答え。海の下にはまだある。
The clock got there first.|El reloj llegó primero.|O tempo acabou primeiro.|Le chrono a gagné cette fois.|Die Zeit war schneller.|这次，时间先到了。|今回は時間切れ。
Catch the next current.|Atrapa la siguiente corriente.|Pegue a próxima corrente.|Suivez le prochain courant.|Nimm die nächste Strömung.|下一道题，换个方向试试。|次の流れに乗ろう。
+{n} PTS · sink {depth}m|+{n} PTS · baja {depth}m|+{n} PTS · desça {depth}m|+{n} PTS · descente {depth}m|+{n} PKT · {depth}m tiefer|+{n} 分 · 下潜 {depth} 米|+{n} 点 · {depth}m 潜行
+{n} PTS|+{n} PTS|+{n} PTS|+{n} PTS|+{n} PKT|+{n} 分|+{n} 点
SEE YOUR DIVE|VER RESULTADO|VER RESULTADO|VOIR LE RÉSULTAT|ERGEBNIS ANSEHEN|查看本局结果|結果を見る
DESCEND|SEGUIR BAJANDO|CONTINUAR|DESCENDRE|WEITER ABTAUCHEN|继续下潜|さらに潜る
DIVE COMPLETE|INMERSIÓN COMPLETA|MERGULHO CONCLUÍDO|PLONGÉE TERMINÉE|TAUCHGANG BEENDET|潜航完成|ダイブ完了
INTO THE ABYSS|HACIA EL ABISMO|RUMO AO ABISMO|DANS LES ABYSSES|IN DEN ABGRUND|深入海底|深淵へ
DEEPER THAN BEFORE|MÁS PROFUNDO|MAIS FUNDO|ENCORE PLUS PROFOND|NOCH TIEFER|更深一步|さらに深く
THE OCEAN IS WAITING|EL OCÉANO TE ESPERA|O OCEANO ESPERA|L’OCÉAN VOUS ATTEND|DER OZEAN WARTET|海洋在等你|海は待っている
{depth} METRES · {n} / 7 LANDED|{depth} METROS · {n} / 7 ACIERTOS|{depth} METROS · {n} / 7 ACERTOS|{depth} MÈTRES · {n} / 7 RÉUSSIES|{depth} METER · {n} / 7 TREFFER|{depth} 米 · 命中 {n} / 7 题|{depth}m · {n} / 7 正解
YOUR DIVE · RARER ANSWERS SIT DEEPER|TU INMERSIÓN · LO RARO VA MÁS PROFUNDO|SEU MERGULHO · O RARO VAI MAIS FUNDO|VOTRE PLONGÉE · LE RARE DESCEND PLUS BAS|DEIN TAUCHGANG · SELTENE ANTWORTEN SINKEN TIEFER|本局潜航 · 冷门答案位置更深|このダイブ · 珍しい答えほど深く
EXPLORE YOUR ANSWERS|EXPLORAR RESPUESTAS|EXPLORAR RESPOSTAS|EXPLORER LES RÉPONSES|ANTWORTEN ANSEHEN|查看答案详解|答えを詳しく見る
DIVE AGAIN ∞|OTRA INMERSIÓN ∞|MERGULHAR DE NOVO ∞|REPLONGER ∞|NOCH MAL TAUCHEN ∞|再来一局 ∞|もう一度 ∞
SHARE ↗|COMPARTIR ↗|COMPARTILHAR ↗|PARTAGER ↗|TEILEN ↗|分享 ↗|シェア ↗
DIVE LOG|HISTORIAL|HISTÓRICO|JOURNAL|TAUCHBUCH|潜航记录|ダイブログ
BACK TO THE SURFACE|VOLVER A LA SUPERFICIE|VOLTAR À SUPERFÍCIE|RETOUR EN SURFACE|ZURÜCK ZUR OBERFLÄCHE|返回海面|水面へ戻る
DIVE COPIED — SEND IT TO A FRIEND|COPIADO · ENVÍALO A UN AMIGO|COPIADO · ENVIE A UM AMIGO|COPIÉ · ENVOYEZ À UN AMI|KOPIERT · AN FREUNDE SENDEN|已复制，发给朋友挑战吧|コピーしました · 友達に送ろう
Copy your challenge|Copia tu reto|Copie seu desafio|Copiez votre défi|Challenge kopieren|复制挑战链接|チャレンジをコピー
Start a new dive? Your unfinished dive will be replaced.|¿Empezar otra inmersión? Sustituirá la actual.|Começar outro mergulho? O atual será substituído.|Nouvelle plongée ? Elle remplacera la partie en cours.|Neuer Tauchgang? Der laufende wird ersetzt.|开始新的一局？未完成的潜航将被替换。|新しく始めますか？途中のダイブは上書きされます。
Menu|Menú|Menu|Menu|Menü|菜单|メニュー
∞ Unlimited|∞ Sin límite|∞ Sem limites|∞ Illimité|∞ Unbegrenzt|∞ 无限模式|∞ 無制限
◷ Today’s dive|◷ Reto de hoy|◷ Desafio de hoje|◷ Défi du jour|◷ Heutige Runde|◷ 今日挑战|◷ 今日のダイブ
▦ Themed dives|▦ Temas|▦ Temas|▦ Thèmes|▦ Themen|▦ 主题潜航|▦ テーマ別
⟲ Archive|⟲ Archivo|⟲ Arquivo|⟲ Archives|⟲ Archiv|⟲ 每日回放|⟲ アーカイブ
▤ Dive log|▤ Historial|▤ Histórico|▤ Journal|▤ Tauchbuch|▤ 潜航记录|▤ ダイブログ
⚙ Settings|⚙ Ajustes|⚙ Configurações|⚙ Réglages|⚙ Einstellungen|⚙ 设置|⚙ 設定
♙ Wardrobe|♙ Colores|♙ Cores|♙ Couleurs|♙ Farben|♙ 换装|♙ 着せ替え
? How to play|? Cómo jugar|? Como jogar|? Comment jouer|? Spielanleitung|? 游戏规则|? 遊び方
How to play|Cómo jugar|Como jogar|Comment jouer|Spielanleitung|游戏规则|遊び方
About|Acerca de|Sobre|À propos|Über uns|关于本站|このサイトについて
Privacy|Privacidad|Privacidade|Confidentialité|Datenschutz|隐私政策|プライバシー
Your timer keeps running while the menu is open.|El reloj sigue con el menú abierto.|O tempo continua com o menu aberto.|Le chrono continue dans le menu.|Die Zeit läuft auch im Menü.|打开菜单时，计时仍会继续。|メニュー中も時間は進みます。
Seven prompts. One ocean. Keep exploring.|Siete preguntas. Un océano. Sigue explorando.|Sete perguntas. Um oceano. Continue explorando.|Sept questions. Un océan. Explorez encore.|Sieben Fragen. Ein Ozean. Weiter entdecken.|七道题，一片海。继续探索。|7問、一つの海。探検を続けよう。
Settings|Ajustes|Configurações|Réglages|Einstellungen|设置|設定
25-second challenge|Reto de 25 segundos|Desafio de 25 segundos|Défi de 25 secondes|25-Sekunden-Challenge|25 秒挑战|25秒チャレンジ
Applies to your next dive. Turn off for relaxed play.|Para tu próxima partida. Desactívalo para jugar sin reloj.|Vale no próximo mergulho. Desligue para jogar sem tempo.|Pour la prochaine partie. Désactivez pour jouer sans chrono.|Gilt ab der nächsten Runde. Aus für entspanntes Spielen.|下一局生效，关闭后可不限时游玩。|次のダイブから適用。オフで時間制限なし。
Sound|Sonido|Som|Son|Ton|音效|サウンド
Short tones for starts, answers and discoveries.|Sonidos breves al empezar y responder.|Sons curtos ao começar e responder.|Sons brefs au départ et aux découvertes.|Kurze Töne beim Start und bei Antworten.|开始、答题和发现时播放简短提示音。|開始や答え、発見に短い音を鳴らします。
Low-power mode|Modo de bajo consumo|Modo econômico|Mode économie d’énergie|Energiesparmodus|低功耗模式|省電力モード
Fewer particles and a lower animation frame rate.|Menos partículas y animación más ligera.|Menos partículas e animação mais leve.|Moins de particules et d’images par seconde.|Weniger Partikel und niedrigere Bildrate.|减少粒子和动画帧率。|粒子とアニメーションのフレーム数を減らします。
Colorblind mode|Modo para daltonismo|Modo para daltonismo|Mode daltonisme|Farbenblind-Modus|色盲友好模式|色覚サポート
More separated HUD and interface colours.|Colores de interfaz más diferenciados.|Cores da interface mais distintas.|Couleurs d’interface plus distinctes.|Deutlichere Farben in der Anzeige.|提高界面与状态颜色的区分度。|表示の色を見分けやすくします。
Answer corrections|Corrección de respuestas|Correção de respostas|Correction des réponses|Antwortkorrekturen|答案拼写修正|答えのスペル補正
Confirm minor spelling corrections before scoring.|Confirma pequeñas erratas antes de puntuar.|Confirme pequenos erros antes de pontuar.|Confirmez les petites fautes avant le score.|Kleine Schreibfehler vor der Wertung bestätigen.|确认轻微拼写修正后再计分。|軽いスペル修正を確認してから採点。
Clear rejected entries|Borrar respuestas rechazadas|Limpar respostas rejeitadas|Effacer les réponses refusées|Abgelehnte Eingaben löschen|清空未识别答案|不正解の入力を消す
Empty the input after an unrecognised answer.|Vacía el campo tras una respuesta no reconocida.|Limpa o campo após resposta não reconhecida.|Vide le champ après une réponse non reconnue.|Leert das Feld nach einer unbekannten Antwort.|未识别时自动清空输入框。|認識できない答えの後に入力欄を空にします。
Your choices are saved in this browser. The timer continues while settings are open.|Los ajustes se guardan aquí. El reloj sigue durante los ajustes.|Suas escolhas ficam neste navegador. O tempo continua nas configurações.|Vos choix restent dans ce navigateur. Le chrono continue dans les réglages.|Deine Auswahl bleibt im Browser. Die Zeit läuft in den Einstellungen weiter.|设置保存在此浏览器中。打开设置时计时仍继续。|設定はこのブラウザに保存。設定中も時間は進みます。
Themed dives|Inmersiones temáticas|Mergulhos temáticos|Plongées à thème|Themenrunden|主题潜航|テーマダイブ
Choose your waters. Each dive contains seven different prompts.|Elige tu tema. Cada partida tiene siete preguntas distintas.|Escolha seu tema. Cada partida tem sete perguntas diferentes.|Choisissez votre thème. Chaque partie contient sept questions différentes.|Wähle dein Thema. Jede Runde enthält sieben verschiedene Fragen.|选一片海域，每局七道不同的题。|テーマを選ぼう。1回に異なる7問が出ます。
Classic mix|Mezcla clásica|Mistura clássica|Mélange classique|Klassischer Mix|经典混合|クラシックミックス
All six categories|Las seis categorías|As seis categorias|Les six catégories|Alle sechs Kategorien|六大主题混合|6カテゴリー全部
A fresh seven every dive|Siete preguntas por partida|Sete perguntas por partida|Sept questions par partie|Sieben Fragen pro Runde|每局随机七题|毎回ランダムな7問
Geography|Geografía|Geografia|Géographie|Geografie|地理|地理
Nature|Naturaleza|Natureza|Nature|Natur|自然|自然
Science|Ciencia|Ciência|Sciences|Wissenschaft|科学|科学
Food|Comida|Comida|Cuisine|Essen|美食|食べ物
Arts|Arte|Artes|Arts|Kunst|艺术|芸術
Sports|Deportes|Esportes|Sports|Sport|体育|スポーツ
All|Todos|Todos|Tous|Alle|全部|すべて
Archive|Archivo|Arquivo|Archives|Archiv|每日回放|アーカイブ
Replay a daily seven. The date determines the questions.|Repite un reto diario. La fecha fija las preguntas.|Repita um desafio diário. A data define as perguntas.|Rejouez une partie du jour. La date fixe les questions.|Spiele eine Tagesrunde. Das Datum bestimmt die Fragen.|重玩每日七题，题组由日期确定。|過去の1日7問を再プレイ。日付で問題が決まります。
Dive log|Historial|Histórico|Journal de plongée|Tauchbuch|潜航记录|ダイブログ
DIVES|PARTIDAS|PARTIDAS|PARTIES|RUNDEN|场次|プレイ回数
BEST / 700|MEJOR / 700|MELHOR / 700|MEILLEUR / 700|BESTE / 700|最高 / 700|最高 / 700
AVERAGE|MEDIA|MÉDIA|MOYENNE|DURCHSCHNITT|平均分|平均点
Your first completed dive will appear here.|Tu primera partida terminada aparecerá aquí.|Sua primeira partida concluída aparecerá aqui.|Votre première partie terminée apparaîtra ici.|Deine erste beendete Runde erscheint hier.|完成第一局后，记录会出现在这里。|最初のダイブを終えるとここに表示されます。
Your log stays in this browser. The latest 50 dives are kept.|El historial se queda aquí. Guarda las últimas 50 partidas.|O histórico fica aqui. Guarda as últimas 50 partidas.|Le journal reste ici. Les 50 dernières parties sont conservées.|Das Tauchbuch bleibt hier. Die letzten 50 Runden werden gespeichert.|记录保存在此浏览器，保留最近 50 局。|このブラウザに直近50回の記録を保存します。
Wardrobe|Colores|Cores|Couleurs|Farben|换装|着せ替え
A little friend for a big ocean. Choose a colour.|Un pequeño amigo en un gran océano. Elige un color.|Um pequeno amigo no grande oceano. Escolha uma cor.|Un petit ami dans un grand océan. Choisissez une couleur.|Ein kleiner Freund im großen Ozean. Wähle eine Farbe.|广阔海洋里的小伙伴，选一个颜色吧。|大きな海の小さな友達。色を選ぼう。
Coral|Coral|Coral|Corail|Koralle|珊瑚|サンゴ
Lemon|Limón|Limão|Citron|Zitrone|柠檬|レモン
Glacier|Glaciar|Geleira|Glacier|Gletscher|冰川|氷河
Lilac|Lila|Lilás|Lilas|Flieder|丁香|ライラック
Mint|Menta|Menta|Menthe|Minze|薄荷|ミント
Pearl|Perla|Pérola|Perle|Perle|珍珠|パール
Your discoveries|Tus descubrimientos|Suas descobertas|Vos découvertes|Deine Entdeckungen|本局发现|今回の発見
Your answer: {answer}|Tu respuesta: {answer}|Sua resposta: {answer}|Votre réponse : {answer}|Deine Antwort: {answer}|你的答案：{answer}|あなたの答え：{answer}
Passed / time expired|Pasada / tiempo agotado|Pulou / tempo esgotado|Passée / temps écoulé|Gepasst / Zeit abgelaufen|跳过 / 超时|パス / 時間切れ
Read more ↗|Leer más ↗|Saiba mais ↗|En savoir plus ↗|Mehr erfahren ↗|阅读资料 ↗|参考資料 ↗
Points are set for each answer in this game; these lists do not include every possible valid answer.|Los puntos se asignan en este juego; las listas no incluyen todas las respuestas posibles.|Os pontos são definidos neste jogo; as listas não incluem todas as respostas possíveis.|Les points sont fixés pour ce jeu ; les listes ne sont pas exhaustives.|Die Punkte gelten für dieses Spiel; die Listen sind nicht vollständig.|分值由本游戏设置，答案列表不包含所有可能的正确答案。|点数はこのゲーム独自の設定で、答えの一覧は網羅的ではありません。
Explore the accepted answers after your dive. This prompt has {n} entries in the current bank.|Revisa las respuestas al terminar. Esta pregunta admite {n} respuestas del banco actual.|Veja as respostas ao terminar. Esta pergunta aceita {n} respostas do banco atual.|Consultez les réponses à la fin. Cette question en accepte {n} dans le jeu actuel.|Sieh dir danach die Antworten an. Diese Frage hat {n} Einträge in der aktuellen Sammlung.|结束后可查看答案。本题在当前题库中有 {n} 个可接受答案。|終了後に答えを確認できます。この問題には現在 {n} 個の登録済みの答えがあります。
DEPTH|PROFUNDIDAD|PROFUNDIDADE|PROFONDEUR|TIEFE|深度|深度
SCORE|PUNTOS|PONTOS|SCORE|PUNKTE|得分|スコア
SURFACE|SUPERFICIE|SUPERFÍCIE|SURFACE|OBERFLÄCHE|海面|水面
YOU ◀|TÚ ◀|VOCÊ ◀|VOUS ◀|DU ◀|你 ◀|現在地 ◀
Open menu|Abrir menú|Abrir menu|Ouvrir le menu|Menü öffnen|打开菜单|メニューを開く
Open settings|Abrir ajustes|Abrir configurações|Ouvrir les réglages|Einstellungen öffnen|打开设置|設定を開く
Open wardrobe|Elegir color|Escolher cor|Choisir une couleur|Farbe wählen|打开换装|着せ替えを開く
Turn sound on|Activar sonido|Ligar som|Activer le son|Ton einschalten|开启音效|音をオン
Turn sound off|Desactivar sonido|Desligar som|Couper le son|Ton ausschalten|关闭音效|音をオフ
Close dialog|Cerrar|Fechar|Fermer|Schließen|关闭|閉じる
Dive progress|Progreso|Progresso|Progression|Fortschritt|潜航进度|ダイブの進行状況
Answer scores across your seven prompts|Puntos en tus siete preguntas|Pontos nas sete perguntas|Scores de vos sept questions|Punkte deiner sieben Fragen|七道题的得分图|7問のスコアグラフ
Language|Idioma|Idioma|Langue|Sprache|语言|言語
Choose a language|Elige un idioma|Escolha um idioma|Choisissez une langue|Sprache wählen|选择语言|言語を選択
Your dive stays saved when you switch languages.|Tu partida se conserva al cambiar de idioma.|Sua partida fica salva ao mudar de idioma.|Votre partie est conservée quand vous changez de langue.|Dein Tauchgang bleibt beim Sprachwechsel gespeichert.|切换语言会保留当前潜航。|言語を変えてもダイブは保存されます。
Game guides|Guías del juego|Guias do jogo|Guides du jeu|Spielratgeber|游戏攻略|ゲームガイド
Back to the game|Volver al juego|Voltar ao jogo|Retour au jeu|Zurück zum Spiel|返回游戏|ゲームに戻る
Play free|Jugar gratis|Jogar grátis|Jouer gratuitement|Kostenlos spielen|免费畅玩|無料で遊ぶ
Scoring guide|Guía de puntuación|Guia de pontuação|Guide du score|Punkte erklärt|计分指南|スコアガイド
Rare-answer tips|Consejos para respuestas raras|Dicas para respostas raras|Conseils pour les réponses rares|Tipps für seltene Antworten|冷门答案技巧|珍しい答えのコツ
Daily challenge|Reto diario|Desafio diário|Défi quotidien|Tägliche Challenge|每日挑战|デイリーチャレンジ
Themes|Temas|Temas|Thèmes|Themen|主题|テーマ
FAQ|Preguntas frecuentes|Perguntas frequentes|Questions fréquentes|Häufige Fragen|常见问题|よくある質問
SUNLIGHT ZONE|ZONA ILUMINADA|ZONA ILUMINADA|ZONE ÉCLAIRÉE|LICHTZONE|透光层|有光層
TWILIGHT ZONE|ZONA CREPUSCULAR|ZONA CREPUSCULAR|ZONE CRÉPUSCULAIRE|DÄMMERZONE|弱光层|薄明層
MIDNIGHT ZONE|ZONA OSCURA|ZONA ESCURA|ZONE OBSCURE|DUNKELZONE|无光层|無光層
ABYSSAL ZONE|ZONA ABISAL|ZONA ABISSAL|ZONE ABYSSALE|ABYSSALZONE|深渊层|深海底層
HADAL ZONE|ZONA HADAL|ZONA HADAL|ZONE HADALE|HADALZONE|超深渊层|超深海層
points|puntos|pontos|points|Punkte|分|点
Your saved dive uses an older bank. New challenges use the expanded question set.|Tu partida usa un banco anterior. Los nuevos retos usan el banco ampliado.|Sua partida usa um banco anterior. Novos desafios usam o banco ampliado.|Votre partie utilise l’ancien jeu de questions. Les nouveaux défis utilisent la collection étendue.|Dein gespeicherter Tauchgang nutzt die alte Sammlung. Neue Runden verwenden die Erweiterung.|旧版存档使用旧题库，新挑战使用扩充后的题库。|保存済みのダイブは旧問題集です。新しい挑戦では拡張版を使います。
`;
export const dictionary=Object.fromEntries(rows.trim().split('\n').map(row=>{const [key,...values]=row.split('|');if(values.length!==6)throw Error('Translation columns: '+key);return [key,values];}));
