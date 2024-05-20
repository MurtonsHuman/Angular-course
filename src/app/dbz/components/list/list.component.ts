
import {  Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',

})
export class ListDBZComponent {

  @Input()
  public characterList : Character[] = [{
    name: 'Trunks',
    power: 10
  }]
  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(id:string):void{
    this.onDelete.emit(id)
  }

 }
