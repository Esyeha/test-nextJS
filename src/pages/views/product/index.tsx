import { ProductType } from "@/types/product.type"
import Sekeleton from "./skeleton"
import Link from "next/link"
import Image from "next/image"

const ProductView = ({products}: { products: ProductType[] }) => {
    return (
        <div className="bg-neutral-100 h-full p-2">
            <h2 className="text-gray-800 font-bold text-3xl text-center">Product Saya</h2>
            <div className="flex justify-center items-center py-4 gap-5 flex-wrap">
                {products?.length > 0 ? (
                    <>
                    {products?.map((product: ProductType) => (
                <Link href={`/product/${product.id}`} className=" text-slate-950 border-2 shadow-xl p-4 rounded-lg"
                    key={product.id}>
                    <Image src={product.image} alt={product.name}  className="object-fill" width={150} height={150}/>
                    <p className="font-bold text-2xl text-gray-800">{product.name}</p>
                    <p className="text-xl font-semibold text-gray-700">{product.category}</p>
                    <p className="font-semibold text-xl text-gray-800">{product.price.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                    })}</p>
                </Link>
            ))}
                    </>
                ) : (
                <>
                    <Sekeleton/>
                </>
                )
                }
            
            </div>
        </div>
    )
}

export default ProductView