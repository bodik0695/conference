export const findPosition = (arr, id) => {
    let position = -1;
    arr.forEach((item, key) => {
        if (item._id === id) {
            position = key;
        }
    });
    return position;
};

export default findPosition;