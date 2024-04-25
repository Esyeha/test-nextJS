import { useSession } from "next-auth/react"
import Image from "next/image"

const ProfilePage = () => {
    const { data }: any = useSession()
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-center flex-col pt-4 gap-y-4">
                {/* <Image src={"/sister-tao.jpg"} alt="image" width={150} height={150} className="rounded-full object-cover shadow-xl shadow-gray-600"/> */}
                {data?.user.image ? (
                    <Image src={data?.user.image} alt={data?.user.username} className="rounded-full object-cover shadow-lg shadow-gray-700" width={100} height={100}/>
                ) : (
                    <Image src={"/sister-tao.jpg"} alt="image" width={150} height={150} className="rounded-full object-cover shadow-lg shadow-gray-700"/>
                )}
                <h1 className="text-3xl tracking-widest">{data?.user.username}</h1>
                <p className="text-md italic tracking-widest">- as front-end Dev -</p>
            </div>
        </div>
    )
}

export default ProfilePage