import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './components/main/footer/footer.component';
import { HeaderComponent } from './components/main/header/header.component';
import { CharListComponent } from './components/char/char-list/char-list.component';
import { CharDetailComponent } from './components/char/char-detail/char-detail.component';
import { CharEpListComponent } from './components/char/char-ep-list/char-ep-list.component';
import { EpCardComponent } from './components/ep/ep-card/ep-card.component';
import { EpListComponent } from './components/ep/ep-list/ep-list.component';
import { LocListComponent } from './components/loc/loc-list/loc-list.component';
import { EpDetailComponent } from './components/ep/ep-detail/ep-detail.component';
import { LocDetailComponent } from './components/loc/loc-detail/loc-detail.component';

import { CharService } from './services/char.service';
import { EpService } from './services/ep.service';
import { LocService } from './services/loc.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { EpCharListComponent } from './components/ep/ep-char-list/ep-char-list.component';
import { LocCharListComponent } from './components/loc/loc-char-list/loc-char-list.component';
import { CharCardComponent } from './components/char/char-card/char-card.component';
import { SearchFormComponent } from './components/main/search-form/search-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CharListComponent,
    CharDetailComponent,
    CharEpListComponent,
    EpCardComponent,
    EpListComponent,
    LocListComponent,
    EpDetailComponent,
    LocDetailComponent,
    EpCharListComponent,
    LocCharListComponent,
    CharCardComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCollapseModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CharService,
    EpService,
    LocService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
