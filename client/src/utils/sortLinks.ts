// utils/sortLinks.js

export const preferredOrder = ['web', 'twitter', 'telegram', 'discord'];

export const sortLinks = (links: Array) => {
  if (!links || links.length === 0) return [];

  return [...links].sort((a, b) => {
    const aIndex = preferredOrder.indexOf(a.type);
    const bIndex = preferredOrder.indexOf(b.type);

    if (aIndex !== -1 && bIndex === -1) return -1;
    if (aIndex === -1 && bIndex !== -1) return 1;
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    return 0;
  });
};