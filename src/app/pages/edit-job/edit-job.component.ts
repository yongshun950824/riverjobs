import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job, fake_jobs } from 'src/app/fake-jobs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
  
  job: Job|undefined;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('id');
    this.job = fake_jobs.find(job => job.id === jobId);
  }

  onUpdateJob(): void{
    alert('Your job has been updated! ')
    this.location.back();
  }

}
