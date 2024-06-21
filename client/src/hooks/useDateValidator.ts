export function isValidDate(str: string) {
  // Регулярное выражение для формата "дд.мм.гггг"
  const regex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
  const match = str.match(regex);

  if (!match) {
    return false;
  }

  // Извлекаем день, месяц и год из строки
  const day = parseInt(match[1], 10);
  const month = parseInt(match[2], 10);
  const year = parseInt(match[3], 10);

  // Проверяем корректность даты
  const date = new Date(year, month - 1, day);

  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}
