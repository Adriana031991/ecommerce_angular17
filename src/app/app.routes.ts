import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    {
        path: "products",
        loadChildren: () => import('./features/products/products.routes')
    },
    {
        path: "cart",
        loadChildren: () => import('./features/cart/cart.routes')
    },
];
