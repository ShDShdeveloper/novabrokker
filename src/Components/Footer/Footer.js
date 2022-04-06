import './Footer.scss'
import LogoTwo from '../../Images/logoTwo.svg'
import Visa from '../../Images/visa.svg'
function Footer(){
    return <footer className={"footer"}>
        <div className={"d-block d-sm-block d-md-flex text-center justify-content-sm-center justify-content-md-between navItems"}>
            <div>
                <img src={LogoTwo} alt="logo novabrokker"/>
            </div>
            <div>Home Page</div>
            <div>Asigurare RCA</div>
            <div>Asigurare RCA</div>
            <div className={"d-flex justify-content-center"}><p className={"whiteCircle"}> </p> <p className={"blueCircle"}> </p>
                <img src={Visa} className={"visa ms-sm-5 ms-md-3 ms-lg-5"} alt="visa icon"/>
            </div>

        </div>
        <hr/>
        <div className={"text-center text-white mt-5"}>COPYRIGHT NOVABROCKER 2022</div>
    </footer>
}
export default Footer