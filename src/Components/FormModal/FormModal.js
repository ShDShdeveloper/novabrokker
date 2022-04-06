import './FormModal.scss'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import GalleryIcon from "../../Images/galleryIcon.svg";
import RenameIcon from "../../Images/renameIcon.svg";
import DownloadIcon from '../../Images/downloadIcon.png'
import {useState} from "react";
function FormModal({openModal, setOpenModal}){
    const [saveInfo, setSaveInfo] = useState([])
    const [calculateInfo, setCalculateInfo] = useState([])
    const [file, setFile] = useState([])
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [IDNP, setIDNP] = useState('')
    const [litsenNum, setLitsenNum] = useState('')
    const [phone1, setPhone1] = useState('')
    const [email1, setEmail1] = useState('')
    var src1 = '';
    var src2 = '';
    if(file.length>1){
         src1 = URL.createObjectURL(file[0])
         src2 = URL.createObjectURL(file[1])
    } else if(file.length>0) {
         src1 = URL.createObjectURL(file[0])
         src2 = ''
    }
    function addInfo(){
        if(file.length>0 && phone && email){
            let info = {
                file,
                phone,
                email
            }
            let arr = [...saveInfo]
            arr.push(info)
            setSaveInfo(arr)
        } else {
            alert("Veuillez entrer vos coordonnées au complet!")
        }
        setPhone('')
        setEmail('')
        setFile([])
    }
    function calculate(){
        if(IDNP && phone1 && email1 && litsenNum){
            let info = {
                IDNP,
                litsenNum,
                phone1,
                email1
            }
            let arr = [...calculateInfo]
            arr.push(info)
            setCalculateInfo(arr)
        } else {
            alert("Veuillez entrer vos coordonnées au complet!")
        }
        setIDNP('')
        setLitsenNum('')
        setEmail1('')
        setPhone1('')
    }
    return <Modal open={openModal} onClose={()=>setOpenModal(prev=>!prev)} center>
        <div className={"row justify-content-center p-3"}>
            <div className={"col-12 col-sm-8 offset-2 col-md-5 pe-sm-0 mx-3 my-3 my-sm-3"}>
                <div className="toFormOne">
                    <div className="row">
                        <div className="col-3 col-sm-3 col-md-2">
                            <img src={GalleryIcon} alt="galleryIcon"/>
                        </div>
                        <div className={"col-9 col-sm-6 col-md-8"}>
                            <h6 className={"text-white ms-2"}>ÎNCARCĂ POZE CU PAȘAPORTUL TEHNIC</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 col-sm-7 col-md-8 text-end my-auto">
                            <p className={"aboutForm"}>Încarcă poze cu pașaportul tehnic față și verso al autovehiculului,
                                lasă-ne datele de contact și vei primi oferta de preț exact în doar câteva minute.</p>
                        </div>
                        <div className={"col-4 col-sm-3 col-md-2 my-auto"}>
                            <div className={"openForm text-danger bg-white "}>
                                <h1>+</h1>
                            </div>
                        </div>
                    </div>
                </div>
                    <label htmlFor="downloadImg">
                        <input multiple onChange={(e)=>setFile(e.target.files)} type="file" id={"downloadImg"} accept={"image/jpeg, image/png, image/svg"} className={"d-none"}/>
                        <div className={"mt-3 d-flex"}>
                            <img className={"my-auto me-3"} src={DownloadIcon} alt="download icon"/>
                            <h4 className={"my-auto"}>ÎNCARCĂ POZA</h4>
                        </div>
                    </label>
                {
                    src1 ? <div className={"row imageBox ms-0"}>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                            <img className={"w-100 mb-2"} src={src1} alt="img"/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                            {
                                src2 ? <img src={src2} className={"w-100"} alt="img2"/>: ''
                            }
                        </div>
                    </div> : ''
                }
                    <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" className={"input"} placeholder={"Număr de telefon"}/>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className={"input"} placeholder={"Email"}/>
                    <button onClick={addInfo} type={"submit"} className={"sendButton"} form={"send"}>Trimite</button>
            </div>
            <div className="col-12 col-sm-8 offset-2 pe-sm-0 col-md-5 mx-3 my-3 my-sm-3">
                <div className="toFormTwo py-sm-0 py-md-4">
                    <div className="row">
                        <div className="col-3 col-sm-4 col-md-2 my-auto">
                            <img src={RenameIcon} alt="rename icon"/>
                        </div>
                        <div className={"col-8 col-sm-8 ps-4 my-auto"}>
                            <h6>COMPLETEAZĂ MANUAL</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 col-sm-8 col-md-8 text-end my-auto">
                            <p className={"aboutForm text-dark"}>Lasă-ne detaliile mai jos și vei primi oferta de preț exact în doar câteva minute.
                            </p>
                        </div>
                        <div className={"col-4 col-sm-4 col-md-2 my-auto"}>
                            <div className={"openForm text-white bg-dark"}>
                                <h1>+</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <input value={IDNP} onChange={(e)=>setIDNP(e.target.value)} type="text" className={"input"} placeholder={"IDNP"}/>
                {
                    src1 ? <div className="imageBox col-12 col-sm-12 col-md-12 col-lg-6">
                            <img className={"w-100"} src={src1} alt=""/>
                    </div>: ''
                }
                <input value={litsenNum} onChange={(e)=>setLitsenNum(e.target.value)} type="text" className={"input"} placeholder={"Numărul de inmatriculare"}/>
                {
                    src2 ? <div className="imageBox col-12 col-sm-12 col-md-12 col-lg-6">
                        <img className={"w-100"} src={src2} alt=""/>
                    </div>: ''
                }
                <input value={phone1} onChange={(e)=>setPhone1(e.target.value)} type="text" placeholder={"Număr de telefon"} className={"input"}/>
                <input value={email1} onChange={(e)=>setEmail1(e.target.value)} type="text" placeholder={"E-mail"} className={"input"}/>
                <button onClick={calculate} className={"sendButton"}>Calculează</button>
            </div>
        </div>
    </Modal>
}
export default FormModal