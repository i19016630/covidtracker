import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
//import { defaultCipherList } from 'constants';
import { Color, Label } from 'ng2-charts';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      position: 'left',
      text: 'Worldwide Covid 19 Case Summary'
    },
    legend: {
      position: 'bottom',
      align: 'start'
    },
    // We use these empty structures as placeholders for dynamic theming. 
     scales: { xAxes: [{  ticks: {
       autoSkip: true,
       //max:500
      maxRotation: 0,
     minRotation: 0
     }}], 
    
    
    
    yAxes: [{}] },
    };

    public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012']; 

    public barChartType: ChartType = 'bar';

    public barChartLegend = true;

    public barChartData: ChartDataSets[] = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }, 
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
      ];
  constructor(private oip: DataService) { }

  ngOnInit(){
   
    this.populateChart();
  }
  populateChart(){
    this.oip.getData().then(result=>{
      this.barChartLabels = Object.values(result).map(key => key.Country);
      let confirmed = Object.values(result).map(key => key.Confirmed);
      let deaths = Object.values(result).map(key => key.Deaths);
      let recovered = Object.values(result).map(key => key.Recovered);

     this.barChartData = [{
      data: deaths, label: 'Deaths'
    },
    {
      data: confirmed,label: 'Confirmed'
    },
    {
      data: recovered,label: 'Recovered'
    }];

  }).catch(error=>{
    console.log(error);
  })
}
}
