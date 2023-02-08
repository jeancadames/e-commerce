import { useEffect, useState } from "react"
import { getProductStore } from "../helpers/getProductStore";

export const useProducts = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async() => {
        const newProducts = await getProductStore();
        setProducts(newProducts);
    }

    useEffect(() => {
        getProducts();

    }, [])
    

    return {
        products
    }


}
