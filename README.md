# Portfolio Builder

テキストベース（HTML + Tailwind CSS）でレイアウトを構築し、A4サイズの美しいPDFポートフォリオを出力するためのカスタムビルド環境です。

## 🛠 必須要件 (Prerequisites)

このプロジェクトを編集・ビルドするには、以下のソフトウェアと拡張機能が必要です。

### Node.js (v18以上推奨)

Tailwind CSSのコンパイルおよびHTML結合スクリプトの実行に使用します。
公式サイトからインストールしてください。

### Visual Studio Code (VS Code)

推奨エディタです。以下の拡張機能をインストールしてください。

- Tailwind CSS IntelliSense: クラス名の自動補完
- Live Server: ローカルサーバーの起動とリアルタイムプレビュー

## 📁 ディレクトリ構成

開発時は `src` フォルダ内のファイルを編集します。ルートディレクトリの `index.html` と `output.css` は自動生成されるため、直接編集しないでください。

```
portfolio/
├── .gitignore
├── README.md
├── build.js            # HTML結合スクリプト (Node.js)
├── input.css           # Tailwind CSSのエントリーポイント
├── package.json        # 依存関係の管理ファイル
├── package-lock.json
│
├── index.html          # ⚠️ 自動生成されるファイル (直接編集しない)
├── output.css          # ⚠️ 自動生成されるファイル (直接編集しない)
│
└── src/                # ✏️ 編集するファイル群
    ├── 00_header.html    # ヘッダー、CSS読み込み、フォント設定
    ├── 01_profile.html   # 1ページ目 (プロフィールとスキル)
    ├── 02_project_1.html # 2ページ目 (プロジェクト紹介1)
    └── 99_footer.html    # フッター (閉じタグ)
```

## 🚀 開発の始め方

Gitからクローンした直後や、初めて環境を構築する際の手順です。

### 1. パッケージのインストール

VS Codeのターミナルを開き、以下のコマンドを実行して依存パッケージ（Tailwind CSSのCLIなど）をインストールします。

```bash
npm install
```

### 2. 開発用コマンドの起動 (2つのターミナルを使用)

変更をリアルタイムに画面に反映させるため、2つのターミナルを開いて以下のコマンドをそれぞれ実行したままにします。

#### ターミナル1: Tailwind CSSの監視（デザインの自動反映）

```bash
npx @tailwindcss/cli -i ./input.css -o ./output.css --watch
```

#### ターミナル2: HTMLの自動結合（ページ追加・編集の自動反映）

VS Codeのターミナルパネル右上にある「＋」ボタンを押して新しいターミナルを開き、以下を実行します。

```bash
node build.js --watch
```

### 3. プレビューの表示

VS Codeのファイルエクスプローラー上で `index.html` を右クリックし、「Open with Live Server」 を選択します。ブラウザが立ち上がり、プレビューが表示されます。

## 📝 ページの追加と編集方法

- 文字サイズやフォントの変更: [`src/00_header.html`](src/00_header.html) の `<style>` タグ内にある CSS変数（`:root`）の数値を変更します。
- 新しいプロジェクトページの追加: [`src/`](src/) フォルダ内に、連番のファイル（例: `03_project_2.html`）を新規作成します。[`build.js`](build.js) がファイル名の昇順に自動で結合し、新しいページとしてプレビューに追加されます。

## 🖨 PDFへの出力方法

プレビューが完成したら、ブラウザ（Google Chrome推奨）の印刷機能を使ってPDF化します。

- Live Serverで開いたブラウザ画面で `Ctrl + P` (Mac: `Cmd + P`) を押します。
- 以下の設定にして「保存」をクリックします。
  - 送信先: PDFに保存
  - 用紙サイズ: A4
  - ページ: すべて
  - レイアウト: 縦
  - マージン (余白): なし
  - オプション: 「背景のグラフィック」にチェックを入れる(**※必須：背景色やデザインを反映させるため**)
