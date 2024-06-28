import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/fake-jobs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  @Input() job: Job | undefined;
  @Input() applyButton: boolean =false;
  @Input() editButton: boolean = false;
  @Input() cancelButton: boolean = false;



  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
    
  }
  onDelete(): void{ 
    alert('You are about to permanently delete this job!');
    

  }

}
