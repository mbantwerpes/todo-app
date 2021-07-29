export const parseJSONFromLocalStorage = (key, defaultValue) => {
  const parsedValue = JSON.parse(localStorage.getItem(key));

  if (!parsedValue) {
    return defaultValue;
  }

  return parsedValue;
};

export const stringifyJSONToLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));
