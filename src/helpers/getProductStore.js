
export const getProductStore = async () => {
    const query = ('*[_type == "product"]');
    const url = `https://rm0uyoug.api.sanity.io/v2023-01-08/data/query/production?query=${query}`

    const resp = await fetch(url);
    const {result} = await resp.json();
    return result;
}