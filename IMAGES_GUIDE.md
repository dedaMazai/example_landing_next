# Руководство по добавлению изображений из Figma

## Необходимые изображения для загрузки

### 1. Hero Section (Главный экран)
**Путь:** `public/images/mockups/hero-laptop.png`
- **Figma Node ID:** 3621-31253
- **Описание:** Макет ноутбука с интерфейсом платформы (сетка объектов недвижимости)
- **Размер:** ~1738x1367px
- Используется в: `/src/widgets/hero/hero.tsx`

### 2. Mobile App Section
**Путь:** `public/images/mockups/mobile-app.png`
- **Figma Node ID:** 3621-31406
- **Описание:** Макет iPhone с мобильным приложением
- **Размер:** ~360x743px
- Используется в: `/src/widgets/mobile-app/mobile-app.tsx`

### 3. Ecosystem Section
**Путь:** `public/images/mockups/ecosystem-laptop.png`
- **Figma Node ID:** 3621-31537
- **Описание:** Макет MacBook Pro с интерфейсом объектов
- **Размер:** ~913x590px
- Используется в: `/src/widgets/ecosystem/ecosystem.tsx`

### 4. Management Section
**Путь:** `public/images/interfaces/management-screen.png`
- **Figma Node ID:** 3737-29366
- **Описание:** Скриншот интерфейса управления замечаниями
- **Размер:** ~1147x650px
- Используется в: `/src/widgets/management/management.tsx`

### 5. Background Images
**Lifecycle Section:**
- **Путь:** `public/images/backgrounds/lifecycle-bg.png`
- **Figma Node ID:** 3621-31255
- **Описание:** Фоновое изображение для секции жизненного цикла
- Используется в: `/src/widgets/lifecycle/lifecycle.tsx`

### 6. Partner Logos
**Путь:** `public/images/partners/`
- **Pioneer Logo:** `pioneer-logo.svg`
- **Mered Logo:** `mered-logo.svg`
- **Figma Node IDs:** 3621-31636 и 3621-31640
- Используется в: `/src/widgets/partners/partners.tsx`

## Как экспортировать изображения из Figma

1. Откройте дизайн в Figma: https://www.figma.com/design/iDxDBs7RbXoVggk3UJ1wtu/Pioneer-Work?node-id=3704-3259
2. Выберите нужный слой/фрейм
3. В правой панели найдите секцию "Export"
4. Выберите формат:
   - **PNG** для фотографий и макетов (2x или 3x для retina)
   - **SVG** для логотипов и иконок
5. Нажмите "Export"
6. Сохраните файлы в соответствующие директории проекта

## Структура директорий

```
public/
└── images/
    ├── mockups/          # Макеты устройств
    │   ├── hero-laptop.png
    │   ├── mobile-app.png
    │   └── ecosystem-laptop.png
    ├── interfaces/       # Скриншоты интерфейсов
    │   └── management-screen.png
    ├── backgrounds/      # Фоновые изображения
    │   └── lifecycle-bg.png
    └── partners/         # Логотипы партнеров
        ├── pioneer-logo.svg
        └── mered-logo.svg
```

## Оптимизация изображений

После добавления изображений рекомендуется их оптимизировать:

```bash
# Установите оптимизатор изображений
npm install -g sharp-cli

# Оптимизируйте PNG
sharp -i public/images/**/*.png -o public/images/ -f png -q 80

# Конвертируйте в WebP для лучшей производительности
sharp -i public/images/**/*.png -o public/images/ -f webp -q 80
```

## Next.js Image Component

В коде используйте компонент `next/image` для автоматической оптимизации:

```tsx
import Image from 'next/image';

<Image
  src="/images/mockups/hero-laptop.png"
  alt="Pioneer Digital Platform"
  width={1738}
  height={1367}
  priority
  quality={90}
/>
```

