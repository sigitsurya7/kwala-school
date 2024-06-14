const Error404 = () => {
    return(
        <div className="flex flex-col items-center">
            <div className="w-screen h-screen flex flex-col justify-center items-center">
                <div className="main">
                    <div className="antenna">
                    <div className="antenna_shadow"></div>
                    <div className="a1"></div>
                    <div className="a1d"></div>
                    <div className="a2"></div>
                    <div className="a2d"></div>
                    <div className="a_base"></div>
                    </div>
                    <div className="tv">
                    {/* <div className="cruve">
                        <svg
                        xml:space="preserve"
                        viewBox="0 0 189.929 189.929"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        className="curve_svg"
                        >
                            <path
                                d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
                            C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
                            ></path>
                        </svg>
                    </div> */}
                    <div className="display_div">
                        <div className="screen_out">
                        <div className="screen_out1">
                            <div className="screen">
                            <span className="notfound_text">404 NOT FOUND</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="lines">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    <div className="buttons_div">
                        <div className="b1"><div></div></div>
                        <div className="b2"></div>
                        <div className="speakers">
                        <div className="g1">
                            <div className="g11"></div>
                            <div className="g12"></div>
                            <div className="g13"></div>
                        </div>
                        <div className="g"></div>
                        <div className="g"></div>
                        </div>
                    </div>
                    </div>
                    <div className="bottom">
                    <div className="base1"></div>
                    <div className="base2"></div>
                    <div className="base3"></div>
                    </div>
                </div>

                <div className="my-20">
                    <button className="h-12 font-semibold border-black border-2 p-2.5 bg-cyan-400 hover:bg-cyan-300 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-cyan-300">Kembali ke halaman utama</button>
                </div>
            </div>
        </div>

    )
}

export default Error404