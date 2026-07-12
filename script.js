const stageList = document.querySelector("#stageList");
const stageLabel = document.querySelector("#stageLabel");
const stageTitle = document.querySelector("#stageTitle");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const stageImageText = document.querySelector("#stageImageText");
const stageImageLabel = document.querySelector("#stageImageLabel");
const missionLabel = document.querySelector("#missionLabel");
const questionText = document.querySelector("#questionText");
const questionHint = document.querySelector("#questionHint");
const missionNav = document.querySelector("#missionNav");
const questionPanel = document.querySelector("#questionPanel");
const choiceList = document.querySelector("#choiceList");
const checkButton = document.querySelector("#checkButton");
const nextButton = document.querySelector("#nextButton");
const backButton = document.querySelector("#backButton");
const reactionCard = document.querySelector("#reactionCard");
const reactionBadge = document.querySelector("#reactionBadge");
const reactionTitle = document.querySelector("#reactionTitle");
const reactionText = document.querySelector("#reactionText");
const pointText = document.querySelector("#pointText");
const reactionMemoText = document.querySelector("#reactionMemoText");
const reactionNextText = document.querySelector("#reactionNextText");
const completeCard = document.querySelector("#completeCard");
const completeTitle = document.querySelector("#completeTitle");
const completeText = document.querySelector("#completeText");
const rookieMemo = document.querySelector("#rookieMemo");
const nextStageText = document.querySelector("#nextStageText");
const nextStageButton = document.querySelector("#nextStageButton");
const stageListButton = document.querySelector("#stageListButton");
const restartStageButton = document.querySelector("#restartStageButton");
const supportOneLine = document.querySelector("#supportOneLine");
const supportLook = document.querySelector("#supportLook");
const supportNext = document.querySelector("#supportNext");
const supportImageText = document.querySelector("#supportImageText");
const supportImageLabel = document.querySelector("#supportImageLabel");
const matchPanel = document.querySelector("#matchPanel");
const matchLead = document.querySelector("#matchLead");
const matchTopRow = document.querySelector("#matchTopRow");
const matchBottomRow = document.querySelector("#matchBottomRow");
const matchLines = document.querySelector("#matchLines");
const matchFeedback = document.querySelector("#matchFeedback");
const matchFeedbackLine = document.querySelector("#matchFeedbackLine");
const matchFeedbackSub = document.querySelector("#matchFeedbackSub");
const orderPanel = document.querySelector("#orderPanel");
const orderLead = document.querySelector("#orderLead");
const orderSlots = document.querySelector("#orderSlots");
const orderPool = document.querySelector("#orderPool");
const orderFeedback = document.querySelector("#orderFeedback");
const orderFeedbackLine = document.querySelector("#orderFeedbackLine");
const orderFeedbackSub = document.querySelector("#orderFeedbackSub");
const pointLabel = document.querySelector("#pointLabel");
const reactionMemoLabel = document.querySelector("#reactionMemoLabel");
const reactionNextLabel = document.querySelector("#reactionNextLabel");
const rookieMemoLabel = document.querySelector("#rookieMemoLabel");
const nextStageLabel = document.querySelector("#nextStageLabel");
const progressBarWrap = document.querySelector("#progressBarWrap");
const supportMemoSection = document.querySelector("#supportMemoSection");
const supportExtra = document.querySelector("#supportExtra");
const lessonArea = document.querySelector(".lesson-area");

const stageDetails = {
  "粉のちがい": {
    desc: "粉を変えた時の香り、吸水（水の吸い方）、口どけを分けて見る。",
    difficulty: "基礎",
    tag: "まずはここから",
    avatar: "粉キャラ",
    oneLine: "粉は味だけでなく、生地のまとまり方も変えます。",
    look: "香り、吸水、口どけ、噛みごたえ。",
    next: "粉だけを変えて、厚みと焼成をそろえて比べる。"
  },
  "全粒粉の割合": {
    desc: "全粒粉が増えた時の香ばしさと乾きやすさをつかむ。",
    difficulty: "基礎+",
    tag: "吸水判断",
    avatar: "全粒粉キャラ",
    oneLine: "全粒粉は香りを出しつつ、水分を抱え込みます。",
    look: "割合、水分量、折る前のまとまり。",
    next: "10％、30％、50％で水分感を比べる。"
  },
  "BPが働くまでの流れ": {
    desc: "BPが混ざってから焼き上がるまでの流れを並べて覚える。",
    difficulty: "現場基礎",
    tag: "順番並べ替え",
    avatar: "BPキャラ",
    oneLine: "BPは増やせば増やすほど膨らむ、という材料ではありません。",
    look: "混ざるタイミング、焼成中の反応、膨らみ方への影響。",
    next: "同じg数でBPの種類を替え、高さ、割れ方、苦み（BPが多いと出やすい薬っぽい後味）を焼き比べる。",
    extra: [
      { dt: "BPとは", dd: "加熱と水分の両方で二酸化炭素を出す膨張剤。気泡を「作る」のがBPの役割で、その気泡を「保持する」のはグルテン（小麦のたんぱく質が作る網目）とバターが作る生地の構造です。" },
      { dt: "アルミあり／なし", dd: "アルミ入りは、混ぜた時（常温）と加熱時の2段階でガスが出ます。アルミフリーは常温では反応しにくいため、生地を仕込んでから焼くまでの間に、ふくらむ力（ガス）が早く抜けてしまうことが少なく、風味にえぐみも出にくいです。" },
      { dt: "保存の仕方", dd: "湿気を吸うと反応が弱まります。密閉して冷暗所で保存し、開封後は早めに使い切ります。" }
    ]
  },
  "バターの状態": {
    desc: "冷たさ、粒の残り方、横広がりの関係を覚える。",
    difficulty: "現場判断",
    tag: "温度管理",
    avatar: "バターキャラ",
    oneLine: "バターがゆるむと、形と層に出やすいです。",
    look: "バター粒、生地温度、側面の弱さ、横広がり。",
    next: "生地を冷やし、同じ厚みで焼き比べる。"
  },
  "水分と生地の硬さ": {
    desc: "粉々、押せばまとまる、ベタつくを言葉にする。",
    difficulty: "基礎+",
    tag: "手触り",
    avatar: "水分キャラ",
    oneLine: "水分は多い少ないより、回り方を見ます。",
    look: "水分量、粉への回り方、台に出すタイミング。",
    next: "押せばまとまる状態を基準にして比べる。"
  },
  "失敗と見る場所": {
    desc: "症状と、現場でまず見る場所を線でつないで覚える。",
    difficulty: "現場判断",
    tag: "失敗分析",
    avatar: "見る場所チェック",
    oneLine: "失敗は原因を1つに決めつけず、まず見る場所から確認します。",
    look: "成形の厚み、水分の回り方、バターの温度、焼成温度、型抜きの側面。",
    next: "つないだ場所を、実際の生地と焼成で確かめる。"
  },
  "生地がまとまらない": {
    desc: "台に出した生地が押してもまとまらず、折る前に崩れる状態を見る。",
    difficulty: "現場判断",
    tag: "失敗分析",
    avatar: "まとまりチェック",
    oneLine: "液体後の生地が、押してもひとまとまりにならない状態です。",
    look: "水分量、全粒粉、台に出すタイミング、水分の回り方、バターの入り方、粉の吸水。",
    next: "もっとこねる前に、水分量、なじませる時間、全粒粉の割合を比べる。"
  },
  "味の組み立て": {
    desc: "ベース、具材、香り、食感、仕上げで味を作る。",
    difficulty: "応用",
    tag: "味づくり",
    avatar: "味キャラ",
    oneLine: "味は単品ではなく、役割の組み合わせです。",
    look: "ベース、主役、香り、食感、仕上げの強さ。",
    next: "主役を1つ決め、具材は10〜15％から試す。"
  },
  "商品開発の入口": {
    desc: "食べる場面から、次の試作で見る点を決める。",
    difficulty: "応用",
    tag: "試作設計",
    avatar: "商品メモ",
    oneLine: "商品開発は商品名を決めることより、次の試作で何を確かめるかから始めます。",
    look: "食べる場面、持ち運び、翌日の食感、重さ。",
    next: "ベースを1つ決め、具材を入れすぎず試す。"
  },
  "材料と働き": {
    desc: "材料をタップしてつなぎ、働きとの関係を声に出す。",
    difficulty: "基礎",
    tag: "線でつなぐ",
    avatar: "つなぎキャラ",
    oneLine: "材料は1つの働きだけでなく、複数に関係することもあります。",
    look: "水分、膨らみ、層、まとまり、高さ。",
    next: "つないだ関係を、実際の生地作りで確かめる。"
  },
  "商品開発ミッション": {
    desc: "味づくりと、お客さんへの食べ方案内をミッションで練習する。",
    difficulty: "応用",
    tag: "カード組み立て",
    avatar: "試作メモ",
    oneLine: "商品開発は、味の方向と次に見るところをセットで考えます。",
    look: "味の方向、作る時の注意、次の試作チェックポイント。",
    next: "選んだ方向で、具材量を10〜15％から試作する。"
  }
};

