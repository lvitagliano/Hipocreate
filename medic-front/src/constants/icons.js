import React from 'react'
import {
    GiPig, GiCow, GiTrafficLightsReadyToGo, GiBananaPeeled, GiFruitTree, GiShinyApple, GiPeach, GiPear, GiCoffeeBeans, GiCheckeredFlag, GiChicken, GiCube,
    GiStrawberry, GiCctvCamera, GiCutLemon, GiTomato, GiShipWheel, GiCarrot, GiCardboardBox, GiPumpkin, GiCrane, GiFactory, GiCorn
} from "react-icons/gi";

import { GrDocumentText } from "react-icons/gr";
import {
    MdAccountBalance, MdGavel, MdFingerprint, MdFlightLand, MdFlightTakeoff, MdHome, MdLockOpen, MdLockOutline,
    MdBusiness, MdLocationCity, MdVpnKey, MdFlag, MdAttachMoney, MdAttachFile, MdDirectionsSubway, MdHourglassEmpty
} from "react-icons/md";
import {
    FaBalanceScale, FaSeedling, FaIndustry, FaCoins, FaThermometerHalf, FaChartLine,
    FaFilePdf, FaFileDownload, FaBarcode, FaCertificate, FaClipboardList, FaCogs, FaDolly, FaDollyFlatbed, FaShippingFast,
    FaFish, FaFolderOpen, FaSignature, FaFileSignature, FaTractor, FaTruckMoving, FaRegLemon
} from "react-icons/fa";
import {
    IoIosBusiness, IoMdBoat, IoIosSnow, IoMdNotifications, IoIosEye, IoIosWarning, IoMdCheckmarkCircle, IoMdPie, IoMdPrint
} from "react-icons/io";
import { ImCalendar, ImLeaf, ImCheckmark, ImQrcode, ImAirplane} from "react-icons/im";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BsInboxesFill } from "react-icons/bs";
import { SiLighthouse } from "react-icons/si";

