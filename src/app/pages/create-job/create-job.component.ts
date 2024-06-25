import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {



  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
    
  }



  onCreateJob(): void{
    alert("Job createdddd successfully!");
    this.location.back();
  }

}
