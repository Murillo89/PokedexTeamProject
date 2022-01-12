import './Home.css'
// import Search from './Search'

const Home = () => {

  return(
    <div className='home-container'>
      <div className='intro'>
        HELLO TYPE IN THE POKEMON OF YOUR CHOICE
      </div>
      <div className="container">
        <div className="card">
          <div className='pokepic'></div>
          <div className='pokename'>Pikachu</div>
          <div className="pokeid">
            <div className="pid">Id:</div>
            <div className="no">25</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;