import React from "react";
import {SiAddthis} from 'react-icons/si'
import ImgActor from "./imgActor";

const ItemCarouActor = ({dataFilm,openFormAdd,openFormEdit}) => {
    if(dataFilm){
    return (
        <>
        {React.Children.toArray(
            dataFilm.result.map(d =>(
        <div className="item-container">
        <h2 className="title-film-actor">{d.ten_phim}<SiAddthis className="icon-add-actor" onClick={function(event){openFormAdd(true,d.id_phim)}}/></h2>
        <ImgActor data={d.id_phim} openEdit={openFormEdit}/>
        </div>
        )))}
        </>
    );
    }
}
export default ItemCarouActor;