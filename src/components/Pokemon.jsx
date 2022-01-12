import './Pokemon.css'


const Pokemon = () => {



  return(
    <div className='main-container'>
      <div className='pokemon-name rtext2'>
        Pikachu
      </div>
      <div className='pokemon-pic-container'>
        <div className='pokemon-pic'></div>
          <div className='black-box'>
        </div>       
      </div>
      <div className='stats-container'>
        <div className="box-container">
          <div className='box b1'>
            <div className='id rtext'>
              <div>ID No:</div>
              <div>25</div>
            </div>
            <div className="type  rtext">
              <div>Type:</div>
              <div className="type-container  rtext">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <div>Electric</div>  
                        <div>dark</div>               
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className='box b2'>
            <div className="abilities  rtext">
              <div>Abilities:</div>
              <div className='abilities-container  rtext'>
                <div>lightning-rod</div>
                <div>static</div>
              </div>
            </div>
          </div>
        </div>       
        <div className='box b3'>
          <div className="stats  rtext">
            <div>Stats</div>
            <table className='table  rtext'>
              <tbody>
              <tr>
                <td>HP:</td>
                <td>35</td>                                                                            
              </tr>
              <tr>
                <td>Attack:</td>
                <td>55</td>                                                               
              </tr>
              <tr>
                <td>Defense:</td>
                <td>40</td>
              </tr>  
              <tr>
                <td>Special Attack:</td> 
                <td>50</td>
              </tr>   
              <tr>
                <td>Special Defense:</td>
                <td>50</td>
              </tr>  
              <tr>
                <td>Speed:</td> 
                <td>90</td> 
              </tr>
              </tbody>             
            </table>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Pokemon;