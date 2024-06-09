const Account = () => {
    return(
        <form action="" className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-9">
            <label htmlFor="noHandphone" className="form-control w-full">
                <div className="label">
                    <span className="label-text font-bold">No Handphone ?</span>
                </div>
                <input
                    className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-blue-200 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
                    type="number"
                    placeholder="Tuliskan nomor handphone kamu"
                />
            </label>
            <label htmlFor="email" className="form-control w-full">
                <div className="label">
                    <span className="label-text font-bold">Email ?</span>
                </div>
                <input
                    className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-blue-200 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
                    type="email"
                    placeholder="Tuliskan email kamu"
                />
            </label>
            <label htmlFor="password" className="form-control w-full">
                <div className="label">
                    <span className="label-text font-bold">Password ?</span>
                </div>
                <input
                    className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-blue-200 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
                    type="password"
                    placeholder="Tuliskan password kamu"
                />
            </label>
        </form>
    )
}

export default Account