const stages = [
  {
    title: "粉のちがい",
    image: "ここに粉キャラ",
    supportImage: "ここに粉くらべイラスト",
    memo: "粉を変える時は、香り、吸水、硬さを一緒に見ます。",
    support: "材料を変えるメモの入口です。薄力粉、準強力粉、全粒粉では、同じ水分でも生地のまとまり方が変わります。",
    questions: [
      {
        text: "全粒粉を増やすと、起きやすいことは？",
        hint: "正解寄りのカードをすべて選びます。",
        choices: ["香りが出やすい", "水分を吸いやすい", "生地が粉々になりやすい", "高さが出やすくなる"],
        answers: [0, 1, 2],
        feedback: {
          correct: "いい感じです。全粒粉は香ばしさが出る一方で、水分を吸いやすく、生地がまとまりにくくなることがあります。",
          close: "おしい！ 全粒粉は香りだけでなく、水分の吸い方も見ます。",
          wrong: "ここは全粒粉の吸水を思い出します。高さはむしろ出にくくなる方向です。"
        },
        point: "香り、吸水、粉々になりやすさをセットで見ます。"
      },
      {
        text: "準強力粉（強力粉と薄力粉の中間の粉）を使う時、見たいところは？",
        hint: "食感の変化に関係するカードを選びます。",
        choices: ["噛みごたえ", "生地の締まり", "香りだけを見る", "しっとりかパサつくかの変化"],
        answers: [0, 1, 3],
        feedback: {
          correct: "正解です。粉が強くなると、噛みごたえや締まりが出やすく、同じ水分でもしっとり感やパサつきが変わります。",
          close: "おしい！ 香りだけでなく、硬さやしっとり感も一緒に見ます。",
          wrong: "粉の強さは食感に出ます。香りだけで判断しないのがコツです。"
        },
        point: "粉の種類を変えたら、口どけと噛みごたえを比べます。"
      },
      {
        text: "粉を比べる時、最初にやりやすい比べ方は？",
        hint: "原因を見えやすくする選び方です。",
        choices: ["粉だけ変える", "水分も焼成（焼く温度・時間）も全部変える", "同じ厚みで焼く", "記録を残す"],
        answers: [0, 2, 3],
        feedback: {
          correct: "正解です。1つだけ変えて、厚みをそろえて、記録を残すと違いが見えます。",
          close: "おしい！ たくさん変えると原因が見えにくくなります。",
          wrong: "試作では、一度に変える条件を少なくすると覚えやすいです。"
        },
        point: "比較は1項目ずつ。高さ、割れ方、中心の火の通り具合、口どけを見ます。"
      }
    ]
  },
  {
    title: "全粒粉の割合",
    image: "ここに全粒粉キャラ",
    supportImage: "ここに全粒粉の割合イラスト",
    memo: "全粒粉は10％、30％、50％で印象が変わります。増やしたら水分も見ます。",
    support: "材料変更メモの全粒粉ルールです。30％以上で水分が少ないと、粉々になりやすい条件として見ます。",
    questions: [
      {
        text: "全粒粉30％以上で水分が少ない時、起きやすいことは？",
        hint: "生地のまとまりに注目します。",
        choices: ["粉々になりやすい", "折る前にまとまりにくい", "ふくらみやすくなる", "粉が水分を吸いきれていない"],
        answers: [0, 1, 3],
        feedback: {
          correct: "正解です。全粒粉が多くて水分が少ない時は、粉々になりやすいところを見ます。",
          close: "おしい！ ふくらみよりも、まずまとまり方と吸水を見ます。",
          wrong: "全粒粉を増やすと、香りだけでなく水分の足りなさが出やすいです。"
        },
        point: "全粒粉30％以上では、まとまり方と水分をセットで確認します。"
      },
      {
        text: "全粒粉を増やした時、次に比較しやすい試作は？",
        hint: "原因を切り分けやすいカードを選びます。",
        choices: ["水分を少し増やす", "全粒粉の割合を下げる", "具材を大量に入れる", "同じ焼成で比べる"],
        answers: [0, 1, 3],
        feedback: {
          correct: "正解です。水分か割合のどちらかを動かすと、差が見えやすくなります。",
          close: "おしい！ 具材を増やす前に、粉と水分を見ます。",
          wrong: "比較では、いきなり具材を増やすより、粉と水分をそろえて見ます。"
        },
        point: "次に見るなら、水分を少し増やすか、全粒粉の割合を下げます。"
      },
      {
        text: "全粒粉50％のスコーンで注意したいことは？",
        hint: "強く出やすい特徴を選びます。",
        choices: ["香ばしさが強くなる", "パサつきやすい", "生地が硬くなりやすい", "何も変わらない"],
        answers: [0, 1, 2],
        feedback: {
          correct: "正解です。香ばしさは出ますが、パサつきや硬さも見ます。",
          close: "おしい！ 香りの良さと、生地の硬さは一緒に確認します。",
          wrong: "割合が増えると変化は出ます。何も変わらないとは見ません。"
        },
        point: "香ばしさと食べやすさの両方を見ます。"
      }
    ]
  },
  {
    title: "BPが働くまでの流れ",
    type: "order",
    image: "ここにBPキャラ",
    supportImage: "ここにふくらみイラスト",
    memo: "BPは混ぜた時と焼成中に働きます。\n冷蔵でBPが大きく膨らむわけではありません。",
    support: "BPは増やせば解決する、という材料ではありません。反応のタイミングと焼き上がりの荒れ方も見ます。",
    order: {
      title: "BPが働くまでの流れを並べよう",
      brief: "BPが混ざってから焼き上がるまで、起こる順番にタップして並べよう",
      steps: [
        { id: "mix", label: "生地の水分（液体）と混ざる" },
        { id: "partial", label: "生地と混ざった時点で、一部のガスが出始める" },
        { id: "heat", label: "オーブンの熱で温度が上がり、残りのガスが一気に出る" },
        { id: "result", label: "ガスの出方しだいで、膨らみ方や味が変わる" }
      ],
      poolOrder: ["result", "mix", "heat", "partial"],
      note: "※冷蔵中は見た目では大きく膨らみません"
    }
  },
  {
    title: "バターの状態",
    image: "ここにバターキャラ",
    supportImage: "ここにバター粒イラスト",
    memo: "バターは冷たさと粒の残り方を見ます。溶け気味なら横広がりに注意します。",
    support: "材料変更メモのバター項目です。細かい、粒あり、溶け気味で焼き上がりが変わります。",
    questions: [
      {
        text: "バターが溶け気味だと、起きやすいことは？",
        hint: "正解寄りのカードをすべて選びます。",
        choices: ["横に広がりやすい", "層が出にくい", "ふわふわに焼き上がる"],
        answers: [0, 1],
        feedback: {
          correct: "正解です。溶け気味だと横に広がりやすく、層も出にくくなります。",
          close: "おしい！ ふわふわになると決めつけず、広がりと層を見ます。",
          wrong: "バターが溶けると、焼く前にだれて（ゆるんで広がって）高さが出にくいことがあります。"
        },
        point: "焼く前の生地温度と、バター粒が残っているかを見ます。"
      },
      {
        text: "横に暴れる（横に広がって形が崩れる）時、まず見たいところは？",
        hint: "生地がだれる（ゆるんで広がる）原因を選びます。",
        choices: ["バターの状態", "生地のゆるさ", "2番生地（抜いた残りをまとめ直した生地）・側面の弱さ", "焼き色だけ"],
        answers: [0, 1, 2],
        feedback: {
          correct: "正解です。横広がりは、バター、生地のゆるさ、2番生地や側面の弱さを順に見ます。",
          close: "おしい！ 焼き色だけではなく、焼く前の形と生地の弱さも見ます。",
          wrong: "横に広がる時は、焼く前の生地温度、ゆるさ、側面の弱さを見ます。"
        },
        point: "バターが溶けていないか、生地がゆるすぎないか、側面が弱くないかを確認します。"
      },
      {
        text: "バターが溶け気味だった時、次に試しやすいことは？",
        hint: "条件を戻すためのカードを選びます。",
        choices: ["生地を冷やす", "作業を早くする", "同じ厚みで比べる", "水分を無限に増やす"],
        answers: [0, 1, 2],
        feedback: {
          correct: "正解です。冷やす、手早くする、厚みをそろえると比べやすいです。",
          close: "おしい！ 水分を増やす前に、バターの温度を戻します。",
          wrong: "バターの問題なら、まず冷たさと作業時間を見直します。"
        },
        point: "溶けた時は、冷やす、手早くする、条件をそろえる。"
      }
    ]
  },
  {
    title: "水分と生地の硬さ",
    image: "ここに生地キャラ",
    supportImage: "ここにまとまりイラスト",
    memo: "粉々、押せばまとまる、ベタつく。この3つの言葉で生地を見ます。",
    support: "材料変更メモの水分と生地の硬さです。水分が少ないと粉々、多いと横流れの方向で見ます。",
    questions: [
      {
        text: "液体を入れて台に出した時、生地がまとまらない。いちばん先に見るところは？",
        hint: "焼く前の生地の中を見ます。正解は1つです。",
        choices: ["オーブンの温度設定", "粉全体に水分が回っているか", "仕上げにぬる卵の量", "型抜きの形"],
        answers: [1],
        feedback: {
          correct: "正解です。水分は多い少ないより、まず粉全体に回っているかを見ます。",
          close: "おしい！ いちばん先に見るのは、生地の中の水分の回り方です。",
          wrong: "オーブンや仕上げは、この時点ではまだ関係が薄いです。まず水分が粉全体に回っているかを見ます。"
        },
        point: "まず水分の回り方。そのあと、水分の量・全粒粉の割合・液体を入れてすぐ台に出していないか、も原因になるので順に見ます。"
      },
      {
        text: "生地がベタつく時、起きやすいことは？",
        hint: "焼く前後の形を想像します。",
        choices: ["横に流れやすい", "形がぼやけやすい", "高さが出やすくなる", "手や台につきやすい"],
        answers: [0, 1, 3],
        feedback: {
          correct: "正解です。ベタつく生地は横に流れやすく、形もぼやけやすいです。",
          close: "おしい！ 高さが出るとは決めず、流れ方を見ます。",
          wrong: "ベタつきは水分や温度のサインです。形の出方を見ます。"
        },
        point: "ベタつく時は、水分と生地温度を確認します。"
      },
      {
        text: "初心者が最初に目指しやすい生地の状態は？",
        hint: "扱いやすい真ん中の状態です。",
        choices: ["粉々", "押せばまとまる", "ベタつく", "液体のように流れる"],
        answers: [1],
        feedback: {
          correct: "正解です。最初は押せばまとまる状態を基準にすると比べやすいです。",
          close: "おしい！ 粉々やベタつきより、まず扱える真ん中を探します。",
          wrong: "基準にするなら、押せばまとまる状態が分かりやすいです。"
        },
        point: "押せばまとまる状態を覚えると、少ない・多いが見えます。"
      }
    ]
  },
  {
    title: "失敗と見る場所",
    type: "match",
    image: "ここに見る場所チェックキャラ",
    supportImage: "ここに見る場所イラスト",
    memo: "失敗は原因を1つに決めつけません。\nまず見る場所を順番に確認します。",
    support: "失敗から見るメモです。原因断定ではなく、まず見る場所の練習です。",
    match: {
      title: "失敗と見る場所をつなぐ",
      brief: "症状をタップ→見る場所をタップでつなごう",
      left: [
        { key: "height", label: "高さが出ない" },
        { key: "cohesion", label: "生地がまとまらない" },
        { key: "spread", label: "横に暴れる" },
        { key: "layers", label: "層が出ない" },
        { key: "color", label: "焼き色が弱い" }
      ],
      right: [
        { key: "cohesion", label: "水分の回り方" },
        { key: "color", label: "焼成温度" },
        { key: "height", label: "成形の厚み" },
        { key: "layers", label: "バターの状態（温度）" },
        { key: "spread", label: "型抜きの側面（塗り卵の垂れ・ひねり）" }
      ]
    }
  },
  {
    title: "生地がまとまらない",
    image: "ここにまとまりチェックキャラ",
    supportImage: "ここに折り込みイラスト",
    memo: "もっとこねるだけで解決しようとしない。まずは水分量、水分が粉に回る時間、全粒粉の割合を見ます。",
    support: "液体を入れて台に出した時、押してもひとまとまりにならず、折る前にバラバラ崩れる状態を見ます。",
    questions: [
      {
        text: "生地がまとまらない時、考えられる原因は？",
        hint: "まとまりに影響するものを選びます。",
        choices: ["水分が足りていない", "全粒粉が多い", "粉全体に水分が回っていない", "仕上げの粉糖が少ない"],
        answers: [0, 1, 2],
        feedback: {
          correct: "正解です。水分量、全粒粉、水分の回り方をまず見ます。",
          close: "おしい！ 仕上げより、液体を入れた後の生地の中を見ます。",
          wrong: "焼く前に、押してもまとまらない原因を分解します。"
        },
        point: "液体を入れて台に出した時、押してもまとまらず、折る前に崩れる状態です。"
      },
      {
        text: "まとまらない時、追加で見たい材料側の条件は？",
        hint: "水分が入りにくくなる条件を選びます。",
        choices: ["バターが粉に入りすぎていないか", "粉の種類や吸水が強すぎないか", "粉全体に水分が回っているか", "焼き色が強いか"],
        answers: [0, 1, 2],
        feedback: {
          correct: "正解です。バターが粉に入りすぎると水分が入りにくくなることがあり、粉の吸水も影響します。",
          close: "おしい！ 焼き色ではなく、焼く前の粉と水分の入り方を見ます。",
          wrong: "生地がまとまらない時は、焼く前の材料状態を見ます。"
        },
        point: "水分が足りないだけでなく、粉が水分を受け取りにくい状態も確認します。"
      },
      {
        text: "次の試作で比べやすい変更は？",
        hint: "もっとこねる前に、小さく比べます。",
        choices: ["水分を少し増やす", "全粒粉を少し下げる", "液体を入れてから少し待つ", "とにかく長くこねる"],
        answers: [0, 1, 2],
        feedback: {
          correct: "正解です。もっとこねる前に、水分量、なじむ時間、全粒粉の割合を比べます。",
          close: "おしい！ こねるだけで解決しようとせず、条件を小さく変えます。",
          wrong: "長くこねる前に、水分と粉の条件を見ます。"
        },
        point: "まずは、水分の量、水分が粉に回る時間、全粒粉の割合を見ます。"
      }
    ]
  },
  {
    title: "味の組み立て",
    image: "ここに味キャラ",
    supportImage: "ここに味組み立てイラスト",
    memo: "味はベース、具材、香り、食感、仕上げの組み合わせで考えます。",
    support: "味を組み立てるメモです。1つの味を選ぶのではなく、方向性と組み合わせで考えます。",
    questions: [
      {
        text: "香ばしいスコーンを考えるなら、合いそうな組み合わせは？",
        hint: "方向性としてありのカードを選びます。",
        choices: ["全粒粉 × くるみ × メープル", "紅茶 × オレンジピール", "チーズ × 黒こしょう", "水分を増やすだけ"],
        answers: [0, 1, 2],
        feedback: {
          correct: "正解です。味の方向は、ベース、具材、香りの組み合わせで考えます。",
          close: "おしい！ 水分を増やすだけでは味の組み立てになりません。",
          wrong: "味づくりでは、ベース、香り、具材、仕上げを組み合わせます。"
        },
        point: "全粒粉、ナッツ、メープルなどは香ばしさを作りやすいです。"
      },
      {
        text: "紅茶に合う方向を作るなら、使いやすいものは？",
        hint: "香りが軽く出るカードを選びます。",
        choices: ["紅茶", "レモン皮", "オレンジピール", "黒こしょうだけ大量"],
        answers: [0, 1, 2],
        feedback: {
          correct: "正解です。紅茶や柑橘の香りは、紅茶に合わせやすい方向です。",
          close: "おしい！ 香りは強くしすぎず、主役を決めます。",
          wrong: "紅茶に合わせるなら、軽い香りから考えると組み立てやすいです。"
        },
        point: "香りを足しすぎると散らかるので、主役を1つ決めます。"
      },
      {
        text: "具材を入れる時、最初の試作で見たいことは？",
        hint: "入れすぎを避ける見方です。",
        choices: ["粉に対して10〜15％くらいから試す", "最初から大量に入れる", "生地が崩れないか見る", "味の主役が分かるか見る"],
        answers: [0, 2, 3],
        feedback: {
          correct: "正解です。少なめから始めて、生地と味の主役を見ます。",
          close: "おしい！ 最初から大量に入れると、違いが分かりにくいです。",
          wrong: "具材は少しずつ。生地のまとまりと味の見え方を確認します。"
        },
        point: "具材は10〜15％くらいから試すと比較しやすいです。"
      }
    ]
  },
  {
    title: "商品開発の入口",
    image: "ここに商品メモキャラ",
    supportImage: "ここに試作メモイラスト",
    memo: "商品開発は完成からではなく、方向、組み合わせ、次に見ることから始めます。",
    support: "商品開発メモの入口です。味だけでなく、売る時の説明や食べ方まで見て、試作を小さく決めます。",
    questions: [
      {
        text: "コーヒーに合う商品を考える時、合いそうな方向は？",
        hint: "香ばしさや深さに合うカードを選びます。",
        choices: ["全粒粉", "くるみ", "メープル", "何でも大量に混ぜる"],
        answers: [0, 1, 2],
        feedback: {
          correct: "正解です。全粒粉、くるみ、メープルはコーヒーに合わせやすい方向です。",
          close: "おしい！ 方向はよいですが、入れすぎには注意します。",
          wrong: "コーヒー向けは、香ばしさと重さのバランスを見ます。"
        },
        point: "香ばしさを出すと重くなりやすいので、水分と焼成を見ます。"
      },
      {
        text: "次の試作で最初にやるとよいことは？",
        hint: "入口として小さく決めるカードを選びます。",
        choices: ["ベースを1つ決める", "具材を入れすぎない", "確認するポイントを書く", "完成品名だけ決める"],
        answers: [0, 1, 2],
        feedback: {
          correct: "正解です。ベース、具材量、見るポイントを決めると試作が進めやすいです。",
          close: "おしい！ 名前よりも、まず何を試すかを決めます。",
          wrong: "商品開発の入口では、試作で確認することを小さく決めます。"
        },
        point: "まずはベースを1つ決めて、具材を入れすぎないところから試します。"
      },
      {
        text: "商品開発で見るのは、味だけですか？",
        hint: "商品開発のゴールを選びます。",
        choices: ["味だけ見る", "見た目だけ見る", "売る時の説明や食べ方も見る", "値段だけ見る"],
        answers: [2],
        feedback: {
          correct: "正解です。味を作るだけでなく、売る時の説明や食べ方まで考えると商品になります。",
          close: "おしい！ 味・見た目・値段の1つだけでなく、説明や食べ方まで見ます。",
          wrong: "商品開発は味だけで終わりません。売る時にどう伝えるかまで含めます。"
        },
        point: "次は「商品開発ミッション」のミッション2で、食べ方の案内を練習します。"
      }
    ]
  },
  {
    title: "材料と働き",
    type: "match",
    image: "ここにつなぎキャラ",
    supportImage: "ここにつなぎイラスト",
    memo: "材料は単体で見るより、働きとつなげて覚えます。\n高さが出ない時も、BPだけで決めません。",
    support: "線でつなぐ練習ステージです。材料と、生地・焼き上がりへの働きを結びます。",
    match: {
      title: "材料と働きをつなぐ",
      brief: "材料をタップ→働きをタップでつなごう",
      left: [
        { key: "flour", label: "全粒粉" },
        { key: "bp", label: "BP" },
        { key: "butter", label: "バター" },
        { key: "water", label: "水分" },
        { key: "thickness", label: "成形の厚み" }
      ],
      right: [
        { key: "water", label: "量と回り方で生地のまとまりが変わる" },
        { key: "thickness", label: "薄くすると高さが出にくくなる" },
        { key: "flour", label: "水分を吸いやすい" },
        { key: "butter", label: "粒が残ると層とサクサク感が出る" },
        { key: "bp", label: "量しだいで膨らみの高さが変わる" }
      ]
    }
  },
  {
    title: "商品開発ミッション",
    type: "mission",
    image: "ここに試作メモキャラ",
    supportImage: "ここに試作メモイラスト",
    memo: "商品開発ミッションは、方向、注意、次に見るところをセットで試作メモに残します。",
    support: "商品開発メモの入口です。コーヒーに合う方向で、フレーバー候補から1つ選んで試作目線を確認します。",
    mission: {
      missions: [
        {
          id: "coffee",
          type: "builder",
          navLabel: "ミッション1",
          title: "コーヒーに合うスコーンを組み立てよう",
          brief: "ベース・具材・香り・仕上げを1つずつ選ぶと、試作メモができます。",
          angleNote: "香ばしさと深みでコーヒーに合わせます。会計時は「コーヒーに合います」の一言で提案できます。",
          categories: [
            {
              key: "base",
              label: "ベース",
              options: [
                { id: "wheat", label: "全粒粉", flavor: "香ばしさ", caution: "水分を吸いやすく生地がまとまりにくい", checkpoint: "生地の硬さと吸水" },
                { id: "plain", label: "薄力粉", flavor: "軽い口どけ", caution: "まとまりやすいが物足りなさが出ることがある", checkpoint: "口どけと軽さ" }
              ]
            },
            {
              key: "mix",
              label: "具材",
              options: [
                { id: "walnut", label: "くるみ", flavor: "香ばしさと食感", caution: "刻みすぎない。油分でベタつき注意", checkpoint: "焼成後の香ばしさと、油戻り（時間が経って油がにじむこと）" },
                { id: "choco", label: "チョコチップ", flavor: "コクと甘さ", caution: "生地温度が上がると溶け崩れやすい", checkpoint: "チョコの溶け出し方" },
                { id: "dried", label: "ドライフルーツ", flavor: "酸味とジューシーさ", caution: "水分を含み生地がゆるくなりやすい", checkpoint: "生地のベタつき" },
                { id: "noneMix", label: "なし", flavor: "", caution: "", checkpoint: "" }
              ]
            },
            {
              key: "aroma",
              label: "香り",
              options: [
                { id: "maple", label: "メープル", flavor: "深み", caution: "入れすぎると甘さが強くなる", checkpoint: "甘さと香りのバランス" },
                { id: "cinnamon", label: "シナモン", flavor: "スパイスの香り", caution: "香りを足しすぎない", checkpoint: "香りの強さ" },
                { id: "vanilla", label: "バニラ", flavor: "やさしい甘さ", caution: "風味が単調になりやすい", checkpoint: "味の輪郭" },
                { id: "noneAroma", label: "なし", flavor: "", caution: "", checkpoint: "" }
              ]
            },
            {
              key: "finish",
              label: "仕上げ",
              options: [
                { id: "plainFinish", label: "そのまま", flavor: "素材の味を活かす", caution: "見た目が地味になりやすい", checkpoint: "焼き色と見た目" },
                { id: "glaze", label: "グレーズ（砂糖がけ）", flavor: "つやと甘さ", caution: "かけすぎるとベタつく", checkpoint: "グレーズの固まり方" },
                { id: "sugar", label: "粉糖", flavor: "軽い甘さと見た目", caution: "湿気で溶けやすい", checkpoint: "時間経過での粉糖の状態" }
              ]
            }
          ]
        },
        {
          id: "serving",
          type: "cards",
          navLabel: "ミッション2",
          title: "おいしい食べ方を案内する",
          brief: "お客さんに渡す時、家でもおいしく食べてもらうための説明を考えます。",
          angleNote: "保存状態が変われば、おすすめの食べ方も変わります。",
          cards: [
            { id: "today", label: "当日", direction: "そのまま、または軽く温めるのがおすすめです。", caution: "温めすぎるとしっとりが強く出ます。", checkpoint: "香りと食感、温めすぎていないか。" },
            { id: "nextDay", label: "翌日", direction: "トースターで軽く温めるとサクッと感が戻ります。", caution: "温めが足りないと生地が締まった印象になります。", checkpoint: "外側のサクッと感が戻っているか。" },
            { id: "frozen", label: "冷凍後", direction: "自然解凍してからトースターで温めるのがおすすめです。", caution: "凍ったまま加熱すると中が生っぽく残ることがあります。", checkpoint: "解凍具合と中心の温まり方。" },
            { id: "microwaveOnly", label: "レンジだけ", direction: "しっとり仕上がりますが、表面のサクッと感は戻りにくいです。", caution: "温めすぎると生地がべたつくことがあります。", checkpoint: "しっとり感と表面のバランス。" },
            { id: "fridge", label: "冷蔵保存", direction: "生地が締まりやすいので、食べる前の温め直しを案内します。", caution: "冷たいまま出すと硬さが目立ちます。", checkpoint: "温め直しの案内を伝えたか。" }
          ]
        }
      ]
    }
  }
];

