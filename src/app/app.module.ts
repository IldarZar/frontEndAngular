import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BaseUrlInterceptor } from "@app/core/interceptors/base-url.interceptor";
import {NgxsModule} from "@ngxs/store";
import {CartState} from "@app/app.state";
import {environment} from "@env/environment";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: BaseUrlInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatSlideToggleModule,
        MatToolbarModule,
        NgxsModule.forRoot([CartState], {
          developmentMode: !environment.production
        })
    ]
})
export class AppModule {

}
