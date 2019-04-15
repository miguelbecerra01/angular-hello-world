import { Component } from '@angular/core';

@Component({
    selector: 'app-display-details',
    templateUrl: './display-details.component.html',
    styles: [`
    .fifth {
        color:white
    }
    `]
})
export class DisplayDetails {
    showDetails = false;
    clickCounterList = [];


    onToggleDetails() {
        this.showDetails = !this.showDetails;
        //this.clickCounterList.push(this.clickCounterList.length + 1);
        this.clickCounterList.push(new Date());
    }

    getColor(item) {
        return (item >= 5 ? 'blue' : 'green');
    }
}