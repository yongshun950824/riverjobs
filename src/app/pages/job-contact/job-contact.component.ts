import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job, fake_jobs } from 'src/app/fake-jobs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-job-contact',
  templateUrl: './job-contact.component.html',
  styleUrls: ['./job-contact.component.css']
})
export class JobContactComponent implements OnInit {

  job: Job|undefined;
  jobForm!: FormGroup;
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private buider: FormBuilder,
    private location: Location
  ) { }



  ngOnInit() {
    const jobId = this.route.snapshot.paramMap.get('id');
    this.job = fake_jobs.find(job => job.id === jobId);


    this.jobForm = this.buider.group({
      name: '',
      message: `I am interested in the ${this.job?.title} position`,
      
    })
  }

  onSubmitForm(): void{
    alert('Message sent');
    this.router.navigateByUrl('/jobs-list')
  }

  onCancel(): void{
    this.location.back();
  }

}
