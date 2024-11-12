
/*

 <div id="parent">
    <div id="child">
        <h1 id="idhead">I am H1 from React</h1>
    </div> 
 </div>

*/

const ele = React.createElement(
    "div",{id:"parent"},React.createElement(
        "div",{id:"child"},[
        React.createElement("h1",{id:"idhead"},"I am H1 from React"),React.createElement("h2",{id:"idhead2`"},"I am H2 from React")
    ])

);

const head = React.createElement(
"h1",
{id:"heading",class:"label"},

"Hello word from React"
);
console.log(ele);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(ele);