export const ICONS = [
    { value: 'Semilla', label: <p><FaSeedling size={25} /> Semilla</p> },
    { value: 'Maiz', label: <p><GiCorn size={25} /> Maiz</p> },
    { value: 'Zanahoria', label: <p><GiCarrot size={25} /> Zanahoria</p> },
    { value: 'Tree', label: <p><GiFruitTree size={25} /> Árbol Frutal</p> },
    { value: 'Apple', label: <p><GiShinyApple size={25} /> Manzana</p> },
    { value: 'Banana', label: <p><GiBananaPeeled size={25} /> Banana</p> },
    { value: 'Durazno', label: <p><GiPeach size={25} /> Durazno</p> },
    { value: 'Pera', label: <p><GiPear size={25} /> Pera</p> },
    { value: 'Cafe', label: <p><GiCoffeeBeans size={25} /> Cafe</p> },
    { value: 'Frutilla', label: <p><GiStrawberry size={25} /> Frutilla</p> },
    { value: 'Tomate', label: <p><GiTomato size={25} /> Tomate</p> },
    { value: 'Calabaza', label: <p><GiPumpkin size={25} /> Calabaza</p> },
    { value: 'Citricos', label: <p><GiCutLemon size={25} /> Citricos</p> },
    { value: 'Limon', label: <p><FaRegLemon size={25} /> Limon</p> },
    { value: 'Hoja4', label: <p><ImLeaf size={25} /> Hoja</p> },
    { value: 'Cerdo', label: <p><GiPig size={25} /> Cerdo</p> },
    { value: 'Vaca', label: <p><GiCow size={25} /> Vaca</p> },
    { value: 'Pescado', label: <p><FaFish size={25} /> Pescado</p> },
    { value: 'Pollo', label: <p><GiChicken size={25} /> Pollo</p> },
    { value: 'Casa', label: <p><MdHome size={25} /> Casa</p> },
    { value: 'Financiero', label: <p><MdAccountBalance size={25} /> Financiero</p> },
    { value: 'Ciudad', label: <p><MdLocationCity size={25} /> Ciudad</p> },
    { value: 'Negocios', label: <p><IoIosBusiness size={25} /> Negocios</p> },
    { value: 'Industria', label: <p><FaIndustry size={25} /> Industria</p> },
    { value: 'Fabrica', label: <p><GiFactory size={25} /> Fabrica</p> },
    { value: 'NegociosOtro', label: <p><MdBusiness size={25} /> Negocios 2</p> },
    { value: 'Llave', label: <p><MdVpnKey size={25} /> Llave</p> },
    { value: 'Huella', label: <p><MdFingerprint size={25} /> Huella</p> },
    { value: 'Bloqueado', label: <p><MdLockOpen size={25} /> Bloqueado</p> },
    { value: 'Desbloqueado', label: <p><MdLockOutline size={25} /> Desbloqueado</p> },
    { value: 'Legal2', label: <p><MdGavel size={25} /> Legal 1</p> },
    { value: 'Legal3', label: <p><FaBalanceScale size={25} /> Legal 2</p> },
    { value: 'CodigoBarra', label: <p><FaBarcode size={25} /> Codigo Barra</p> },
    { value: 'CodigoQR', label: <p><ImQrcode size={25} /> Codigo QR</p> },
    { value: 'Bandera', label: <p><MdFlag size={25} /> Bandera</p> },
    { value: 'Llegada', label: <p><GiCheckeredFlag size={25} /> Llegada</p> },
    { value: 'Moneda', label: <p><MdAttachMoney size={25} /> Moneda</p> },
    { value: 'Dinero', label: <p><FaCoins size={25} /> Dinero</p> },
    { value: 'Adddocument', label: <p><MdAttachFile size={25} />Adjuntar Documento</p> },
    { value: 'Documento', label: <p><GrDocumentText size={25} />Documento</p> },
    { value: 'Frio', label: <p><IoIosSnow size={25} /> Frio</p> },
    { value: 'Aviso', label: <p><IoMdNotifications size={25} /> Aviso</p> },
    { value: 'Calendario', label: <p><ImCalendar size={25} /> Calendario</p> },
    { value: 'Ojo', label: <p><IoIosEye size={25} /> Observar</p> },
    { value: 'Warning', label: <p><IoIosWarning size={25} /> Cuidado</p> },
    { value: 'Termometro', label: <p><FaThermometerHalf size={25} /> Termometro</p> },
    { value: 'Tilde', label: <p><IoMdCheckmarkCircle size={25} /> Tilde</p> },
    { value: 'Tildeotro', label: <p><ImCheckmark size={25} /> Tilde 2</p> },
    { value: 'Graficos', label: <p><IoMdPie size={25} /> Graficos 1</p> },
    { value: 'Graficos2', label: <p><FaChartLine size={25} /> Graficos 2</p> },
    { value: 'Pdf', label: <p><FaFilePdf size={25} /> PDF</p> },
    { value: 'Descarga', label: <p><FaFileDownload size={25} /> Descarga</p> },
    { value: 'Impresora', label: <p><IoMdPrint size={25} /> Impresora</p> },
    { value: 'Vigilancia', label: <p><GiCctvCamera size={25} /> Vigilancia</p> },
    { value: 'Certificado', label: <p><FaCertificate size={25} /> Certificado</p> },
    { value: 'Certificado2', label: <p><AiOutlineSafetyCertificate size={25} /> Protección</p> },
    { value: 'Portapapeles', label: <p><FaClipboardList size={25} /> Portapapeles</p> },
    { value: 'Herramienta2', label: <p><FaCogs size={25} /> Herramienta</p> },
    { value: 'Carpeta', label: <p><FaFolderOpen size={25} /> Carpeta</p> },
    { value: 'Relojdearena', label: <p><MdHourglassEmpty size={25} /> Reloj de arena</p> },
    { value: 'Bandejadeentrada', label: <p><BsInboxesFill size={25} /> Bandeja de entrada</p> },
    { value: 'Firma', label: <p><FaSignature size={25} /> firma</p> },
    { value: 'Firma2', label: <p><FaFileSignature size={25} /> firma 2</p> },
    { value: 'Empaquetar', label: <p><GiCardboardBox size={25} /> Empaquetar</p> },
    { value: 'Paquete', label: <p><GiCube size={25} /> Paquete</p> },
    { value: 'Carrito', label: <p><FaDolly size={25} /> Carrito 1</p> },
    { value: 'Carrito2', label: <p><FaDollyFlatbed size={25} /> Carrito 2</p> },
    { value: 'Envio', label: <p><FaShippingFast size={25} /> Envio</p> },
    { value: 'Tractor', label: <p><FaTractor size={25} /> Tractor</p> },
    { value: 'Camion', label: <p><FaTruckMoving size={25} /> Camion</p> },
    { value: 'Tren', label: <p><MdDirectionsSubway size={25} /> Tren</p> },
    { value: 'Avion', label: <p><ImAirplane size={25} /> Avion</p> },
    { value: 'Avionl', label: <p><MdFlightLand size={25} /> Avion LLega</p> },
    { value: 'Avionp', label: <p><MdFlightTakeoff size={25} /> Avion Parte</p> },
    { value: 'Timon', label: <p><GiShipWheel size={25} /> Timon</p> },
    { value: 'Puerto', label: <p><SiLighthouse size={25} /> Puerto</p> },
    { value: 'Grua', label: <p><GiCrane size={25} /> Grua Puerto</p> },
    { value: 'Barco', label: <p><IoMdBoat size={25} /> Barco</p> },
]