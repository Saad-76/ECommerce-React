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
export const changeSizeUnit = (bytes) => {
  const sizeArr = bytes.split(" ");
  if (sizeArr[1] === "bytes") {
    return sizeArr[0];
  } else if (sizeArr[1] === "KB") {
    return sizeArr[0] * 1024;
  }
  if (sizeArr[1] === "MB") {
    return sizeArr[0] * 1048576;
  }
};
