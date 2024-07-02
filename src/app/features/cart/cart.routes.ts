import { Routes } from "@angular/router";

const CartRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent)
    },
];

export default CartRoutes