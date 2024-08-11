
function Cuenta() {


    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let countDown = new Date('Aug 25, 2024 17:30:00').getTime(),
    x = setInterval(function() {

        let now = new Date().getTime(), distance = countDown - now;

        document.getElementById('dias').innerText = Math.floor(distance / (day)),
        document.getElementById('horas').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutos').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('segundos').innerText = Math.floor((distance % (minute)) / second);

    }, second)

    return (
        
            <div className="contenido">
                <h2 style={{ fontFamily: 'MiFuente2' }}>5:30 PM</h2>                
                <div className="contador">

                <div className="contenedor">
                <h2 style={{ fontFamily: 'MiFuente2' }}>Faltan</h2>
                    <div className="responsivo1">
                        <div className="cartel">
                            <div style={{ fontFamily: 'MiFuente2', color: '#FFF' }} id="dias"></div>
                            <div className="h3"><h3>Días</h3></div>
                        </div>
                        <div className="cartel">
                            <div style={{ fontFamily: 'MiFuente2', color: '#FFF' }} id="horas"></div>
                            <div className="h3"><h3>Horas</h3></div>
                        </div>
                    </div>
                    <div className="responsivo2">
                        <div className="cartel">
                            <div style={{ fontFamily: 'MiFuente2', color: '#FFF' }} id="minutos"></div>
                            <div className="h3"><h3>Minutos</h3></div>
                        </div>
                        <div className="cartel">
                            <div style={{ fontFamily: 'MiFuente2', color: '#FFF' }} id="segundos"></div>
                            <div className="h3"><h3>Segundos</h3></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
      
export default Cuenta