import { fetcher } from "@/lib/swr/fetcher"
import { useRouter } from "next/router"
import useSWR from "swr"
import DetailProduct from "../views/detailProduct"
import { ProductType } from "@/types/product.type"

const DetaiProductPage = ({ product }: {product: ProductType }) => {
    const { query } = useRouter()
    // clinet side rendering
    const { data, error, isLoading } = useSWR(`/api/product/${query.product}`, fetcher)

    
    return (
        <div className="bg-neutral-100 h-screen text-gray-900 p-4">
            <h1 className="text-2xl font-bold pb-4">Detail Product</h1>
            {/* client side rendering */}
            <DetailProduct product={isLoading ? [] : data.data}/>

            {/* server side rendering & static side rendering */}
            {/* <DetailProduct product={product}/> */}
        </div>
    )
}

export default DetaiProductPage

// export async function getServerSideProps({
//     params,
//  }: {
//     params: { product: string }
// }) {
//     // fetch data
//     const res = await fetch(`http://localhost:3000/api/product${params.product}`)
//     const data = await res.json()

//     return {
//         props: {
//             product: data.data,
//         }
//     }
// }

// export async function getStaticPaths() {
//     const res = await fetch('http://localhost:3000/api/product')
//     const response = await res.json()

//     const paths = response.data.map((product: ProductType) => ({
//         params: { 
//             product: product.id,
//         },
//     }))

// console.log(paths);


//     return {
//         paths,
//         fallback: false,
//     }
// }

// export async function getStaticProps({
//     params,
// }: {
//     params: {product: string}
// }) {
//     // fetch data
//     const res = await fetch(`http://localhost:3000/api/product${params.product}`)
//     const response = await res.json()

//     return {
//         props: {
//             product: response.data,
//         },
//     }
// }