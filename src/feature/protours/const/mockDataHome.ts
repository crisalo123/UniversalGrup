import imgbgMigrations from '@/feature/migration/img/passaport.avif';
import logoMigrations from '@/feature/migration/img/logoUMigrations.png';
import imgbgProturs from '@/feature/protours/img/bannerProturs.avif';
import logoProturs from '@/feature/protours/img/logoProturs.png';

export const mookDataHome = [
    {
        id: 1,
        imgBackground : imgbgMigrations, 
        img: imgbgMigrations,
        logo:logoMigrations,
        title: "Asesoría Especializada en Visa Americana",
        subtitle:"Soluciones rápidas y seguras para tu visado.",
         ctaText:"Más información",
         isProtours:false,
         navigations:"/Migrations",
    },
     {
        id: 2,
        imgBackground :imgbgProturs, 
        img: imgbgProturs,
        logo:logoProturs,
        title: "Viaja con seguridad y tranquilidad",
        subtitle:"Nosotros te guiamos en este proceso",
         ctaText:"Conoce más",
         isProtours:true,
         navigations:'/Proturs',
    }
]