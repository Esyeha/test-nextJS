import Image from "next/image"

const AboutPage = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-center flex-col pt-4 gap-y-4">
                {/* <Image src={"/sister-tao.jpg"} alt="image" width={150} height={150} className="rounded-full object-cover shadow-xl shadow-gray-600"/> */}
                <Image src="/syh.png" width={400} height={400} alt="logo" className=" object-cover mr-12"/>
                <h1 className="text-3xl tracking-widest" id="title" data-testid="title">Syaifullah</h1>
                <p className="text-md italic tracking-widest">- as front-end Dev -</p>
            </div>
        </div>
    )
}

export default AboutPage