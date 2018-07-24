# angular-sample
## 事前準備
- Node.jsのインストール
    - https://nodejs.org/ja/download/ よりダウンロード（今回は「Windows Binary (.zip)」をダウンロード）
    - 圧縮ファイルを解凍
    - 解凍フォルダを環境変数のPATHに追加
- Angular CLIのインストール
    - ターミナルで「npm install -g @angular/cli」と入力

## サーバ起動方法
- ng serve --open

## コンポーネント追加
- ng generate component [コンポーネント名]

## AppRoutingModule追加
- ng generate module app-routing --flat --module=app