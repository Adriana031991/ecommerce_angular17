import { Routes } from "@angular/router";

const ProductsRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import('./catalog/catalog.component').then(m => m.CatalogComponent)
    },
    {
        path: "detail",
        loadComponent: () => import('./details/details.component').then(m => m.DetailsComponent)
    },
];

export default ProductsRoutes