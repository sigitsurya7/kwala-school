import { useEffect, useState } from 'react'
import Select from 'react-select'
import { get } from '../../../../config/middleware/hooks/gateway'
import axios from 'axios'

const FormBiodata = ( { formData, setFormData } ) => {

    const [ state, setState ] = useState([])

    function getDataSekolah(){
        axios.get('https://api-sekolah-indonesia.vercel.app/sekolah?page=1&perPage=100').then((response) => {
            const options = response.data.dataSekolah.map((item) => ({
                value: item.sekolah,
                label: item.sekolah,
            }));
            setState(options);
        })
    }

    useEffect(() => {
        getDataSekolah()
    }, [])

    const Agama = [
        { nama: "Islam", value: 1 },
        { nama: "Kristen Protestan", value: 2 },
        { nama: "Kristen Katolik", value: 3 },
        { nama: "Hindu", value: 4 },
        { nama: "Buddha", value: 5 },
        { nama: "Khonghucu", value: 6 },
        { nama: "Kepercayaan Lainnya", value: 7 }
    ]

    const customStyles = {
        control: (provided, state) => ({
          ...provided,
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          borderColor: 'black',
          borderWidth: '2px',
          padding: '0.25rem', // 2.5 * 0.25rem (1rem = 16px, 0.25rem = 4px)
          outline: 'none',
          boxShadow: state.isFocused ? '2px 2px 0px rgba(0,0,0,1)' : '',
          backgroundColor: state.isFocused ? 'rgba(191, 219, 254)' : '', // bg-blue-200
          borderRadius: '0.375rem', // rounded-md (6px)
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? 'rgba(191, 219, 254)' : '', // bg-blue-200
        }),
    }
    
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
                    name='namaLengkap'
                    value={formData.namaLengkap}
                    onChange={(e) => setFormData({ ...formData, namaLengkap: e.target.value })}
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
                    name='nisn'
                    value={formData.nisn}
                    onChange={(e) => setFormData({ ...formData, nisn: e.target.value })}
                />
                <div className="label">
                    <a href="https://nisn.data.kemdikbud.go.id/index.php/Cindex/formcaribynama" target="_blank" className="label-text font-bold">Cek <span className="text-blue">NISN</span> kamu di sini ya!</a>
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
                    name='tempatLahir'
                    value={formData.tempatLahir}
                    onChange={(e) => setFormData({ ...formData, tempatLahir: e.target.value })}
                />
            </label>
            <label htmlFor="tempatLahir" className="form-control w-full">
                <div className="label">
                    <span className="label-text font-bold">Tanggal Lahir ?</span>
                </div>
                <input
                    className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-blue-200 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
                    type="date"
                    placeholder="Tuliskan tanggal lahir kamu"
                    name='tanggalLahir'
                    value={formData.tanggalLahir}
                    onChange={(e) => setFormData({ ...formData, tanggalLahir: e.target.value })}
                />
            </label>
            <label htmlFor="jenkel" className="form-control w-full">
                <div className="label">
                    <span className="label-text font-bold">Jenis Kelamin ?</span>
                </div>
                <select
                    className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-blue-200 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
                    name='jenisKelamin'
                    value={formData.jenisKelamin}
                    onChange={(e) => setFormData({ ...formData, jenisKelamin: e.target.value })}
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
                    name='agama'
                    value={formData.agama}
                    onChange={(e) => setFormData({ ...formData, agama: e.target.value })}
                >
                    <option value="#">Pilih Agama Kamu</option>
                    {
                        Agama.map((item, index) => {
                            return(
                                <option key={index} value={item.nama}>{item.nama}</option>
                            )
                        })
                    }
                </select>
            </label>
            <label htmlFor="jarak" className="form-control w-full">
                <div className="label">
                    <span className="label-text font-bold">Perkiraan Jarak ?</span>
                </div>
                <input
                    className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-blue-200 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
                    type="number"
                    placeholder="Perkiraan jarak rumah ke sekolah kwala ?"
                    name='jarak'
                    value={formData.jarak}
                    onChange={(e) => setFormData({ ...formData, jarak: e.target.value })}
                />
                <div className="label">
                    <span className="label-text font-bold text-error">*Satuan dalam meter</span>
                </div>
            </label>
            <label htmlFor="jenkel" className="form-control w-full">
                <div className="label">
                    <span className="label-text font-bold">Cara Berangkat ?</span>
                </div>
                <select
                    className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-blue-200 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
                    name='caraBerangkat'
                    value={formData.caraBerangkat}
                    onChange={(e) => setFormData({ ...formData, caraBerangkat: e.target.value })}
                >
                    <option value="#">Pilih Cara Berangkat Kamu</option>
                    <option value="1">Berkendara</option>
                    <option value="2">Jalan Kaki</option>
                </select>
            </label>
            <label htmlFor="jenkel" className="form-control w-full">
                <div className="label">
                    <span className="label-text font-bold">Nama asal Sekolah ?</span>
                </div>
                <Select
                    classNamePrefix="react-select"
                    name='asalSekolah'
                    value={formData.asalSekolah}
                    onChange={(e) => setFormData({...formData, asalSekolah: e})}
                    styles={customStyles}
                    options={state}
                    placeholder="Cari asal sekolah kamu..."
                >
                    <option value="#">Pilih Cara Berangkat Kamu</option>
                    <option value="1">Berkendara</option>
                    <option value="2">Jalan Kaki</option>
                </Select>
            </label>
        </form>
    )
}

export default FormBiodata