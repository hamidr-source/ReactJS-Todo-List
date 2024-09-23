export const localData = {
    add(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    remove(key, value) {
        localStorage.removeItem(key);
    },
    get(key) {
        const stored = localStorage.getItem(key);
        return stored == null ? undefined : JSON.parse(stored);
    },
};