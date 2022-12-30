import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// when you create a component, like app component, our CLI provides it automatically - when we use a component we need to provide declarations, imports, providers, bootstrap (?)
// generally components will have 4 files - typescript compoennt file with main properties methods etc, template html file, css file, spec file for testing 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
