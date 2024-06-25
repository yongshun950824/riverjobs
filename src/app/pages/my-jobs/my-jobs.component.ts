import { Component, OnInit } from '@angular/core';
import { Job, fake_jobs } from 'src/app/fake-jobs';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.css']
})
export class MyJobsComponent implements OnInit {

  jobs: Job[] = [];
  constructor() { }

  ngOnInit(): void {
    this.jobs = fake_jobs;

  }

}
