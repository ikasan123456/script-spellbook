const words = ["さくらんぼ", "パソコン", "プログラミング", "タイピング", "ゲーム", "JavaScript", "ウェブサイト", "HTML", "CSS", "アルゴリズム", "扇風機", "お風呂沸かして", "わかったで"];
let currentWord = '';
let score = 0;

// ランダムに単語を選ぶ関数
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

// ゲーム開始時の設定
function startGame() {
    currentWord = getRandomWord();
    document.getElementById("word").textContent = currentWord;
    document.getElementById("inputField").value = '';
    document.getElementById("inputField").focus();
    document.getElementById("message").textContent = '';
}

// 入力された内容が正しいかどうかを確認
function checkInput() {
    const input = document.getElementById("inputField").value;

    // 正しい入力をした場合
    if (input === currentWord) {
        score++;
        document.getElementById("score").textContent = "スコア: " + score;
        document.getElementById("message").textContent = "正解！次の単語を入力してください！";
        startGame();  // 次の単語を表示するためにリセット
    }
    // 入力が間違っている場合
    else if (currentWord.startsWith(input) === false) {
        // 間違いがあれば入力フィールドをリセット
        document.getElementById("inputField").value = '';
        document.getElementById("message").textContent = "間違い！最初からやり直してください。";
    }
}

// 判定ボタンを押したときの処理
document.getElementById("judgeButton").addEventListener("click", checkInput);

// エンターキーで判定ボタンを押したことにする処理
document.getElementById("inputField").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();  // Enterキーのデフォルト動作を防ぐ
        checkInput();  // 判定ボタンが押されたときと同じ処理を実行
    }
});

// ゲーム開始
startGame();
