// French Learning v1.8
// 3ファイル構成: index.html / style.css / app.js
// 今後は問題データをさらに data/*.js に分離できます。

const grammarUnits = [
  {
    level: "B1",
    title: "接続法①",
    key: "subj",
    summary: "Il faut que / vouloir que / souhaiter que / craindre que などの後は接続法。",
    english: "It is necessary that / want someone to / hope that",
    structure: "表現 + que + 主語 + 接続法",
    items: [
      { fr:"Il faut que", ja:"〜しなければならない / 〜する必要がある", en:"have to / It is necessary that", syntax:"Il faut que + 主語 + 接続法", reason:"必要・義務を表す。まだ実現していない内容なので接続法。", nuance:"命令よりも客観的に『必要がある』と言う表現。会話で非常に頻出。", example:"Il faut que tu viennes.", mistake:"❌ Il faut que tu viens → ⭕ Il faut que tu viennes", freq:"★★★★★" },
      { fr:"Vouloir que", ja:"〜してほしい", en:"want someone to", syntax:"vouloir que + 主語 + 接続法", reason:"願望・要求を表すので接続法。", nuance:"Je veux que... は少し直接的。丁寧にしたい時は J'aimerais que... が自然。", example:"Je veux que vous veniez tout de suite.", mistake:"❌ vous venez → ⭕ vous veniez", freq:"★★★★★" },
      { fr:"Souhaiter que", ja:"〜を望む", en:"hope/wish that", syntax:"souhaiter que + 接続法", reason:"願望を表すので接続法。", nuance:"vouloir que より少し丁寧・フォーマル。", example:"Je souhaite que le monde retrouve la paix.", mistake:"❌ retrouve は直説法にも見えるが、ここでは接続法。", freq:"★★★★☆" },
      { fr:"Il vaut mieux que", ja:"〜した方がよい", en:"It is better that", syntax:"Il vaut mieux que + 接続法", reason:"助言・判断を表すので接続法。", nuance:"Tu dois... より柔らかく助言できる。", example:"Il vaut mieux que nous fassions les courses.", mistake:"❌ nous faisons → ⭕ nous fassions", freq:"★★★★☆" },
      { fr:"Craindre que", ja:"〜ではないかと心配する / 恐れる", en:"fear that / be afraid that", syntax:"craindre que + 接続法", reason:"不安・恐れという感情を表すので接続法。", nuance:"ne explétif が入ることがあるが、否定の意味ではない場合がある。", example:"Je crains que tu n'arrives pas.", mistake:"n' は文法的な ne で、意味上の否定と混同しない。", freq:"★★★☆☆" },
      { fr:"Il est possible que", ja:"〜の可能性がある", en:"It is possible that", syntax:"Il est possible que + 接続法", reason:"不確実性を表すので接続法。", nuance:"会話でも書き言葉でも使える。", example:"Il est possible qu'il neige.", mistake:"❌ il neige は同形だが、ここでは接続法。", freq:"★★★★☆" },
      { fr:"Être content que", ja:"〜でうれしい", en:"be happy that", syntax:"être content que + 接続法", reason:"感情を表す表現の後なので接続法。", nuance:"自分の感情を述べる自然な表現。", example:"Elle est contente que j'aie réussi.", mistake:"❌ j'ai réussi → ⭕ j'aie réussi", freq:"★★★★☆" },
      { fr:"Espérer que", ja:"〜を期待する / 〜だといいと思う", en:"hope that", syntax:"espérer que + 直説法（現在・未来）", reason:"願望系だが、通常は直説法。例外として覚える。", nuance:"J'espère que tout va bien. は超頻出。", example:"J'espère que tout va bien.", mistake:"❌ J'espère que tout aille bien → ⭕ J'espère que tout va bien", freq:"★★★★★" }
    ]
  },
  {
    level: "B1",
    title: "譲歩・対立",
    key: "opp",
    summary: "mais / pourtant / cependant / bien que / quoique / alors que / tandis que。",
    english: "but / however / although / while / whereas",
    structure: "A, mais B / Bien que + 接続法 / Alors que + 直説法",
    items: [
      { fr:"mais", ja:"だが、しかし", en:"but", syntax:"A, mais B", reason:"2つの文を対立させる。", nuance:"最も普通で会話でも頻出。", example:"Il pleut, mais nous sommes allés à la mer.", mistake:"mais の後ろに完全な文を置ける。", freq:"★★★★★" },
      { fr:"pourtant", ja:"それにもかかわらず", en:"however / yet", syntax:"A, pourtant B", reason:"予想と違う結果を表す。", nuance:"mais より『意外性』が強い。", example:"Il est malade, pourtant il est venu.", mistake:"pourtant は文頭・文中で使える。", freq:"★★★★☆" },
      { fr:"cependant", ja:"しかしながら", en:"however", syntax:"A. Cependant, B.", reason:"前文に対して反対・制限を加える。", nuance:"少し書き言葉寄り。", example:"Cette robe est chère. Cependant, elle est très jolie.", mistake:"会話では mais の方が自然なことが多い。", freq:"★★★☆☆" },
      { fr:"bien que", ja:"〜だけれども / 〜にもかかわらず", en:"although / even though", syntax:"Bien que + 接続法", reason:"譲歩を表し、事実でも接続法を使う。", nuance:"試験・書き言葉で重要。会話でも使える。", example:"Bien qu'il soit malade, il travaille.", mistake:"❌ Bien qu'il est malade → ⭕ Bien qu'il soit malade", freq:"★★★★☆" },
      { fr:"quoique", ja:"〜だけれども / 〜にもかかわらず", en:"although", syntax:"Quoique + 接続法", reason:"bien que と同じく譲歩を表す。", nuance:"bien que と近い。やや硬め。", example:"Quoiqu'il obéisse à ses parents, ils sont méchants.", mistake:"quoi que（何を〜しても）と混同しない。", freq:"★★★☆☆" },
      { fr:"alors que", ja:"①〜している間に / ②〜なのに", en:"while / whereas", syntax:"Alors que + 直説法", reason:"同時・対比を表す。通常は直説法。", nuance:"対比の意味でよく使う。", example:"Alors que je suis à Tokyo, je suis heureux.", mistake:"接続法ではなく直説法が基本。", freq:"★★★★☆" },
      { fr:"tandis que", ja:"①〜している間に / ②一方で", en:"while / whereas", syntax:"Tandis que + 直説法", reason:"同時・対比を表す。通常は直説法。", nuance:"alors que と近いが、対比がややはっきり。", example:"Tandis qu'il est là, elle est heureuse.", mistake:"接続法ではなく直説法が基本。", freq:"★★★★☆" },
      { fr:"qui que / quoi que / où que", ja:"誰であっても / 何であっても / どこであっても", en:"whoever / whatever / wherever", syntax:"Qui que / Quoi que / Où que + 接続法", reason:"不特定・譲歩を表すので接続法。", nuance:"決まった形として覚えると強い。", example:"Où que tu ailles, je ne t'oublierai pas.", mistake:"où que tu vas ではなく où que tu ailles。", freq:"★★★☆☆" }
    ]
  },
  {
    level: "B1",
    title: "接続法活用",
    key: "conj",
    summary: "être / avoir / faire / aller / savoir / pouvoir など頻出活用。",
    english: "subjunctive conjugation",
    structure: "que + je/tu/il/nous/vous/ils + 接続法",
    items: [
      { fr:"être", ja:"〜である", en:"be", syntax:"sois, sois, soit, soyons, soyez, soient", reason:"不規則で最重要。", nuance:"bien que / qui que / où que で頻出。", example:"Bien qu'il soit malade...", mistake:"est と soit の区別。", freq:"★★★★★" },
      { fr:"avoir", ja:"持っている / ある", en:"have", syntax:"aie, aies, ait, ayons, ayez, aient", reason:"不規則で最重要。", nuance:"複合過去の接続法でも使う。", example:"Quoi qu'il ait...", mistake:"a と ait の区別。", freq:"★★★★★" },
      { fr:"faire", ja:"する / 作る", en:"do / make", syntax:"fasse, fasses, fasse, fassions, fassiez, fassent", reason:"faire は接続法で語幹が変わる。", nuance:"quoi que vous fassiez が頻出。", example:"Quoi que vous fassiez...", mistake:"faisons ではなく fassions。", freq:"★★★★☆" },
      { fr:"aller", ja:"行く", en:"go", syntax:"aille, ailles, aille, allions, alliez, aillent", reason:"不規則。", nuance:"où que tu ailles が定番。", example:"Où que tu ailles...", mistake:"vas ではなく ailles。", freq:"★★★★★" },
      { fr:"savoir", ja:"知っている", en:"know", syntax:"sache, saches, sache, sachions, sachiez, sachent", reason:"savoir → sache は頻出。", nuance:"Il faut que tout le monde sache. が使いやすい。", example:"Il faut que tout le monde sache.", mistake:"sait ではなく sache。", freq:"★★★★☆" },
      { fr:"pouvoir", ja:"できる", en:"can", syntax:"puisse, puisses, puisse, puissions, puissiez, puissent", reason:"可能性・否定・不特定で頻出。", nuance:"Il n'y a personne qui puisse... でよく出る。", example:"Il n'y a personne qui puisse tout faire.", mistake:"peut ではなく puisse。", freq:"★★★★☆" }
    ]
  }
];

