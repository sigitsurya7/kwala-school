import { Link, NavLink } from "react-router-dom"
import LazyImage from "../../../component/image"

const BeritaBlog = () => {
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
        <div className="flex flex-col gap-4" id="berita">
            <div className="flex flex-col justify-center items-center gap-2">
                <span className="font-bold text-4xl underline underline-offset-4">Berita</span>
                <span className="font-bold text-2xl">KWALA SCHOOL</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 p-8 w-max">
                    {
                        galeri.map((item, index) => {
                            return(
                                <div key={index} className="w-36 lg:w-80 h-full border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
                                    <NavLink to={'/berita/kwala blog'}>
                                        <div className="block cursor-pointer">
                                            <article className="w-full h-full">
                                                <figure className="w-full h-1/2 border-black border-b-2">
                                                    <LazyImage styleClass={'w-full h-full object-cover'} src={item.link} alt={`Blog_Kwala-${index}`} />
                                                </figure>
                                                <div className="px-6 py-5 text-left h-full">
                                                    <p className="text-base mb-4">May 15th, 2023</p>
                                                    <h1 className="lg:text-[32px] text-[19px] mb-4">Neo Brutallism</h1>
                                                    <p className="text-xs mb-4 line-clamp-4">
                                                        Neobrutalism is an aesthetic characterized by high contrast
                                                        elements, bright colors, and bold shapes. It is often used to make
                                                        a statement, as it is meant to be eye-catching and stand out to
                                                        the viewer. It is also used in user interface and web design, with
                                                        features such as vibrant colors and bold shapes. Neobrutalism can
                                                        also be used in print design, with an example being a bold shape
                                                        with a vibrant color fill applied to it.
                                                    </p>
                                                    <strong>Read More</strong>
                                                </div>
                                            </article>
                                        </div>
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>

                <NavLink to={'/berita/all'} className="h-12 font-semibold border-black border-2 p-2.5 bg-green-400 hover:bg-green-300 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-green-300">Lihat Selengkapnya</NavLink>
            </div>

            <div className="flex flex-col my-20 gap-6 justify-center items-center p-4">
                <h6 className="text-4xl text-center uppercase font-bold">Mari Bergabung Bersama Kami!</h6>
                <NavLink to={'/daftar'} className="h-12 font-semibold border-black border-2 p-2.5 bg-yellow-400 hover:bg-yellow-300 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-yellow-300">DAFTAR SEKOLAH</NavLink>
            </div>
        </div>
    )
}

export default BeritaBlog