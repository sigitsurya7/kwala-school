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

const Routers = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<BlogIndex />}>
                    <Route path='/' element={<IndexBlog />} />
                    <Route path='/daftar' element={<DaftarSekolah />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default Routers