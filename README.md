# Pioneer Digital Platform - Landing Page

Профессиональный лендинг для платформы по комплексной автоматизации деятельности девелоперских компаний и застройщиков.

## 🎨 Дизайн

Дизайн полностью реализован по макету из Figma:
- **Open Sans** font family
- Современная темная тема (#000000 фон)
- Адаптивная типографика
- Анимации на Framer Motion

**Figma Design:** [Pioneer-Work](https://www.figma.com/design/iDxDBs7RbXoVggk3UJ1wtu/Pioneer-Work?node-id=3704-3259)

## 🚀 Быстрый старт

### 1. Установка зависимостей

```bash
npm install
# или
yarn install
```

### 2. Загрузка изображений из Figma

**Автоматически (рекомендуется):**

```bash
# Получите токен: https://www.figma.com/developers/api#access-tokens
export FIGMA_TOKEN="ваш_figma_токен"

# Запустите скрипт загрузки
node scripts/download-figma-images.js
```

**Вручную:**

См. подробные инструкции в `IMAGES_GUIDE.md`

### 3. Запуск проекта

```bash
npm run dev
# или
yarn dev
```

Откройте [http://localhost:3001](http://localhost:3001) в браузере.

## 📁 Структура проекта

```
pdp-landing/
├── app/                          # Next.js App Router
│   └── [locale]/                 # Локализация (ru/en)
│       ├── layout.tsx            # Главный layout
│       ├── page.tsx              # Главная страница
│       └── privacy_policy/       # Страница политики
├── src/
│   ├── app/
│   │   ├── providers/            # React providers
│   │   └── styles/               # Глобальные стили
│   ├── shared/                   # Shared компоненты
│   │   ├── ui/                   # UI Kit
│   │   │   ├── button/
│   │   │   ├── Card/
│   │   │   ├── Typography/
│   │   │   └── ...
│   │   └── lib/                  # Утилиты
│   ├── widgets/                  # Виджеты страниц
│   │   ├── hero/
│   │   ├── lifecycle/
│   │   ├── management/
│   │   └── ...
│   └── page-components/          # Композиция страниц
├── public/
│   └── images/                   # Изображения из Figma
│       ├── mockups/
│       ├── interfaces/
│       ├── backgrounds/
│       └── partners/
├── i18n/                         # Интернационализация
│   └── locales/
│       ├── ru.json
│       └── en.json
└── scripts/                      # Утилитные скрипты
    └── download-figma-images.js  # Автозагрузка изображений
```

## 🛠 Технологии

- **Framework:** Next.js 15.5.4 (App Router)
- **React:** 19.2.0
- **TypeScript:** 5.9.3
- **Styling:** SCSS Modules + Tailwind CSS 4.1
- **Animation:** Framer Motion 12.23
- **i18n:** next-intl 4.3.9
- **Fonts:** Open Sans (Google Fonts)

## 🎨 Дизайн-система

### Шрифты
- **Family:** Open Sans
- **Weights:** 400 (Regular), 600 (SemiBold), 700 (Bold)

### Цвета
```scss
// Основные
$primary-color: #FAFAFA;
$background-color: #000000;
$text-secondary: rgba(250, 250, 250, 0.7);

// Акценты
$accent-color: #FBBF24;
$success-color: #10B981;
$error-color: #EF4444;
```

### Типографика
- **H1:** 90px (desktop), uppercase, bold
- **H2:** 62px, bold
- **H3:** 38px, bold
- **Body:** 16-20px, regular/medium

## 📚 Документация

| Файл | Описание |
|------|----------|
| [DESIGN_IMPLEMENTATION.md](./DESIGN_IMPLEMENTATION.md) | Главная инструкция по дизайну |
| [QUICK_START.md](./QUICK_START.md) | Быстрый старт для разработчиков |
| [IMAGES_GUIDE.md](./IMAGES_GUIDE.md) | Руководство по работе с изображениями |
| [DESIGN_UPDATES.md](./DESIGN_UPDATES.md) | Технические детали обновления дизайна |
| [scripts/README.md](./scripts/README.md) | Документация по скриптам |

## 🌐 Локализация

Проект поддерживает два языка:
- 🇷🇺 Русский (по умолчанию)
- 🇬🇧 English

Переводы находятся в `i18n/locales/`.

## 📦 Скрипты

```bash
# Разработка
npm run dev              # Запуск dev сервера на :3001

# Сборка
npm run build            # Production build
npm start                # Запуск production сервера

# Линтинг
npm run lint             # ESLint проверка

# Загрузка изображений
node scripts/download-figma-images.js
```

## 🚀 Деплой

### Vercel (рекомендуется)

```bash
# Установите Vercel CLI
npm i -g vercel

# Деплой
vercel
```

### Другие платформы

Проект совместим с любой платформой, поддерживающей Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Railway

## 📱 Адаптивность

Проект полностью адаптивен для всех устройств:
- 📱 Mobile: < 768px
- 💻 Tablet: 768px - 1024px
- 🖥️ Desktop: > 1024px

## 🔧 Разработка

### Добавление новых компонентов

Следуйте FSD (Feature-Sliced Design) архитектуре:

```typescript
// 1. Создайте компонент в src/shared/ui/
// src/shared/ui/MyComponent/MyComponent.tsx

import { FC } from 'react';
import cls from './MyComponent.module.scss';

interface MyComponentProps {
  className?: string;
}

export const MyComponent: FC<MyComponentProps> = ({ className }) => {
  return <div className={cls.MyComponent}>{/* content */}</div>;
};
```

### Стилизация

Используйте CSS Modules + SCSS:

```scss
// MyComponent.module.scss
.MyComponent {
  color: $text-primary;
  padding: $spacing-4;
  
  &:hover {
    color: $accent-color;
  }
}
```

## 🤝 Участие в разработке

1. Fork репозитория
2. Создайте feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit изменения (`git commit -m 'Add some AmazingFeature'`)
4. Push в branch (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект создан для Pioneer Digital Platform.

## 📞 Контакты

- Website: [pioneer-work.com](https://pioneer-work.com)
- Figma: [Pioneer-Work Design](https://www.figma.com/design/iDxDBs7RbXoVggk3UJ1wtu/Pioneer-Work)

---

**Обновлено:** 3 октября 2025  
**Версия:** 0.1.0

