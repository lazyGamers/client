import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {IndexPageComponent} from "./pages/index-page/index-page.component";
import {IndexRoutingModule} from "./index-routing.module";

@NgModule({
    declarations: [
        IndexPageComponent
    ],
    imports: [
        CommonModule,
        IndexRoutingModule
    ]
})
export class IndexModule {
}
