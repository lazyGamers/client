import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {IndexPageComponent} from "./pages/index-page/index-page.component";


const routes: Routes = [
    {path: "", component: IndexPageComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class IndexRoutingModule {

}
