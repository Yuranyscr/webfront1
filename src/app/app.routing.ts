import { NgModule } from "@angular/core";
import {Routes,RouterModule, Router} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { ThemeComponent } from './theme/theme.component';
export const routes: Routes=[{
    path  : 'login',    
    component : LoginComponent
},
{
    path: 'pages',
    component: ThemeComponent,
    children: [
        {
            path: 'biblioteca',
            loadChildren: './pages/biblioteca/biblioteca.module#BibliotecaModule'
        },
        {
            path: 'administracion',
            loadChildren: './pages/administration/administration.module#AdministrationModule'
        },
        {
            path: 'settings',
            loadChildren: './pages/settings/settings.module#SettingsModule'
        },
        {
            path: '',
            loadChildren:'./pages/dashboard/dashboard.module#DashboardModule'
        },
        
    ]

}
]
@NgModule({
imports:[ RouterModule.forRoot(routes,{useHash:true})
],
exports:[RouterModule],
providers:[]
}) 
export class AppRoutingModule {}
