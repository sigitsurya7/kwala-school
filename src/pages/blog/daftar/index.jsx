import { useState } from "react";
import FormBiodata from "./form/formBiodata";
import Account from "./form/akun";

const formData = {
    namaLengkap: '',
    nisn: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: '',
    agama: '',
    jarak: '',
    caraBerangkat: '',
    asalSekolah: '',
    noHandphone: '',
    email: '',
    password: ''
}


const DaftarSekolah = () => {
    const FinishDaftar = () => {
        return(
            <>
                <p className="font-bold text-center">Pastikan data yang kamu isi benar ya :)</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <table className="w-full">
                        <tr>
                            <td className="font-bold">Nama Lengkap </td>
                            <td>:</td>
                            <td>{state.namaLengkap ? state.namaLengkap : '-'}</td>
                        </tr>
                        <tr>
                            <td className="font-bold">NISN </td>
                            <td>:</td>
                            <td>{state.nisn ? state.nisn : '-'}</td>
                        </tr>
                        <tr>
                            <td className="font-bold">Tempat Lahir </td>
                            <td>:</td>
                            <td>{state.tempatLahir ? state.tempatLahir : '-'}</td>
                        </tr>
                        <tr>
                            <td className="font-bold">Tanggal Lahir </td>
                            <td>:</td>
                            <td>{state.tanggalLahir ? state.tanggalLahir : '-'}</td>
                        </tr>
                        <tr>
                            <td className="font-bold">Jenis Kelamin </td>
                            <td>:</td>
                            <td>{state.jenisKelamin ? state.jenisKelamin : '-'}</td>
                        </tr>
                        <tr>
                            <td className="font-bold">Agama </td>
                            <td>:</td>
                            <td>{state.agama ? state.agama : '-'}</td>
                        </tr>
                    </table>
                    <table className="w-full">
                        <tr>
                            <td className="font-bold">Jarak </td>
                            <td>:</td>
                            <td>{state.jarak ? state.jarak : '-'}</td>
                        </tr>
                        <tr>
                            <td className="font-bold">Cara Berangkat </td>
                            <td>:</td>
                            <td>{state.caraBerangkat ? state.caraBerangkat : '-'}</td>
                        </tr>
                        <tr>
                            <td className="font-bold">Asal Sekolah </td>
                            <td>:</td>
                            <td>{state.asalSekolah ? state.asalSekolah.label : '-'}</td>
                        </tr>
                        <tr>
                            <td className="font-bold">No Handphone </td>
                            <td>:</td>
                            <td>{state.noHandphone ? state.noHandphone : '-'}</td>
                        </tr>
                        <tr>
                            <td className="font-bold">Email </td>
                            <td>:</td>
                            <td>{state.email ? state.email : '-'}</td>
                        </tr>
                        <tr>
                            <td className="font-bold">Password </td>
                            <td>:</td>
                            <td>{state.password ? state.password : '-'}</td>
                        </tr>
                    </table>
                </div>
            </>
        )
    }

    const [step, setStep] = useState(1);
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const [ state, setState ] = useState(formData)

    return(
        <div className="pt-20 mb-20">
            <div className="flex flex-col gap-4 border-2 border-black my-8 mx-8 p-8 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <p className="font-bold border-2 border-black p-1">
                        <span className="font-bold p-3 bg-black text-white">PPDB</span> KWALA SCHOOL.
                    </p>

                    <p className="font-bold text-right uppercase">
                        GELOMBANG 1
                    </p>
                </div>

                <p className="font-bold text-xl text-center uppercase">{step == 1 ? 'biodata' : step == 2 ? 'akun' : 'simpan' }</p>

                {step === 1 && <FormBiodata formData={state} setFormData={setState} />}
                {step === 2 && <Account formData={state} setFormData={setState} />}
                {step === 3 && <FinishDaftar />}

                <div className="flex justify-end">
                    <div className="flex justify-between gap-4">
                        {step > 1 && (
                            <button onClick={prevStep} className="h-12 border-black border-2 p-2.5 bg-green-300 hover:bg-green-200 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-green-300 font-bold">Kembali</button>
                            )}
                        {step < 3 ? (
                            <button onClick={nextStep} className="h-12 border-black border-2 p-2.5 bg-green-300 hover:bg-green-200 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-green-300 font-bold">Selanjutnya</button>
                            ) : (
                            <button onClick={() => alert('Form submitted!')} className="h-12 border-black border-2 p-2.5 bg-green-300 hover:bg-green-200 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-green-300 font-bold">Simpan</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DaftarSekolah