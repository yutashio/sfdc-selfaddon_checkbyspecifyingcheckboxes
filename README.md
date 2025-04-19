# **テーブル内のチェックボックスを指定してチェックのつけ外しを行うスクリプト**
Salesforceの項目レベルセキュリティのチェックのつけ外しが面倒な上、間違えられないので、このスクリプトを作成しました💁‍♂️  

下記項目レベルセキュリティ画面で使用できます。  
　・各項目の項目レベルセキュリティ設定画面  
　・各プロファイルの項目レベルセキュリティ設定画面  
※項目レベルセキュリティ設定画面以外でも、テーブルかつ列見出し・行見出しがある箇所であればチェックのつけ外しできます。
***
## 【使い方】  

## ➀ テーブル内で右クリックしメニュー画面から「検証」を選択してください。
![項目レベルセキュリティ](/READMEimages/contact_Field-LevelSecurity00.png)
![項目レベルセキュリティ](/READMEimages/contact_Field-LevelSecurity01.png)

## ➁ 検証(Developer Tools)を表示させ「Console」パネルを選択してくさい。
![項目レベルセキュリティ](/READMEimages/contact_Field-LevelSecurity02.png)

## ➂ 値の変更を行ってください。
![項目レベルセキュリティ](/READMEimages/contact_Field-LevelSecurity03.png)
1. 変数名：lineName
    1. チェックのつけ外しを行いたい**列見出し**を記載してください。
    1. 例）取引先責任者 項目レベルセキュリティ![項目レベルセキュリティ](/READMEimages/contact_Field-LevelSecurity04.png)
        1. 参照アクセス権のチェックのつけ外しを行いたい場合：
			```
			let lineName = ['参照アクセス権'];
			```
        1. 編集アクセス権のチェックのつけ外しを行いたい場合：
			```
			let lineName = ['編集アクセス権'];
			```
        1. 参照・編集アクセス権両方のチェックのつけ外しを行いたい場合：
			```
			let lineName = ['参照アクセス権','編集アクセス権'];
			```
1. 変数名：columnName
    1. チェックのつけ外しを行いたい**行見出し**を記載してください。
	1. 例）取引先責任者 項目レベルセキュリティ![項目レベルセキュリティ](/READMEimages/contact_Field-LevelSecurity04.png)
        1. 「Languages」「メール」「リードソース」項目のチェックのつけ外しを行いたい場合：
			```
			let columnName = ['Languages','メール','リードソース'];
			```
        1. 全項目のチェックのつけ外しを行いたい場合：
			```
			let columnName = [];
			```
			※空にしてください。
1. 変数名：checkboxStatus
     1. チェックのつけ外しを設定してください。
        1. チェックをつける場合：
			```
			let checkboxStatus = true;
			```
        1. チェックを外す場合：
			```
			let checkboxStatus = false;
			```
## ➃スクリプトの編集ができたらConsoleにスクリプトを貼り付けてEnterを押してください。
![項目レベルセキュリティ](/READMEimages/contact_Field-LevelSecurity05.png)
