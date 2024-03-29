import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TestformComponent } from '../../pages/testform/testform.component';
// dynamic form builder

import { DynamicFormBuilderModule } from '../dynamic-form-builder/dynamic-form-builder.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { DivisionComponent } from './components/division/division.component';
import { EntitiesComponent } from './components/entities/entities.component';
import { SmsSourcesComponent } from './components/sms-sources/sms-sources.component';
import { SmsConfigurationsComponent } from './components/sms-configurations/sms-configurations.component';

import { CompanyFormComponent } from './components/companies/company-form.component';
import { DivisionFormComponent } from './components/division/division-form.component';
import { EntityFormComponent } from './components/entities/entity-form.component';
import { SmsSourceFormComponent } from './components/sms-sources/sms-source-form.component';
import { VendorsComponent } from './components/vendors/vendors.component';
import { SendersComponent } from './components/senders/senders.component';
import { SenderFormComponent } from './components/senders/sender-form.component';
import { VendorFormComponent } from './components/vendors/vendor-form.component';
import { SmsConfigurationsFormComponent } from './components/sms-configurations/sms-configurations-form.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DynamicFormBuilderModule
  ],
  declarations: [TestformComponent, DashboardContentComponent, CompaniesComponent, DivisionComponent, EntitiesComponent, SmsSourcesComponent, SmsConfigurationsComponent,CompanyFormComponent,DivisionFormComponent,EntityFormComponent, SmsSourceFormComponent, VendorsComponent, SendersComponent,SenderFormComponent, VendorFormComponent,SmsConfigurationsFormComponent]
})
export class DashboardModule { }
