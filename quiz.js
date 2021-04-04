// クイズの問題/選択肢/解答を持っているオブジェクト
const quiz = [
    {
        question: 'ゲーム市場で最も売れたゲーム機は次のうちどれ？',
        answer: [
            'スーパーファミコン',
            'プレステ2',
            'switch',
            'DS'
        ],
        correct: 'DS'
    },
    {
        question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
        answer: [
            'MOTHER2',
            'スーパーマリオブラザーズ3',
            'スーパードンキーコング',
            '星のカービィ'
        ],
        correct: 'MOTHER2'
    },
    {
        question: 'FFⅣの主人公の名前は？',
        answer: [
            'フリオニール',
            'クラウド',
            'ティーダ',
            'セシル'
        ],
        correct: 'セシル'
    }
];

// quizオブジェクトの情報設定
const quizLength = quiz.length;
let quizIndex = 0;

// 正解数
let score = 0;

// ボタンタグの要素のオブジェクトを定数で定義する。
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;

    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解');
        score += 1;
    }
    else {
        window.alert('不正解');
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        // 問題がまだある。
        setupQuiz();
    }
    else {
        // 問題がもうない。
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です。');
        quizIndex = 0;
        score = 0;
        setupQuiz();
    }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
