const Widget = () =>{
    return(
       <div className="main__container__widget">
            <div className="glyphicon glyphicon-agent agentWidget"></div>
            <div className="main__container__widget_text">Atención personalizada</div>
       </div> 
    )
}

ReactDOM.createRoot(document.getElementById('upper-menu')).render(<Widget />);