import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  taskGroups: any[] = [
    {
      title: "les widgets ",
      id: "todo",
      tasks: [
        {
          id: 0,
          title: "Text View",
          description: "Voici ma première tache"
        },
        {
          id: 1,
          title: "Edit Text",
          description: "Aller acheter du pain à la boulangerie"
        }
      ]
    },
    {
      title: "L'interface mobile",
      id: "inProgress",
      tasks: [
        {
          id: 0,
          title: "Map View",
          description: "Changer le phare avant gauche"
        },
        {
          id: 1,
          title: "ImageView",
          description: "Etendre le linge"
        },
        {
          id: 2,
          title: "something else",
          description: "Voir la recette de la quiche"
        }
      ]
    }
  ];
  
  taskGroupsSubject = new Subject<any[]>();

  constructor() { }

  emitTaskGroups() {
    this.taskGroupsSubject.next(this.taskGroups);
  }

}
