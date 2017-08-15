import { ValidationErrors, AbstractControl } from '@angular/forms';

export function dummyValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) { return null; }
  return (control.value.length % 2 === 0) ? null : { dummy: false };
}
