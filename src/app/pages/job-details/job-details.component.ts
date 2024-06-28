import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Job, fake_jobs } from 'src/app/fake-jobs';


@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  job$: Observable<any> | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('id');
    //console.log(`Job id got is ${jobId}`);
    //this.job = fake_jobs.find(job=>job.id === jobId);
    if (jobId) {
      this.job$ = this.firestore.collection('jobs').doc(jobId).valueChanges();
      this.job$.subscribe(
        data => {
          if (data) {
            console.log('Job data fetched:', data); // Debugging log
          } else {
            console.error('No data found for job ID:', jobId); // Error log
          }
        },
        error => {
          console.error('Error fetching job data:', error); // Error log
        }
      );
    } else {
      console.error('Job ID is null or undefined'); // Error log
    }
  
  }

  navigateToJobContact(jobId: string) {
    console.log(`Navigating to job contact with ID: ${jobId}`);
    this.router.navigate(['/job-contact', jobId]);
  }
  

}
