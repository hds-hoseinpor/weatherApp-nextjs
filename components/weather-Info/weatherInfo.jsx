import styls from './weatherInfo.module.css'

const WeatherInfo =({temp,city,sky,humidity,feels,pressure})=>{
    return <div  > <div><h1 className={styls.cityTemp}>{Math.round(temp )+"c" } </h1>
    <span className={styls.cityName}>{city}</span>
    <span className={styls.citySky} >{sky}</span></div>
    <h3 className={styls.detailTitle}>Weather details</h3>
    <div className={styls.detailContainer}>
    <span className={styls.cityDetail }>humidity : {humidity}</span>
    <span className={styls.cityDetail }>feels : {feels}</span>
    <span className={styls.cityDetail }>pressure : {pressure}</span>
    </div >
    
    </div>
  
}

export default WeatherInfo;