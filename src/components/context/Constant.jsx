export const localData = {
    add(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    remove(key) {
        localStorage.removeItem(key);
    },
    get(key) {
        const stored = localStorage.getItem(key);
        return stored;
    },
};