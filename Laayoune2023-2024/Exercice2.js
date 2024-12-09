//1) donner la commade pour créer un projet react 
//npx create-react-app nom_de_dossier
//2)
export default function ListSpecialité() {
    const specialités = ["generaliste", "cardiologue", "gastrologue"];
    return (
    <ul>
    {specialités.map((d,i)=>{
        return <p>{d}</p>
    })}
    </ul>)}