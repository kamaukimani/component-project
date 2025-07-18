import {useEffect, useState} from "react";
import chickenimg from "./../../assets/Chicken.jpg"

function SimpleEffect(){
    //useEffect(function, dependencies)
    //useEffect(function) -without dependencies
    //useEffect(function, []) -it will run once
    //useEffevt(function, [radius]) -initially when  component is mounte and when radius

    const [n, setN] = useState(0);
    const [showForm, setShowForm] = useState(false);

    {/*  this displays 5 chickens 
    const [chickens, setChickens] = useState([1,2,3,4,5])
    

    */}
    //want to display chickens dynamically through
    //aray manipulation 
    const [chickens, setChickens] = useState([])

    useEffect(() => {
      console.log("useState has run")
      //set n to something
      //1 chicken to represent or be equal to 5
      let k = n/5  // k represents grouped data
      k = Math.floor(k)
      let chickenArr = [];
      for(let i =0; i < k; i++){
        chickenArr.push(i +1);
      }
      console.log(chickenArr)
      setChickens(chickenArr)
    }, [n])

    const getStatus =() => {
        if (showForm === true) {
      return "Hide Form";
    }
    return "Show Form";
    }
    // Whenever state change occurs
  // It triggures a rerender of the component
  // if the useEffect does not have dependency it will rerender

    
    // useEffect(() => {
    //     console.log("useEffect has run")
    
    // });
    // Using use Effect with empty dependency
  // Empty dependcy useEffect only once Intital render Only

     useEffect(() => {
    console.log("useEffect has run");
  }, []);
    return (
        <div>
            <h1>Simple Effect</h1>
            <div>
                <button
                    onClick={() => {
                    setN(n - 1);
                    }}
                  >
                    -
                </button>
                <span>{n}</span>
                <button
                    onClick={() => {
                    setN(n + 1);
                    }}
                    >
                    +
                </button>
                <div>
                    {chickens.map((chicken, index) => {
                            return(
                                <img 
                                src ={chickenimg}
                                key={index}
                                style ={{
                                    width: "50px",
                                    margin: "10px",
                                
                                }}
                                
                                />
                            )
                    })}
                </div>
         </div>
         {/* <button
        onClick={() => {
          if (showForm === true) {
            setShowForm(false);
          } else {
            setShowForm(true);
          }
        }}
      >
        {getStatus()}
      </button> */}
      <button onClick={() => setShowForm(!showForm)}>{getStatus()}</button>

      <MyForm showForm={showForm} />
        </div>
    )
}


function MyForm(props) {
  const { showForm } = props;

  if (showForm === false) {
    return null;
  }

  return (
    <div>
      <h3>This my Form</h3>
      <input />
        <UnMountComponent />
    </div>
  );
}

function UnMountComponent() {
    let k=1;
    const [position, setPosition] = useState({x: 0,y: 0})
    useEffect(() => {
      const handleMouseMove = (event) => {
        console.log("Mouse position");
        setPosition({
          x: event.clientX,
          y: event.clientY,
        });
      };
      window.addEventListener("mousemove", handleMouseMove)
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, [])
  useEffect(() => {
    console.log("Show Form has been Mounted");
    //kill interval
    let interval = setInterval(() => {
        console.log("k is", k)
        k= k + 1
    }, 1000);

    // //Clean UP Function<Clean up any memory<memory leakage> main thread>

    return () => {
      console.log("Component Unmounted");
      clearInterval(interval)   //clears a memory leakage
    };
  }, []);
  return (
    <div>
      <h1>Unmount Component</h1>
      <div>
        <p>X Axios {position.x}</p>
        <p>Y Axios {position.y}</p>
      </div>
    </div>
  );
}

export default SimpleEffect;