import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CharListComponent } from './char-list/char-list.component';
import { CharDetailComponent } from './char-detail/char-detail.component';
import { CharEpListComponent } from './char-ep-list/char-ep-list.component';
import { EpCardComponent } from './ep-card/ep-card.component';
import { EpListComponent } from './ep-list/ep-list.component';
import { LocListComponent } from './loc-list/loc-list.component';
import { EpDetailComponent } from './ep-detail/ep-detail.component';
import { LocDetailComponent } from './loc-detail/loc-detail.component';

import { CharService } from './char.service';
import { EpService } from './ep.service';
import { LocService } from './loc.service';
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
import { EpCharListComponent } from './ep-char-list/ep-char-list.component';
import { LocCharListComponent } from './loc-char-list/loc-char-list.component';
import { CharCardComponent } from './char-card/char-card.component';


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
    CharCardComponent
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
    HttpClientModule
  ],
  providers: [CharService,
    EpService,
    LocService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
