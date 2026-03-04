const fs = require('fs');
const path = require('path');

function buildHtml() {
  const srcDir = path.join(__dirname, 'src');
  // srcフォルダ内のファイルを名前順（00_, 01_, 02_...）に取得
  const files = fs.readdirSync(srcDir).sort(); 

  let finalHtml = '';
  files.forEach(file => {
    if (file.endsWith('.html')) {
      finalHtml += fs.readFileSync(path.join(srcDir, file), 'utf-8') + '\n\n';
    }
  });

  // 結合した内容を index.html として出力
  fs.writeFileSync(path.join(__dirname, 'index.html'), finalHtml);
  const time = new Date().toLocaleTimeString();
  console.log(`[${time}] ✅ index.html を更新しました`);
}

// 初回実行
buildHtml();

// --watch オプションがついていればファイルの変更を監視する
if (process.argv.includes('--watch')) {
  console.log('👀 srcフォルダの監視を開始しました。ファイルを保存すると自動で結合されます。');
  fs.watch(path.join(__dirname, 'src'), (eventType, filename) => {
    if (filename && filename.endsWith('.html')) {
      buildHtml();
    }
  });
}