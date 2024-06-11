import { FaAlignCenter } from "react-icons/fa"
import { useLocation } from "react-router-dom"

const HeaderBlog = () => {
    const Menu = [
        {
            nama: 'home',
            link: 'home'
        },
        {
            nama: 'sambutan',
            link: 'sambutan'
        },
        {
            nama: 'tentang',
            link: 'tentang'
        },
        {
            nama: 'galeri',
            link: 'galeri'
        },
        {
            nama: 'berita',
            link: 'berita'
        },
    ]

    const location = useLocation()

    return(
        <header className="bg-base-200 h-20 w-full fixed top-0 z-40 shadow-md">
            <div className="w-full h-full m-auto flex justify-between items-center px-5 md:px-24">
                <div className="bg-black h-full flex justify-center items-center p-4">
                    <a className="text-2xl text-base-200 font-bold" href="/">KWALA SCHOOL.</a>
                </div>
                <nav className="hidden md:block w-1/2">
                    <ul className="flex justify-end items-center space-x-4 gap-8">
                        {
                            Menu.map((item, index) => {
                                return(
                                    <li key={index} className="font-bold text-xl underline-offset-4 hover:underline cursor-pointer">
                                        <a href={location.pathname == '/' ? '#' + item.link : '/#' + item.link} className="uppercase">{item.nama}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <div className="md:hidden">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer" className="cursor-pointer drawer-button"><FaAlignCenter /></label>
                    </div> 
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {
                                Menu.map((item, index) => {
                                    return(
                                        <li key={index} className="font-bold text-xl underline-offset-4 hover:underline cursor-pointer">
                                            <a href={`#${item.link}`} className="uppercase">{item.nama}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                
            </div>
        </header>
    )
}

export default HeaderBlog