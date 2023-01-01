import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// when you create a component, like app component, our CLI provides it automatically - when we use a component we need to provide declarations, imports, providers, bootstrap (?)
// generally components will have 4 files - typescript compoennt file with main properties methods etc, template html file, css file, spec file for testing
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
