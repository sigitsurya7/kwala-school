import LazyImage from "../../../component/image"

const GaleriBlog = () => {
    const galeri = [
        {
            link: 'https://resilienteducator.com/wp-content/uploads/2013/02/group-creation-iStock-534037992.jpg'
        },
        {
            link: 'https://bridge.edu/tefl/blog/wp-content/uploads/2024/01/ESL-Games-and-Activities-for-Kids-Teens.jpg'
        },
        {
            link: 'https://blog.schoolspecialty.com/wp-content/uploads/2017/06/The-Benefits-of-Participation-in-After-School-Activities-1200x624.jpg'
        },
        {
            link: 'https://www.parents.com/thmb/GHz8gzrAE4mxg82egqeFuVeqiiI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RoboticsSTEMprogramkids-fd6b3d55111d48ecbbd96614728e4cac.jpg'
        },
        {
            link: 'https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces,q_auto/https://www.gcu.edu/sites/default/files/images/articles/5cd1c24cd1987be29638654666da9e1f2deecd66.jpg'
        },
        {
            link: 'https://images.ctfassets.net/9l3tjzgyn9gr/7lZaI0fsEqfXEJCUMP4C24/182afd15cf12281a1be7a92a68fafcfa/iStock-1411388113.jpg?fm=jpg&fl=progressive&q=50&w=1200'
        },
    ]

    return(
        <div className="flex flex-col gap-4" id="galeri">
            <div className="flex flex-col justify-center items-center gap-2">
                <span className="font-bold text-4xl underline underline-offset-4">Galeri</span>
                <span className="font-bold text-2xl">KWALA SCHOOL</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 p-8 w-max">
                    {
                        galeri.map((item, index) => {
                            return(
                                <figure key={index} className="w-32 h-32 lg:w-64 lg:h-64 border-black border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                                    <LazyImage styleClass={'w-full h-full object-cover'} src={item.link} alt={`kwalaGaleri-${index}`} />
                                </figure>
                            )
                        })
                    }
                </div>

                <button className="h-12 font-semibold border-black border-2 p-2.5 bg-green-400 hover:bg-green-300 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-green-300">Lihat Selengkapnya</button>
            </div>
        </div>
    )
}

export default GaleriBlog