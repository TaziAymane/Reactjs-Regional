export default function Afficher(){
    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Specialites</th>
                </tr>
            </thead>
            <tbody>
                {
                    medecins.map((med,i)=>{
                        <tr key={i}>
                            <td>{med.id}</td>
                            <td>{med.nom}</td>
                            <td>{med.prenom}</td>
                            <td>{med.specialite}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}