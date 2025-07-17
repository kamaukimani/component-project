function MyForm(){
    const getNameValue = (e) => {
       // console.log(e)
        console.log(e.target.value)
    }
    return (
        <div>
            <div>
                <p>
                    <label>Name</label>
                </p>
                <p>
                    <input onChange = {getNameValue}type="text" />
                </p>
                <p>
                    <label>Email</label>
                </p>
                <p>
                    <input 
                    type="email" 
                    onBlur={(e) => {getNameValue(e)}} 
                    />
                </p>
            </div>
        </div>
    )
}
export default MyForm