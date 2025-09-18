import { Navbar } from "../../components/Navbar/index"
import { Signup } from "../../components/Signup/index"

export const AuthSignup = () => {
    return (
        <>
            <Navbar />
            <main className="flex justify-center items-center mt-32" style={{marginTop:'8rem'}}>
                <Signup />
            </main>
        </>
    )
}
