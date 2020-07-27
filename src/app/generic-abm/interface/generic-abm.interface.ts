import { GenericInput } from './generic-input';
import { GenericService } from '../services/generic.service';

export interface GenericABM<T> {
  title: string;
  listInput: Array<GenericInput<T>>;
  service: GenericService<T>;
}
