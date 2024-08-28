

function Signup() {
    return (
        <>
        <div>
            <div className = "ml-10">
                Sign-up!
                <div className = "flex flex-col w-24">
                    <input type="text" placeholder="username" className = "mt-3 mb-5 border-2 border-black"/>
                    <input type="password" placeholder="password" className = "border-2 border-black"/>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Signup;