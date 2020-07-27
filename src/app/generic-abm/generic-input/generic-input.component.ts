import { Component, OnInit, Input } from '@angular/core';
import { GenericInput } from '../interface/generic-input';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.css']
})
export class GenericInputComponent {
  @Input() question: GenericInput<string>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

}
