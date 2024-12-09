import { Link } from "react-router-dom";

export default function Header(){
    return (
        <nav className="container">
            <Link style={{margin:"5px"}} to={'/ListMedcins'}>ListMedcins</Link>
            <Link  to={'/Add_Medcins'}>AddMedcins</Link>
        </nav>
    )
}