import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {GameLayoutComponent} from "./components/game-layout/game-layout.component";

const routes: Routes = [
    {path: "", component: GameLayoutComponent, loadChildren: "../index/index.module#IndexModule"}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class LayoutRoutingModule {

}
