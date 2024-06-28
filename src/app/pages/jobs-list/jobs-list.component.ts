import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Job, fake_jobs } from 'src/app/fake-jobs';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  jobs: Job[] =[];
  constructor(
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    //this.jobs = fake_jobs;
    this.firestore.collection('jobs').snapshotChanges()
    .subscribe(data =>{
      this.jobs = data.map(e=>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object)
        } as any;
      })
    })
  }

}
