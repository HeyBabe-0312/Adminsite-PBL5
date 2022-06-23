import React from 'react'

var arr = Array(7).fill(0);
export default function Lichchieu({openInfo}) {
    const daily = ["CHỦ NHẬT", "THỨ HAI", "THỨ BA", "THỨ TƯ","THỨ NĂM","THỨ SÁU","THỨ BẢY"];
    const today = new Date().toISOString().slice(0, 10);
    const d = new Date(today);
    let day = d.getDay();
    getValueDay(day);
  return (
    <div>
        <a className={arr[0]==0?'item-lichchieu sunday':'item-lichchieu'} onClick={function(event){openInfo(true,0)}}>{daily[arr[0]]}</a>
        <a className={arr[1]==0?'item-lichchieu sunday':'item-lichchieu'} onClick={function(event){openInfo(true,1)}}>{daily[arr[1]]}</a>
        <a className={arr[2]==0?'item-lichchieu sunday':'item-lichchieu'} onClick={function(event){openInfo(true,2)}}>{daily[arr[2]]}</a>
        <a className={arr[3]==0?'item-lichchieu sunday':'item-lichchieu'} onClick={function(event){openInfo(true,3)}}>{daily[arr[3]]}</a>
        <a className={arr[4]==0?'item-lichchieu sunday':'item-lichchieu'} onClick={function(event){openInfo(true,4)}}>{daily[arr[4]]}</a>
        <a className={arr[5]==0?'item-lichchieu sunday':'item-lichchieu'} onClick={function(event){openInfo(true,5)}}>{daily[arr[5]]}</a>
        <a className={arr[6]==0?'item-lichchieu sunday':'item-lichchieu'} onClick={function(event){openInfo(true,6)}}>{daily[arr[6]]}</a>
    </div>
  )
}
function getValueDay (val){
    if(val == 0) arr = [0,1,2,3,4,5,6];
    else{
        let j = 0;
        for(let i = val; i < 7; i++,j++){
            arr[j]=i;  
        }
        for(let i = 0; i < val;i++,j++){
            arr[j]=i;
        }
    }
}