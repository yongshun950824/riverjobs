import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job, fake_jobs } from 'src/app/fake-jobs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-job-contact',
  templateUrl: './job-contact.component.html',
  styleUrls: ['./job-contact.component.css']
})
export class JobContactComponent implements OnInit {

  job$: Observable<any> | undefined;
  jobForm!: FormGroup;
  constructor(
    private route: ActivatedRoute, 
    private firestore: AngularFirestore,
    private router: Router, 
    private buider: FormBuilder,
    private location: Location
  ) { }



  ngOnInit() {
    const jobId = this.route.snapshot.paramMap.get('id');
    console.log(jobId)
    if (jobId) {
      this.job$ = this.firestore.collection('jobs').doc(jobId).valueChanges();
      this.job$.subscribe(
        data => {
          if (data) {
            console.log('Job data fetched:', data); 
          } else {
            console.error('No data found for job ID:', jobId); 
          }
        })
       
    
    this.jobForm = this.buider.group({
      name: '',
      message: `I am interested in the position`,
    });
  } 
  }

    

  onSubmitForm(): void{
    alert('Message sent');
    this.router.navigateByUrl('/jobs-list')
  }

  onCancel(): void{
    this.location.back();
  }

}
