const FooterBlog = () => {
    let date = new Date()
    return(
        <>
            <div className="flex flex-col my-20 gap-6 justify-center items-center p-4">
                <h6 className="text-4xl text-center uppercase font-bold">Mari Bergabung Bersama Kami!</h6>
                <button className="h-12 font-semibold border-black border-2 p-2.5 bg-yellow-400 hover:bg-yellow-300 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-yellow-300">DAFTAR SEKOLAH</button>
            </div>
            <div className="bg-accent flex justify-between">
                <div className="font-bold bg-black h-full p-8">
                    <p className="text-white text-md lg:text-xl">KWALASCHOOL.</p>
                </div>

                <div className="p-8">
                    <p className="font-bold text-md lg:text-xl">©{date.getFullYear()} Koala Creative Indonesia</p>
                </div>
            </div>
        </>
    )
}

export default FooterBlog