import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'

const Chart1 = ({dataFilm}) =>{
  if(dataFilm){
  var phimTitles = dataFilm.map(phim => phim.ten_phim.substring(0,15));
  var phimScores = dataFilm.map(phim => phim.so_ve);
    return (
        <Bar height={250} width={430}
            data={{
              labels: [
                phimTitles[0]?phimTitles[0]+"...":"Null",
                phimTitles[1]?phimTitles[1]+"...":"Null",
                phimTitles[2]?phimTitles[2]+"...":"Null",
                phimTitles[3]?phimTitles[3]+"...":"Null",
                phimTitles[4]?phimTitles[4]+"...":"Null"
              ],
              datasets: [
                {
                  xAxes: [{
                    type: 'time',
                    position: 'bottom',
                    time: {
                      displayFormats: {'day': 'MM/YY'},
                      tooltipFormat: 'DD/MM/YY',
                      unit: 'month',
                     }
                  }],
                  label: "Số vé bán ra",
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                  ],
                  borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)'
                  ],
                  data: [phimScores[0], phimScores[1], phimScores[2], phimScores[3], phimScores[4]],
                  borderWidth: 1
                }
              ]
            }}
            options={{
              legend: { display: false },
              title: {
                display: true,
                text: "BIỂU ĐỒ PHIM BÁN CHẠY"
              }
            }}
          />
    )}}
export default Chart1;