const appRoot = document.getElementById("app");
let applicationState = {
    msgEnabled : false
}
const onButtonClick = ()=>{
    applicationState.msgEnabled = !applicationState.msgEnabled;
    renderApp();
} 

const renderApp = () =>{
    const template = 
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick = {onButtonClick}>{applicationState.msgEnabled ? 'Hide message': 'Show message'}</button>
            <p>
                {applicationState.msgEnabled ? 'Message' : undefined }
            </p>
            
        </div>
        
    
    ReactDOM.render(template, appRoot);
}
renderApp();