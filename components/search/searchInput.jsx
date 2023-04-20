import styls from './styleInput.module.css'
const SearchInput =({label,change})=>{
    return <input className={styls.searchinput} placeholder={label} type="text"  onChange={change}></input>
  
}

export default SearchInput;