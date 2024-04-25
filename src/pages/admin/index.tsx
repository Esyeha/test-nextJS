import Image from "next/image"

const adminPage = () => {
    return (
            <div className="flex flex-col p-4">
                <div className="flex flex-col justify-center items-center ">
                    <h1 className="text-xl font-semibold italic tracking-widest text-center">ADMIN NYA WAK</h1>
                        <Image src="/syh.png" width={400} height={400} alt="logo" className=" object-cover mr-12"/>
                
                </div>
            </div>
    )
}

export default adminPage