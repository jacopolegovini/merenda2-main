function rimuoviDuplicati(arr) {
    // A voi!
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (!newArr.includes(element)) {
            newArr.push(element)
        }
    };

    return newArr;
}
