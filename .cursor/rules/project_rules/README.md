# 📚 Документация правил проекта

> Полное руководство по разработке современных лендингов на Next.js 15

## 📋 Структура документации

### 🚀 [main.mdc](./main.mdc) - Главный файл (НАЧНИТЕ ЗДЕСЬ)
**Для кого**: Все разработчики  
**Когда читать**: Перед началом работы над проектом

Содержит:
- 🎯 Назначение проекта и философия
- 📁 Структура лендинга (widgets, shared, views)
- 🏗️ Архитектурные решения
- 📋 Быстрый чек-лист для создания нового лендинга
- 🌐 Настройка i18n
- 📊 Чек-лист перед запуском

---

### 📋 [components.mdc](./components.mdc) - Паттерны компонентов
**Для кого**: Frontend разработчики  
**Когда читать**: При создании новых секций или компонентов

Содержит:
- 🏗️ Структура Widget компонента (секция лендинга)
- 🧩 Готовые UI компоненты (Button, Card, Section, Container, Typography)
- 🎬 Паттерны анимаций Framer Motion
- 📱 Работа с изображениями Next.js
- 📋 Формы обратной связи
- 🪝 Кастомные хуки
- ✅ Чек-лист качества компонента

**Примеры использования**:
- Как создать новую секцию лендинга?
- Как правильно использовать Button?
- Какие паттерны анимаций использовать?
- Как оптимизировать изображения?

---

### 🎨 [styling.mdc](./styling.mdc) - Правила стилизации
**Для кого**: Frontend разработчики, дизайнеры  
**Когда читать**: При работе со стилями

Содержит:
- 🎨 Работа с CSS Modules
- 🏷️ Конвенции именования классов
- 📐 Дизайн-система (цвета, размеры, типографика)
- 📱 Responsive дизайн (breakpoints, mobile-first)
- 🎭 Визуальные эффекты (тени, переходы, скругления)
- 📏 Layout паттерны (Flexbox, Grid)
- 🔧 Утилита classNames

**Примеры использования**:
- Какие цвета использовать?
- Как правильно назвать CSS классы?
- Какие breakpoints использовать для адаптива?
- Как применять spacing систему (8px grid)?

---

### 📝 [typescript.mdc](./typescript.mdc) - Типизация
**Для кого**: TypeScript разработчики  
**Когда читать**: При работе с типами и интерфейсами

Содержит:
- ⚙️ Типизация компонентов (Props, FC)
- 🎨 Type aliases для вариантов компонентов
- 🌐 Типизация i18n (next-intl)
- 📋 Типизация форм (FormData, Errors)
- 🎬 Типизация Framer Motion (Variants)
- 🖼️ Типизация изображений (StaticImageData)
- 🎯 Utility Types (Partial, Pick, Omit, Record)
- 🔄 Типизация хуков

**Примеры использования**:
- Как типизировать пропсы компонента?
- Как создать type alias для вариантов?
- Как типизировать форму?
- Какие utility types использовать?

---

### ⚡ [performance.mdc](./performance.mdc) - Производительность
**Для кого**: Все разработчики  
**Когда читать**: Перед оптимизацией и запуском в production

Содержит:
- 🎯 Core Web Vitals метрики и целевые показатели
- 🚀 Оптимизация Next.js (code splitting, prefetching)
- 🎨 Оптимизация изображений (priority, lazy loading, WebP)
- 🎬 Оптимизация анимаций (GPU acceleration)
- 🔤 Оптимизация шрифтов (preload, font-display)
- 📦 Bundle анализ и tree-shaking
- 📊 Мониторинг (Web Vitals, Lighthouse)
- ✅ Чек-лист производительности

**Примеры использования**:
- Как достичь Lighthouse Score > 90?
- Какие изображения загружать с priority?
- Как оптимизировать анимации?
- Как уменьшить размер бандла?

---

## 🎯 Быстрая навигация по задачам

### ❓ Я хочу создать новый лендинг
1. Прочитайте [main.mdc](./main.mdc) - общая структура и чек-лист
2. Изучите [components.mdc](./components.mdc) - как создавать секции
3. Просмотрите [styling.mdc](./styling.mdc) - дизайн-система

### ❓ Я создаю новую секцию (Widget)
1. [components.mdc](./components.mdc) → "Структура Widget компонента"
2. [styling.mdc](./styling.mdc) → "Именование классов"
3. [typescript.mdc](./typescript.mdc) → "Типизация компонентов"

### ❓ Я работаю с формой обратной связи
1. [components.mdc](./components.mdc) → "Формы обратной связи"
2. [typescript.mdc](./typescript.mdc) → "Типизация форм"

### ❓ Я добавляю анимации
1. [components.mdc](./components.mdc) → "Анимации Framer Motion"
2. [performance.mdc](./performance.mdc) → "Оптимизация анимаций"

### ❓ Я оптимизирую производительность
1. [performance.mdc](./performance.mdc) → все разделы
2. Используйте чек-лист из [main.mdc](./main.mdc)

### ❓ Я работаю со стилями
1. [styling.mdc](./styling.mdc) → вся документация
2. [main.mdc](./main.mdc) → "Дизайн-система"

---

## 🔍 Индекс ключевых тем