let currentStageIndex = 0;
let currentQuestionIndex = 0;
let selectedChoices = new Set();
let answered = false;
let missionSelections = {};
let missionActiveIndex = 0;
let matchSelectedLeft = null;
let matchPairs = {};
let matchChecked = false;
let orderSequence = [];
let orderChecked = false;

function renderStageList() {
  stageList.innerHTML = stages.map((stage, index) => {
    const detail = stageDetails[stage.title];
    return `
    <button class="stage-card ${index === currentStageIndex ? "is-active" : ""}" type="button" data-stage="${index}">
      <span>
        <span class="stage-meta-row">
          <span class="stage-number">Stage ${index + 1}</span>
          <span class="difficulty">${detail.difficulty}</span>
          <span class="stage-tag">${detail.tag}</span>
        </span>
        <span class="stage-name">${stage.title}</span>
        <span class="stage-desc">${detail.desc}</span>
      </span>
      <span class="stage-avatar">${detail.avatar}</span>
    </button>
  `;
  }).join("");

  stageList.querySelectorAll(".stage-card").forEach((button) => {
    button.addEventListener("click", () => {
      currentStageIndex = Number(button.dataset.stage);
      currentQuestionIndex = 0;
      selectedChoices.clear();
      answered = false;
      missionSelections = {};
      missionActiveIndex = 0;
      matchSelectedLeft = null;
      matchPairs = {};
      matchChecked = false;
      orderSequence = [];
      orderChecked = false;
      renderApp();
      lessonArea.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderStageHeader(stage, detail) {
  stageLabel.textContent = `Stage ${currentStageIndex + 1}`;
  stageTitle.textContent = stage.title;
  stageImageLabel.textContent = detail.avatar;
  supportOneLine.textContent = detail.oneLine;
  supportLook.textContent = detail.look;
  supportNext.textContent = detail.next;
  supportExtra.innerHTML = (detail.extra || [])
    .map((item) => `<div><dt>${item.dt}</dt><dd>${item.dd}</dd></div>`)
    .join("");
  supportImageLabel.textContent = stage.supportImage.replace("ここに", "").replace("イラスト", "キャラ");
}

function getNextStageInfo() {
  const nextIndex = (currentStageIndex + 1) % stages.length;
  const nextStage = stages[nextIndex];
  const label = nextIndex === 0 ? "最初のステージへ" : "次のステージへ";
  const desc = nextIndex === 0
    ? "全ステージを一周しました。もう一度、粉のちがいから確認できます。"
    : `${nextStage.title}：${stageDetails[nextStage.title].desc}`;
  return { nextIndex, label, desc };
}

function playOnce(el, className) {
  if (!el) return;
  el.classList.remove(className);
  void el.offsetWidth;
  el.classList.add(className);
  el.addEventListener("animationend", () => el.classList.remove(className), { once: true });
}

function renderApp() {
  const stage = stages[currentStageIndex];
  renderStageList();
  backButton.textContent = "前へ";

  if (stage.type === "mission") {
    renderMissionStage(stage);
    return;
  }

  if (stage.type === "match") {
    renderMatchStage(stage);
    return;
  }

  if (stage.type === "order") {
    renderOrderStage(stage);
    return;
  }

  renderQuizStage(stage);
}

function renderQuizStage(stage) {
  const detail = stageDetails[stage.title];
  const question = stage.questions[currentQuestionIndex];
  const total = stage.questions.length;
  const progress = ((currentQuestionIndex + 1) / total) * 100;

  missionNav.innerHTML = "";
  renderStageHeader(stage, detail);
  progressBarWrap.classList.remove("is-hidden");
  stageImageText.classList.remove("is-hidden");
  supportMemoSection.classList.remove("is-hidden");
  progressText.textContent = `${currentQuestionIndex + 1}問目 / ${total}`;
  progressBar.style.width = `${progress}%`;

  questionPanel.classList.remove("is-hidden");
  choiceList.classList.remove("is-hidden");
  matchPanel.classList.add("is-hidden");
  orderPanel.classList.add("is-hidden");
  reactionCard.className = "reaction-card is-hidden";
  completeCard.classList.add("is-hidden");
  nextButton.classList.add("is-hidden");
  checkButton.classList.remove("is-hidden");
  checkButton.textContent = "答える";
  checkButton.disabled = selectedChoices.size === 0;
  backButton.disabled = currentQuestionIndex === 0;

  missionLabel.textContent = `ミッション ${currentQuestionIndex + 1}`;
  questionText.textContent = `ミッション：${question.text}`;
  questionHint.textContent = question.hint;
  renderChoices(question);
}

function renderChoices(question) {
  choiceList.innerHTML = question.choices.map((choice, index) => {
    const isSelected = selectedChoices.has(index);
    return `
      <button class="choice-card ${isSelected ? "is-selected" : ""}" type="button" data-choice="${index}">
        <span class="choice-mark">${isSelected ? "✓" : index + 1}</span>
        <span>${choice}</span>
      </button>
    `;
  }).join("");

  choiceList.querySelectorAll(".choice-card").forEach((button) => {
    button.addEventListener("click", () => {
      if (answered) return;
      const choiceIndex = Number(button.dataset.choice);

      if (selectedChoices.has(choiceIndex)) {
        selectedChoices.delete(choiceIndex);
      } else {
        selectedChoices.add(choiceIndex);
      }

      checkButton.disabled = selectedChoices.size === 0;
      renderChoices(question);
    });
  });
}

function checkAnswer() {
  const currentStage = stages[currentStageIndex];
  if (currentStage.type === "match") {
    checkMatch();
    return;
  }

  if (currentStage.type === "order") {
    checkOrder();
    return;
  }

  if (selectedChoices.size === 0 || answered) return;

  const stage = stages[currentStageIndex];
  const question = stage.questions[currentQuestionIndex];
  const answerSet = new Set(question.answers);
  const selected = [...selectedChoices];
  const correctCount = selected.filter((item) => answerSet.has(item)).length;
  const wrongCount = selected.filter((item) => !answerSet.has(item)).length;
  const missedCount = question.answers.filter((item) => !selectedChoices.has(item)).length;
  let result = "wrong";

  if (wrongCount === 0 && missedCount === 0) {
    result = "correct";
  } else if (correctCount > 0) {
    result = "close";
  }

  answered = true;
  showAnswerMarks(answerSet);
  showReaction(question, result);
  playOnce(stageImageText, result === "correct" ? "anim-bounce" : "anim-shake");
  checkButton.classList.add("is-hidden");
  nextButton.classList.remove("is-hidden");
  backButton.disabled = false;
  backButton.textContent = "選び直す";
}

function showAnswerMarks(answerSet) {
  choiceList.querySelectorAll(".choice-card").forEach((button) => {
    const choiceIndex = Number(button.dataset.choice);

    if (answerSet.has(choiceIndex)) {
      button.classList.add("is-correct");
    }

    if (selectedChoices.has(choiceIndex) && !answerSet.has(choiceIndex)) {
      button.classList.add("is-wrong");
    }
  });
}

function showReaction(question, result) {
  const stage = stages[currentStageIndex];
  const detail = stageDetails[stage.title];
  const labels = {
    correct: ["正解寄り", "いい感じ！ 現場の見方に近いです"],
    close: ["おしい", "そこも見るけど、もう1つ条件を足して見たいです"],
    wrong: ["見るポイント", "それだけでは決めきれないです"]
  };

  reactionCard.className = `reaction-card is-${result}`;
  reactionBadge.textContent = labels[result][0];
  reactionTitle.textContent = labels[result][1];
  const correctLabels = question.answers.map((index) => `「${question.choices[index]}」`).join("");
  reactionText.textContent = result === "correct"
    ? question.feedback[result]
    : `${question.feedback[result]}\n正解は${correctLabels}です。`;
  pointLabel.textContent = "見るポイント";
  pointText.textContent = question.point;
  reactionMemoLabel.textContent = "新人メモ";
  reactionMemoText.textContent = stage.memo;
  reactionNextLabel.textContent = "次に試すこと";
  reactionNextText.textContent = detail.next;
  reactionCard.scrollIntoView({ behavior: "smooth", block: "center" });
}

function goNext() {
  const stage = stages[currentStageIndex];

  if (stage.type === "mission") {
    showMissionComplete(stage);
    return;
  }

  if (stage.type === "match") {
    showMatchComplete(stage);
    return;
  }

  if (stage.type === "order") {
    showOrderComplete(stage);
    return;
  }

  if (currentQuestionIndex < stage.questions.length - 1) {
    currentQuestionIndex += 1;
    selectedChoices.clear();
    answered = false;
    renderApp();
    lessonArea.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  showComplete(stage);
}

function goBack() {
  const stage = stages[currentStageIndex];

  if (stage.type === "match") {
    if (!matchChecked) return;
    matchSelectedLeft = null;
    matchPairs = {};
    matchChecked = false;
    renderApp();
    drawMatchLines();
    lessonArea.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (stage.type === "order") {
    if (!orderChecked) return;
    orderSequence = [];
    orderChecked = false;
    renderApp();
    lessonArea.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (stage.type === "mission") return;

  if (answered) {
    selectedChoices.clear();
    answered = false;
    renderApp();
    lessonArea.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  if (currentQuestionIndex === 0) return;
  currentQuestionIndex -= 1;
  selectedChoices.clear();
  answered = false;
  renderApp();
  lessonArea.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showComplete(stage) {
  const { nextIndex, label, desc } = getNextStageInfo();
  questionPanel.classList.add("is-hidden");
  choiceList.classList.add("is-hidden");
  reactionCard.classList.add("is-hidden");
  checkButton.classList.add("is-hidden");
  nextButton.classList.add("is-hidden");
  backButton.disabled = false;
  completeCard.classList.remove("is-hidden");
  completeTitle.textContent = `ステージクリア：${stage.title}`;
  completeText.textContent = "判断の順番を声に出せたらクリアです。正解数より、どこを見るかが大事です。";
  rookieMemoLabel.textContent = "今日の新人メモ";
  rookieMemo.textContent = stage.memo;
  nextStageLabel.textContent = "次に見るステージ";
  nextStageText.textContent = desc;
  nextStageButton.textContent = label;
  completeCard.scrollIntoView({ behavior: "smooth", block: "center" });
  playOnce(completeCard, "anim-sparkle");
}

function restartStage() {
  currentQuestionIndex = 0;
  selectedChoices.clear();
  answered = false;
  missionSelections = {};
  missionActiveIndex = 0;
  matchSelectedLeft = null;
  matchPairs = {};
  matchChecked = false;
  orderSequence = [];
  orderChecked = false;
  renderApp();
}

function goNextStage() {
  currentStageIndex = (currentStageIndex + 1) % stages.length;
  restartStage();
}

function scrollToStageList() {
  stageList.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderMissionStage(stage) {
  const detail = stageDetails[stage.title];
  const missions = stage.mission.missions;
  const mission = missions[missionActiveIndex];
  const { chosen, total } = getMissionProgress(mission);

  renderStageHeader(stage, detail);
  progressBarWrap.classList.remove("is-hidden");
  stageImageText.classList.remove("is-hidden");
  supportMemoSection.classList.remove("is-hidden");
  progressText.textContent = `${chosen}/${total} 選択中`;
  progressBar.style.width = `${(chosen / total) * 100}%`;

  questionPanel.classList.remove("is-hidden");
  choiceList.classList.remove("is-hidden");
  matchPanel.classList.add("is-hidden");
  orderPanel.classList.add("is-hidden");
  reactionCard.className = "reaction-card is-hidden";
  completeCard.classList.add("is-hidden");
  checkButton.classList.add("is-hidden");
  nextButton.classList.add("is-hidden");
  backButton.disabled = true;

  missionLabel.textContent = "商品開発ミッション";
  questionText.textContent = mission.title;
  questionHint.textContent = mission.brief;

  renderMissionNav(missions);
  renderMissionBody(mission);

  if (chosen === total) {
    showMissionReaction(mission);
    nextButton.classList.remove("is-hidden");
    nextButton.textContent = mission.type === "cards" ? "この食べ方で案内する" : "今日の試作メモへ";
  }
}

function renderMissionNav(missions) {
  missionNav.innerHTML = missions.map((mission, index) => {
    const isActive = index === missionActiveIndex;
    return `<button type="button" class="mission-tab ${isActive ? "is-active" : ""}" data-mission="${index}">${mission.navLabel}</button>`;
  }).join("");

  missionNav.querySelectorAll(".mission-tab").forEach((button) => {
    button.addEventListener("click", () => {
      missionActiveIndex = Number(button.dataset.mission);
      renderApp();
    });
  });
}

function renderMissionBody(mission) {
  if (mission.type === "cards") {
    renderMissionCards(mission);
  } else {
    renderMissionCategories(mission);
  }
}

function renderMissionCards(mission) {
  const optionsHtml = mission.cards.map((card) => {
    const isSelected = missionSelections.card === card.id;
    return `<button type="button" class="builder-option ${isSelected ? "is-selected" : ""}" data-card="${card.id}">${card.label}</button>`;
  }).join("");

  choiceList.innerHTML = `
    <div class="builder-category">
      <p class="builder-category-label">保存状態を選ぶ</p>
      <div class="builder-options">${optionsHtml}</div>
    </div>
  `;

  choiceList.querySelectorAll(".builder-option").forEach((button) => {
    button.addEventListener("click", () => {
      missionSelections.card = button.dataset.card;
      renderApp();
    });
  });
}

function renderMissionCategories(mission) {
  choiceList.innerHTML = mission.categories.map((category) => {
    const optionsHtml = category.options.map((option) => {
      const isSelected = missionSelections[category.key] === option.id;
      return `<button type="button" class="builder-option ${isSelected ? "is-selected" : ""}" data-category="${category.key}" data-option="${option.id}">${option.label}</button>`;
    }).join("");
    return `
      <div class="builder-category">
        <p class="builder-category-label">${category.label}</p>
        <div class="builder-options">${optionsHtml}</div>
      </div>
    `;
  }).join("");

  choiceList.querySelectorAll(".builder-option").forEach((button) => {
    button.addEventListener("click", () => {
      missionSelections[button.dataset.category] = button.dataset.option;
      renderApp();
    });
  });
}

function getMissionProgress(mission) {
  if (mission.type === "cards") {
    return { chosen: missionSelections.card ? 1 : 0, total: 1 };
  }
  const total = mission.categories.length;
  const chosen = mission.categories.filter((category) => missionSelections[category.key] !== undefined).length;
  return { chosen, total };
}

function getMissionSelectedOptions(mission) {
  return mission.categories
    .map((category) => category.options.find((option) => option.id === missionSelections[category.key]))
    .filter(Boolean);
}

function getMissionSummary(mission) {
  if (mission.type === "cards") {
    const card = mission.cards.find((c) => c.id === missionSelections.card);
    if (!card) return { combo: "", direction: "", caution: "", checkpoint: "" };
    return { combo: card.label, direction: card.direction, caution: card.caution, checkpoint: card.checkpoint };
  }

  const options = getMissionSelectedOptions(mission);
  const flavors = options.map((option) => option.flavor).filter(Boolean);
  const cautions = options.map((option) => option.caution).filter(Boolean);
  const checkpoints = options.map((option) => option.checkpoint).filter(Boolean);

  return {
    combo: options.map((option) => option.label).join("×"),
    direction: `${mission.angleNote} ${flavors.join("、")}を組み合わせます。`,
    caution: cautions.length ? `${cautions.join("。")}。` : "特に大きな注意点はありません。",
    checkpoint: checkpoints.length ? checkpoints.join("、") : "焼き上がりの全体バランス"
  };
}

function showMissionReaction(mission) {
  const summary = getMissionSummary(mission);
  reactionCard.className = "reaction-card is-correct";
  reactionBadge.textContent = mission.type === "cards" ? "案内の方向" : "試作の方向";
  reactionTitle.textContent = summary.combo;
  reactionText.textContent = mission.angleNote;
  pointLabel.textContent = mission.type === "cards" ? "おすすめの食べ方" : "味の方向";
  pointText.textContent = summary.direction;
  reactionMemoLabel.textContent = "案内する時の注意";
  reactionMemoText.textContent = summary.caution;
  reactionNextLabel.textContent = "次に見るところ";
  reactionNextText.textContent = summary.checkpoint;
  reactionCard.classList.remove("is-hidden");
  reactionCard.scrollIntoView({ behavior: "smooth", block: "center" });
}

function showMissionComplete(stage) {
  const mission = stage.mission.missions[missionActiveIndex];
  const summary = getMissionSummary(mission);
  const { label } = getNextStageInfo();

  questionPanel.classList.add("is-hidden");
  choiceList.classList.add("is-hidden");
  reactionCard.classList.add("is-hidden");
  checkButton.classList.add("is-hidden");
  nextButton.classList.add("is-hidden");
  backButton.disabled = false;
  const isCards = mission.type === "cards";
  completeCard.classList.remove("is-hidden");
  completeTitle.textContent = isCards ? "今日の案内メモ" : "今日の試作メモ";
  completeText.textContent = isCards ? `${summary.combo} の案内ができました。` : `${summary.combo} を組み立てました。`;
  rookieMemoLabel.textContent = isCards ? "案内する食べ方と注意" : "味の方向と作る時の注意";
  rookieMemo.textContent = `${summary.direction} ${summary.caution}`;
  nextStageLabel.textContent = isCards ? "次に見るところ" : "次の試作で見るところ";
  nextStageText.textContent = summary.checkpoint;
  nextStageButton.textContent = label;
  completeCard.scrollIntoView({ behavior: "smooth", block: "center" });
  playOnce(completeCard, "anim-sparkle");
}

function renderMatchStage(stage) {
  const detail = stageDetails[stage.title];
  const match = stage.match;

  missionNav.innerHTML = "";
  renderStageHeader(stage, detail);
  progressBarWrap.classList.add("is-hidden");
  stageImageText.classList.add("is-hidden");
  supportMemoSection.classList.add("is-hidden");

  const connectedCount = Object.keys(matchPairs).length;
  progressText.textContent = `${connectedCount}/${match.left.length} つないだ`;

  questionPanel.classList.add("is-hidden");
  choiceList.classList.add("is-hidden");
  matchPanel.classList.remove("is-hidden");
  orderPanel.classList.add("is-hidden");
  reactionCard.className = "reaction-card is-hidden";
  completeCard.classList.add("is-hidden");
  checkButton.classList.remove("is-hidden");
  checkButton.textContent = "つなぎを確認する";
  checkButton.disabled = connectedCount < match.left.length || matchChecked;
  nextButton.classList.add("is-hidden");
  backButton.disabled = true;

  matchLead.textContent = match.brief;
  matchFeedback.classList.add("is-hidden");

  renderMatchRows(match);
  requestAnimationFrame(drawMatchLines);

  if (matchChecked) {
    checkButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
    nextButton.textContent = "次へ";
    backButton.disabled = false;
    backButton.textContent = "選び直す";
  }
}

function renderMatchRows(match) {
  matchTopRow.innerHTML = match.left.map((item, index) => {
    const classes = ["match-card"];
    if (matchSelectedLeft === index) classes.push("is-selected");
    if (matchPairs[index] !== undefined) classes.push("is-linked");
    if (matchChecked) {
      const rightItem = match.right[matchPairs[index]];
      classes.push(rightItem && rightItem.key === item.key ? "is-correct" : "is-wrong");
    }
    return `<button type="button" class="${classes.join(" ")}" data-left="${index}" ${matchChecked ? "disabled" : ""}>${item.label}</button>`;
  }).join("");

  const linkedRightIndexes = new Set(Object.values(matchPairs));

  matchBottomRow.innerHTML = match.right.map((item, index) => {
    const classes = ["match-card"];
    if (linkedRightIndexes.has(index)) classes.push("is-linked");
    if (matchChecked) {
      const pairedLeftIndex = Object.keys(matchPairs).find((key) => matchPairs[key] === index);
      if (pairedLeftIndex !== undefined) {
        const leftItem = match.left[Number(pairedLeftIndex)];
        classes.push(leftItem.key === item.key ? "is-correct" : "is-wrong");
      }
    }
    return `<button type="button" class="${classes.join(" ")}" data-right="${index}" ${matchChecked ? "disabled" : ""}>${item.label}</button>`;
  }).join("");

  matchTopRow.querySelectorAll(".match-card").forEach((button) => {
    button.addEventListener("click", () => {
      if (matchChecked) return;
      matchSelectedLeft = Number(button.dataset.left);
      renderMatchRows(match);
      drawMatchLines();
    });
  });

  matchBottomRow.querySelectorAll(".match-card").forEach((button) => {
    button.addEventListener("click", () => {
      if (matchChecked || matchSelectedLeft === null) return;
      const leftIndex = matchSelectedLeft;
      const rightIndex = Number(button.dataset.right);
      matchPairs[leftIndex] = rightIndex;
      matchSelectedLeft = null;
      renderMatchRows(match);
      drawMatchLines();
      popMatchCards(leftIndex, rightIndex);
      const connectedCount = Object.keys(matchPairs).length;
      progressText.textContent = `${connectedCount}/${match.left.length} つないだ`;
      checkButton.disabled = connectedCount < match.left.length;
    });
  });
}

function popMatchCards(leftIndex, rightIndex) {
  const leftEl = matchTopRow.querySelector(`[data-left="${leftIndex}"]`);
  const rightEl = matchBottomRow.querySelector(`[data-right="${rightIndex}"]`);
  [leftEl, rightEl].forEach((el) => playOnce(el, "card-pop"));
}

function drawMatchLines() {
  const board = matchLines.closest(".match-board");
  if (!board) return;
  const boardRect = board.getBoundingClientRect();
  matchLines.setAttribute("width", boardRect.width);
  matchLines.setAttribute("height", boardRect.height);
  matchLines.setAttribute("viewBox", `0 0 ${boardRect.width} ${boardRect.height}`);
  matchLines.innerHTML = "";

  const stage = stages[currentStageIndex];
  if (!stage || stage.type !== "match") return;
  const match = stage.match;

  Object.entries(matchPairs).forEach(([leftIndexStr, rightIndex]) => {
    const leftIndex = Number(leftIndexStr);
    const leftEl = matchTopRow.querySelector(`[data-left="${leftIndex}"]`);
    const rightEl = matchBottomRow.querySelector(`[data-right="${rightIndex}"]`);
    if (!leftEl || !rightEl) return;

    const leftRect = leftEl.getBoundingClientRect();
    const rightRect = rightEl.getBoundingClientRect();

    const x1 = leftRect.left - boardRect.left + leftRect.width / 2;
    const y1 = leftRect.bottom - boardRect.top;
    const x2 = rightRect.left - boardRect.left + rightRect.width / 2;
    const y2 = rightRect.top - boardRect.top;

    let stroke = "rgba(255, 255, 255, 0.55)";
    if (matchChecked) {
      const isCorrect = match.left[leftIndex].key === match.right[rightIndex].key;
      stroke = isCorrect ? "#ffffff" : "#8a93a8";
    }

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", stroke);
    line.setAttribute("stroke-width", "4");
    line.setAttribute("stroke-linecap", "round");
    matchLines.appendChild(line);
  });
}

function checkMatch() {
  const stage = stages[currentStageIndex];
  const match = stage.match;
  if (Object.keys(matchPairs).length < match.left.length || matchChecked) return;

  matchChecked = true;
  let correctCount = 0;
  const wrongPairAnswers = [];

  match.left.forEach((leftItem, leftIndex) => {
    const rightItem = match.right[matchPairs[leftIndex]];
    if (rightItem && rightItem.key === leftItem.key) {
      correctCount += 1;
    } else {
      const correctRight = match.right.find((item) => item.key === leftItem.key);
      wrongPairAnswers.push(`${leftItem.label} → ${correctRight.label}`);
    }
  });

  renderMatchRows(match);
  drawMatchLines();
  updateMatchFeedback(match, correctCount, wrongPairAnswers);

  checkButton.classList.add("is-hidden");
  nextButton.classList.remove("is-hidden");
  nextButton.textContent = "次へ";
  backButton.disabled = false;
  backButton.textContent = "選び直す";
}

function updateMatchFeedback(match, correctCount, wrongPairAnswers) {
  const total = match.left.length;
  let line = "そこも見るけど、まずはここを見ます";
  if (correctCount === total) {
    line = "いい感じ！";
  } else if (correctCount === 0) {
    line = "もう一回、見る順番を考えよう";
  }

  matchFeedbackLine.textContent = line;
  matchFeedbackSub.textContent = wrongPairAnswers.length
    ? `${correctCount}/${total} 正解\n正しいつなぎ：\n${wrongPairAnswers.join("\n")}`
    : `${correctCount}/${total} 正解`;
  matchFeedback.classList.remove("is-hidden");
  matchFeedback.scrollIntoView({ behavior: "smooth", block: "center" });
  playOnce(matchFeedback, correctCount === total ? "anim-bounce" : "anim-shake");
}

function showMatchComplete(stage) {
  const { label, desc } = getNextStageInfo();

  questionPanel.classList.add("is-hidden");
  matchPanel.classList.add("is-hidden");
  reactionCard.classList.add("is-hidden");
  checkButton.classList.add("is-hidden");
  nextButton.classList.add("is-hidden");
  backButton.disabled = false;
  completeCard.classList.remove("is-hidden");
  completeTitle.textContent = `ステージクリア：${stage.title}`;
  completeText.textContent = "つないで覚えたらクリアです。";
  rookieMemoLabel.textContent = "今日の新人メモ";
  rookieMemo.textContent = stage.memo;
  nextStageLabel.textContent = "次に見るステージ";
  nextStageText.textContent = desc;
  nextStageButton.textContent = label;
  completeCard.scrollIntoView({ behavior: "smooth", block: "center" });
  playOnce(completeCard, "anim-sparkle");
}

function renderOrderStage(stage) {
  const detail = stageDetails[stage.title];
  const order = stage.order;

  if (orderSequence.length !== order.steps.length) {
    orderSequence = new Array(order.steps.length).fill(null);
  }

  missionNav.innerHTML = "";
  renderStageHeader(stage, detail);
  progressBarWrap.classList.remove("is-hidden");
  stageImageText.classList.remove("is-hidden");
  supportMemoSection.classList.remove("is-hidden");

  const filledCount = orderSequence.filter(Boolean).length;
  progressText.textContent = `${filledCount}/${order.steps.length} 並べた`;
  progressBar.style.width = `${(filledCount / order.steps.length) * 100}%`;

  questionPanel.classList.add("is-hidden");
  choiceList.classList.add("is-hidden");
  matchPanel.classList.add("is-hidden");
  orderPanel.classList.remove("is-hidden");
  reactionCard.className = "reaction-card is-hidden";
  completeCard.classList.add("is-hidden");
  checkButton.classList.remove("is-hidden");
  checkButton.textContent = "この順番で確認する";
  checkButton.disabled = filledCount < order.steps.length || orderChecked;
  nextButton.classList.add("is-hidden");
  backButton.disabled = true;

  orderLead.textContent = order.brief;
  orderFeedback.classList.add("is-hidden");

  renderOrderBoard(order);

  if (orderChecked) {
    checkButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
    nextButton.textContent = "次へ";
    backButton.disabled = false;
    backButton.textContent = "選び直す";
  }
}

function renderOrderBoard(order) {
  orderSlots.innerHTML = order.steps.map((_, index) => {
    const stepId = orderSequence[index];
    const step = order.steps.find((s) => s.id === stepId);
    const classes = ["match-card"];
    if (!step) classes.push("is-empty");
    if (orderChecked && step) {
      classes.push(order.steps[index].id === stepId ? "is-correct" : "is-wrong");
    }
    const label = step ? step.label : String(index + 1);
    const disabled = orderChecked || !step;
    return `<button type="button" class="${classes.join(" ")}" data-slot="${index}" ${disabled ? "disabled" : ""}>${label}</button>`;
  }).join("");

  orderPool.innerHTML = order.poolOrder
    .filter((id) => !orderSequence.includes(id))
    .map((id) => {
      const step = order.steps.find((s) => s.id === id);
      return `<button type="button" class="match-card" data-step="${id}">${step.label}</button>`;
    }).join("");

  orderSlots.querySelectorAll(".match-card:not(.is-empty)").forEach((button) => {
    button.addEventListener("click", () => {
      if (orderChecked) return;
      const index = Number(button.dataset.slot);
      orderSequence[index] = null;
      renderOrderBoard(order);
      updateOrderProgress(order);
    });
  });

  orderPool.querySelectorAll(".match-card").forEach((button) => {
    button.addEventListener("click", () => {
      if (orderChecked) return;
      const emptyIndex = orderSequence.findIndex((value) => !value);
      if (emptyIndex === -1) return;
      orderSequence[emptyIndex] = button.dataset.step;
      renderOrderBoard(order);
      updateOrderProgress(order);
      playOnce(orderSlots.querySelector(`[data-slot="${emptyIndex}"]`), "card-pop");
    });
  });
}

function updateOrderProgress(order) {
  const filledCount = orderSequence.filter(Boolean).length;
  progressText.textContent = `${filledCount}/${order.steps.length} 並べた`;
  progressBar.style.width = `${(filledCount / order.steps.length) * 100}%`;
  checkButton.disabled = filledCount < order.steps.length;
}

function checkOrder() {
  const stage = stages[currentStageIndex];
  const order = stage.order;
  if (orderSequence.some((id) => !id) || orderChecked) return;

  orderChecked = true;
  let correctCount = 0;
  order.steps.forEach((step, index) => {
    if (orderSequence[index] === step.id) correctCount += 1;
  });

  renderOrderBoard(order);

  const total = order.steps.length;
  let line = "そこも見るけど、まずはここを見ます";
  if (correctCount === total) {
    line = "いい感じ！";
  } else if (correctCount === 0) {
    line = "もう一回、見る順番を考えよう";
  }

  orderFeedbackLine.textContent = line;
  const noteLine = order.note ? `\n${order.note}` : "";
  orderFeedbackSub.textContent = correctCount === total
    ? `${correctCount}/${total} 正解${noteLine}`
    : `${correctCount}/${total} 正解\n正しい順番：\n${order.steps.map((step, index) => `${index + 1}. ${step.label}`).join("\n")}${noteLine}`;
  orderFeedback.classList.remove("is-hidden");
  orderFeedback.scrollIntoView({ behavior: "smooth", block: "center" });
  playOnce(orderFeedback, correctCount === total ? "anim-bounce" : "anim-shake");

  checkButton.classList.add("is-hidden");
  nextButton.classList.remove("is-hidden");
  nextButton.textContent = "次へ";
  backButton.disabled = false;
  backButton.textContent = "選び直す";
}

function showOrderComplete(stage) {
  const { label, desc } = getNextStageInfo();

  questionPanel.classList.add("is-hidden");
  orderPanel.classList.add("is-hidden");
  reactionCard.classList.add("is-hidden");
  checkButton.classList.add("is-hidden");
  nextButton.classList.add("is-hidden");
  backButton.disabled = false;
  completeCard.classList.remove("is-hidden");
  completeTitle.textContent = `ステージクリア：${stage.title}`;
  completeText.textContent = "並べて覚えたらクリアです。";
  rookieMemoLabel.textContent = "今日の新人メモ";
  rookieMemo.textContent = stage.memo;
  nextStageLabel.textContent = "次に見るステージ";
  nextStageText.textContent = desc;
  nextStageButton.textContent = label;
  completeCard.scrollIntoView({ behavior: "smooth", block: "center" });
  playOnce(completeCard, "anim-sparkle");
}

window.addEventListener("resize", () => {
  const stage = stages[currentStageIndex];
  if (stage && stage.type === "match") {
    drawMatchLines();
  }
});

checkButton.addEventListener("click", checkAnswer);
nextButton.addEventListener("click", goNext);
backButton.addEventListener("click", goBack);
nextStageButton.addEventListener("click", goNextStage);
stageListButton.addEventListener("click", scrollToStageList);
restartStageButton.addEventListener("click", restartStage);

renderApp();
