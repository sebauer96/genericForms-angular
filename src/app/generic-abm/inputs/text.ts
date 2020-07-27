import { GenericInput } from '../interface/generic-input';

export class TextBox extends GenericInput<string> {
  controlType = 'textbox';
  options: { key: string; value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}