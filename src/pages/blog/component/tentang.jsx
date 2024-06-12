import { useEffect, useRef, useState } from "react";
import LazyImage from "../../../component/image";

const TentangBlog = () => {
    const [isCounterVisible, setIsCounterVisible] = useState(false);
    const counterRef = useRef(null);

    const programUnggulan = [
        {
          nama: "Program STEM (Sains, Teknologi, Teknik, dan Matematika)",
          deskripsi: "Program STEM kami mendorong siswa untuk mengeksplorasi dan berprestasi di bidang sains, teknologi, teknik, dan matematika. Melalui proyek praktis, siswa mengembangkan pemikiran kritis, keterampilan pemecahan masalah, dan kreativitas."
        },
        {
          nama: "Program Imersi Bahasa",
          deskripsi: "Program ini menawarkan pengalaman belajar yang mendalam dalam berbagai bahasa. Siswa dapat meningkatkan keterampilan bahasa mereka dalam bahasa Inggris, Prancis, Mandarin, dan bahasa lainnya melalui kelas interaktif, pertukaran budaya, dan laboratorium bahasa."
        },
        {
          nama: "Program Seni dan Budaya",
          deskripsi: "Sekolah Kwala menghargai pentingnya seni dan budaya dalam pendidikan. Program seni kami mencakup musik, tari, seni visual, dan teater. Siswa memiliki kesempatan untuk menampilkan bakat mereka melalui pertunjukan, pameran, dan kompetisi."
        },
        {
          nama: "Program Keberlanjutan Lingkungan",
          deskripsi: "Kami berkomitmen untuk mempromosikan kesadaran lingkungan dan keberlanjutan. Siswa berpartisipasi dalam berbagai proyek ramah lingkungan, seperti kampanye daur ulang, penanaman pohon, dan inisiatif konservasi energi."
        },
        {
          nama: "Program Pengembangan Kepemimpinan dan Karakter",
          deskripsi: "Program kepemimpinan kami bertujuan untuk menumbuhkan nilai-nilai etika yang kuat dan kualitas kepemimpinan dalam diri siswa. Melalui lokakarya, seminar, dan proyek layanan masyarakat, siswa belajar pentingnya tanggung jawab, integritas, dan empati."
        },
        {
          nama: "Program Olahraga dan Kesejahteraan",
          deskripsi: "Pendidikan jasmani dan kesejahteraan merupakan bagian integral dari kurikulum kami. Program olahraga kami menawarkan berbagai kegiatan, termasuk sepak bola, bola basket, renang, dan atletik, yang mempromosikan kebugaran fisik dan kerja sama tim."
        },
        {
          nama: "Program Teknologi dan Inovasi",
          deskripsi: "Sekolah Kwala mengintegrasikan teknologi dalam proses belajar mengajar. Laboratorium inovasi kami dilengkapi dengan alat dan sumber daya terbaru, memungkinkan siswa untuk mengeksplorasi robotika, pemrograman, dan media digital."
        }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsCounterVisible(true);
                observer.unobserve(entry.target);
            }
            });
        },
        { threshold: 0.5 }
        );

        if (counterRef.current) {
        observer.observe(counterRef.current);
        }

        return () => {
        if (counterRef.current) {
            observer.unobserve(counterRef.current);
        }
        };
    }, []);

    function Counter({ targetNumber, duration, isVisible }) {
        const [currentNumber, setCurrentNumber] = useState(0);
      
        useEffect(() => {
          if (!isVisible) return;
      
          let start = 0;
          const end = parseInt(targetNumber);
          if (start === end) return;
      
          const incrementTime = (duration / end) * 1000;
      
          const timer = setInterval(() => {
            start += 1;
            setCurrentNumber(start);
            if (start === end) clearInterval(timer);
          }, incrementTime);
      
          return () => clearInterval(timer);
        }, [targetNumber, duration, isVisible]);
      
        return (
          <div className="font-bold text-center">
            {currentNumber}
          </div>
        );
    }
    return(
        <div className="pt-20" id="tentang">
            <div className="flex flex-col justify-center items-center gap-2" ref={counterRef}>
                <span className="font-bold text-4xl underline underline-offset-4">TENTANG</span>
                <span className="font-bold text-2xl">KWALA SCHOOL</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 mx-8 gap-8 my-8">
                <div className="p-8 border-2 border-black text-center hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] capitalize font-bold flex flex-col gap-2">
                    <span className="text-lg lg:text-2xl"><Counter targetNumber={987} duration={2} isVisible={isCounterVisible} /></span>
                    <span className="text-md lg:text-xl text-wrap">Jumlah siswa</span>
                </div>
                <div className="p-8 border-2 border-black text-center hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] capitalize font-bold flex flex-col gap-2">
                    <span className="text-lg lg:text-2xl"><Counter targetNumber={12} duration={2} isVisible={isCounterVisible} /></span>
                    <span className="text-md lg:text-xl">Jumlah rombel</span>
                </div>
                <div className="p-8 border-2 border-black text-center hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] capitalize font-bold flex flex-col gap-2">
                    <span className="text-lg lg:text-2xl"><Counter targetNumber={22} duration={2} isVisible={isCounterVisible} /></span>
                    <span className="text-md lg:text-xl">Jumlah kelas</span>
                </div>
                <div className="p-8 border-2 border-black text-center hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] capitalize font-bold flex flex-col gap-2">
                    <span className="text-lg lg:text-2xl"><Counter targetNumber={35} duration={2} isVisible={isCounterVisible} /></span>
                    <span className="text-md lg:text-xl">Jumlah ruangan</span>
                </div>
            </div>

            <div className="grid grid-cols-3 items-center">
                <div className="col-span-3 lg:col-span-1 p-8">
                    <figure className="w-full h-96">
                        <LazyImage alt={'image_sekolah'} styleClass={'w-full h-full rounded-lg border-4 border-black object-cover shadow-[8px_8px_0px_rgba(0,0,0,1)]'} src={'https://images.unsplash.com/photo-1613896527026-f195d5c818ed?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D'} />
                    </figure>
                </div>

                <div className="col-span-3 lg:col-span-2 p-8">
                    <p className="font-bold text-center text-xl uppercase mb-8">program sekolah</p>
                    {
                        programUnggulan.map((item, index) => {
                            return(
                                <div key={index} tabIndex={index} className="collapse border-2 border-black hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_rgba(0,0,0,1)] my-3"> 
                                    <div className="collapse-title text-xl font-medium">
                                        {item.nama}
                                    </div>
                                    <div className="collapse-content"> 
                                        <p>{item.deskripsi}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TentangBlog