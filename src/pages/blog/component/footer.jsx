import { NavLink } from "react-router-dom"

const FooterBlog = () => {
    let date = new Date()
    return(
        <>
            <div className="bg-accent grid grid-cols-2 lg:p-20 stick items-center">
                <NavLink to={'/'} className="font-bold bg-black h-full p-8 w-max place-content-center cursor-pointer">
                    <p className="text-white text-md lg:text-xl cursor-pointer">KWALASCHOOL.</p>
                </NavLink>

                <div className="p-8 text-right">
                    <p className="font-bold text-md lg:text-xl">©{date.getFullYear()} Koala Creative Indonesia</p>
                </div>
            </div>
        </>
    )
}

export default FooterBlog