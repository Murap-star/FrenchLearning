
const VERSION = "3.1";
const grammarCards = [{"term": "Il faut que", "jp": "〜しなければならない", "en": "must / have to", "st": "Il faut que + 接続法", "ex": "必要・義務なので接続法。"}, {"term": "Bien que", "jp": "〜だけれども", "en": "although / even though", "st": "Bien que + 接続法", "ex": "譲歩を表すので接続法。"}, {"term": "Pour que", "jp": "〜するために", "en": "so that / in order that", "st": "Pour que + 接続法", "ex": "目的を表すので接続法。"}, {"term": "Parce que", "jp": "〜なので", "en": "because", "st": "Parce que + 直説法", "ex": "理由を述べる。主に文中で使う。"}, {"term": "Comme", "jp": "〜なので / 〜だから", "en": "since / as", "st": "Comme + 直説法", "ex": "理由を先に出す。文頭でよく使う。"}, {"term": "Pour", "jp": "〜するために", "en": "in order to / for", "st": "Pour + 不定詞", "ex": "主語が同じときによく使う。"}];
const questions = [{"type": "choice", "cat": "接続法", "q": "Il faut que tu ____ attention.", "jp": "注意しなければならない。", "choices": ["fais", "fasses", "feras", "faisais"], "a": "fasses", "full": "Il faut que tu fasses attention.", "st": "Il faut que + 接続法", "ex": "faire の接続法 tu は fasses。"}, {"type": "choice", "cat": "譲歩", "q": "Bien qu'il ____ malade, il travaille.", "jp": "彼は病気なのに働いている。", "choices": ["est", "soit", "sera", "était"], "a": "soit", "full": "Bien qu'il soit malade, il travaille.", "st": "Bien que + 接続法", "ex": "bien que の後は接続法。"}, {"type": "choice", "cat": "理由目的", "q": "Elle lit ce livre ____ s’informer.", "jp": "情報を得るためにこの本を読んでいる。", "choices": ["parce que", "comme", "pour", "pour que"], "a": "pour", "full": "Elle lit ce livre pour s’informer.", "st": "pour + 不定詞", "ex": "主語が同じなので pour + 不定詞。"}, {"type": "choice", "cat": "理由目的", "q": "____ il pleut, nous annulons la sortie.", "jp": "雨が降っているので外出を中止する。", "choices": ["Pour", "Pour que", "Comme", "Bien que"], "a": "Comme", "full": "Comme il pleut, nous annulons la sortie.", "st": "Comme + 直説法", "ex": "comme は文頭で理由を示す。"}, {"type": "choice", "cat": "理由目的", "q": "Il reste à la maison ____ il a de la fièvre.", "jp": "熱があるので家にいる。", "choices": ["parce qu'", "pour", "pour que", "bien que"], "a": "parce qu'", "full": "Il reste à la maison parce qu'il a de la fièvre.", "st": "parce que + 直説法", "ex": "理由を表す。il の前で parce qu'。"}, {"type": "choice", "cat": "理由目的", "q": "Elle parle lentement ____ tout le monde puisse la comprendre.", "jp": "みんなが理解できるようにゆっくり話す。", "choices": ["pour", "pour que", "parce que", "comme"], "a": "pour que", "full": "Elle parle lentement pour que tout le monde puisse la comprendre.", "st": "pour que + 接続法", "ex": "目的。主語が変わるので pour que。"}, {"type": "choice", "cat": "結果目的", "q": "Il a construit le jeu de manière que tout le monde ____.", "jp": "みんなが遊べるようにそのゲームを作った。", "choices": ["peut", "puisse", "pourra", "pouvait"], "a": "puisse", "full": "Il a construit le jeu de manière que tout le monde puisse jouer.", "st": "de manière que + 接続法", "ex": "目的を表すので接続法。"}, {"type": "choice", "cat": "結果目的", "q": "Il a couru très vite de sorte qu’il ____ le premier.", "jp": "とても速く走ったので1番に到着した。", "choices": ["est arrivé", "soit arrivé", "arrive", "arrivera"], "a": "est arrivé", "full": "Il a couru très vite de sorte qu’il est arrivé le premier.", "st": "de sorte que + 直説法", "ex": "実際に起きた結果なので直説法。"}, {"type": "choice", "cat": "現在分詞・ジェロンディフ", "q": "avoir 現在分詞複合形 → ____", "jp": "avoir の現在分詞複合形。", "choices": ["ayant eu", "en donnant", "en étant", "ayant donné"], "a": "ayant eu", "full": "avoir 現在分詞複合形 → ayant eu", "st": "ayant + 過去分詞", "ex": "avoir は ayant eu。"}, {"type": "choice", "cat": "現在分詞・ジェロンディフ", "q": "finir 現在分詞複合形 → ____", "jp": "finir の現在分詞複合形。", "choices": ["ayant été", "en donnant", "en finissant", "ayant fini"], "a": "ayant fini", "full": "finir 現在分詞複合形 → ayant fini", "st": "ayant + 過去分詞", "ex": "finir の過去分詞は fini。"}, {"type": "choice", "cat": "現在分詞・ジェロンディフ", "q": "savoir 現在分詞単純形 → ____", "jp": "savoir の現在分詞単純形。", "choices": ["en sachant", "sachant", "ayant", "finissant"], "a": "sachant", "full": "savoir 現在分詞単純形 → sachant", "st": "現在分詞", "ex": "savoir は sachant。"}, {"type": "choice", "cat": "現在分詞・ジェロンディフ", "q": "être ジェロンディフ → ____", "jp": "être のジェロンディフ。", "choices": ["en finissant", "donnant", "en étant", "en ayant"], "a": "en étant", "full": "être ジェロンディフ → en étant", "st": "en + 現在分詞", "ex": "être の現在分詞は étant。"}, {"type": "choice", "cat": "現在分詞・ジェロンディフ", "q": "donner 現在分詞複合形 → ____", "jp": "donner の現在分詞複合形。", "choices": ["ayant", "ayant donné", "en ayant", "sachant"], "a": "ayant donné", "full": "donner 現在分詞複合形 → ayant donné", "st": "ayant + 過去分詞", "ex": "donner の過去分詞は donné。"}, {"type": "choice", "cat": "現在分詞・ジェロンディフ", "q": "finir ジェロンディフ → ____", "jp": "finir のジェロンディフ。", "choices": ["ayant donné", "étant", "en finissant", "en ayant"], "a": "en finissant", "full": "finir ジェロンディフ → en finissant", "st": "en + 現在分詞", "ex": "finir は finissant。"}, {"type": "choice", "cat": "複合過去", "q": "danser [je] 複合過去 → ____", "jp": "私は踊った。", "choices": ["j'ai dansé", "vous avez lu", "il a vu", "tu as donné"], "a": "j'ai dansé", "full": "danser [je] 複合過去 → j'ai dansé", "st": "avoir/être + 過去分詞", "ex": "danser は avoir 支配。"}, {"type": "choice", "cat": "複合過去", "q": "finir [nous] 複合過去 → ____", "jp": "私たちは終えた。", "choices": ["j'ai été", "tu as donné", "nous avons fini", "ils ont eu"], "a": "nous avons fini", "full": "finir [nous] 複合過去 → nous avons fini", "st": "avoir + 過去分詞", "ex": "finir の過去分詞は fini。"}, {"type": "choice", "cat": "複合過去", "q": "être [ils] 複合過去 → ____", "jp": "彼らは〜だった。", "choices": ["nous avons mis", "ils ont été", "j'ai eu", "tu as bu"], "a": "ils ont été", "full": "être [ils] 複合過去 → ils ont été", "st": "avoir + été", "ex": "être の複合過去は avoir été。"}, {"type": "choice", "cat": "複合過去", "q": "avoir [je] 複合過去 → ____", "jp": "私は持っていた。", "choices": ["il a vu", "j'ai été", "il a grandi", "j'ai eu"], "a": "j'ai eu", "full": "avoir [je] 複合過去 → j'ai eu", "st": "avoir + eu", "ex": "avoir の過去分詞は eu。"}, {"type": "choice", "cat": "複合過去", "q": "aller [ils] 複合過去 → ____", "jp": "彼らは行った。", "choices": ["il a grandi", "ils sont allés", "ils ont eu", "tu as donné"], "a": "ils sont allés", "full": "aller [ils] 複合過去 → ils sont allés", "st": "être + 過去分詞", "ex": "aller は être 支配。男性複数なので allés。"}, {"type": "choice", "cat": "複合過去", "q": "venir [elle] 複合過去 → ____", "jp": "彼女は来た。", "choices": ["il a vu", "tu as voulu", "vous avez été", "elle est venue"], "a": "elle est venue", "full": "venir [elle] 複合過去 → elle est venue", "st": "être + 過去分詞", "ex": "venir は être 支配。女性単数なので venue。"}, {"type": "choice", "cat": "複合過去", "q": "sortir [ils] 複合過去 → ____", "jp": "彼らは出た。", "choices": ["ils sont sortis", "il a grandi", "j'ai cru", "tu as voulu"], "a": "ils sont sortis", "full": "sortir [ils] 複合過去 → ils sont sortis", "st": "être + 過去分詞", "ex": "sortir は移動動詞で être 支配。"}, {"type": "choice", "cat": "複合過去", "q": "j'ai cru → ____", "jp": "croire [je] の複合過去。", "choices": ["ils ont eu", "tu as voulu", "nous avons mis", "j'ai cru"], "a": "j'ai cru", "full": "j'ai cru → j'ai cru", "st": "avoir + 過去分詞", "ex": "croire の過去分詞は cru。"}, {"type": "choice", "cat": "半過去", "q": "faire [je] 半過去 → ____", "jp": "私はしていた。", "choices": ["tu finissais", "nous étions", "il avait", "je faisais"], "a": "je faisais", "full": "faire [je] 半過去 → je faisais", "st": "nous現在語幹 + 半過去語尾", "ex": "faire は nous faisons → fais-。"}, {"type": "choice", "cat": "半過去", "q": "avoir [il] 半過去 → ____", "jp": "彼は持っていた。", "choices": ["tu finissais", "je voulais", "je faisais", "il avait"], "a": "il avait", "full": "avoir [il] 半過去 → il avait", "st": "半過去", "ex": "avoir の半過去は avais, avais, avait..."}, {"type": "choice", "cat": "半過去", "q": "être [nous] 半過去 → ____", "jp": "私たちは〜だった。", "choices": ["nous étions", "vous faisiez", "tu descendais", "il avait"], "a": "nous étions", "full": "être [nous] 半過去 → nous étions", "st": "être 半過去", "ex": "être は例外語幹 ét-。"}, {"type": "choice", "cat": "半過去", "q": "voir [ils] 半過去 → ____", "jp": "彼らは見ていた。", "choices": ["ils voyaient", "je voulais", "il avait", "j'avais"], "a": "ils voyaient", "full": "voir [ils] 半過去 → ils voyaient", "st": "nous現在語幹 + 半過去語尾", "ex": "voir は nous voyons → voy-。"}, {"type": "choice", "cat": "現在形", "q": "aller [je] 現在形 → ____", "jp": "私は行く。", "choices": ["je vais", "tu viens", "vous venez", "ils vont"], "a": "je vais", "full": "aller [je] 現在形 → je vais", "st": "aller 現在形", "ex": "aller は不規則。je vais。"}, {"type": "choice", "cat": "現在形", "q": "aller [vous] 現在形 → ____", "jp": "あなたは行く。", "choices": ["ils viennent", "vous allez", "je vais", "elle vient"], "a": "vous allez", "full": "aller [vous] 現在形 → vous allez", "st": "aller 現在形", "ex": "vous allez。"}, {"type": "choice", "cat": "現在形", "q": "venir [je] 現在形 → ____", "jp": "私は来る。", "choices": ["il va", "elle vient", "tu viens", "je viens"], "a": "je viens", "full": "venir [je] 現在形 → je viens", "st": "venir 現在形", "ex": "venir は je viens。"}, {"type": "choice", "cat": "現在形", "q": "venir [nous] 現在形 → ____", "jp": "私たちは来る。", "choices": ["tu vas", "ils vont", "je vais", "nous venons"], "a": "nous venons", "full": "venir [nous] 現在形 → nous venons", "st": "venir 現在形", "ex": "nous venons。"}, {"type": "choice", "cat": "単純未来", "q": "être [ils] 単純未来 → ____", "jp": "彼らは〜だろう。", "choices": ["j'irai", "ils seront", "nous devrons", "il finira"], "a": "ils seront", "full": "être [ils] 単純未来 → ils seront", "st": "未来語幹 + 未来語尾", "ex": "être の未来語幹は ser-。"}, {"type": "choice", "cat": "単純未来", "q": "avoir [tu] 単純未来 → ____", "jp": "君は持つだろう。", "choices": ["ils seront", "tu auras", "j'irai", "il finira"], "a": "tu auras", "full": "avoir [tu] 単純未来 → tu auras", "st": "未来語幹 + 未来語尾", "ex": "avoir の未来語幹は aur-。"}, {"type": "choice", "cat": "単純未来", "q": "aller [vous] 単純未来 → ____", "jp": "あなたたちは行くだろう。", "choices": ["il pourra", "tu auras", "il finira", "vous irez"], "a": "vous irez", "full": "aller [vous] 単純未来 → vous irez", "st": "未来語幹 + 未来語尾", "ex": "aller の未来語幹は ir-。"}, {"type": "choice", "cat": "単純未来", "q": "faire [tu] 単純未来 → ____", "jp": "君はするだろう。", "choices": ["je serai", "nous devrons", "tu feras", "ils seront"], "a": "tu feras", "full": "faire [tu] 単純未来 → tu feras", "st": "未来語幹 + 未来語尾", "ex": "faire の未来語幹は fer-。"}, {"type": "choice", "cat": "条件法", "q": "donner [il] 条件法現在 → ____", "jp": "彼は与えるだろう。", "choices": ["vous finiriez", "il donnerait", "je serais", "je ferais"], "a": "il donnerait", "full": "donner [il] 条件法現在 → il donnerait", "st": "未来語幹 + 半過去語尾", "ex": "条件法現在は未来語幹に半過去語尾。"}, {"type": "choice", "cat": "条件法", "q": "avoir [nous] 条件法現在 → ____", "jp": "私たちは持つだろう。", "choices": ["nous viendrions", "je ferais", "vous finiriez", "nous aurions"], "a": "nous aurions", "full": "avoir [nous] 条件法現在 → nous aurions", "st": "未来語幹 + 半過去語尾", "ex": "avoir → aur- + ions。"}, {"type": "choice", "cat": "条件法", "q": "faire [je] 条件法現在 → ____", "jp": "私はするだろう。", "choices": ["tu aurais", "je serais", "il donnerait", "je ferais"], "a": "je ferais", "full": "faire [je] 条件法現在 → je ferais", "st": "未来語幹 + 半過去語尾", "ex": "faire → fer- + ais。"}, {"type": "choice", "cat": "条件法", "q": "venir [nous] 条件法現在 → ____", "jp": "私たちは来るだろう。", "choices": ["nous viendrions", "il voudrait", "je serais", "nous aurions"], "a": "nous viendrions", "full": "venir [nous] 条件法現在 → nous viendrions", "st": "未来語幹 + 半過去語尾", "ex": "venir → viendr- + ions。"}];
let view = "home";
let index = 0;
let filterCat = "all";

