import React,{useState,useEffect} from 'react'
import Chart from '../charts/Chart'
import Chart1 from '../charts/Chart1'
import './main.css'
import axios from 'axios'

const Main = () => {
  //Ktra loi
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log(error+""+ errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }
  const [typeR, setTypeR] = useState("tuan");
  const [dataVenue,setDataVenue] = useState(null);
  const [dataPhim,setDataPhim] = useState(null);
  useEffect(() => {
    const getDataVenue = () => {
      axios.get('/dg/list').then(res => {
        setDataVenue(res.data);
      })
    }
    const getDataFilm = () => {
      axios.get('/phim/list').then(res => {
        setDataPhim(res.data);
      })
    }
    getDataVenue();
    getDataFilm();
  },[]);
  const getTypeR = () =>{
    var e = document.getElementById("typeRevenue");
    setTypeR(e.value);
  }
  const compare =( a, b ) => {
    if ( a.so_ve > b.so_ve ){
      return -1;
    }
    if ( a.so_ve < b.so_ve ){
      return 1;
    }
    return 0;
  }
  if(dataVenue&&dataPhim){
  return (
    <main>
      <div className='main-form'>
        <div className='chart-form'> 
          <span className='title-chart'> BIỂU ĐỒ DOANH THU </span>
          <select name="typeRevenue" id="typeRevenue" onChange={getTypeR} className='dropdown-chart'>
            <option value="tuan">1 Tuần</option>
            <option value="quy">1 Quý</option>
            <option value="nam">1 Năm</option>
          </select>
          <div className='bg-chart'>
          <ErrorBoundary>
          <Chart typeR={typeR} dataVenue={dataVenue}/>
          </ErrorBoundary>
          </div>
        </div>
        <div className='chart1-form'>
          <span className='title-chart'> BIỂU ĐỒ PHIM BÁN CHẠY </span>
          <div className='bg-chart1'>
          <ErrorBoundary>
          <Chart1 dataFilm={dataPhim.result.sort(compare).slice(0,5)}/>
          </ErrorBoundary>
          </div>
        </div>
      </div>
    </main>
  )}
}
export default Main;