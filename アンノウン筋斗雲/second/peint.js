let count = 0;
let R = 1;
let lastClickTime = 0; // 最後にクリックした時間を保存
let clickInterval = 50; // クリック間隔（ミリ秒）

let C = document.getElementById("C");
const T = document.getElementById("T");
const zokaR = document.getElementById("zokaR");

C.addEventListener("click", function() {
    let currentTime = new Date().getTime(); // 現在の時間を取得（ミリ秒）

    // 最後のクリックから1秒以上経過していれば、クリックを反応させる
    if (currentTime - lastClickTime >= clickInterval) {
        count += R;
        T.textContent = count + " pt";
        lastClickTime = currentTime; // 最後にクリックした時間を更新

        if (count >= 100) {
            zokaR.disabled = false;
        }
    }
});

zokaR.addEventListener("click", function() {
    if (count > 100) { // 100未満ではボタンを押せないようにする
        count -= 100;
        R += 1;
        T.textContent = count + " pt";

        if (count <= 100) {
            zokaR.disabled = true;
        }
    }
});
