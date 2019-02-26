import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CoreRoutingModule} from "./core-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        CoreRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    exports: [
        RouterModule
    ]
})
export class CoreModule {
}
