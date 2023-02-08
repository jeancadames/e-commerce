export const getBanners = async () => {
    const bannerQuery = '*[_type == "banner"]';
    const urlBanner = `https://rm0uyoug.api.sanity.io/v2023-01-08/data/query/production?query=${bannerQuery}`

    const resp = await fetch(urlBanner);
    const {result} = await resp.json();
    return result;
}