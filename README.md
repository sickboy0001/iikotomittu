# 背景

- 日々の発生したいいことを３つ記載するためのツール
- モバイルでの利用も想定
- オープン環境で利用できるようにする
- 認証周りは Supabase を利用
- リリースの容易性は Vercel
- 将来的にログイン者の管理の基本とし、サンプルの機能も付与
  - 認証周りの機能の見本（サンプル）としても利用
    - LocalGTP プロトタイプを想定

# インフラ

- NextJS
- Vercel
- Supabase
  - データベース（MySQL）
  - 認証
- GitHub

# Todo

- [x] 認証周り含んだ部分作成
  ほぼ完了？メールアドレス変更ができない件はあり。Supabase 側の設定の可能性あり。
- [x] VercelUp
- [x] GitHubUp
- [x] 既存のプロトタイプとの融合
  これできれば、個人的実用レベル！
- [ ] Supabase の設定で email 変更不可の理由確認
- [x] ファイル、フォルダ構成を AtomicDesign に近づける
  完全に合わすのは無理な前提で OK！
- [ ] 操作感を上げる。追加時の UI、今のままだと、入れにくい
- [ ] Atomic デザインへ近づく。既存の部分の流用を想定

# 参考

個人認証周り

- 不要な DB へのアクセス制御 Zustand
  https://zenn.dev/hathle/books/next-supabase-auth-book

# 考え

## フォルダ構成

src/app/が基本

```jsx
omponents\Atoms
components\Atoms\Button
・・・・
components\Atoms\TextArea
components\Atoms\Button\Button.tsx
components\Atoms\Button\ButtonBoolean.tsx
・・・
components\Organisms
components\Organisms\Todo\GuestTodoList.tsx
components\Organisms\TGT\NewThing.tsx
・・・・
components\templates
components\templates\Column.tsx
components\templates\Header.tsx
・・・・
components\views
components\views\GoodThings.tsx
```

app 以下の基本構成。page.tsx がページ

Components 以下は、分ける。機能を持つところまで機能ごとに作成

Organisms をドメイン毎に分ける？

→ 分ける方針で検討
