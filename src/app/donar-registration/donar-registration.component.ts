import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DonarService } from '../donar.service';
import { Donar } from '../donar.model';

@Component({
  selector: 'app-donar-registration',
  templateUrl: './donar-registration.component.html',
  styleUrls: ['./donar-registration.component.css']
})
export class DonarRegistrationComponent implements OnInit {
  
  public donar = new Donar('', 0, '', '');

  public cityList: string[] = ['karur', 'chennai', 'trichy', 'erode', 'namakkal', 'coimbatore'];
  public bloodGroupList: string[] = [ 'O-', 'O+', 'B-', 'B+', 'A-', 'A+', 'AB-', 'AB+'];

  

  constructor(private donarService: DonarService) { }

  ngOnInit(): void {
  }

  cityChane(cityValue: any) {
    
 }

 bloodGroupChange(bloodGroup: any){

 }

  onClickSubmit(data: any) {
    console.log("submit called");
    var formData = data.form.value;

    this.donar.name = formData.name;
    this.donar.bloodgroup = formData.bloodgroup;
    this.donar.age = formData.age;
    this.donar.city = formData.city;

    this.donarService.save(this.donar);
 }

}
