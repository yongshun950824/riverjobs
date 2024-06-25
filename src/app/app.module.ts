import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JobComponent } from './components/job/job.component';
import { NavComponent } from './components/nav/nav.component';
import { JobsListComponent } from './pages/jobs-list/jobs-list.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { JobContactComponent } from './pages/job-contact/job-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyJobsComponent } from './pages/my-jobs/my-jobs.component';
import { EditJobComponent } from './pages/edit-job/edit-job.component';
import { CreateJobComponent } from './pages/create-job/create-job.component';
import { JobFormComponent } from './components/job-form/job-form.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    JobsListComponent,
    JobDetailsComponent,
    JobComponent,
    JobContactComponent,
    MyJobsComponent,
    EditJobComponent,
    CreateJobComponent,
    JobFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
