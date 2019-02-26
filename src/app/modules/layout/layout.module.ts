import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {GameLayoutComponent} from "./components/game-layout/game-layout.component";
import {LayoutRoutingModule} from "./layout-routing.module";

@NgModule({
    declarations: [GameLayoutComponent],
    imports: [
        CommonModule,
        LayoutRoutingModule
    ]
})
export class LayoutModule {
}
