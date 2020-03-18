import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Breed } from "../cat.duck";

@Component({
    selector: "app-breed-list",
    templateUrl: "./breed-list.component.html",
    styleUrls: ["./breed-list.component.scss"],
})
export class BreedListComponent implements OnInit {
    @Input() breeds: Breed[];
    @Output() searchCatWithBreed = new EventEmitter<Breed>();

    constructor() {}

    ngOnInit() {}

    searchCatWithBreedClicked(breed: Breed): void {
        this.searchCatWithBreed.emit(breed);
    }
}
