import type { CustomRouteObject } from "./core/types/routes";
import { lazyImport } from "./core/utils/lazyImport";

// Ejemplo de lazy import
const { HomePage } = lazyImport(() => import("./pages/homePage"), "HomePage");
const { ContactPage } = lazyImport(
  () => import("./pages/contactPage"),
  "ContactPage"
);

const { ProtursPage } = lazyImport(
  () => import("./pages/protursPage"),
  "ProtursPage"
);
const { MigrationsPage } = lazyImport(
  () => import("./pages/migrationsPage"),
  "MigrationsPage"
);
const { MainLayout } = lazyImport(
  () => import("./core/ui/mainLayout"),
  "MainLayout"
);



const { TurimsUsa } = lazyImport(
  () => import("./migration/pages/turimsUsa"),
  "TurimsUsa"
);


const { TurimsChina } = lazyImport(
  () => import("./migration/pages/turimsChina"),
  "TurimsChina"
);

const {  ImmigrationForgiveness} = lazyImport(
  () => import("./migration/pages/immigrationForgiveness"),
  "ImmigrationForgiveness"
);


const { TurimsCanada } = lazyImport(
  () => import("./migration/pages/turimsCanada"),
  "TurimsCanada"
);
const { TurimsReinoUnido } = lazyImport(
  () => import("./migration/pages/turimsReinoUnido"),
  "TurimsReinoUnido"
);

const { Contruccion } = lazyImport(
  () => import("./pages/contruccion"),
  "Contruccion"
);

const RoutesComponent: CustomRouteObject[] = [
  {
    name: "Main",
    path: "/",
    element: <MainLayout />,
    children: [
      {
        name: "Home",
        index: true,
        element: <HomePage />,
      },
      {
        name: "Proturs",
        path: "Proturs",
        element: <ProtursPage />,
      },

      {
        name: "Contact",
        path: "Contact",
        element: <ContactPage />,
      },
      {
        name: "Migrations",
        path: "Migrations",
        element: <MigrationsPage />,
      },
      {
        name: "Turims Usa",
        path: "Migrations/TurimsUsa",
        element: <TurimsUsa />,
      },
      {
        name: "Turims Canada",
        path: "Migrations/TurimsCanada",
        element: <TurimsCanada />,
      },
      {
        name: "Turims Reino Unido",
        path: "Migrations/TurimsReinoUnido",
        element: <TurimsReinoUnido />,
      },
      {
        name: "Turims China",
        path: "Migrations/TurimsChina",
        element: <TurimsChina />,
      },

      {
        name: "Imigration Forgiveness",
        path: "Migrations/ImmigrationForgiveness",
        element: <ImmigrationForgiveness />,
      },


      {
        name: "Page Not Found",
        path: "/*",
        element: <Contruccion />,
      },
    ],
  },
  // Puedes agregar más layouts si lo necesitas
];

export default RoutesComponent;
