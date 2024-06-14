// CSS
import '../../assets/css/tailwind.css'
import '../../assets/css/style.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// React-Router-Dom
import { Route, BrowserRouter as Router, Routes, Outlet, Navigate } from 'react-router-dom'
import BlogIndex from '../../pages/blog'
import IndexBlog from '../../pages/blog/component/indexBlog'
import DaftarSekolah from '../../pages/blog/daftar'
import NewsBlog from '../../pages/blog/news'
import GaleriAll from '../../pages/blog/galeri'
import AuthLayout from '../../layout/auth'
import LoginPages from '../../pages/authPages/login'
import Error404 from '../../pages/error/error404'

const Routers = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<BlogIndex />}>
                    <Route path='/' element={<IndexBlog />} />
                    <Route path='/daftar' element={<DaftarSekolah />} />
                    <Route path='/berita/:News' element={<NewsBlog />} />
                    <Route path='/menu/galeri' element={<GaleriAll />} />
                </Route>

                <Route path='/auth' element={<AuthLayout />}>
                    <Route path='/auth/:login' element={<LoginPages />} />
                </Route>

                <Route path='*' element={<Error404 />} />
            </Routes>
        </Router>
    )
}

export default Routers