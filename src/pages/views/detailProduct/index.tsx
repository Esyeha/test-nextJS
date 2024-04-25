import { ProductType } from "@/types/product.type"

const DetailProduct = ({ product }: { product: ProductType }) => {
    return (
        <div className=" text-slate-950 border-2 shadow-xl p-4 rounded-lg w-80">
            <img src={product.image && product.image} alt="image"  className="object-fill"/>
            <p className="font-bold text-2xl text-gray-800">{product.name}</p>
            <p className="text-xl font-semibold text-gray-700">{product.category}</p>
            <p className="font-semibold text-xl text-gray-800">{product.price && product.price.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
            })}</p>
        </div>
    )
}

export default DetailProduct