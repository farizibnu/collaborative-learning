import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["January", "February", "March", "April", "May", "June", "July", "August"]
        }
      },
      series: [
        {
          name: "Course-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        },
        {
            name: "Course-2",
            data: [50, 60, 35, 70, 80, 40, 70, 40]
        },
        {
            name: "Course-3",
            data: [80, 70, 85, 70, 90, 90, 80, 100]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="500"
              height={220}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;