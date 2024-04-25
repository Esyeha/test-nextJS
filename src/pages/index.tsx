import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Head from "next/head";



export default function HomePage() {
  return (
    <>
    <Head>
      <title>Belajar NextJS</title>
    </Head>
   <div className="flex flex-col text-blue-700">
      <Link href="/auth/login">LoginPage</Link>
      <Link href="/profile">ProfilePage</Link>
      <Link href="/auth/register">RegisterPage</Link>
      <Link href="/about">AboutPage</Link>
      <Link href="/product">product</Link>
      <Link href="/product/server">server rendering</Link>
      <Link href="/dashboard">dashboard</Link>
      <Link href="/dashboard/settings">setting</Link>
      <Link href="/shop">shop</Link>
      <Link href="/admin">adminPage</Link>
   </div>
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-3xl font-bold tracking-widest">Home Page</h1>
    </div>
    </>
  )
}
