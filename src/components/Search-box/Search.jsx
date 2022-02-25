import './search-box.css'

export const Search = ({handleChange, placeholder}) => {
  return (
    <div className='search-box'>
        <input 
            className='search'
            type="search"
            placeholder={placeholder}
            onChange={handleChange} 
        />
    </div>
  )
}
