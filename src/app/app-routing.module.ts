import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AuthGuard } from "./auth-guard.service";
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'users', component: UsersComponent, children: [
            { path: ':id/:name', component: UserComponent }
        ]
    },
    {
        path: 'servers', component: ServersComponent,canActivateChild:[AuthGuard], children: [
            { path: ':id', component: ServerComponent },
            { path: ':id/edit', component: EditServerComponent }]
    },
    {
        path: 'not-found', component: PageNotFoundComponent
    },
    {
        path: '**', redirectTo: 'not-found'
    }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule {

}

export const RoutingComponents = [HomeComponent, UsersComponent, ServersComponent, UserComponent
    , EditServerComponent, ServerComponent, PageNotFoundComponent
];