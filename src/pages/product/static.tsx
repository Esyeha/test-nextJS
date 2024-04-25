import ProductView from "../views/product"
import { ProductType } from "../../types/product.type"

const ProductPage = (props: {products: ProductType[]}) => {
    const { products } = props
    return (
        <>
            <ProductView products={products}/>
        </>
    ) 
}

export default ProductPage

export async function getStaticProps() {
    // fetch data
    const res = await fetch('http://localhost:3000/api/product')
    const data = await res.json()

    return {
        props: {
            products: data.data
        }
    }
}