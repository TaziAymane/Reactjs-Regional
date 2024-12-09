
export const add_Medcine = (medecins)=>{
    return {type:'add_Medcine',payload:medecins}
};

export const delete_Medcine = (id)=>{
    return {type:'delete_Medcine',payload:id}
};

export const update_Medcine = (medecins)=>{
    return {type:'update_Medcine',payload:medecins}
};