const screen = document.getElementById("screen");
const saved = JSON.parse(localStorage.getItem("FrenchLearning_v31") || "{}");
const state = {
  total: saved.total || 0,
  correct: saved.correct || 0,
  weak: saved.weak || [],
  fav: saved.fav || [],
  history: saved.history || []
};

function save(){localStorage.setItem("FrenchLearning_v31", JSON.stringify(state));}
function rate(){return state.total ? Math.round(state.correct/state.total*100) : 0;}
function setActive(v){document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.view===v));}
function go(v){view=v;setActive(v);render();}
function qs(){return filterCat==="all"?questions:questions.filter(q=>q.cat===filterCat);}

function render(){
  if(view==="home") renderHome();
  if(view==="grammar") renderGrammar();
  if(view==="quiz") renderQuiz();
  if(view==="plus") renderPlus();
  if(view==="record") renderRecord();
}

function renderHome(){
  const cats=[...new Set(questions.map(q=>q.cat))];
  screen.innerHTML=`
    <div class="grid home-grid">
      <button class="tile" onclick="go('grammar')">📖 文法<small>意味・英語・構文・理由</small></button>
      <button class="tile" onclick="go('quiz')">📝 問題<small>4択で練習</small></button>
      <button class="tile" onclick="go('plus')">🔥 構文プラス<small>PDF追加問題</small></button>
      <div class="tile">📊 正答率<small>${rate()}%</small></div>
    </div>
    <section class="card">
      <div class="badges"><span class="badge hot">v${VERSION}</span><span class="badge">構文プラス追加</span></div>
      <div class="fr">追加済み：${questions.length}問</div>
      <div class="jp">PDFの「構文プラス問題」から、現在分詞・ジェロンディフ・複合過去・半過去・現在形・未来・条件法・理由目的を追加。</div>
      <div class="exp"><strong>今回の重点</strong><br>形を答える問題を、スマホで押しやすい4択形式に変換。答えを押すと日本語・構文・理由が出ます。</div>
    </section>
  `;
}

