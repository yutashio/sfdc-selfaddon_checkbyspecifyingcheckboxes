# **テーブル内チェックボックスを指定してチェックのつけ外しを行うスクリプト**
Salesforceの項目レベルセキュリティの設定が間違えられないのに面倒なので、このスクリプトを作成しました。  
※項目レベルセキュリティ設定の画面だけではなく、テーブルかつヘッダーがあれば使用できます。
***
## 【使い方】  
 ➀テーブル内で右クリックしメニュー画面から「検証」を選択してください。
![項目レベルセキュリティ](/READMEimages/contact_Field-LevelSecurity00.png)
![項目レベルセキュリティ](/READMEimages/contact_Field-LevelSecurity01.png)

➁検証(Developer Tools)を表示させ「Console」パネルを選択してくさい。
![項目レベルセキュリティ](/READMEimages/contact_Field-LevelSecurity02.png)

➂値の変更を行ってください。
![項目レベルセキュリティ](/READMEimages/contact_Field-LevelSecurity03.png)
1. 変数名：lineName
    1. チェックのつけ外しを行いたい**列のヘッダー名**を記載してください。
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
    1. チェックのつけ外しを行いたい**行名**を記載してください。
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