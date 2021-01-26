import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-page-header',
  template: `
    <div class="flex justify-between items-center  px-6 py-3 mb-3 md:mb-6 bg-gray-800 text-gray-300 shadow rounded-md">
      <div class="text-lg font-semibold">
        {{ title }}
      </div>
      <a
        [routerLink]="linkPath"
        *ngIf="linkPath && linkTitle"
        type="button"
        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {{ linkTitle }}
      </a>
    </div>
  `,
})
export class WebUiPageHeaderComponent {
  @Input() title?: string
  @Input() linkPath?: string
  @Input() linkTitle?: string
}