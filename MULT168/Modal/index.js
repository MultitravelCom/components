const Widget = () =>{
    return(
       <div className="main__container__widget">
            <div className="glyphicon glyphicon-agent agentWidget"></div>
            <div className="glyphicon glyphicon-info-circle">Atención personalizada</div>
       </div> 
    )
}

ReactDOM.createRoot(document.getElementById('upper-menu')).render(<Widget />);