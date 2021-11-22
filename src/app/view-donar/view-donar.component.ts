import { Component, OnInit } from '@angular/core';
import { DonarService } from '../donar.service';

@Component({
  selector: 'app-view-donar',
  templateUrl: './view-donar.component.html',
  styleUrls: ['./view-donar.component.css']
})
export class ViewDonarComponent implements OnInit {

  donarsList: any[]= [];
  searchText: string = '';
 

  constructor(public donarService:DonarService) {
    
   }

  ngOnInit() {
      this.viewDonarsList();
  }
  
  name = 'Angular';

   viewDonarsList(){
    this.donarService.viewDonarsList().subscribe((data:any) => {
      this.donarsList=data
    });
  }

  searchDonar(event: any){
    console.log("search text = " + this.searchText);
    this.donarService.searchDonarsList(this.searchText).subscribe((data:any) => {
      this.donarsList=data
    });
  }

  deleteDonar(id: any) {
      console.log("delete id = " + id);
      this.donarService.deleteDonar(id).then(response =>{
      this.viewDonarsList();
     })
  }
}
