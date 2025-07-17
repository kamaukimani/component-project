{/* function FormState(){
    return (
        <div>
            <div>
                <p>
                    <label>Circle Value</label>
                </p>
                <p>
                    <input type="number" value="radius"/>
                </p>
            </div>
            <div>For a circle with radius {radius} Area is {areaCircle(radius)}</div>
        </div>
    )
} */}
 import { useState } from "react";

function FormState() {
  const [radius, setRadius] = useState(20);

  const areaCircle = (radius) => {
    return radius * radius * 3.142;
  };

  const updateRadiusVal = (e) => {
    // console.log(e);
    //console.log(e.target.value);
    setRadius(e.target.value);
  };

  return (
    <div>
      <div>
        <p>
          <label>Circle Value</label>
        </p>
        <p>
          <input type="number" value={radius} onChange={updateRadiusVal} />
        </p>
      </div>
      <div>
        For a circle with radius <b>{radius}</b> Area is{/*{" "}*/}
        <b>{areaCircle(radius)}</b>
      </div>
      <Circle radius={radius}/>
    </div>
  );
}

function TestComponent() {
  console.log("Test Compnent Render");
  return (
    <div>
      <h1>Test Component</h1>
    </div>
  );
}

function Circle(props) {
  const { radius } = props;
  console.log("Circle Component Render");

  const getSize = (radius) => {
    let r = parseInt(radius);
    return `${r * 2}px`;
  };

  return (
    <>
    <div
      style={{
        width: getSize(radius),
        height: getSize(radius),
        borderRadius: "2000px",
        backgroundColor: "rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

 {/* <span style={{fontSize:getTextSize(radius)}}>r={parseInt(radius)}</span> */}
    <span>r={parseInt(radius)}</span>
    </div>
    <TestComponent />
    </>
  );
}

     export default FormState;
