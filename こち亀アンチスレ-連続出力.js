// 1. HTMLの要素を取得（結果を追加する場所）
const outputLogElement = document.getElementById("outputLog");

// 2. 元のテキストと置換後の文字を定義
const originalText = "こちら葛飾区亀有公園前派出所";
const replacementChar = "糞";
const textLength = originalText.length;

// 3. 現在何文字目まで置換したかを保存する変数
let replacedCount = 0;

// 4. タイマー処理を開始
const intervalId = setInterval(() => {
    
    // 置換した文字数を1増やす
    replacedCount++;

    // 新しい文字列を組み立てる
    const newText = replacementChar.repeat(replacedCount) + 
                  originalText.substring(replacedCount);
    
    // 5. 新しい行（<p>タグ）を作成する
    const newLine = document.createElement("p");
    
    // 6. 作成した<p>タグの中に、新しい文字列を入れる
    newLine.textContent = newText;

    // 7. <div id="outputLog"> の中に、新しい<p>タグを追加する
    outputLogElement.appendChild(newLine);

    // 8. すべての文字を置換し終わったら、タイマーを停止する
    if (replacedCount >= textLength) {
        clearInterval(intervalId);
    }

}, 500);