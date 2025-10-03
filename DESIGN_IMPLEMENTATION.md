# 🎨 Реализация дизайна из Figma - Инструкция

## ✅ Что уже готово

Все компоненты и стили обновлены в соответствии с дизайном Figma:

- ✅ **Шрифты:** Open Sans (400, 600, 700)
- ✅ **Цвета:** #FAFAFA на #000000
- ✅ **Типографика:** H1: 90px, H2: 62px, и т.д.
- ✅ **Кнопки:** Обновлены стили, hover-эффекты
- ✅ **Карточки:** Backdrop-filter, новые цвета
- ✅ **Виджеты:** Hero, Lifecycle обновлены

## 🚀 Быстрый старт: Загрузка изображений

### Вариант А: Автоматическая загрузка (5 минут)

```bash
# 1. Получите токен на: https://www.figma.com/developers/api#access-tokens
# 2. Установите токен:
export FIGMA_TOKEN="ваш_figma_токен"

# 3. Запустите скрипт:
node scripts/download-figma-images.js

# 4. Запустите проект:
npm run dev
```

**Скрипт автоматически загрузит:**
- Hero laptop mockup
- Mobile app iPhone
- Ecosystem MacBook
- Management interface
- Lifecycle background

### Вариант Б: Ручная загрузка (15 минут)

Следуйте инструкциям в файле `IMAGES_GUIDE.md`

## 📁 Структура проекта

```
pdp-landing/
├── scripts/
│   ├── download-figma-images.js   ← Скрипт автозагрузки
│   └── README.md                  ← Инструкции по скриптам
├── public/
│   └── images/
│       ├── mockups/               ← Макеты устройств
│       ├── interfaces/            ← Скриншоты интерфейсов
│       ├── backgrounds/           ← Фоновые изображения
│       └── partners/              ← Логотипы партнеров
├── QUICK_START.md                 ← Быстрый старт
├── IMAGES_GUIDE.md                ← Подробное руководство
└── DESIGN_UPDATES.md              ← Список всех изменений
```

## 🎯 Основные изменения

### Шрифты
```typescript
// Было: Inter
import { Inter } from 'next/font/google';

// Стало: Open Sans
import { Open_Sans } from 'next/font/google';
```

### Цвета
```scss
// Было
$primary-color: #EFEDE7;

// Стало
$primary-color: #FAFAFA;
$background-color: #000000;
```

### Типографика
```scss
// H1 теперь соответствует Figma
.h1 {
  font-size: clamp(48px, 8vw, 90px);
  font-weight: 700;
  text-transform: uppercase;
}
```

## 📚 Документация

| Файл | Описание |
|------|----------|
| `QUICK_START.md` | Быстрый старт для разработчиков |
| `IMAGES_GUIDE.md` | Подробное руководство по изображениям |
| `DESIGN_UPDATES.md` | Технические детали всех изменений |
| `scripts/README.md` | Инструкции по использованию скриптов |

## 🔗 Полезные ссылки

- **Figma дизайн:** https://www.figma.com/design/iDxDBs7RbXoVggk3UJ1wtu/Pioneer-Work?node-id=3704-3259
- **Figma API токен:** https://www.figma.com/developers/api#access-tokens
- **Open Sans шрифт:** https://fonts.google.com/specimen/Open+Sans

## ⚡ Команды

```bash
# Разработка
npm run dev          # Запуск dev сервера на :3001

# Загрузка изображений
node scripts/download-figma-images.js

# Сборка
npm run build
npm start

# Линтинг
npm run lint
```

## 🆘 Частые проблемы

### Изображения не загружаются
```bash
# Проверьте токен:
echo $FIGMA_TOKEN

# Если пустой, установите:
export FIGMA_TOKEN="ваш_токен"
```

### Шрифт не применился
```bash
# Очистите кеш браузера:
# Mac: Cmd + Shift + R
# Windows: Ctrl + Shift + R
```

### Цвета не изменились
```bash
# Перезапустите dev сервер:
npm run dev
```

## 📊 Статус компонентов

| Компонент | Статус | Примечание |
|-----------|--------|------------|
| Typography | ✅ | Open Sans, все размеры |
| Button | ✅ | Новые стили, hover |
| Card | ✅ | Backdrop-filter |
| Hero | ✅ | Ожидает изображения |
| Lifecycle | ✅ | Ожидает изображения |
| Management | ⏳ | Ожидает изображения |
| Ecosystem | ⏳ | Ожидает изображения |
| Mobile App | ⏳ | Ожидает изображения |
| Partners | ⏳ | Ожидает логотипы |

---

**Время реализации:** ~5 минут с автоматической загрузкой изображений

**Последнее обновление:** 3 октября 2025

