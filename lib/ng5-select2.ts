import { NgModule } from '@angular/core';

export { Select2OptionData, Select2TemplateFunction } from './ng5-select2.interface';
import { Select2Component } from './ng5-select2.component';

export { Select2Component } from './ng5-select2.component';

@NgModule({
    declarations: [Select2Component],
    exports: [Select2Component]
})
export class Select2ModuleEx {}