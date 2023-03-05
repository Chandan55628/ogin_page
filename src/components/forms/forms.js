import react from 'react';
const BasicForm = () => {
    return (
        <>
        
            <form action="">
                <div>
                <p>Login pages</p>
                    <div lebel htmlFor="email">Email</div>
                    <input type='text' name='email' id="email"className="style"></input>
                </div>
        
            <div>
                <div lebel htmlFor="passward">Passward</div>
                <input type='text' name='passward' id="passward"className="style"></input>
            </div>
            <button type="submit">Login</button>
            </form>
            
        </>

    )

}
export default BasicForm;