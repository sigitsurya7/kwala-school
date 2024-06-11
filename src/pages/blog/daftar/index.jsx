import { useEffect, useState } from "react";
import FormBiodata from "./form/formBiodata";
import Account from "./form/akun";
import Prompt from "../../../component/dialog";

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
    const [ state, setState ] = useState(formData)
    const [nextDisabled, setNextDisabled] = useState(true);
    const [step, setStep] = useState(1);
    const [errorVisible, setErrorVisible] = useState(false);
    const [successVisible, setsuccessVisible] = useState(false);

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
                            <td>{state.jarak ? state.jarak + ' M' : '-'}</td>
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

    const prevStep = () => setStep(step - 1)

    const nextStep = () => {
        if (nextDisabled) {
          setErrorVisible(true);
        } else {
          setErrorVisible(false);
          setStep(step + 1);
        }
      };
    
      useEffect(() => {
        if (step === 2) {
          const isAccountValid = state.noHandphone !== '' && state.email !== '' && state.password !== '';
          setNextDisabled(!isAccountValid);
        }
      }, [state, step]);


    return(
        <div className="mb-20">
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

                {step === 1 && <FormBiodata formData={state} setFormData={setState} setNextDisabled={setNextDisabled} />}
                {step === 2 && <Account formData={state} setFormData={setState} setNextDisabled={setNextDisabled} />}
                {step === 3 && <FinishDaftar />}

                <div className="flex justify-end">
                    <div className="flex justify-between gap-4">
                        {step > 1 && (
                            <button onClick={prevStep} className="h-12 border-black border-2 p-2.5 rounded-lg bg-red-300 hover:bg-red-200 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-red-300 font-bold">Kembali</button>
                            )}
                        {step < 3 ? (
                            <button onClick={nextStep} className="h-12 border-black border-2 p-2.5 rounded-lg bg-green-300 hover:bg-green-200 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-green-300 font-bold">Selanjutnya</button>
                            ) : (
                            <button onClick={() => setsuccessVisible(true)} className="h-12 border-black border-2 p-2.5 rounded-lg bg-blue-300 hover:bg-blue-200 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-blue-300 font-bold">Simpan</button>
                        )}
                    </div>
                </div>
            </div>

            <Prompt
                title="Error"
                message="Ada Data yang belum di isi"
                visible={errorVisible}
                onClose={() => setErrorVisible(false)}
                // showButton={true}
                icon={'error'}
            />

            <Prompt
                title="Pendaftaran Berhasil"
                message={`Harap simpan data kamu ya... <br /> <b>Email</b> : ${state.email} <br /> <b>Password</b> : ${state.password}`}
                visible={successVisible}
                onClose={() => setsuccessVisible(false)}
                // showButton={true}
                icon={'success'}
            />
        </div>
    )
}

export default DaftarSekolah