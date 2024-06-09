const FormBiodata = () => {
    const Agama = [
        { nama: "Islam", value: 1 },
        { nama: "Kristen Protestan", value: 2 },
        { nama: "Kristen Katolik", value: 3 },
        { nama: "Hindu", value: 4 },
        { nama: "Buddha", value: 5 },
        { nama: "Khonghucu", value: 6 },
        { nama: "Kepercayaan Lainnya", value: 7 }
    ]
    
    return(
        <form action="" className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-9">
            <label htmlFor="namaLengkap" className="form-control w-full">
                <div className="label">
                    <span className="label-text font-bold">Nama Lengkap ?</span>
                </div>
                <input
                    className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-blue-200 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
                    type="text"
                    placeholder="Tuliskan nama lengkap kamu"
                />
            </label>
            <label htmlFor="Nisn" className="form-control w-full">
                <div className="label">
                    <span className="label-text font-bold">NISN ?</span>
                </div>
                <input
                    className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-blue-200 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
                    type="number"
                    placeholder="Tuliskan NISN kamu"
                />
                <div className="label">
                    <a href="https://nisn.data.kemdikbud.go.id/index.php/Cindex/formcaribynama" className="label-text font-bold">Cek <span className="text-blue">NISN</span> kamu di sini ya!</a>
                </div>
            </label>
            <label htmlFor="tempatLahir" className="form-control w-full">
                <div className="label">
                    <span className="label-text font-bold">Tempat Lahir ?</span>
                </div>
                <input
                    className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-blue-200 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
                    type="text"
                    placeholder="Tuliskan tempat lahir kamu"
                />
            </label>
            <label htmlFor="tempatLahir" className="form-control w-full">
                <div className="label">
                    <span className="label-text font-bold">Tanggal Lahir ?</span>
                </div>
                <input
                    className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-blue-200 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
                    type="date"
                    placeholder="Tuliskan tempat lahir kamu"
                />
            </label>
            <label htmlFor="jenkel" className="form-control w-full">
                <div className="label">
                    <span className="label-text font-bold">Jenis Kelamin ?</span>
                </div>
                <select
                    className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-blue-200 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
                >
                    <option value="#">Pilih Jenis Kelamin Kamu</option>
                    <option value="1">Laki-Laki</option>
                    <option value="2">Perempuan</option>
                </select>
            </label>
            <label htmlFor="agama" className="form-control w-full">
                <div className="label">
                    <span className="label-text font-bold">Agama ?</span>
                </div>
                <select
                    className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-blue-200 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
                >
                    <option value="#">Pilih Agama Kamu</option>
                    {
                        Agama.map((item, index) => {
                            return(
                                <option key={index} value={item.value}>{item.nama}</option>
                            )
                        })
                    }
                </select>
            </label>
        </form>
    )
}

export default FormBiodata