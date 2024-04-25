import { signIn, signOut, useSession } from "next-auth/react"
import Script from "next/script"

const Navbar = () => {
  const { data }: any = useSession()
  
  return (
    <div className="flex items-center justify-between bg-slate-800 h-10 p-7">
        <h1 className="text-xl font-bold tracking-widest" id="title"></h1>
        <Script id="SCRIPT-title">
          {`document.getElementById('title').innerHTML = 'Navbar'`}
        </Script>
        <div className="flex justify-center items-center">
          <p className="text-xl text-white font-semibold tracking-wider">{data && data.user.username}</p>
        {data ? (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded ml-5"
          onClick={() => signOut()}>Sign out
          </button>
        ) : (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded ml-5"
          onClick={() => signIn()}>Sign in
          </button>
        )
      }
        </div>
    </div>
  )
}

export default Navbar