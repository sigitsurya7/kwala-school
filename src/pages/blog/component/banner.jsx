import Slider from "react-slick";
import LazyImage from "../../../component/image";
import { NavLink } from "react-router-dom";

const BannerBlog = () => {
    const gambar = [
        {
            link: 'https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg',
        },
        {
            link: 'https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg',
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        waitForAnimate: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 600,
        arrows: false
    };

    return(
        <div id="home" className="grid grid-cols-2 lg:place-content-center h-screen">

            <div className="col-span-2 lg:col-span-1 text-left p-8 flex flex-col flex-wrap justify-center gap-4">
                <span className="text-4xl lg:text-6xl font-bold uppercase">KWALA SCHOOL.</span>
                <span className="font-bold text-black">
                    Selamat Datang di Sekolah Kwala
                    <br />
                    Tempat Di Mana Masa Depan Cerah Dimulai
                </span>
                <div className="flex flex-wrap gap-4">
                    <button className="h-12 font-semibold border-black border-2 p-2.5 bg-cyan-400 hover:bg-cyan-300 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-cyan-300">INFO SEKOLAH</button>
                    <NavLink to={'/daftar'} className="h-12 font-semibold border-black border-2 p-2.5 bg-yellow-400 hover:bg-yellow-300 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-yellow-300">DAFTAR SEKOLAH</NavLink>
                </div>
            </div>
            <div className="col-span-2 lg:col-span-1 p-4">
                <Slider {...settings}>
                    {
                        gambar.map((item, index) => {
                            return(
                                <div key={index} className="p-4">
                                    <figure className="w-full h-full rounded-lg border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                                        <LazyImage styleClass={'object-cover w-full h-full'} src={item.link} alt={`banner_Kwala-${index}`} />
                                    </figure>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
            
        </div>
    )
}

export default BannerBlog