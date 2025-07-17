import {useEffect, useState} from "react";

function SimpleEffect(){
    //useEffect(function, dependencies)
    //useEffect(function) -without dependencies
    //useEffect(function, []) -it will run once
    //useEffevt(function, [radius]) -initially when  component is mounte and when radius

    const [n, setN] = useState(0);
    const [showForm, setShowForm] = useState(false);

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
      clearInterval(interval)
    };
  }, []);
  return (
    <div>
      <h1>Unmount Component</h1>
    </div>
  );
}

export default SimpleEffect;