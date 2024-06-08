// CSS
import '../../assets/css/tailwind.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// React-Router-Dom
import { Route, BrowserRouter as Router, Routes, Outlet, Navigate } from 'react-router-dom'
import BlogIndex from '../../pages/blog'

const Routers = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<BlogIndex />} />

                <Route path='/daftar' element={<BlogIndex />}>
                </Route>
            </Routes>
        </Router>
    )
}

export default Routers