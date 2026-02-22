import '../../App.css'
import {Routing} from "@/common/routing";
import {Header} from "@/src/common/components/Header/Header.tsx";
import s from './App.module.css'

function App() {

    return (
        <>
            <Header/>
            <div className={s.layout}>
                <Routing/>
            </div>
        </>
    )
}

export default App
