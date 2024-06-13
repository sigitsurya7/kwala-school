import { NavLink, useParams } from "react-router-dom"

const LoginPages = () => {
    const { login } = useParams()

    if(login == 'ppdblogin'){
        return(
            <div className="grid grid-cols-1 gap-4 my-8">
                <label htmlFor="email" className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Email ?</span>
                    </div>
                    <input
                        className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-blue-200 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
                        type="email"
                        placeholder="Tuliskan email terdaftar kamu"
                        name='email'
                    />
                </label>
                <label htmlFor="password" className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Password ?</span>
                    </div>
                    <input
                        className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-blue-200 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
                        type="password"
                        placeholder="Tuliskan password terdaftar kamu"
                        name='password'
                    />
                </label>
    
                <NavLink><p className="text-right underline underline-offset-2 text-blue-500 cursor-pointer">Lupa Password ?</p></NavLink>
    
                <button className="h-12 font-semibold rounded-lg border-black border-2 p-2.5 bg-yellow-400 hover:bg-yellow-300 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-yellow-300">Login</button>
            </div>
        )
    }else if(login == 'login'){
        return(
            <div className="grid grid-cols-1 gap-4 my-8">
                <label htmlFor="username" className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Username ?</span>
                    </div>
                    <input
                        className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-blue-200 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
                        type="text"
                        placeholder="Tuliskan username terdaftar kamu"
                        name='username'
                    />
                </label>
                <label htmlFor="password" className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Password ?</span>
                    </div>
                    <input
                        className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-blue-200 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
                        type="password"
                        placeholder="Tuliskan password terdaftar kamu"
                        name='password'
                    />
                </label>
    
                <NavLink><p className="text-right underline underline-offset-2 text-blue-500 cursor-pointer">Lupa Password ?</p></NavLink>
    
                <button className="h-12 font-semibold rounded-lg border-black border-2 p-2.5 bg-yellow-400 hover:bg-yellow-300 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-yellow-300">Login</button>
            </div>
        )
    }
}

export default LoginPages