function Buttons(){
    const printDate = () => {
         let date = new Date()
         console.log(date)
    };
  const clicked = () => {
    console.log("Button clicked")
  };
  const alertDate = () => {
    let date = new Date()
         console.log(date)
         alert(date)
  };
  function mouseIn(){
    console.log("Mouse here")
  }
    return (
        <div>
            <p>
                <button 
                onMouseEnter ={mouseIn}
                onClick = {clicked}>Click Me</button>
            </p>
            <p>
                <button onClick= {printDate}>Print Date</button>
            </p>
            <p>
                <button onClick = {alertDate}>Alert Date</button>
            </p>
        </div>
    )
}
export default Buttons;