import HeaderBlog from "./component/header";
import BannerBlog from "./component/banner";
import SambutanBlog from "./component/sambutan";
import TentangBlog from "./component/tentang";
import GaleriBlog from "./component/galeri";
import BeritaBlog from "./component/blog";
import FooterBlog from "./component/footer";

const BlogIndex = () => {

    return(
        <>
            <div className="bg-base-200 overflow-y-none">
                <HeaderBlog />

                <div className="flex flex-col gap-8">
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
                </div>

                <FooterBlog />

            </div>

        </>
    )
}

export default BlogIndex