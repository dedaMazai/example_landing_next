#!/usr/bin/env node

/**
 * Скрипт для генерации PWA иконок из favicon.svg
 * Требует установки sharp: npm install --save-dev sharp
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [192, 512];
const inputSvg = path.join(__dirname, '../public/favicon.svg');
const outputDir = path.join(__dirname, '../public/icons');

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

    console.log('🎉 Все PWA иконки успешно созданы!');
    console.log('📝 Не забудьте обновить manifest.json если нужно');

  } catch (error) {
    console.error('❌ Ошибка при генерации иконок:', error.message);
    console.log('💡 Убедитесь что установлен sharp: npm install --save-dev sharp');
    process.exit(1);
  }
}

generateIcons();
