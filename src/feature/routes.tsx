

import type { CustomRouteObject } from './core/types/routes';
import { lazyImport } from './core/utils/lazyImport';


// Ejemplo de lazy import
const { HomePage } = lazyImport(() => import('./pages/homePage'), 'HomePage');
const { Contruccion } = lazyImport(() => import('./pages/contruccion'), 'Contruccion');
const { ProtursPage } = lazyImport(() => import('./pages/protursPage'), 'ProtursPage');
const { MigrationsPage } = lazyImport(() => import('./pages/migrationsPage'), 'MigrationsPage');
const {  MainLayout} = lazyImport(() => import('./core/ui/mainLayout'), 'MainLayout');

const { TurimsUsa } = lazyImport(() => import('./migration/pages/turimsUsa'), 'TurimsUsa');
const { TurimsCanada } = lazyImport(() => import('./migration/pages/turimsCanada'), 'TurimsCanada');

const RoutesComponent: CustomRouteObject[] = [
  {
    name: 'Main',
    path: '/',
    element: <MainLayout />,
    children: [
     
      {
        name: 'Home',
        index: true, 
        element: <HomePage />
      },
      {
        name: 'Proturs',
        path: 'Proturs',
        element: <ProtursPage />
      },
      {
        name: 'Migrations',
        path: 'Migrations',
        element: <MigrationsPage />
      },
      {
        name: 'Turims Usa',
        path: 'Migrations/TurimsUsa',
        element: <TurimsUsa />
      },
      {
        name: 'Turims Canada',
        path: 'Migrations/TurimsCanada',
        element: <TurimsCanada />
      },
      {
        name: 'Page Not Found',
        path: '/*',
        element: <Contruccion />
      }
    ]
  }
  // Puedes agregar más layouts si lo necesitas
];

export default RoutesComponent;

