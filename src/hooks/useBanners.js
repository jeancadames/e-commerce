import { useEffect, useState } from "react"
import { getBanners } from "../helpers/getBanners";

export const useBanners = () => {
    const [banners, setBanners] = useState([]);

    const getBanner = async() => {
        const newBanners = await getBanners();
        setBanners(newBanners);
    }

    useEffect(() => {
        getBanner();

    }, [])
    

    return {
        banners
    }


}
