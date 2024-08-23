import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'music',
    loadChildren: () => import('./pages/music/music.module').then( m => m.MusicPageModule)
  },
  {
    path: 'music',
    loadChildren: () => import('./pages/music/music.module').then( m => m.MusicPageModule)
  },
  {
    path: 'music-details',
    loadChildren: () => import('./pages/music-details/music-details.module').then( m => m.MusicDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
