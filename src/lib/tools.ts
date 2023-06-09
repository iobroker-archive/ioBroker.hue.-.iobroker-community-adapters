/**
 * Tests whether the given variable is a real object and not an Array
 * @param it The variable to test
 */
export function isObject(it: unknown): it is Record<string, any> {
    return Object.prototype.toString.call(it) === '[object Object]';
}
