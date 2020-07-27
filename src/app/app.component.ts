import { Component } from '@angular/core';
import { ServiceAService } from './services/service-a.service';
import { ServiceBService } from './services/service-b.service';
import { GenericABM } from './generic-abm/interface/generic-abm.interface';
import { GenericAbmComponent } from './generic-abm/generic-abm.component';
import { Dropdown } from './generic-abm/inputs/dropdown';
import { TextBox } from './generic-abm/inputs/text';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tablesGeneric';
  abmGeneric:GenericABM<string> = {
    title: 'ABM GENERICO',
    listInput: [
      new Dropdown({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 1
      }),

      new TextBox({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 3
      }),

      new TextBox({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ],
    service: this.input
  };
  constructor(public input: ServiceAService, public input2: ServiceBService) {
  }
}
