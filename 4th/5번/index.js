// 여기에 1번 문제의 답을 작성하세요.

const getProducts = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data;
};
// 여기에 2번 문제의 답을 작성하세요.


const getProductsAdd = async () => {

    const settings = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: 'BMW Pencil',
            /* other product data */
        })
    }
    try {
        const fetchResponse = await fetch(`https://dummyjson.com/products/add`, settings);
        const data = await fetchResponse.json();
        return data;
    } catch (e) {
        return e;
    }

}

