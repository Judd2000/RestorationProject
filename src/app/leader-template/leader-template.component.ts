import { ComponentType } from '@angular/cdk/portal';
import { Component, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-leader-template',
  templateUrl: './leader-template.component.html',
  styleUrls: ['./leader-template.component.css']
})
export class LeaderTemplateComponent {
  @Input() imageUrl!: string;
  
  @Input() description!: string;

  @Input() dialogSources!: string;

  constructor(public dialog: MatDialog) {}

  openDialog(templateRef: any) {
    const dialogRef =  this.dialog.open(templateRef, {
      width: '300px',
    })
  }
}
