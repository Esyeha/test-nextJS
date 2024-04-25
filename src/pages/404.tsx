import Link from "next/link"

const Custom404 = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="border border-red-600 py-24 px-32 rounded-md bg-gray-900 text-center relative flex flex-col items-center gap-y-1">
                <h1 className="text-4xl font-bold tracking-widest text-red-600">404</h1>
                <p className="text-red-600">Pages Not Found</p>
                <Link href={"/"} className="text-blue-500 underline absolute bottom-1 ">Back to Home</Link>
            </div>
        </div>
    )
}

export default Custom404