import { GenericInput } from '../interface/generic-input';

export class Dropdown extends GenericInput<string> {
  controlType = 'dropdown';
  options: { key: string; value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
