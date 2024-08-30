import {SignInWithProvider} from "../../../shared/components/auth/sign-in";

const Auth = () => {
    return (
        <section>
            <SignInWithProvider/>
            <SignInWithProvider provider='github'/>
        </section>
    )
}

export default Auth;