import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { delete_Medcine } from "./action";

export default function LisMedcins(){
    const data = useSelector(data=>data.medecins)
    const dispatch = useDispatch()
    return(
        <table className="container table table-striped">
            <tr>
                <th>id</th>
                <th>nom</th>
                <th>prenom</th>
                <th>spécialité</th>
                <th>Action</th>
            </tr>
            {
                data.map((med,i)=>{
                    return (
                        <tr key={i}>
                        <td>{med.id}</td>
                        <td>{med.nom}</td>
                        <td>{med.prenom}</td>
                        <td>{med.spécialité}</td>
                        <td>
                            <Link className='btn btn-success' to={`/modifier/${med.id}`}>Modifier</Link>
                            <button className="btn btn-danger" onClick={()=>{dispatch(delete_Medcine(med.id))}}>Supprimer</button>
                        </td>
                    </tr>
                    )
                })
            }
        </table>
    )
}