### 📦 Компоненты
- **Button**: [components.mdc](./components.mdc#button)
- **Card**: [components.mdc](./components.mdc#card)
- **Section**: [components.mdc](./components.mdc#section)
- **Container**: [components.mdc](./components.mdc#container)
- **Typography**: [components.mdc](./components.mdc#typography)
- **Stack**: [components.mdc](./components.mdc#stack)

### 🎨 Стилизация
- **CSS Modules**: [styling.mdc](./styling.mdc#css-modules)
- **Цвета**: [styling.mdc](./styling.mdc#дизайн-система)
- **Отступы (8px Grid)**: [styling.mdc](./styling.mdc#размеры-и-отступы)
- **Breakpoints**: [styling.mdc](./styling.mdc#breakpoints)
- **classNames утилита**: [styling.mdc](./styling.mdc#использование-classnames-утилиты)

### 🌐 i18n
- **Настройка**: [main.mdc](./main.mdc#интернационализация)
- **Использование**: [components.mdc](./components.mdc#структура-компонента-widget)
- **Типизация**: [typescript.mdc](./typescript.mdc#типизация-i18n)

### 🎬 Анимации
- **Базовые паттерны**: [components.mdc](./components.mdc#анимации-framer-motion)
- **Оптимизация**: [performance.mdc](./performance.mdc#оптимизация-анимаций)
- **Типизация**: [typescript.mdc](./typescript.mdc#типизация-framer-motion)

### 🖼️ Изображения
- **Next.js Image**: [components.mdc](./components.mdc#изображения-nextjs)
- **Оптимизация**: [performance.mdc](./performance.mdc#оптимизация-изображений)
- **Типизация**: [typescript.mdc](./typescript.mdc#типизация-изображений)

### 📋 Формы
- **Паттерны**: [components.mdc](./components.mdc#формы-обратной-связи)
- **Типизация**: [typescript.mdc](./typescript.mdc#типизация-форм)

### ⚡ Производительность
- **Метрики**: [performance.mdc](./performance.mdc#ключевые-метрики)
- **Изображения**: [performance.mdc](./performance.mdc#оптимизация-изображений)
- **Анимации**: [performance.mdc](./performance.mdc#оптимизация-анимаций)
- **Bundle**: [performance.mdc](./performance.mdc#оптимизация-бандла)
- **Чек-лист**: [performance.mdc](./performance.mdc#чек-лист-производительности)

---

## 📚 Порядок изучения для новых разработчиков

### 🥇 День 1: Основы
1. ✅ [main.mdc](./main.mdc) - полностью
2. ✅ [components.mdc](./components.mdc) - "Структура Widget" и "UI компоненты"
3. ✅ [styling.mdc](./styling.mdc) - "Дизайн-система" и "CSS Modules"

### 🥈 День 2: Углубление
4. ✅ [components.mdc](./components.mdc) - "Анимации" и "Изображения"
5. ✅ [typescript.mdc](./typescript.mdc) - "Типизация компонентов"
6. ✅ [styling.mdc](./styling.mdc) - "Responsive дизайн"

### 🥉 День 3: Продвинутое
7. ✅ [performance.mdc](./performance.mdc) - все разделы
8. ✅ [typescript.mdc](./typescript.mdc) - "Utility Types" и продвинутые темы
9. ✅ Создание тестового виджета по всем правилам

---

## 🛠️ Инструменты разработки

### 📦 Основной стек
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5
- **Styling**: SCSS Modules + Tailwind
- **Animation**: Framer Motion
- **i18n**: next-intl
- **Images**: Next.js Image (автооптимизация)

### 🔧 Утилиты проекта
- `classNames` - условная стилизация ([styling.mdc](./styling.mdc))
- `useTranslations` - переводы ([main.mdc](./main.mdc))
- `useInView` - отслеживание видимости ([components.mdc](./components.mdc))

---

## ✅ Чек-листы

### 📋 Создание нового компонента
- [ ] TypeScript интерфейс для пропсов ([typescript.mdc](./typescript.mdc))
- [ ] JSDoc комментарий ([components.mdc](./components.mdc))
- [ ] CSS Module с переменными ([styling.mdc](./styling.mdc))
- [ ] i18n для всех текстов ([main.mdc](./main.mdc))
- [ ] Barrel export через index.ts ([components.mdc](./components.mdc))

### 🚀 Перед запуском лендинга
- [ ] Lighthouse Score > 90 ([performance.mdc](./performance.mdc))
- [ ] Все тексты переведены ([main.mdc](./main.mdc))
- [ ] Изображения оптимизированы ([performance.mdc](./performance.mdc))
- [ ] Формы работают ([components.mdc](./components.mdc))
- [ ] Responsive на всех устройствах ([styling.mdc](./styling.mdc))

---

## 🆘 Помощь и вопросы

### ❓ Не могу найти ответ?
1. Используйте поиск (Ctrl+F) по ключевым словам
2. Проверьте "Индекс ключевых тем" выше
3. Посмотрите примеры кода в проекте

### 🐛 Нашли ошибку в документации?
Сообщите команде или создайте issue.

### 💡 Есть предложение по улучшению?
Создайте PR с изменениями в документации.

---

## 📊 Статистика документации

- **Всего файлов**: 5
- **Общий объем**: ~800 строк документации
- **Примеров кода**: 100+
- **Покрытие тем**: Компоненты, Стили, TypeScript, Производительность, Архитектура

---

## 🎯 Цели документации

1. ✅ **Ускорить onboarding** новых разработчиков
2. ✅ **Стандартизировать** подход к разработке лендингов
3. ✅ **Улучшить качество** кода и производительность
4. ✅ **Облегчить масштабирование** проекта
5. ✅ **Сохранить знания** команды в одном месте

---

**Последнее обновление**: Октябрь 2025  
**Версия**: 2.0 (оптимизировано для лендингов)

