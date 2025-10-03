# 🚀 Быстрый старт после обновления дизайна

## ✅ Что уже сделано

Все основные shared компоненты и стили обновлены в соответствии с дизайном из Figma:

- ✅ Шрифт изменен на Open Sans (400, 600, 700)
- ✅ Цветовая схема обновлена (#FAFAFA текст на #000000 фоне)
- ✅ Типографика соответствует Figma (H1: 90px, H2: 62px и т.д.)
- ✅ Кнопки стилизованы согласно дизайну
- ✅ Карточки с backdrop-filter и улучшенными стилями
- ✅ Hero и Lifecycle секции обновлены

## 📸 Следующий шаг: Добавление изображений

### 🚀 Способ 1: Автоматическая загрузка (РЕКОМЕНДУЕТСЯ)

**Я создал скрипт, который автоматически загрузит все изображения из Figma!**

1. **Получите Figma Personal Access Token:**
   - Откройте: https://www.figma.com/developers/api#access-tokens
   - Нажмите "Get personal access token"
   - Скопируйте токен

2. **Установите переменную окружения:**
   ```bash
   export FIGMA_TOKEN="ваш_токен_здесь"
   ```

3. **Запустите скрипт загрузки:**
   ```bash
   node scripts/download-figma-images.js
   ```

4. **Готово!** Все изображения автоматически загружены в правильные директории.

### 🖱️ Способ 2: Ручная загрузка

Если автоматический способ не работает, можно загрузить вручную:

1. **Откройте Figma дизайн:**
   ```
   https://www.figma.com/design/iDxDBs7RbXoVggk3UJ1wtu/Pioneer-Work?node-id=3704-3259
   ```

2. **Экспортируйте следующие элементы:**

   **Главный экран (Hero):**
   - Node ID: `3621-31253`
   - Сохранить как: `public/images/mockups/hero-laptop.png`
   - Формат: PNG @2x

   **Мобильное приложение:**
   - Node ID: `3621-31406`
   - Сохранить как: `public/images/mockups/mobile-app.png`
   - Формат: PNG @2x

   **Экосистема:**
   - Node ID: `3621-31537`
   - Сохранить как: `public/images/mockups/ecosystem-laptop.png`
   - Формат: PNG @2x

   **Управление:**
   - Node ID: `3737-29366`
   - Сохранить как: `public/images/interfaces/management-screen.png`
   - Формат: PNG @2x

   **Логотипы партнеров:**
   - Pioneer: Node ID `3621-31636` → `public/images/partners/pioneer-logo.svg`
   - Mered: Node ID `3621-31640` → `public/images/partners/mered-logo.svg`
   - Формат: SVG

3. **Запустите проект:**
   ```bash
   npm run dev
   # или
   yarn dev
   ```

4. **Откройте в браузере:**
   ```
   http://localhost:3001
   ```

## 🎨 Как экспортировать из Figma (пошагово)

1. Выберите слой в Figma (используйте Node ID из списка выше)
2. В правой панели найдите секцию "Export"
3. Нажмите "+" чтобы добавить настройку экспорта
4. Выберите:
   - Для изображений: PNG, 2x
   - Для логотипов: SVG
5. Нажмите "Export [имя слоя]"
6. Сохраните в соответствующую директорию проекта

## 📁 Структура файлов

```
/Users/andrey/Documents/GitHub/pdp-landing/
├── public/
│   └── images/
│       ├── mockups/          ← Макеты устройств
│       ├── interfaces/       ← Скриншоты интерфейсов
│       ├── backgrounds/      ← Фоновые изображения
│       └── partners/         ← Логотипы партнеров
├── DESIGN_UPDATES.md         ← Полный список изменений
├── IMAGES_GUIDE.md           ← Подробное руководство по изображениям
└── QUICK_START.md            ← Этот файл
```

## 🔧 Опциональная оптимизация

После добавления изображений можно оптимизировать их:

```bash
# Установите sharp-cli (если нужно)
npm install -g sharp-cli

# Конвертируйте в WebP для лучшей производительности
sharp -i public/images/**/*.png -o public/images/ -f webp -q 80
```

## 📊 Проверка изменений

### Что проверить после добавления изображений:

1. **Hero секция:**
   - Макет ноутбука отображается
   - Кнопки имеют правильные цвета и hover-эффекты
   - Заголовок в uppercase, Open Sans Bold, 90px (на desktop)

2. **Lifecycle секция:**
   - Карточки имеют темный фон
   - Текст белый (#FAFAFA)
   - Hover эффект работает

3. **Responsive:**
   - Mobile (< 768px): текст центрирован, макет в 1 колонку
   - Tablet (768-1024px): адаптивные размеры
   - Desktop (> 1024px): полный дизайн

## 🎯 Ключевые изменения в коде

### 1. Шрифты
```typescript
// app/[locale]/layout.tsx
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700'],
  variable: '--font-open-sans',
});
```

### 2. Цвета
```scss
// Новые цвета
$primary-color: #FAFAFA;
$text-secondary: rgba(250, 250, 250, 0.7);
$background-color: #000000;
```

### 3. Типографика
```scss
.h1 {
  font-size: clamp(48px, 8vw, 90px);
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
}
```

## 🆘 Troubleshooting

### Проблема: Шрифт не изменился
**Решение:** Очистите кеш браузера (Cmd+Shift+R на Mac)

### Проблема: Изображения не отображаются
**Решение:** 
1. Проверьте правильность пути
2. Убедитесь, что файлы в директории `public/images/`
3. Перезапустите dev server

### Проблема: Цвета выглядят не так
**Решение:** Проверьте, что в браузере не включен темный режим или расширения, меняющие цвета

## 📞 Дополнительная помощь

- Полный список изменений: [DESIGN_UPDATES.md](./DESIGN_UPDATES.md)
- Руководство по изображениям: [IMAGES_GUIDE.md](./IMAGES_GUIDE.md)
- Figma дизайн: https://www.figma.com/design/iDxDBs7RbXoVggk3UJ1wtu/Pioneer-Work

---

**Время на выполнение:** ~15-20 минут для экспорта всех изображений

**Результат:** Полностью обновленный лендинг, соответствующий Figma дизайну

