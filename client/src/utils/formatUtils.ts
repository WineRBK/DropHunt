// utils/formatUtils.ts

export const formatNumber = (number: number): string => {
  if (number >= 1_000_000_000) {
    const value = number / 1_000_000_000;
    return value % 1 === 0 ? `${value}B` : `${value.toFixed(1)}B`;
  }
  if (number >= 1_000_000) {
    const value = number / 1_000_000;
    return value % 1 === 0 ? `${value}M` : `${value.toFixed(1)}M`;
  }
  if (number >= 1_000) {
    const value = number / 1_000;
    return value % 1 === 0 ? `${value}K` : `${value.toFixed(1)}K`;
  }
  return number.toString();
};

export const formatDate = (date: string): string => {
  const regex = /^(\d{2})\.(\d{2})\.(19|20)\d{2}$/;
  const match = date.match(regex);

  if (!match) {
    return '???';
  }
  return date;
};

export const dayLeft = (dateStr: string): string => {
  const regex = /^(\d{2})\.(\d{2})\.(19|20)\d{2}$/;
  const match = dateStr.match(regex);

  if (!match) {
    return '?';
  }

  const parts = dateStr.split('.');
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Месяцы в объекте Date начинаются с 0
  const year = parseInt(parts[2], 10);
  const targetDate = new Date(year, month, day);

  const currentDate = new Date();

  const diffInMilliseconds = targetDate - currentDate;

  return Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24)).toString();
};


export const stringToDate = (dateString) => {
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Месяцы в JavaScript нумеруются с 0
  const year = date.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;

  return formattedDate;
};