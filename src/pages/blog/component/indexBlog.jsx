import BannerBlog from "./banner";
import SambutanBlog from "./sambutan";
import TentangBlog from "./tentang";
import GaleriBlog from "./galeri";
import BeritaBlog from "./blog";

const IndexBlog = () => {
    return(
        <>
            {/* Banner */}
            <BannerBlog />
            {/* Sambutan */}
            <SambutanBlog />
            {/* Tentang */}
            <TentangBlog />
            {/* Galeri */}
            <GaleriBlog />
            {/* Blog */}
            <BeritaBlog />
        </>
    )
}

export default IndexBlog