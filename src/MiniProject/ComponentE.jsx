function ComponentE(){
   return (
    <div
    className="border-container"
      style={{
        width: "100%",
        marginLeft: "20px",
        marginRight: "20px",
        padding: "20px",
      }}
    >
        <Card text1="+254" text2="some text"/>
        <Card text1="+254" text2="some text"/>
    </div>
   )
}
 function Card(props){
        const {text1, text2,} = props;
        return(
            <div
             className="border-container"
      style={{
        backgroundColor: "rgba(0,0,0,0.4)",
        padding: "20px",
        borderRadius: "20px",
        margin: "10px",
      }}
            >
                <p>{text1}</p>
                <p>{text2}</p>
            </div>
        )
    }
export default ComponentE;