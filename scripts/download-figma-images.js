#!/usr/bin/env node

/**
 * Скрипт для загрузки изображений из Figma
 * 
 * Использование:
 * 1. Установите переменную окружения FIGMA_TOKEN с вашим Personal Access Token
 * 2. Запустите: node scripts/download-figma-images.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const FIGMA_FILE_KEY = 'iDxDBs7RbXoVggk3UJ1wtu';
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;

if (!FIGMA_TOKEN) {
  console.error('❌ Ошибка: Необходимо установить переменную окружения FIGMA_TOKEN');
  console.error('Получите токен на: https://www.figma.com/developers/api#access-tokens');
  console.error('Затем выполните: export FIGMA_TOKEN="ваш_токен"');
  process.exit(1);
}

// Список изображений для загрузки
const images = [
  {
    nodeId: '3621:31253',
    outputPath: 'public/images/mockups/hero-laptop.png',
    scale: 2,
    format: 'png',
    description: 'Hero Laptop Mockup'
  },
  {
    nodeId: '3621:31406',
    outputPath: 'public/images/mockups/mobile-app.png',
    scale: 2,
    format: 'png',
    description: 'Mobile App iPhone'
  },
  {
    nodeId: '3621:31537',
    outputPath: 'public/images/mockups/ecosystem-laptop.png',
    scale: 2,
    format: 'png',
    description: 'Ecosystem MacBook'
  },
  {
    nodeId: '3737:29366',
    outputPath: 'public/images/interfaces/management-screen.png',
    scale: 2,
    format: 'png',
    description: 'Management Interface Screenshot'
  },
  {
    nodeId: '3621:31255',
    outputPath: 'public/images/backgrounds/lifecycle-bg.png',
    scale: 1,
    format: 'png',
    description: 'Lifecycle Background'
  }
];

// Функция для создания директорий
function ensureDirectoryExists(filePath) {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
}

// Функция для загрузки файла
function downloadFile(url, outputPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(outputPath, () => {});
      reject(err);
    });
  });
}

// Функция для получения URL изображения из Figma
async function getFigmaImageUrl(nodeId, scale, format) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.figma.com',
      path: `/v1/images/${FIGMA_FILE_KEY}?ids=${nodeId}&scale=${scale}&format=${format}`,
      method: 'GET',
      headers: {
        'X-Figma-Token': FIGMA_TOKEN
      }
    };

    https.get(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.err) {
            reject(new Error(json.err));
            return;
          }
          const imageUrl = json.images[nodeId];
          if (!imageUrl) {
            reject(new Error(`Не удалось получить URL для node ${nodeId}`));
            return;
          }
          resolve(imageUrl);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

// Главная функция
async function main() {
  console.log('🚀 Начинаем загрузку изображений из Figma...\n');

  let successCount = 0;
  let errorCount = 0;

  for (const image of images) {
    try {
      console.log(`📥 Загрузка: ${image.description}`);
      console.log(`   Node ID: ${image.nodeId}`);
      
      // Получаем URL изображения
      const imageUrl = await getFigmaImageUrl(image.nodeId, image.scale, image.format);
      console.log(`   URL получен: ${imageUrl.substring(0, 50)}...`);
      
      // Создаем директорию если не существует
      ensureDirectoryExists(image.outputPath);
      
      // Загружаем файл
      await downloadFile(imageUrl, image.outputPath);
      console.log(`   ✅ Сохранено: ${image.outputPath}\n`);
      
      successCount++;
    } catch (error) {
      console.error(`   ❌ Ошибка: ${error.message}\n`);
      errorCount++;
    }
  }

  console.log('─────────────────────────────────────');
  console.log(`✅ Успешно загружено: ${successCount}`);
  if (errorCount > 0) {
    console.log(`❌ Ошибок: ${errorCount}`);
  }
  console.log('─────────────────────────────────────');
  
  if (successCount > 0) {
    console.log('\n🎉 Изображения загружены! Теперь вы можете запустить проект:');
    console.log('   npm run dev');
  }
}

main().catch(console.error);

