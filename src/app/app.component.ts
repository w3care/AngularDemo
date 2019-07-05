import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'demotest';
    dropdownList = [];
    selectedItems = [];
    selectedItems1 = [];
    dropdownSettings = {};

    ngOnInit() {
        this.dropdownList = [
            {item_id: 1, item_text: 'Mumbai'},
            {item_id: 2, item_text: 'Bangaluru'},
            {item_id: 3, item_text: 'Pune'},
            {item_id: 4, item_text: 'Navsari'},
            {item_id: 5, item_text: 'New Delhi'}
        ];
        this.selectedItems = [];
        this.selectedItems1 = [];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    }

    onItemSelect(item: any) {
        console.log(this.selectedItems, "when select first");
    }

    onSelectAll(items: any) {
        console.log(this.selectedItems, "when select first All");
    }

    onItemSelect1(item: any) {
        console.log(this.selectedItems1, "when select Second");
    }

    onSelectAll1(items: any) {
        console.log(this.selectedItems1, "when select All");
    }

    newAdd() {
        console.log("hii");
    }
}