function renderGrammar(){
  screen.innerHTML=`
    <section class="card">
      <div class="fr">構文カード</div>
      <div class="jp">日本語 → 英語 → 構文 → 理由の順で確認。</div>
      <div class="unit-list">
      ${grammarCards.map((c,i)=>`
        <button class="pill-card" onclick="showCard(${i})">
          <strong>${c.term}</strong><br><small>${c.jp} / ${c.en}</small>
        </button>`).join("")}
      </div>
    </section>`;
}

function showCard(i){
  const c=grammarCards[i];
  screen.innerHTML=`
    <section class="card">
      <div class="badges"><span class="badge hot">${c.term}</span></div>
      <div class="fr">${c.term}</div>
      <div class="exp"><strong>🇯🇵 意味</strong><div class="meaning">${c.jp}</div></div>
      <div class="exp"><strong>🇬🇧 English</strong><br>${c.en}</div>
      <div class="exp"><strong>🧩 構文</strong><br>${c.st}</div>
      <div class="exp"><strong>Pourquoi ?</strong><br>${c.ex}</div>
      <div class="row"><button onclick="renderGrammar()">戻る</button><button onclick="go('quiz')">問題へ</button></div>
    </section>`;
}

function renderPlus(){
  const cats=[...new Set(questions.map(q=>q.cat))];
  screen.innerHTML=`
    <section class="card">
      <div class="badges"><span class="badge hot">構文プラス</span><span class="badge">PDF追加</span></div>
      <div class="fr">練習カテゴリ</div>
      <div class="jp">PDFの問題をカテゴリ別に練習できます。</div>
      <div class="unit-list">
        <button class="pill-card" onclick="setCat('all')"><strong>全部</strong><br><small>${questions.length}問</small></button>
        ${cats.map(cat=>`<button class="pill-card" onclick="setCat('${cat}')"><strong>${cat}</strong><br><small>${questions.filter(q=>q.cat===cat).length}問</small></button>`).join("")}
      </div>
    </section>
    <section class="card">
      <div class="fr">What's New v3.1</div>
      <div class="exp">✅ 構文プラス問題PDFを追加</div>
      <div class="exp">✅ 現在分詞・ジェロンディフを追加</div>
      <div class="exp">✅ 複合過去・半過去・現在・未来・条件法を追加</div>
      <div class="exp">✅ parce que / comme / pour / pour que 判別を追加</div>
    </section>
  `;
}

