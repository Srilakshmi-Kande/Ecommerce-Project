import { Navbar } from "../../components/Navbar"
import { Login } from "../../components/Login/index"

export const AuthLogin = () => {
    return (
        <>
            <Navbar />
            <main className="flex justify-center items-center mt-32" style={{marginTop:'8rem'}}>
                <Login />
            </main>
        </>
    )
}
