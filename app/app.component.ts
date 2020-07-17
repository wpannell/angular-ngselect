import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({

selector: 'test',
  template: ` 
     <form [formGroup]="heroForm" novalidate >
    <ng-select [searchable]="false" [clearable]="false"  formControlName="agree" >
                <ng-option [value]="'test1'"> Test1</ng-option>
                <ng-option [value]="'test2'"> Test2</ng-option>
            </ng-select>
            {{heroForm.value|json}}
    </form>


  `})
export class TestComponent  {
  
  selectedYesNo=true
  heroForm: FormGroup;



    constructor(private fb: FormBuilder ) {

    }


 ngOnInit() {
      this.heroForm = this.fb.group({
              
                agree: 'test2',
                selectedCitiesIds: [],
                age: ['', Validators.required],
                album: '',
                photo: ''
            });

}  

}



@Component({
  selector: 'app-root',
  template: ` 
      {{version}}
   <test></test>
    
  `

})
export class AppComponent  {
  version = 'Angular: v' + VERSION.full;  
}
