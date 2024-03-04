import { useState } from "react";

//componente link de react-scroll
import { Link } from "react-scroll";

//icono de la x para cerrar el menu
import {FaTimes} from "react-icons/fa";

//icono de la barra 
import {CiMenuFries} from "react-icons/ci";

const Navbar = () => {

    //estado para verificar si esta abierto o cerrado el menu
    const [click, setClick] = useState(false); 
    const handleClick = () => setClick(!click);

    //navbar al momento de disminuir el tamaño
    const content = 
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
            <Link spy={true} smooth={true} to="Home">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
            </Link>
            <Link spy={true} smooth={true} to="Recetas">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Recetas</li>
            </Link>
            <Link spy={true} smooth={true} to="Contacto">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contacto</li>
            </Link>
        </ul>
    </div>
    return (
        <nav>
            {/* Barra  */}
            <div className="h-10vh flex juxtify-between z-50 text-white lg:py-5 px-20 py-4">

                {/* logo */}
                <div className="flex items-center flex-1">
                    <span className="text-3x1 font-bold">Grupo 6</span>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">

                            {/* enlaces */}
                            <Link spy={true} smooth={true} to="">
                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Home</li>
                            </Link>
                            <Link spy={true} smooth={true} to="">
                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Recetas</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Contacto">
                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Contacto</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>

                {/* Boton al reducir la pagina */}
                <button className="block sm:hidden transition" onClick={handleClick}>
                    {click ? <FaTimes/> : <CiMenuFries/>}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;