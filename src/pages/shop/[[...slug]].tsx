import { useRouter } from "next/router"

const ShopPage = () => {
    const { query } = useRouter()
    return (
        <div className="text-2xl font-bold p-4">
            <h1>Shop Page </h1>
            <p>name product : {query.slug ? query.slug[0] : ""} - {query.slug ? query.slug[1] : ""}</p>
        </div>
    )
}

export default ShopPage