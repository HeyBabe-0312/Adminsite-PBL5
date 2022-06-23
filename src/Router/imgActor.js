import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Slider from "react-slick";

const ImgActor = ({data,openEdit}) => {
    const [dataActor, setDataActor] = useState(null);
    useEffect(()=>{
        const getDataActor = async () => {
            await axios.get(`/dv/getByIdPhim/${data}`).then(res => {
                setDataActor(res.data);
        })
        }
        getDataActor();
    },[])
    if(dataActor){
        if(dataActor.result==null){
            return (
                <div>
                    Không có thông tin diễn viên
                </div>
            )
        }
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: dataActor?dataActor.result.length>=5?5:dataActor.result.length:dataActor.result.length,
            slidesToScroll: dataActor?dataActor.result.length>5?5:dataActor.result.length:dataActor.result.length
          };
    return (
        <Slider {...settings}>
        {React.Children.toArray(
            dataActor.result.map(d =>(
            <div>
                <img src={d.avatar} className="ava-actor" onClick={function(e){openEdit(true,d.id_dien_vien);}}/>
            </div>
        )))}
        </Slider>
    )
    }
}

export default ImgActor