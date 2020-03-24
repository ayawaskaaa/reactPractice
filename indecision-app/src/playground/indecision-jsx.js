let application = {
    title: "Indecision app",
    subtitle: "Put your life in the hands of computer",
    options: []
}
const onFormSubmit = (e) =>{
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        application.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
}
const onRemoveAll = () => {
    application.options = [];
    renderApp();
}
const onMakeDesicion = () => {
    const randomNum = Math.floor(Math.random()*application.options.length);
    const option = application.options[randomNum];
    alert(option);
    renderApp();
}
let appRoot = document.getElementById("app");
const renderApp = () =>{
    let template =
        <div>
            <h1>{application.title}</h1>
            <p>{application.subtitle}</p>
            <p>{application.options.length > 0 ? 'Here are your options' : undefined}</p>
            <button disabled = {application.options.length === 0} onClick = {onMakeDesicion}>What should I do</button>
            <button onClick = {onRemoveAll}>Remove all</button>
            <ol>
                { 
                    application.options.map((option) => <li key="{option}">Option: {option}</li>)
                }
            </ol>

            <form onSubmit = {onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add option</button>
            </form>
        </div>;



ReactDOM.render(template, appRoot)
}

renderApp();
