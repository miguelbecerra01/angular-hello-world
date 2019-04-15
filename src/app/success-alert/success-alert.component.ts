import { Component } from '@angular/core';

@Component({
    selector: 'app-success-alert',
    templateUrl: './success-alert.component.html',
    styleUrls: ['./success-alert.component.css']
})

export class SuccessAlertComponent {
    successMessage = 'The data has saved successfully'
}