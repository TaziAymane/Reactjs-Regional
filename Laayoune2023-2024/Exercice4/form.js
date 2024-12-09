import { useState } from "react";


export default function FormMedcine(){
    const [id,setid] = useState('');
    const [nom,setnom] = useState('');
    const [prenom,setprenom] = useState('');
    const [spesialite,setspecialite] = useState('');
    const [text,settext] = useState('');

    function Afficher(e){
        e.preventDefault()
        settext(`Medcin ${nom.toUpperCase()} ${prenom.toUpperCase()} a pour specialité ${spesialite.toUpperCase()}`);
    }
    return (
        <form onSubmit={Afficher}>
            <label>id:</label>
            <input type='text' onChange={(e)=>{setid(e.target.value)}} />
            <label>Nom:</label>
            <input type='text' onChange={(e)=>{setnom(e.target.value)}} />
            <label>Prenom:</label>
            <input type='text' onChange={(e)=>{setprenom(e.target.value)}} />
            <label>specialite:</label>
            <select onChange={(e)=>{setspecialite(e.target.value)}}>
                <option>---------</option>
                <option value={'generaliste'}>generaliste</option>
                <option value={'cardiologue'}>cardiologue</option>
                <option value={'gastrologue'}>gastrologue</option>
            </select>
            <button>Afficher</button>
            <h3>information Medcin</h3>
            <p>{text}</p>
        </form>
    )
}