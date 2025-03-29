export const getLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    const storedValue = localStorage.getItem(key);

    if (storedValue) return JSON.parse(storedValue);
  }

  return null;
};

export const setLocalStorage = (key: string, value: any) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
};
