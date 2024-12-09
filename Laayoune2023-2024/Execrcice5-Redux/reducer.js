const initialState={
    medecins:[
        {id:10,nom :"CHARAFI", prenom :"ALI", spécialité :"gastrologue" },
        {id:11,nom :"CHARAFI", prenom :"ALI", spécialité :"gastrologue" }
    ]
}

const reducer = (state=initialState , action)=>{
    switch(action.type){
        case 'add_Medcine':
            return {...state,medecins:[...state.medecins,action.payload]}
        case 'delete_Medcine':
            return {...state,medecins:[...state.medecins.filter((d)=>{
                return d.id !== action.payload
            })]}
        case 'update_Medcine':
            const medcine = state.medecins.find((med)=>{
                    return med.id === action.payload.id
                })
                if(medcine){
                    medcine.nom=action.payload.nom
                    medcine.prenom=action.payload.prenom
                    medcine.spécialité=action.payload.spécialité
                }
                return state
        default:
            return state 
    }
}

export default reducer ;