import { useEffect, useState } from "react"
import ProductView from "../views/product";
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";



const ProductPage = () => {
    // const [products, setProducts] = useState([])
    
    const { data, error, isLoading } = useSWR('/api/product', fetcher)

    // useEffect(() => {
    //    fetch('/api/product')
    //    .then(res => res.json())
    //    .then(response => setProducts(response.data))
    // }, [])


    return (
    <>
    <ProductView products={isLoading ? [] : data?.data}/>
    </>
    )
}

export default ProductPage