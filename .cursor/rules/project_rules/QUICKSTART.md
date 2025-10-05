# ⚡ Быстрый старт

> 5 минут до первого виджета лендинга

## 🎯 Создание новой секции за 5 шагов

### 1️⃣ Создайте папку виджета
```bash
src/widgets/NewSection/
├── NewSection.tsx
├── NewSection.module.scss
└── index.ts
```

### 2️⃣ Создайте компонент
```typescript
// NewSection.tsx
"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Section } from '@/src/shared/ui/Section';
import { Container } from '@/src/shared/ui/Container';
import { Heading, Text } from '@/src/shared/ui/Typography';
import cls from './NewSection.module.scss';

export function NewSection() {
  const t = useTranslations('newSection');

  return (
    <Section id="new-section" background="dark" padding="lg">
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading level={2} align="center">
            {t('title')}
          </Heading>
          <Text align="center" size="lg">
            {t('description')}
          </Text>
        </motion.div>
      </Container>
    </Section>
  );
}
```

### 3️⃣ Создайте стили
```scss
// NewSection.module.scss
@import '@/src/app/styles/variables';

.NewSection {
  // Ваши стили
}
```

### 4️⃣ Создайте barrel export
```typescript
// index.ts
export { NewSection } from './NewSection';
```

### 5️⃣ Добавьте переводы
```json
// i18n/locales/ru.json
{
  "newSection": {
    "title": "Новая секция",
    "description": "Описание секции"
  }
}

// i18n/locales/en.json
{
  "newSection": {
    "title": "New Section",
    "description": "Section description"
  }
}
```

### 6️⃣ Добавьте в MainPage
```typescript
// src/views/MainPage/MainPage.tsx
import { NewSection } from '@/src/widgets/NewSection';

export default function MainPage() {
  return (
    <>
      <Hero />
      <NewSection />  {/* 👈 Ваша новая секция */}
      <Contact />
    </>
  );
}
```

---

## 🎨 Готовые UI компоненты

### Button
```typescript
<Button variant="filled" size="xl" strong>
  {t('button')}
</Button>
```

### Card
```typescript
<Card variant="elevated" padding="lg" hoverable>
  <Heading level={3}>{t('title')}</Heading>
</Card>
```

### Image
```typescript
<Image 
  src="/images/feature.png" 
  alt="Feature" 
  width={600} 
  height={400} 
/>
```

---

## 📐 Частые паттерны

### Сетка карточек
```typescript
<div className={cls.grid}>
  {features.map(feature => (
    <Card key={feature.id}>
      <Heading level={3}>{feature.title}</Heading>
      <Text>{feature.description}</Text>
    </Card>
  ))}
</div>
```

```scss
.grid {
  display: grid;
  gap: $spacing-8;
  
  @media (min-width: $breakpoint-md) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: $breakpoint-lg) {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Flex layout
```typescript
<HStack gap="24" align="center" justify="between">
  <Button>Left</Button>
  <Button>Right</Button>
</HStack>
```

---

## 🎬 Базовые анимации

```typescript
// Появление снизу
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>

// Масштабирование
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
>

// Hover эффект
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring" }}
>
```

---

## 🎨 Дизайн-система (шпаргалка)

### Цвета
```scss
$background-color: #121314;  // Темный фон
$primary-color: #FAFAFA;     // Основной текст
$accent-color: #FBBF24;      // Акцент (кнопки)
```

### Spacing (8px grid)
```scss
$spacing-4: 1rem;    // 16px
$spacing-6: 1.5rem;  // 24px
$spacing-8: 2rem;    // 32px
$spacing-12: 3rem;   // 48px
```

### Breakpoints
```scss
$breakpoint-md: 768px;   // Планшет
$breakpoint-lg: 1024px;  // Ноутбук
$breakpoint-xl: 1280px;  // Десктоп
```

---

## ✅ Чек-лист перед коммитом

- [ ] TypeScript без ошибок
- [ ] Все тексты через `t()`
- [ ] Изображения через Next.js `<Image>`
- [ ] Анимации с `viewport={{ once: true }}`
- [ ] Mobile responsive проверен
- [ ] `index.ts` barrel export создан

---

## 📚 Детальная документация

- **Все компоненты**: [components.mdc](./components.mdc)
- **Стили и дизайн**: [styling.mdc](./styling.mdc)
- **TypeScript**: [typescript.mdc](./typescript.mdc)
- **Производительность**: [performance.mdc](./performance.mdc)
- **Архитектура**: [main.mdc](./main.mdc)

---

**Готовы? Создайте свой первый виджет! 🚀**

