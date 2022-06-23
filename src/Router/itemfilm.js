import React from 'react'

export default function Itemfilm({sliderRef,modalOpenFilm,dataPhim}) {
  if(dataPhim){
  return (
    <div ref={sliderRef} className="keen-slider">
        {React.Children.toArray(
        dataPhim.result.map(d =>(
        <div style={{transform: "translate3d(0px, 0px, 0px)", minWidth: "998px", maxWidth: "998px"}} className="keen-slider__slide" onClick={function(event){modalOpenFilm(true,d.id_phim)}}><img src={d.poster} className='img-slide'/></div>
        )))}
    </div>
  )
  }
}
