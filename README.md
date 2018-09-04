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

## サービス追加
- ng generate service [サービス名]

## AppRoutingModule追加
- ng generate module app-routing --flat --module=app

## リストをドラッグ＆ドロップで入れ替える方法
### ui-sortableライブラリの使用（jQueryとjQuery-uiも必要）
- npm install angular-ui-sortable --save
- npm install jquery --save
- npm install jquery-ui-dist --save
- angular.jsonにCSSとJSを登録
~~~
"projects": {
    "angular-sample": {
      "root": "",
      "sourceRoot": "src",
      "projectType": "application",
      "architect": {
        "build": {
        ...
            "styles": [
              "node_modules/jquery-ui-dist/jquery-ui.min.css",
              ...
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/jquery-ui-dist/jquery-ui.min.js"
              ...
            ]
...
~~~

# VSCodeでGit操作
## VSCodeでGitクローン
- Ctrl + @で統合ターミナルを表示
- ローカルリポジトリ（ここでは「C:\git」）に移動
- クローン
　　git clone https://github.com/mamorunba/angular-sample.git
- VSCodeでプロジェクトのように扱うための操作
~~~
   （統合ターミナルで）
　　cd angular-sample
　　code .
　　　→新しいVSCodeウィンドウが開く
~~~


## VSCodeからpush（参考　https://celtislab.net/archives/20180418/git-vscode/#git-repo）
- VSCodeの左メニューの「ソース管理」を押下
- 「変更されたファイル」にUマークが付いているとバージョン管理対象外なので、右クリック-[変更のステージング]を実行
- 「変更されたファイル」にMマークが付いているとバージョン管理対象となっている。
~~~
　　バーをクリックすると変更内容が表示される。
　　右クリック-[変更のステージング]を実行し、ステージングする。
~~~
- 「ステージング済みの変更」にファイルが移動するので、メッセージ入力欄（左ツリーの上部。場所が分かりにくい）にコミットメッセージを入力してから、Ctrl + Enterを実行してコミットする。
- 「・・・」メニューから[プッシュ]メニューを実行
~~~
　　ID、パスワードが聞かれるので入力（ID：XXXX、PASS：XXXX、email：XXXXX@XXXX）
~~~
