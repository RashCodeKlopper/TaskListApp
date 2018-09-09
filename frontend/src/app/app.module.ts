import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatSnackBarModule } from '@angular/material';

// Imports for primeNG
import {
  DataTableModule, SharedModule, ButtonModule, MessagesModule,
  GrowlModule, PanelModule, DialogModule
} from 'primeng/primeng';
import {TableModule} from 'primeng/table';

// Imports for Angular Components
import { AppComponent } from './app.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { PageNotFoundComponent } from './error/pagenotfound.component';

const appRoutes: Routes = [
  {
    path: 'tasks',
    component: TaskListComponent,
    data: { title: 'To-Do List' }
  },
  {
    path: 'task-detail/:id',
    component: TaskDetailsComponent,
    data: { title: 'Task Details' }
  },
  {
    path: 'task-create',
    component: TaskCreateComponent,
    data: { title: 'Create Contact' }
  },
  {
    path: 'task-edit/:id',
    component: TaskEditComponent,
    data: { title: 'Edit Contact' }
  },
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: 'error',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    // Angular Components
    AppComponent,
    TaskCreateComponent,
    TaskEditComponent,
    TaskDetailsComponent,
    TaskListComponent,
    TaskCreateComponent,
    TaskEditComponent,
    PageNotFoundComponent
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatSnackBarModule,

    // PrimeNG Modules
    DataTableModule,
    SharedModule,
    ButtonModule,
    MessagesModule,
    GrowlModule,
    PanelModule,
    DialogModule,
    TableModule,

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false,  // <-- set true for debugging purposes only
        useHash: true  }
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
