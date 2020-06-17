export const mapToJson = (map: Map<number, number>): string => {
    let object = Object.create(null);
    map.forEach((value, key) => {
        object[key] = value;
    });
    return JSON.stringify(object);
};