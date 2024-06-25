import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Job } from 'src/app/fake-jobs';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {

  jobForm!: FormGroup;
  @Input() btnText!: string;
  @Output() submitForm = new EventEmitter<Job>();

  @Input() curr_title: string | undefined;
  @Input() curr_company: string | undefined;
  @Input() curr_description: string| undefined;

  constructor(
    private fb: FormBuilder,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.jobForm = this.fb.group({
      title: this.curr_title,
      company: this.curr_company,
      description: this.curr_description,
    });
    
  }
  onCancel(): void {
    this.location.back();
  }

  onSubmitJobForm(): void{
    this.submitForm.emit()
  }

  

}
