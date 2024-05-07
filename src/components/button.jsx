function Boton({...props}) {

    return (
        <div>
          <button onClick={props.onClick} >{props.texto} 
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        )
    }
      
export default Boton