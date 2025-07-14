function C1(){
    return <h1>Combined exports</h1>;

}
 function C2(){
        return <h1>This the C2 component</h1>;
    }
function MainComponent(){
    return<h1>This the main component</h1>;
}
export {C1,C2};
export default MainComponent;