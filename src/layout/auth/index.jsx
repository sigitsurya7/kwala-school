import { Outlet, useParams } from "react-router-dom"

const AuthLayout = () => {
    const { login } = useParams()
    return(
        <div className="w-screen h-screen grid grid-cols-3 bg-base-200">
            <div className="hidden lg:block col-span-2">
                <figure className="w-full h-screen">
                    <img
                        src="https://images.pexels.com/photos/16395467/pexels-photo-16395467/free-photo-of-pemandangan-lanskap-lansekap-lapangan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Image_login_kwala"
                        className="w-full h-full object-cover"
                    />
                </figure>
            </div>
            <div className="col-span-3 lg:col-span-1">
                <div className="flex justify-center items-center h-full p-4">
                    <div className="w-full h-max p-8 rounded-lg border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                        <p className="w-max text-center font-bold border-4 border-black p-2 text-black"><span className="bg-black text-white p-4">KWALA</span> {login == 'ppdblogin' ? 'LOGIN PPDB' : 'LOGIN'}</p>

                        <div>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout