#!/usr/bin/env node

/**
 * Скрипт для генерации PWA иконок из favicon.svg
 * Требует установки sharp: npm install --save-dev sharp
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [192, 512];
const additionalSizes = [32, 180]; // 32 для favicon.ico, 180 для apple-touch-icon
const inputSvg = path.join(__dirname, '../public/favicon.svg');
const outputDir = path.join(__dirname, '../public/icons');
const publicDir = path.join(__dirname, '../public');

async function generateIcons() {
  try {
    // Проверяем существование входного файла
    if (!fs.existsSync(inputSvg)) {
      console.error('❌ favicon.svg не найден в public/');
      process.exit(1);
    }

    // Создаем папку для иконок если её нет
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log('🚀 Генерация PWA иконок...');

    // Генерируем обычные иконки
    for (const size of sizes) {
      const outputPath = path.join(outputDir, `icon-${size}x${size}.png`);
      
      await sharp(inputSvg)
        .resize(size, size)
        .png({ quality: 100 })
        .toFile(outputPath);
      
      console.log(`✅ Создана иконка: icon-${size}x${size}.png`);
    }

    // Генерируем maskable иконки (с padding для Android)
    for (const size of sizes) {
      const outputPath = path.join(outputDir, `icon-maskable-${size}x${size}.png`);
      const paddingSize = Math.round(size * 0.1); // 10% padding
      
      await sharp(inputSvg)
        .resize(size - paddingSize * 2, size - paddingSize * 2)
        .extend({
          top: paddingSize,
          bottom: paddingSize,
          left: paddingSize,
          right: paddingSize,
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png({ quality: 100 })
        .toFile(outputPath);
      
      console.log(`✅ Создана maskable иконка: icon-maskable-${size}x${size}.png`);
    }

    // Генерируем favicon.ico (32x32)
    const faviconPath = path.join(publicDir, 'favicon.ico');
    await sharp(inputSvg)
      .resize(32, 32)
      .png()
      .toFile(faviconPath);
    console.log(`✅ Создан favicon.ico`);

    // Генерируем apple-touch-icon.png (180x180)
    const appleTouchIconPath = path.join(outputDir, 'apple-touch-icon.png');
    await sharp(inputSvg)
      .resize(180, 180)
      .png({ quality: 100 })
      .toFile(appleTouchIconPath);
    console.log(`✅ Создан apple-touch-icon.png`);

    console.log('🎉 Все PWA иконки успешно созданы!');
    console.log('📝 Не забудьте обновить manifest.json если нужно');

  } catch (error) {
    console.error('❌ Ошибка при генерации иконок:', error.message);
    console.log('💡 Убедитесь что установлен sharp: npm install --save-dev sharp');
    process.exit(1);
  }
}

generateIcons();
