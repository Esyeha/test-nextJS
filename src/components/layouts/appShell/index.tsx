import { useRouter } from "next/router"
import { Roboto } from "next/font/google";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../navbar"), { ssr: false })

type AppShellProps = {
    children: React.ReactNode
}

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"], 
  })

const disableNavbar = ["/auth/login", "/auth/register", "/404"]

const AppShell = (props: AppShellProps) => {
    const { children } = props
    const { pathname } = useRouter()
  return (
    <div className={roboto.className}>
        {disableNavbar.includes(pathname) ? null : <Navbar />}
        {children}
    </div>
  )
}

export default AppShell