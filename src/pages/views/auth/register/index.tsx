import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

const RegisterViews = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const { push } = useRouter()
    const handleSubmit = async (event: any) => {
        event.preventDefault()
        setError("")
        setIsLoading(true)
        const data = {
            username: event.target.username.value,
            email: event.target.email.value,
            password: event.target.password.value
        }
        const result = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        if(result.status === 200) {
            event.target.reset()
            setIsLoading(false)
            push("/auth/login")
        } else {
            setIsLoading(false)
            setError(result.status === 400 ? "Email already exists" : "")
        }
    }
    return (
        <div className="flex min-h-screen flex-col justify-center items-center">
            <h1 className="text-3xl font-bold tracking-widest py-5">Register</h1>
            <div className="w-full h-full flex justify-center">
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 w-80 py-4 p-2 bg-gray-500 rounded-lg ">
                    {error && <p className="text-red-500 font-semibold">{error}</p>}
                    <div className="flex flex-col gap-y-1 ">
                        <label className="text-xl font-semibold"
                        htmlFor="username">Username</label>
                        <input className="px-3 py-1 rounded-md text-gray-700 placeholder-gray-300"
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username" />
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <label className="text-xl font-semibold"
                        htmlFor="email">Email</label>
                        <input  className="px-3 py-1 rounded-md text-gray-700 placeholder-gray-300"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="syeha@example.com" />
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <label className="text-xl font-semibold"
                        htmlFor="password">Password</label>
                        <input  className="px-3 py-1 rounded-md text-gray-700 placeholder-gray-300"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="********" />
                    </div>
                <button 
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded"
                disabled={isLoading}>{isLoading ? "Loading..." : "Register"}</button>
                </form>
            </div>
                <p className="text-center py-1">sudah punya akun? <Link href="/auth/login" className="text-blue-500">login</Link></p>
        </div>
    )
}

export default RegisterViews