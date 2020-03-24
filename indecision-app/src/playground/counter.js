console.log("APP");

let applciation = {
    title: "Indecision app",
    subtitle: "Put your life in the hands of computer",
    options: ["one", "two"]
}
console.log(applciation.options.length > 0)
function getOptions(applciation){
    return applciation.options.length > 0 ? 'Here are your options' : undefined
}
let template =
<div>
    <h1>{applciation.title}</h1>
    <p>{applciation.subtitle}</p>
    <p>{applciation.options.length > 0 ? 'Here are your options' : undefined}</p>
</div>;

let count = 0;
const minusOne = () => {
    count--;
}
const reset = () => {
    count =0 ;
}
const templateTwo = (
    <div>
        <h1>Count:{count}</h1>
        <button onClick = {minusOne}>-1</button>
        <button onClick = {reset}>reset</button>
    </div>
)
let appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot)