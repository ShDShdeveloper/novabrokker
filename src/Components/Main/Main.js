import './Main.scss'
import logo from '../../Images/logo.svg'
import Button from '../../Images/Button.svg'
import Frame from '../../Images/Frame.png'
import GalleryIcon from '../../Images/galleryIcon.svg'
import RenameIcon from '../../Images/renameIcon.svg'
import CallIconInput from '../../Images/callIconInput.svg'
import dollar from '../../Images/dollar.png'
import percent from '../../Images/percent.png'
import time from '../../Images/time.png'
import trueIcon from '../../Images/true.png'
import Design from '../../Images/Group 5.svg'
import ReactPlayer from 'react-player/youtube'
import {useState} from "react";
import FormModal from "../FormModal/FormModal";

function Main(){
    const offers = [
        {
            icon: dollar,
            title: "Prețuiește-ți timpul",
            text: "Procesul de solicitare și primire a asigurării îți economisește timpul, fiind ușor, rapid și 100% online."
        },
        {
            icon: time,
            title: "Economisește până la 50% prin sistemul Bonus-Malus",
            text: "Sistemul Bonus-Malus îți asigură economisiri de până la 50% în cazul în care nu ai avut accidente rutiere în ultimii cinci ani."
        },
        {
            icon: trueIcon,
            title: "Consultare accesibilă 24/7",
            text: "Echipa NOVABROKER este mereu alături, gata să te ajute și să răspundă la orice întrebare la orice oră."
               },
        {
            icon: percent,
            title: "10% cashback și oferte personalizate individual",
            text: "Comandă Asigurarea acum și primești 10% cashback anual."

        },
    ]
    const [phone, setPhone] = useState('')
    const [numbers, setNumbers] = useState([])
    function addNumber(){
        if(phone){
            let num = [...numbers, phone]
            setNumbers(num)
            setPhone('')
            setPhone('')
            alert("Vous avez laissé votre numéro. nous vous contacterons sous peu")
        } else {
            alert("Entrez votre numéro")
        }


    }
    const [openModal, setOpenmodal] = useState(false)
    return <main className={"mainWrapper"}>
        <section className={"sectionOne"}>
            <div className="header d-block d-md-flex justify-content-center justify-content-md-between mx-auto text-center">
                <img src={logo} alt="logoNovaBrokker"/>
                <img className={"mt-3 ms-5"} src={Button} alt="call icon"/>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-5 boxOne">
                    <h1>Asigurare RCA online</h1>
                    <p>Economisește timp și calculează online Asigurarea RCA în doar câteva minute.
                        În doar 3 pași simpli, vei primi Asigurarea electronică.</p>
                    <button className={"btn btn-danger rounded-pill px-5 py-2"} > Calculează </button> <br className={"d-block d-sm-block d-md-block d-lg-none "}/> <span className={"text-secondary mx-3"}>sau</span>
                    <a href="#"> solicită un apel</a>
                </div>
               <div  className="col-12 col-sm-12 col-md-6 col-lg-7 boxTwo">
               </div>
                </div>
        </section>
       <section className={"sectionTwo"}>
           <div className={"cashBox"}>
               <div className="row">
                   <div className="col-12 col-sm-12 col-md-8 my-auto">
                       <h3>10% CASHBACK</h3>
                       <p>Cu Asigurarea electronică RCA de la NOVABROKER beneficiezi
                           de 10% cashback anual și multe alte oferte!</p>
                   </div>
                   <div className="col-12 col-sm-12 col-md-4 my-auto">
                       <img className={"w-100"} src={Frame} alt="frame"/>
                   </div>
               </div>
           </div>
           <h1 className={"insurance"}>Urmează 3 pași simpli și primește asigurarea în doar 10 minute</h1>
           <div className="row steps">
               <div className="col-12 col-sm-4 step">
                   <hr className={"d-none d-sm-none d-md-block"}/>
                   <h1 className={"mx-auto"}>1</h1>
                   <h4 className={"mx-auto"}>Calculează asigurarea</h4>
                   <p>Completează formularul de mai jos.</p>
               </div>
               <div className="col-12 col-sm-4 step">
                   <hr className={"d-none d-sm-none d-md-block"}/>
                   <h1 className={"mx-auto"}>2</h1>
                   <h4 className={"mx-auto"}>Achită online </h4>
                   <p>Achită cu Visa sau MasterCard.</p>
               </div>
               <div className="col-12 col-sm-4 step">
                   <h1 className={"mx-auto"}>3</h1>
                   <h4 className={"mx-auto"}>Primește asigurarea</h4>
                   <p>Asigurarea va fi expediată pe e-mail în scurt timp.</p>
               </div>
           </div>
           <h1>Calculează asigurarea</h1>
           <p className={"fw-lighter"}>Completează formularul de mai jos.</p>
           <div className={"row justify-content-center"}>
               <div onClick={()=>setOpenmodal(prev=>!prev)}  className={"col-12 col-sm-8 offset-2 col-md-5 pe-sm-0 toFormOne m-3"}>
                   <div className="row">
                       <div className="col-3 col-sm-3 col-md-2">
                           <img src={GalleryIcon} alt="galleryIcon"/>
                       </div>
                       <div className={"col-9 col-sm-6 col-md-8"}>
                           <h6 className={"text-white"}>ÎNCARCĂ POZE CU PAȘAPORTUL TEHNIC</h6>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-8 col-sm-7 col-md-8 text-end my-auto">
                           <p className={"aboutForm"}>Încarcă poze cu pașaportul tehnic față și verso al autovehiculului,
                               lasă-ne datele de contact și vei primi oferta de preț exact în doar câteva minute.</p>
                       </div>
                       <div className={"col-4 col-sm-3 col-md-2 my-auto"}>
                           <div className={"openForm text-danger bg-white"}>
                               <h1>+</h1>
                           </div>
                       </div>
                   </div>
               </div>
               <div onClick={()=>setOpenmodal(prev=>!prev)} className="col-12 col-sm-8 offset-2 pe-sm-0 col-md-5 toFormTwo m-3">
                   <div className="row">
                       <div className="col-3 col-sm-4 col-md-2 my-auto">
                           <img src={RenameIcon} alt="rename icon"/>
                       </div>
                       <div className={"col-3 col-sm-8 col-md-5 my-auto"}>
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
           </div>
       </section>
        <div className={"row contact"}>
           <div className="col-12 col-sm-6 col-md-7 my-auto">
               <p>Lasă-ne un număr de telefon sau click aici ca să iei legătura cu un specialist în live chat.</p>
           </div>
            <div className="col-12 col-sm-6 col-md-5 my-auto">
                <div className={"inputGroup mx-auto d-flex"}>
                    <input value={phone} onChange={(e)=>setPhone(e.target.value)} pattern={"[0-9]"} type="text" placeholder={"+373 69 22 22 22"}/>
                    <img onClick={addNumber} src={CallIconInput} alt="call icon"/>
                </div>
            </div>
        </div>
        <section className={"sectionThree"}>
            <h1 className={"text-center mb-5"}>NOVABROKER ÎȚI OFERĂ</h1>
           <div className="row justify-content-around">
               {
                   offers.map((offer, index)=><div key={index} className="col-12 col-sm-12 col-md-5 offersStyle">
                       <div className="row">
                           <div className="col-2">
                               <img src={offer.icon} alt=""/>
                           </div>
                           <div className="col-8 offset-1 mt-2">
                               <h6 className={"fw-bold"}>{offer.title}</h6>
                               <p>{offer.text}</p>
                           </div>
                       </div>
                   </div>)
               }
           </div>
            <div className="col-12 col-sm-12 col-md-10 aboutBox d-block d-sm-block d-md-flex">
                <div>
                    <h1>Asigurarea RCA electronică - recunoscută acum peste tot
                    </h1>
                    <p>Asigurarea electronică e mereu la îndemână în telefonul sau tableta ta. Află mai multe detalii în video.</p>
                    <button>Calculează</button>
                    <img src={Design} alt="design"/>
                </div>
                <div className="videoStyle">
                    <ReactPlayer width={"100%"} className={"rounded-pill"} url='https://www.youtube.com/watch?v=JcsH0R1t3b4&t=8s' />
                </div>
            </div>
        </section>
        <FormModal openModal={openModal} setOpenModal={setOpenmodal}/>
    </main>
}
export default Main