function setCat(cat){
  filterCat=cat;
  index=0;
  go('quiz');
}

function renderQuiz(){
  const arr=qs();
  if(!arr.length){screen.innerHTML="<section class='card'>問題がありません。</section>";return;}
  if(index>=arr.length) index=0;
  const q=arr[index];
  screen.innerHTML=`
    <section class="card">
      <div class="badges">
        <span class="badge">${q.cat}</span>
        <span class="badge">${index+1}/${arr.length}</span>
        <span class="badge hot">全${questions.length}問</span>
      </div>
      <div class="progress"><div class="progress-bar" style="width:${(index+1)/arr.length*100}%"></div></div>
      <div class="fr">${q.q.replace("____","<span class='blank'></span>")}</div>
      <div class="jp">🇯🇵 ${q.jp}</div>
      <div class="choice-list">
        ${q.choices.map(ch=>`<button class="choice" onclick="checkChoice(this, '${esc(ch)}')">${ch}</button>`).join("")}
      </div>
      <div class="row">
        <button onclick="prevQ()">前へ</button>
        <button onclick="showAnswer()">解説</button>
        <button onclick="nextQ()">次へ</button>
      </div>
      <div class="row">
        <button onclick="fav()">⭐ 保存</button>
        <button onclick="weak()">⚠️ 苦手</button>
      </div>
      <div id="answerBox" class="answer">
        <div class="exp"><strong>🇫🇷 答え</strong><br>${q.full}</div>
        <div class="exp"><strong>🇯🇵 日本語</strong><br>${q.jp}</div>
        <div class="exp"><strong>🧩 構文</strong><br>${q.st}</div>
        <div class="exp"><strong>Pourquoi ?</strong><br>${q.ex}</div>
      </div>
    </section>`;
}

