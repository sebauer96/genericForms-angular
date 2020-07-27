import { Component, OnInit, Input } from '@angular/core';
import { GenericService } from './services/generic.service';
import { GenericABM } from './interface/generic-abm.interface';
import { FormGroup } from '@angular/forms';
import { FormControlService } from './services/form-control.service';
@Component({
  selector: 'app-generic-abm',
  templateUrl: './generic-abm.component.html',
  styleUrls: ['./generic-abm.component.css'],
  providers: [FormControlService],
})
export class GenericAbmComponent<T> implements OnInit {
  @Input() service: GenericService<T>;
  @Input() abmGeneric: GenericABM<string>;
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: FormControlService) {}

  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.abmGeneric.listInput);
    this.abmGeneric.service.getAll().subscribe((x) => {
      console.log(x);
    });
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
