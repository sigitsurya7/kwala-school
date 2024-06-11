import HeaderBlog from "./component/header";
import FooterBlog from "./component/footer";
import { Outlet } from "react-router-dom";

const BlogIndex = () => {

    return(
        <>
            <div className="bg-base-200 overflow-y-none">
                <HeaderBlog />

                <div className="flex flex-col gap-8 pt-20">
                    <Outlet />
                </div>

                <FooterBlog />

            </div>

        </>
    )
}

export default BlogIndex