import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MarketComponent } from './market/market.component';
import { NewsComponent } from './news/news.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StakingComponent } from './staking/staking.component';
import { TradingComponent } from './trading/trading.component';

// const routes: Routes = [
//   {
//     path:'',
//     component:CoreComponent,
//     children: [
//       {path:'', redirectTo:'home', pathMatch:'full'},
//       {path:'home', component:HomeComponent},
//       {path:'market',component:MarketComponent},
//       {path:'trading',component:TradingComponent},
//       {path:'news',component:NewsComponent},
//       {path:'staking',component:StakingComponent},
//       {path:'games',component:GamesComponent},
//     ],
//   },
    
//   {
//     path:'login',
//     component:LoginComponent
//   },

//   {
//     path:'**',
//     component:NotFoundComponent
//   }
// ];

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  // {
  //   path:'login',
  //   loadChildren: () => import('../app/registration/login/login.module').then(m => m.LoginModule)
  // },

  {
    path: 'market',
    component: MarketComponent,
  },

  {
    path: 'trading',
    component: TradingComponent
  },

  {
    path: 'news',
    component: NewsComponent,
  },

  {
    path: 'staking',
    component: StakingComponent,
  },

  {
    path: 'games',
    component: GamesComponent,
  },

  {
    path: '**',
    component: NotFoundComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




