import { signIn } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

const LoginViews = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    
    const { push, query } = useRouter()

    const callbackUrl: any = query.callbackUrl || "/"

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        setError("")
        setIsLoading(true)        
        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: event.target.email.value,
                password: event.target.password.value,
                callbackUrl,
            })

            if(!res?.error) {
                setIsLoading(false)
                push(callbackUrl)
            } else {
                setIsLoading(false)
                setError(res.error)
            }
        } catch (error : any) {
            setIsLoading(false)
            setError(error)
        }
    } 
    return (
        <div className="flex min-h-screen flex-col justify-center items-center">
            <h1 className="text-3xl font-bold tracking-widest py-5">Login</h1>
            <div className="h-full flex justify-center items-center flex-col w-80 py-4 p-2 bg-gray-500 rounded-lg">
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 w-full ">
                    {error && <p className="text-red-500 font-semibold">{error}</p>}
                    {/* <div className="flex flex-col gap-y-1 ">
                        <label className="text-xl font-semibold"
                        htmlFor="username">Username</label>
                        <input className="px-3 py-1 rounded-md text-gray-700 placeholder-gray-300"
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username" />
                    </div> */}
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
                disabled={isLoading}>{isLoading ? "Loading..." : "Login"}</button>
                </form>
                <div className="flex gap-x-1 justify-center items-center pt-4">
                    <div className="w-6 h-5 cursor-pointer">
                        <img src="/google.png" alt="google" className="h-5 w-5"/>
                    </div>
                    <button onClick={() => signIn('google',{
                        callbackUrl,
                        redirect: false
                    })}>Sign In With Google</button>
                </div>
            </div>
                <p className="text-center py-1">belum punya akun? <Link href="/auth/register" className="text-blue-500">register</Link></p>
        </div>
    )
}

export default LoginViews