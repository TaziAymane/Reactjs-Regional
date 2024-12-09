import LisMedcins from "./ListMedcins";
import Add_Medcins from "./Add_Medcins";
import Header from "./Header";
import Acceuil from "./Acceuiel";
import Modifier from "./Modifier";
import {BrowserRouter , Routes , Route} from 'react-router-dom';
export default function App(){
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Acceuil />} />
            <Route path="/ListMedcins" element={<LisMedcins />} />
            <Route path="/Add_Medcins" element={<Add_Medcins />} />
            <Route path="/modifier/:id" element={<Modifier />} />
        </Routes>
        </BrowserRouter>
    )
}