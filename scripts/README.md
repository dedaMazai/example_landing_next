# Скрипты для работы с изображениями

## Автоматическая загрузка изображений из Figma

### Быстрый старт

1. **Получите Figma Access Token:**
   - Откройте: https://www.figma.com/developers/api#access-tokens
   - Нажмите "Get personal access token"
   - Скопируйте токен

2. **Установите переменную окружения:**
   ```bash
   export FIGMA_TOKEN="ваш_токен_здесь"
   ```

3. **Запустите скрипт:**
   ```bash
   node scripts/download-figma-images.js
   ```

### Что загружается

Скрипт автоматически загрузит следующие изображения:

- ✅ Hero Laptop Mockup → `public/images/mockups/hero-laptop.png`
- ✅ Mobile App iPhone → `public/images/mockups/mobile-app.png`
- ✅ Ecosystem MacBook → `public/images/mockups/ecosystem-laptop.png`
- ✅ Management Interface → `public/images/interfaces/management-screen.png`
- ✅ Lifecycle Background → `public/images/backgrounds/lifecycle-bg.png`

### Troubleshooting

**Проблема:** "FIGMA_TOKEN is not set"
```bash
# Решение: установите токен
export FIGMA_TOKEN="your_token_here"
```

**Проблема:** "Error: 403 Forbidden"
```bash
# Решение: проверьте, что токен правильный и имеет доступ к файлу
# Убедитесь, что вы открыли файл в Figma хотя бы один раз
```

**Проблема:** "Method not found"
```bash
# Это нормально для некоторых методов MCP
# Используйте скрипт выше вместо прямых вызовов
```

### Альтернативный способ (ручной)

Если скрипт не работает, можно загрузить изображения вручную:

1. Откройте Figma: https://www.figma.com/design/iDxDBs7RbXoVggk3UJ1wtu/Pioneer-Work?node-id=3704-3259
2. Выберите нужный слой (используйте Node ID из списка)
3. В правой панели → Export → PNG @2x
4. Сохраните в соответствующую директорию

### Оптимизация после загрузки

```bash
# Установите sharp-cli для оптимизации
npm install -g sharp-cli

# Конвертируйте в WebP
sharp -i public/images/**/*.png -o public/images/ -f webp -q 80

# Или оптимизируйте PNG
sharp -i public/images/**/*.png -o public/images/ -f png -q 85
```

