const { PrismaClient } = require('@prisma/client');
const path = require('path');
const fs = require('fs');

// Создаем экземпляр PrismaClient
const prisma = new PrismaClient();

async function main() {
  try {
    const assetsDir = path.join(__dirname, 'assets'); // путь к папке assets

    const files = fs.readdirSync(assetsDir); // получаем список файлов

    for (const file of files) {
      // Получаем имя файла без расширения
      const fileNameWithoutExtension = path.parse(file).name;

      await prisma.web.create({ data: { name: fileNameWithoutExtension } });
      console.log(`Added file ${file} to database`);
    }
  } catch (err) {
    console.error('Error adding files to database:', err);
  } finally {
    await prisma.$disconnect(); // отключаемся от базы данных после выполнения
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect(); // убеждаемся, что мы отключаемся от базы данных в любом случае
  });
