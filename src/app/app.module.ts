import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { environment } from './environments/environment';
import { LeaderTemplateComponent } from './leader-template/leader-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LeaderTemplateComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatSidenavModule,
    RouterModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
