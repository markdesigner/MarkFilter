import { DataService } from './service/data.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http: HttpClient,private data:DataService) { }

  search_box: string;
  location: string = '左營區';
  tag_pay: boolean;
  tag_web: boolean;
  tag_free: boolean;
  resultsNo: number;
  infoTotal:number;
  tag_status = {};
  tag_list= [
    {
      name: '要買門票',
      statusName: 'Ticketinfo',
      status: false
    }, 
    {
      name: '有官網',
      statusName: 'Website',
      status: false
    }, 
    {
      name: '免費參觀',
      statusName: 'Ticketinfo',
      status: false
    }, 


  ];
  info = [];
  ngOnInit(): void {
    this.getData(this.location);
  }
  getData(area) {
    this.http.get<any>(`https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&q=${area}`)
      .subscribe(data => {
        this.info = data.result.records;
        this.infoTotal=this.info.length;
        console.log(this.infoTotal);
      })
  }
test(test){
  this.data.result=test;
  this.data.tt();
}
  tagFilter(tagStatusName, checked, tagName) {
    if (checked) {
      let newInfo = this.info.filter(x => x[tagStatusName] != "")
      this.info = newInfo;
    } else {
      this.getData(this.location);
    }

  }
 
  search(search_box) {
    this.getData(search_box);
  }

  // toggleList(checked, tagName, tagStatusName) {
  //   if (checked) {

  //   }
  //   else {
  //     for (let i of this.tag_list) {
  //       if (i['name'] == tagName) {
  //         i['status'] = false;
  //       }
  //     }
  //   }
  // }

}
