export const saveToPersistance = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromPersistance = (key) => {
  let data = localStorage.getItem(key);
  return JSON.parse(data);
};

export const removeFromPersistance = (key) => {
  localStorage.removeItem(key);
};
