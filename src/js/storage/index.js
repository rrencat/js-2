/**
 * This function saves the value with a key to local storage
 * @param {string} key - The name/key of what is stored
 * @param {string} value - The value of what is stored
 * @example
 * ```js
 * // Saves the value with a key to local storage
 * key = "username";
 * value = "JohnDoe"
 * // expect local storage to show: username "JohnDoe"
 * ``` 
 */
export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

/**
 * This function loads or gets the value from local storage
 * @param {string} key 
 * @returns - The loaded value, or null if the value is not found
 */
export function load(key) {
    try {
        const value = localStorage.getItem(key);
        return JSON.parse(value);
    } catch {
        return null
    }
}

/**
 * This function removes the value from local storage
 * @param {string} key 
 */
export function remove(key) {
    localStorage.removeItem(key);
}