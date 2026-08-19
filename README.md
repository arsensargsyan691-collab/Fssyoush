# Fssyoush

Рабочий frontend-MVP маркетплейса на React + Vite + TypeScript.

## Запуск

```bash
npm install
npm run dev
```

Откройте адрес, который покажет Vite, обычно `http://localhost:5173`.

## Production

```bash
npm run typecheck
npm run build
npm run preview
```

## Бесплатный хостинг

Рекомендуется Cloudflare Pages:
- Build command: `npm run build`
- Output directory: `dist`

Проект сейчас работает без обязательного backend: каталог, поиск, фильтры, карточки, корзина, избранное и демо-checkout работают локально через браузерное хранилище.

Для production-магазина следующим этапом можно подключить Supabase Auth/Postgres/Storage. Переменные указаны в `.env.example`.

## Важно

Демо-товары используют изображения Unsplash. Для коммерческого production-развёртывания замените их на собственные/лицензированные изображения.