function checkChoice(el,val){
  const q=qs()[index];
  state.total++;
  document.querySelectorAll(".choice").forEach(b=>{if(b.textContent===q.a)b.classList.add("correct");});
  if(val===q.a){state.correct++;el.classList.add("correct");}else{el.classList.add("wrong");if(!state.weak.includes(q.full))state.weak.push(q.full);}
  state.history.unshift(q.full);state.history=[...new Set(state.history)].slice(0,40);
  save();showAnswer();
}
function showAnswer(){const b=document.getElementById("answerBox");if(b)b.classList.add("show");}
function nextQ(){index=(index+1)%qs().length;renderQuiz();}
function prevQ(){index=(index-1+qs().length)%qs().length;renderQuiz();}
function fav(){const q=qs()[index];if(!state.fav.includes(q.full))state.fav.push(q.full);save();alert("保存しました");}
function weak(){const q=qs()[index];if(!state.weak.includes(q.full))state.weak.push(q.full);save();alert("苦手に追加しました");}
function renderRecord(){
  screen.innerHTML=`
    <section class="card">
      <div class="fr">記録</div>
      <div class="exp">解答数：${state.total}<br>正解数：${state.correct}<br>正答率：${rate()}%<br>お気に入り：${state.fav.length}<br>苦手：${state.weak.length}</div>
      <div class="section-title">⭐ 保存</div>
      ${state.fav.length?state.fav.map(x=>`<div class="exp">${x}</div>`).join(""):"<div class='jp'>まだありません。</div>"}
      <div class="section-title">⚠️ 苦手</div>
      ${state.weak.length?state.weak.map(x=>`<div class="exp">${x}</div>`).join(""):"<div class='jp'>まだありません。</div>"}
    </section>`;
}
function esc(s){return String(s).replace(/'/g,"\\'");}
document.querySelectorAll(".nav-btn").forEach(b=>b.addEventListener("click",()=>go(b.dataset.view)));
document.getElementById("darkBtn").addEventListener("click",()=>document.body.classList.toggle("dark"));
render();
