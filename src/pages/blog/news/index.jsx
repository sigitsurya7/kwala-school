import { useLocation, useParams } from "react-router-dom"
import LazyImage from "../../../component/image";

const NewsBlog = () => {
    const { News } = useParams();

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
        <div className="grid grid-cols-5 mb-20">
            <div className={`container mx-auto p-4 col-span-5 lg:col-span-4 ${News == 'all' ? 'hidden' : ''}`}>
                <div className="bg-base-200 border-4 border-black rounded-lg p-6 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                    <div className="flex flex-col items-center justify-center my-4">
                        <figure className="w-full lg:w-[30rem] h-96">
                            <LazyImage src="https://resilienteducator.com/wp-content/uploads/2013/02/group-creation-iStock-534037992.jpg" styleClass={"w-full h-full object-cover object-center border-4 border-black rounded-lg"} alt="" />
                        </figure>
                    </div>
                    <h1 className="text-4xl font-bold text-center mb-6"><span className="capitalize">{News}</span> <p className="text-sm">Tanggal Pembuatan : Senin, 10 Juni 2024</p></h1>
                    <p className="text-lg mb-4">
                        Selamat datang di Sekolah Koala, tempat di mana pendidikan berkualitas dan pengembangan karakter menjadi prioritas utama. Di sekolah ini, kami berkomitmen untuk menciptakan lingkungan belajar yang dinamis dan inklusif, di mana setiap siswa dapat berkembang menjadi individu yang berprestasi dan beretika.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Misi dan Visi</h2>
                    <p className="text-lg mb-4">
                        Kami percaya bahwa setiap anak memiliki potensi unik yang perlu dikembangkan. Oleh karena itu, misi kami adalah menyediakan pendidikan yang holistik, yang tidak hanya fokus pada akademis tetapi juga pada pengembangan karakter. Visi kami adalah menjadi sekolah unggulan yang diakui secara nasional dan internasional.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Fasilitas dan Program Unggulan</h2>
                    <p className="text-lg mb-4">
                        Sekolah Koala dilengkapi dengan fasilitas modern yang mendukung proses belajar mengajar. Dari laboratorium sains yang lengkap, perpustakaan digital, hingga ruang kelas yang nyaman. Kami juga menawarkan berbagai program unggulan, seperti:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Program STEM (Science, Technology, Engineering, Mathematics)</li>
                        <li>Kegiatan ekstrakurikuler yang beragam</li>
                        <li>Program pengembangan karakter dan kepemimpinan</li>
                    </ul>
                    
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Prestasi Siswa</h2>
                    <p className="text-lg mb-4">
                        Kami bangga dengan prestasi yang telah diraih oleh siswa-siswa kami, baik di tingkat nasional maupun internasional. Prestasi ini adalah bukti dedikasi dan kerja keras baik dari siswa maupun guru-guru kami.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Ayo Bergabung dengan Sekolah Koala!</h2>
                    <p className="text-lg mb-4">
                        Kami mengundang Anda untuk menjadi bagian dari keluarga besar Sekolah Koala. Mari bersama-sama menciptakan masa depan yang lebih baik melalui pendidikan yang berkualitas dan berkarakter.
                    </p>
                </div>
            </div>

            <div className={`col-span-5 ${News == 'all' ? '' : 'lg:col-span-1'} container mx-auto p-4`}>
                <div className="bg-base-200 border-4 border-black rounded-lg p-6 shadow-[8px_8px_0px_rgba(0,0,0,1)] grid grid-cols-1 gap-4">
                    <p className="font-bold text-xl">{News == 'all' ? 'Berita Sekolah' : 'Artikel Terkait'}</p>
                    {
                        galeri.map((item, index) => {
                            return(
                                <div key={index} className="flex gap-4 items-center cursor-pointer bg-white">
                                    <figure className="w-96 h-32">
                                        <LazyImage styleClass={'w-full h-full object-cover'} src={item.link} alt={`Blog_Kwala-${index}`} />
                                    </figure>

                                    <div className="p-2 w-full">
                                        <h1 className="font-bold text-xl">Neo Brutalism</h1>

                                        <p className="text-xs mb-4 line-clamp-2 text-wrap">
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
                                </div>
                            )
                        })
                    }

                    {
                        News == 'all' ?
                        <div className="flex justify-center">
                            <div className="join border-4 border-black">
                                <button className="join-item btn btn-active">1</button>
                                <button className="join-item btn btn-primary">2</button>
                                <button className="join-item btn btn-primary">3</button>
                                <button className="join-item btn btn-primary">4</button>
                            </div>
                        </div>
                        : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default NewsBlog