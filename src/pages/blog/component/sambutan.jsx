import { useState } from "react"
import LazyImage from "../../../component/image"

const SambutanBlog = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    return(
        <div id="sambutan" className="grid grid-cols-3 pt-20 place-content-center gap-4">
            <div className="col-span-3 lg:col-span-1 p-8">
                <figure class="w-full h-96">
                    <LazyImage styleClass={'w-full h-full rounded-lg object-cover border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]'} src="https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg" alt="image_kepalaSekolah" />
                </figure>
            </div>

            <div className="col-span-3 lg:col-span-2 flex flex-col p-8">
                <p className="text-2xl lg:text-3xl font-bold capitalize">
                    <span className="">sambutan </span>
                    <span className="text-cyan-500">Kepala Sekolah</span>
                </p>
                <span className="font-bold text-lg lg:text-xl">KWALA SCHOOL.</span>

                <div className="my-8">
                    <h1 className="text-2xl font-bold mb-4">Selamat Datang di Website Sekolah Kwala!</h1>
                    <p className={`text-base mb-4 ${isExpanded ? '' : 'line-clamp-5'}`}>
                        Assalamu'alaikum warahmatullahi wabarakatuh,
                        <br />
                        Selamat datang di website resmi Sekolah Kwala, tempat di mana pendidikan berkualitas dan pengembangan karakter berjalan seiring. Kami sangat senang dan bangga menyambut Anda di dunia digital kami yang penuh dengan informasi dan inspirasi.
                        <br />
                        Sekolah Kwala didedikasikan untuk menciptakan lingkungan belajar yang dinamis dan inklusif. Kami berkomitmen untuk mendidik para siswa menjadi individu yang berprestasi, beretika, dan siap menghadapi tantangan masa depan. Di sini, Anda akan menemukan berbagai informasi mengenai program pendidikan, kegiatan ekstrakurikuler, prestasi siswa, dan berbagai layanan lainnya yang kami tawarkan.
                        <br />
                        Melalui website ini, kami berharap dapat memberikan kemudahan akses informasi bagi siswa, orang tua, guru, dan masyarakat umum. Anda juga dapat mengikuti berita terkini dan berbagai kegiatan menarik yang berlangsung di sekolah kami.
                        <br />
                        Mari bersama-sama menciptakan masa depan yang lebih baik dengan pendidikan yang berkualitas dan berkarakter. Terima kasih atas kunjungan Anda dan semoga website ini bermanfaat bagi semua.
                        <br />
                        Wassalamu'alaikum warahmatullahi wabarakatuh,
                        <br />
                        Salam hangat,
                        <br />
                        Tim Sekolah Kwala
                    </p>
                    <button onClick={toggleExpand} className="h-12 font-semibold border-black border-2 p-2.5 bg-green-400 hover:bg-green-300 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-green-300">
                        {isExpanded ? 'Tampilkan Lebih Sedikit' : 'Selengkapnya'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SambutanBlog