const questions = [
  {type:"choice",unit:"subj",level:"B1",q:"Il faut que nous ____ vite.",jp:"私たちは急いで終わらせなければならない。",choices:["finissons","finissions","finissent","finit"],a:"finissions",full:"Il faut que nous finissions vite.",en:"We have to finish quickly.",jaSyntax:"Il faut que = 〜しなければならない",st:"Il faut que + 主語 + 接続法",ex:"Il faut que の後は接続法。nous finir → finissions。"},
  {type:"choice",unit:"subj",level:"B1",q:"Il faut que tout le monde ____ la vérité.",jp:"皆が真実を知らなければならない。",choices:["sait","sache","savent","saches"],a:"sache",full:"Il faut que tout le monde sache la vérité.",en:"Everyone has to know the truth.",jaSyntax:"Il faut que = 〜しなければならない",st:"Il faut que + 接続法",ex:"savoir の接続法は sache。"},
  {type:"choice",unit:"subj",level:"B1",q:"Je veux que vous ____ tout de suite.",jp:"あなたにすぐ来てほしいです。",choices:["venez","veniez","venons","vienne"],a:"veniez",full:"Je veux que vous veniez tout de suite.",en:"I want you to come right away.",jaSyntax:"vouloir que = 〜してほしい",st:"vouloir que + 接続法",ex:"vouloir que の後は接続法。vous venir → veniez。"},
  {type:"choice",unit:"subj",level:"B1",q:"Tu veux que je t'____ ?",jp:"私に一緒に来てほしいの？",choices:["accompagne","accompagnes","accompagner","accompagnais"],a:"accompagne",full:"Tu veux que je t'accompagne ?",en:"Do you want me to come with you?",jaSyntax:"vouloir que = 〜してほしい",st:"vouloir que + 主語 + 接続法",ex:"accompagner の je 接続法は accompagne。"},
  {type:"choice",unit:"subj",level:"B1",q:"Nous souhaitons que le monde ____ la paix.",jp:"私たちは、世界がふたたび平和になることを望んでいる。",choices:["retrouve","retrouvera","retrouvait","retrouves"],a:"retrouve",full:"Nous souhaitons que le monde retrouve la paix.",en:"We hope that the world finds peace again.",jaSyntax:"souhaiter que = 〜を望む",st:"souhaiter que + 接続法",ex:"retrouve は直説法と同形だが、ここでは接続法。"},
  {type:"choice",unit:"subj",level:"B1",q:"Il vaut mieux que nous ____ les courses aujourd'hui.",jp:"私たちは今日買い物をした方がよい。",choices:["faisons","fassions","fassiez","font"],a:"fassions",full:"Il vaut mieux que nous fassions les courses aujourd'hui.",en:"It is better that we do the shopping today.",jaSyntax:"Il vaut mieux que = 〜した方がよい",st:"Il vaut mieux que + 接続法",ex:"faire の nous 接続法は fassions。"},
  {type:"choice",unit:"subj",level:"B1",q:"Je crains que tu n'____ pas avant notre départ.",jp:"君が私たちの出発前に到着できないのではないかと心配だ。",choices:["arrives","arrive","arriveras","arrivais"],a:"arrives",full:"Je crains que tu n'arrives pas avant notre départ.",en:"I'm afraid you won't arrive before our departure.",jaSyntax:"craindre que = 〜ではないかと心配する",st:"craindre que + 接続法",ex:"craindre que の後は接続法。n' は意味を強めることがある。"},
  {type:"choice",unit:"subj",level:"B1",q:"Nous avons peur qu'il ne ____ pas.",jp:"彼が来ないのではないかと心配だ。",choices:["vient","vienne","viendra","venait"],a:"vienne",full:"Nous avons peur qu'il ne vienne pas.",en:"We are afraid he won't come.",jaSyntax:"avoir peur que = 〜ではないかと心配する",st:"avoir peur que + 接続法",ex:"venir の il 接続法は vienne。"},
  {type:"choice",unit:"subj",level:"B1",q:"Il se peut que le professeur ____ en retard.",jp:"先生が遅れて到着する可能性がある。",choices:["arrive","arrives","arrivera","arrivait"],a:"arrive",full:"Il se peut que le professeur arrive en retard.",en:"The teacher may arrive late.",jaSyntax:"Il se peut que = 〜の可能性がある",st:"Il se peut que + 接続法",ex:"可能性・不確実性なので接続法。"},
  {type:"choice",unit:"subj",level:"B1",q:"C'est le seul roman qu'il ____.",jp:"これは彼が読んでいる唯一の小説です。",choices:["lit","lise","lira","lisait"],a:"lise",full:"C'est le seul roman qu'il lise.",en:"This is the only novel he reads.",jaSyntax:"le seul ... que = 唯一〜する",st:"le seul + que + 接続法",ex:"唯一・最上級があると接続法になりやすい。"},
  {type:"choice",unit:"subj",level:"B1",q:"Y a-t-il quelqu'un qui ____ ce que je viens de dire ?",jp:"私が今言ったことを理解できない人はいますか。",choices:["ne comprend pas","ne comprenne pas","ne comprendra pas","n'a pas compris"],a:"ne comprenne pas",full:"Y a-t-il quelqu'un qui ne comprenne pas ce que je viens de dire ?",en:"Is there anyone who doesn't understand what I just said?",jaSyntax:"quelqu'un qui + 接続法 = 〜する人がいるか",st:"疑問・不確実 + qui + 接続法",ex:"不特定の人を探しているので接続法。comprendre → comprenne。"},
  {type:"choice",unit:"opp",level:"B1",q:"Bien qu'il ____ malade, il travaille.",jp:"彼は病気なのに働いている。",choices:["est","soit","sera","était"],a:"soit",full:"Bien qu'il soit malade, il travaille.",en:"Although he is sick, he works.",jaSyntax:"Bien que = 〜にもかかわらず",st:"Bien que + 接続法",ex:"bien que の後は必ず接続法。être → soit。"},
  {type:"choice",unit:"opp",level:"B1",q:"Quoiqu'il ____ à ses parents, ils sont méchants avec lui.",jp:"彼は両親に従順なのに、両親は彼に意地悪だ。",choices:["obéit","obéisse","obéira","obéissait"],a:"obéisse",full:"Quoiqu'il obéisse à ses parents, ils sont méchants avec lui.",en:"Although he obeys his parents, they are mean to him.",jaSyntax:"Quoique = 〜にもかかわらず",st:"Quoique + 接続法",ex:"quoique は bien que と同じく接続法。"},
  {type:"choice",unit:"opp",level:"B1",q:"Tandis qu'il ____ là, elle est heureuse.",jp:"彼がそこにいるとき、彼女は幸せだ。",choices:["est","soit","sera","soient"],a:"est",full:"Tandis qu'il est là, elle est heureuse.",en:"While he is there, she is happy.",jaSyntax:"Tandis que = 〜している間に / 一方で",st:"tandis que + 直説法",ex:"tandis que は基本的に直説法。"},
  {type:"choice",unit:"opp",level:"B1",q:"Alors que je ____ à Tokyo, je suis heureux.",jp:"私は東京にいると幸せだ。",choices:["suis","sois","serai","soient"],a:"suis",full:"Alors que je suis à Tokyo, je suis heureux.",en:"While I am in Tokyo, I am happy.",jaSyntax:"Alors que = 〜している間に / 〜なのに",st:"alors que + 直説法",ex:"alors que は同時・対比で使い、基本は直説法。"},
  {type:"choice",unit:"opp",level:"B1",q:"Qui que vous ____, vous ne devez pas fumer ici.",jp:"あなたが誰であっても、ここでタバコを吸ってはいけません。",choices:["êtes","soyez","serez","étiez"],a:"soyez",full:"Qui que vous soyez, vous ne devez pas fumer ici.",en:"Whoever you are, you must not smoke here.",jaSyntax:"Qui que = 誰であっても",st:"Qui que + 接続法",ex:"être の vous 接続法は soyez。"},
  {type:"choice",unit:"opp",level:"B1",q:"Quoi que vous ____, c'est trop tard.",jp:"あなたが何をしようと、手遅れだ。",choices:["faites","fassiez","ferez","faisiez"],a:"fassiez",full:"Quoi que vous fassiez, c'est trop tard.",en:"Whatever you do, it is too late.",jaSyntax:"Quoi que = 何を〜しても",st:"Quoi que + 接続法",ex:"faire の vous 接続法は fassiez。"},
  {type:"choice",unit:"opp",level:"B1",q:"Où que tu ____, je ne t'oublierai pas.",jp:"君がどこへ行こうと、君のことを忘れない。",choices:["vas","ailles","iras","allais"],a:"ailles",full:"Où que tu ailles, je ne t'oublierai pas.",en:"Wherever you go, I won't forget you.",jaSyntax:"Où que = どこへ〜しても",st:"Où que + 接続法",ex:"aller の tu 接続法は ailles。"},
  {type:"choice",unit:"opp",level:"B1",q:"Où que nous ____, nous ne sommes jamais heureux.",jp:"私たちはどこにいようとも、決して幸せではない。",choices:["sommes","soyons","serons","étions"],a:"soyons",full:"Où que nous soyons, nous ne sommes jamais heureux.",en:"Wherever we are, we are never happy.",jaSyntax:"Où que = どこに〜しても",st:"Où que + 接続法",ex:"être の nous 接続法は soyons。"},
  {type:"choice",unit:"opp",level:"B1",q:"Il pleut, ____ nous sommes allés à la mer.",jp:"雨が降っているが、私たちは海へ行った。",choices:["mais","bien que","où que","qui que"],a:"mais",full:"Il pleut, mais nous sommes allés à la mer.",en:"It is raining, but we went to the sea.",jaSyntax:"mais = だが、しかし",st:"A, mais B",ex:"mais は単純な対立。接続法は不要。"},
  {type:"choice",unit:"opp",level:"B1",q:"Il est malade, ____ il est venu.",jp:"彼は病気だが、それでも来た。",choices:["pourtant","bien que","où que","qui que"],a:"pourtant",full:"Il est malade, pourtant il est venu.",en:"He is sick, yet he came.",jaSyntax:"pourtant = それにもかかわらず",st:"A, pourtant B",ex:"pourtant は予想外の結果を強調する。"},
  {type:"sort",unit:"opp",level:"B1",q:"彼は病気なのに働いている。",jp:"Bien que を使って文を作る。",words:["Bien","qu'il","soit","malade,","il","travaille"],a:"Bien qu'il soit malade, il travaille",full:"Bien qu'il soit malade, il travaille.",en:"Although he is sick, he works.",jaSyntax:"Bien que = 〜にもかかわらず",st:"Bien que + 接続法",ex:"bien que の後は soit。"},
  {type:"sort",unit:"subj",level:"B1",q:"君は来なければならない。",jp:"Il faut que を使って文を作る。",words:["Il","faut","que","tu","viennes"],a:"Il faut que tu viennes",full:"Il faut que tu viennes.",en:"You have to come.",jaSyntax:"Il faut que = 〜しなければならない",st:"Il faut que + 接続法",ex:"venir の tu 接続法は viennes。"},
  {type:"sort",unit:"opp",level:"B1",q:"君がどこへ行こうと、君のことを忘れない。",jp:"Où que を使って文を作る。",words:["Où","que","tu","ailles,","je","ne","t'oublierai","pas"],a:"Où que tu ailles, je ne t'oublierai pas",full:"Où que tu ailles, je ne t'oublierai pas.",en:"Wherever you go, I won't forget you.",jaSyntax:"Où que = どこへ〜しても",st:"Où que + 接続法",ex:"aller の tu 接続法は ailles。"}
];

