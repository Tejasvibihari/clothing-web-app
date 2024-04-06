import BasicBreadcrumbs from "../components/Breadcrumbs";
import { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";

export default function SignIn() {
    const [account, setAccount] = useState(true);
    function handleClick() {
        setAccount(!account);
    }
    return (
        <>
            <BasicBreadcrumbs
                first="Home"
                last={account ? "Signin" : "Register"} />

            {account ? <SignInForm /> : <SignUpForm />}

            {account ?
                <div className="max-w-lg mx-auto p-4">
                    {` Don't Have an Account?`}
                    <span className="text-[#ff6f61] cursor-pointer" onClick={handleClick}>
                        Sign Up
                    </span>
                </div>
                :
                <div className="max-w-lg mx-auto p-4">
                    Already Have an Account?
                    <span className="text-[#ff6f61] cursor-pointer" onClick={handleClick}>
                        Login
                    </span>
                </div>
            }

        </>
    )
}
