import React from 'react'
import Chart from "react-apexcharts";

const DashboardLikesStat = () => {
    const chartData = {
        series: [
          {
            name: "Likes",
            data: [30, 40, 45, 50, 55, 60, 70, 80, 90, 100, 110, 120], // Jumlah likes per bulan
          },
        ],
        options: {
          chart: {
            type: "line",
            height: 350,
          },
          xaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ], // Nama bulan
          },
        },
      };
    
      return (
        <div className='w-full'>
            <p className='text-xl font-bold mb-4'>Likes Statistic</p>
            <div className='border-3 border-slate-200 flex p-4 rounded-3xl'>
                <div className="app">
                    <div className="row">
                        <Chart
                        options={chartData.options}
                        series={chartData.series}
                        type="line"
                        width="720"
                        height={220}
                        />
                    </div>
                </div>
            </div>
        </div>
        
      );
}

export default DashboardLikesStat