let view = "home";
let index = 0;
let selectedWords = [];
const screen = document.getElementById("screen");
const saved = JSON.parse(localStorage.getItem("FrenchLearning_v18") || "{}");
const state = { total: saved.total || 0, correct: saved.correct || 0, history: saved.history || [] };
function save(){ localStorage.setItem("FrenchLearning_v18", JSON.stringify(state)); }
function rate(){ return state.total ? Math.round((state.correct / state.total) * 100) : 0; }
function setActive(viewName){ document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.view === viewName)); }
function go(viewName){ view = viewName; setActive(viewName); render(); }
function render(){ if(view==="home") renderHome(); if(view==="grammar") renderGrammar(); if(view==="quiz") renderQuiz(); if(view==="record") renderRecord(); }
function renderHome(){ screen.innerHTML = `<div class="grid home-grid"><button class="tile" onclick="go('grammar')">📖 文法モード<small>日本語・英語・構文・頻度</small></button><button class="tile" onclick="go('quiz')">📝 問題モード<small>4択・並び替え</small></button><div class="tile">🎯 正答率<small>${rate()}%</small></div><div class="tile">📚 問題数<small>${questions.length}問</small></div></div><section class="card"><div class="section-title">v1.8 追加</div><div class="exp">構文説明に日本語を追加。例：<b>Il faut que = 〜しなければならない</b></div><div class="exp">送ってくれたプリントから、接続法・譲歩・対立・活用問題を追加。</div></section>`; }
function renderGrammar(){ screen.innerHTML = grammarUnits.map(unit => `<section class="card"><div class="badges"><span class="badge">${unit.level}</span><span class="badge">${unit.title}</span></div><div class="fr">${unit.title}</div><div class="jp">${unit.summary}</div><div class="syntax-block"><b>🇯🇵 日本語</b><br>${unit.items[0].ja}<br><br><b>🇬🇧 English</b><br>${unit.english}<br><br><b>🏗️ 構文</b><br>${unit.structure}</div><div class="section-title">構文カード</div>${unit.items.map(item => `<div class="syntax-block"><b>${item.fr}</b><br><br>🇯🇵 <b>${item.ja}</b><br>🇬🇧 ${item.en}<br>🏗️ ${item.syntax}<br>💡 ${item.reason}<br>🧠 ${item.nuance}<br>🇫🇷 ${item.example}<br>⚠️ ${item.mistake}<br>頻度 <span class="freq">${item.freq}</span></div>`).join("")}<div class="row"><button onclick="startUnit('${unit.key}')">この文法を練習</button></div></section>`).join(""); }
function startUnit(key){ const found = questions.findIndex(q => q.unit === key); index = found >= 0 ? found : 0; go("quiz"); }
function renderQuiz(){ selectedWords = []; const q = questions[index]; screen.innerHTML = `<section class="card"><div class="badges"><span class="badge">${q.level}</span><span class="badge">${q.unit}</span><span class="badge">${index+1}/${questions.length}</span></div><div class="progress"><div class="progress-bar" style="width:${((index+1)/questions.length)*100}%"></div></div><div class="fr">${q.q.replace("____","<u>　　　</u>")}</div><div class="jp">🇯🇵 ${q.jp}</div>${q.type==="choice" ? renderChoices(q) : renderSort(q)}<div class="row"><button onclick="prevQuestion()">前へ</button><button onclick="showAnswer()">解説</button><button onclick="nextQuestion()">次へ</button></div><div id="answerBox" class="answer">${renderExplanation(q)}</div></section>`; }
function renderChoices(q){ return `<div class="choice-list">${q.choices.map(choice => `<button class="choice" onclick="checkChoice(this, '${escapeQuote(choice)}')">${choice}</button>`).join("")}</div>`; }
function renderSort(q){ return `<div id="sortBox" class="sort-box"></div><div class="word-bank">${shuffle([...q.words]).map(word => `<button class="word" onclick="pickWord(this, '${escapeQuote(word)}')">${word}</button>`).join("")}</div><div class="row"><button onclick="renderQuiz()">リセット</button><button onclick="checkSort()">答え合わせ</button></div>`; }
function renderExplanation(q){ return `<div class="exp"><b>🇫🇷 答え</b><br>${q.full}</div><div class="exp"><b>🇯🇵 構文の意味</b><br>${q.jaSyntax}</div><div class="exp"><b>🇬🇧 英語</b><br>${q.en}</div><div class="exp"><b>🏗️ 構文</b><br>${q.st}</div><div class="exp"><b>📖 解説</b><br>${q.ex}</div>`; }
function escapeQuote(text){ return String(text).replace(/'/g, "\\'"); }
function checkChoice(element, value){ const q = questions[index]; state.total++; if(value === q.a){ state.correct++; element.classList.add("correct"); } else { element.classList.add("wrong"); } addHistory(q.full); save(); showAnswer(); }
function pickWord(element, word){ selectedWords.push(word); element.style.display = "none"; document.getElementById("sortBox").innerHTML += `<button class="word">${word}</button>`; }
function checkSort(){ const q = questions[index]; const userAnswer = selectedWords.join(" "); state.total++; if(userAnswer === q.a){ state.correct++; alert("正解！"); } else { alert("もう少し！解説を確認しよう。"); } addHistory(q.full); save(); showAnswer(); }
function addHistory(sentence){ state.history.unshift(sentence); state.history = [...new Set(state.history)].slice(0, 30); }
function showAnswer(){ document.getElementById("answerBox").classList.add("show"); }
function nextQuestion(){ index = (index + 1) % questions.length; renderQuiz(); }
function prevQuestion(){ index = (index - 1 + questions.length) % questions.length; renderQuiz(); }
function renderRecord(){ screen.innerHTML = `<section class="card"><div class="fr">学習記録</div><div class="exp">正答率：${rate()}%<br>解答数：${state.total}<br>正解数：${state.correct}</div><div class="section-title">履歴</div>${state.history.length ? state.history.map(h => `<div class="exp">${h}</div>`).join("") : "<div class='jp'>まだ履歴なし</div>"}</section>`; }
function shuffle(array){ return array.sort(() => Math.random() - 0.5); }
function toggleDark(){ document.body.classList.toggle("dark"); }
document.querySelectorAll(".nav-btn").forEach(btn => btn.addEventListener("click", () => go(btn.dataset.view)));
document.getElementById("darkBtn").addEventListener("click", toggleDark);
render();
