import './Search.css'

const Search = () => {
  return (
    <div>
      <div className="search"> 
        <div className='searchbar'>
          <input className='input' type="text" />
          <button className='searchbtn'>SEARCH</button>
        </div>
      </div>
    </div>
  )
}

export default Search;