import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import porfolioTFG from '../images/portfolio/portfolio-TFG.jpg';
import porfolioWatchIt from '../images/portfolio/portfolio-WatchIt.png';
import porfolioRedAmbulatorios from '../images/portfolio/portfolio-RedAmbulatorios.png';
import porfolioMultinucleo from '../images/portfolio/portfolio-Multinucleo.png';
import porfolioAsignacionTFG from '../images/portfolio/portfolio-AsignacionTFG.png';
import porfolioMonopoly from '../images/portfolio/portfolio-Monopoly.png';
import porfolioWhatsappCounter from '../images/portfolio/portfolio-WhatsappCounter.png';
import porfolioSeriesFormatter from '../images/portfolio/portfolio-SeriesFormatter.jpg';
import resumeVexiza from '../images/resume/resume-Vexiza.jpg';
import resumeBahia from '../images/resume/resume-Bahia.jpg';
import resumeUSC from '../images/resume/resume-USC.jpg';
import resumeOllosGrandes from '../images/resume/resume-OllosGrandes.png';
import resumeDGT from '../images/resume/resume-DGT.jpg';
import resumeCambridge from '../images/resume/resume-Cambridge.jpg';
import resumeXunta from '../images/resume/resume-Xunta.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Pablo Tarrío Otero',
  description: "Página realizada con el fin de tener mi CV actualizado en todo momento.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'About',
  Contact: 'Contacto',
  Portfolio: 'Portfolio',
  Resume: 'Resumen',
  Skills: 'Habilidades',
  Stats: 'Estadísticas',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Pablo Tarrío Otero`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Soy Pablo, un <strong className="text-stone-100">Desarrollador web Full Stack</strong>, actualmente
        trabajando en <strong className="text-stone-100">Vexiza S.L.</strong> ayudando en el desarrollo de una
        aplicación para la gestión del medio rural en Galicia.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        En mi tiempo libre me gusta ver <strong className="text-stone-100">baloncesto</strong> y <strong className="text-stone-100">F1</strong>,
        escuchar <strong className="text-stone-100">música</strong>, <strong className="text-stone-100">viajar</strong> y
        hacer <strong className="text-stone-100">deporte</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/uc?export=download&id=1N_JOU2vK0KoTxo6SA2c7FDlLfMtNeuDY',
      text: 'Descargar CV',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contactar',
      primary: false,
    },
  ],
};

function getEdad(dateString: string) {
  let hoy = new Date()
  let fechaNacimiento = new Date(dateString)
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
  let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
  if (
    diferenciaMeses < 0 ||
    (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
  ) {
    edad--
  }
  return edad.valueOf()
}

var edad = new String(getEdad("2000/12/27 00:00:00"))

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Ingeniero informático especialmente interesado en tecnologías web como React.js y Spring Boot. En mi tiempo libre me gusta socializar, ver deporte, viajar, escuchar música y jugar a videojuegos.`,
  aboutItems: [
    {label: 'Localización', text: 'Lugo, España', Icon: MapIcon},
    {label: 'Edad', text: edad, Icon: CalendarIcon},
    {label: 'Nacionalidad', text: 'Española', Icon: FlagIcon},
    {label: 'Intereses', text: 'Automovilismo, baloncesto, videojuegos...', Icon: SparklesIcon},
    {label: 'Educación', text: 'Universidade de Santiago de Compostela', Icon: AcademicCapIcon},
    {label: 'Empleo', text: 'Desarrollador junior en Vexiza S.L.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Idiomas hablados',
    skills: [
      {
        name: 'Español',
        level: 10,
      },
      {
        name: 'Gallego',
        level: 10,
      },
      {
        name: 'Inglés',
        level: 8,
      },
      {
        name: 'Portugués',
        level: 6,
      },
      {
        name: 'Alemán',
        level: 3,
      }
    ],
  },
  {
    name: 'Desarrollo de Frontend',
    skills: [
      {
        name: 'JavaScript',
        level: 10,
      },
      {
        name: 'jQuery',
        level: 10,
      },
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'HTML5 / CSS3 / Tailwind',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      }
    ],
  },
  {
    name: 'Desarrollo de Backend',
    skills: [
      {
        name: 'Spring Boot',
        level: 10,
      },
      {
        name: 'Hibernate',
        level: 10,
      },
      {
        name: 'REST API',
        level: 10,
      }
    ],
  },
  {
    name: 'Bases de datos',
    skills: [
      {
        name: 'OracleSQL',
        level: 10,
      },
      {
        name: 'PostgreSQL',
        level: 10,
      },
      {
        name: 'MySQL',
        level: 9,
      },
      {
        name: 'MongoDB',
        level: 9,
      }
    ],
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Herramienta para la creación y edición colaborativa de documentos, TFG',
    description: 'Herramienta colaborativa para la creación y edición de documentos por parte de usuarios expertos en legislación a nivel gallego. Se trata de mi TFG, dirigido por personal del CiTIUS, donde se han utilizado tecnologías como React.js, Tailwind, Spring Boot, MongoDB, ...',
    url: 'https://github.com/pablito2199/TFG',
    image: porfolioTFG,
  },
  {
    title: 'Watch.it',
    description: 'Red social temática elaborada durante las clases de Ingeniería de Servicios en la universidad. Se pueden crear usuarios y respectivas amistades, así como películar y valoraciones de estas.',
    url: 'https://github.com/pablito2199/Watch.it',
    image: porfolioWatchIt,
  },
  {
    title: 'Gestión de una red de ambulatorios',
    description: 'Aplicación de gestión de una base de datos de un ambulatorio para la asignatura de BDII del GrEI de la USC.',
    url: 'https://github.com/pablito2199/BDII-Ambulatorioe',
    image: porfolioRedAmbulatorios,
  },
  {
    title: 'Programación multinúcleo SIMD',
    description: 'Programación multinúcleo, y mediante instrucciones en OpenMP y AVX, para realizar operaciones entre cuaterniones. Proyecto de la asignatura de Arquitectura de Computadores.',
    url: 'https://github.com/pablito2199/Programacion-Multinucleo-SIMD',
    image: porfolioMultinucleo,
  },
  {
    title: 'Asignación de TFGs en CLIPS',
    description: 'Este proyecto permite la asignación de TFGs a los alumnos a partir de sus propuestas solicitadas.',
    url: 'https://github.com/pablito2199/Asignacion-de-TFGs-en-CLIPS',
    image: porfolioAsignacionTFG,
  },
  {
    title: 'Monopoly',
    description: 'Monopoly realizado mediante Programación Orientada a Objetos en la asignatura de Programación Orientada a Objetos.',
    url: 'https://github.com/pablito2199/Monopoly',
    image: porfolioMonopoly,
  },
  {
    title: 'Whatsapp Message Counter',
    description: 'Este script te permite sabes el número de mensajes enviados por los miembros de un chat. Solo tienes que exportar la conversación a un archivo en formato .txt y ejecutar el script.',
    url: 'https://github.com/pablito2199/WhatsApp-Message-Counter',
    image: porfolioWhatsappCounter,
  },
  {
    title: 'Series\' Formatter',
    description: 'Formatea el nombre de tus series en según el orden y la temporada. Solamente has de ordenador los archivos en tu carpeta y ejecutar el script.',
    url: 'https://github.com/pablito2199/Series-Formatter',
    image: porfolioSeriesFormatter,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const experience: TimelineItem[] = [
  {
    date: 'Octubre 2022 - Presente',
    location: 'Vexiza S.L.',
    title: 'Desarrollador junior',
    content: <ul className="ml-8">
      <li>• Desarrollo full stack de aplicaciones web</li>
      <li>• Bases de datos relacionales OracleSQL</li>
      <li>• Empleo de capas ArcGIS</li>
      <li>• Realización de tests unitarios con JUnit</li>
      <li>• Control de versiones mediante SVN</li>
      <li>• Integración continua con Jenkins</li>
      <li>• Servidor Tomcat</li>
      <li>• Ingeniería de software (Redmine, Agile)</li>
      <li>• Utilización de herramientas de ticketing</li>
      <li>• Programación para la gestión de medios rurales</li>
    </ul>,
    image: resumeVexiza
  },
  {
    date: 'Julio 2021 - Agosto 2021',
    location: 'Bahía Software',
    title: 'Desarrollador de Backend - en prácticas',
    content: <ul className="ml-8">
      <li>• Desarrollo backend (MirthConnect)</li>
      <li>• Estructuras de datos como HL7 FHIR</li>
      <li>• Base de datos MySQL</li>
      <li>• Ingeniería de software (JiraSoftware, Agile)</li>
      <li>• Programación en entornos sanitarios</li>
    </ul>,
    image: resumeBahia
  },
];

export const education: TimelineItem[] = [
  {
    date: 'Septiembre 2018 - Septiembre 2022',
    location: 'Universidade de Santiago de Compostela',
    title: 'Grado en Ingeniería Informática',
    content: <div className="ml-4">
      Durante esta estancia universitaria me he formado en campos muy diversos, entre los que destacan:
      <ul className="ml-4">
        <li>• Programación (Java, C, Python)</li>
        <li>• Gestión de bases de datos (SQL, MongoDB) y sincronización de estas con aplicaciones y páginas web (JDBC).</li>
        <li>• Ingeniería de servicios (Spring Boot)</li>
        <li>• Ingeniería web (HTML5, CSS3, JavaScript, jQuery, Servlets, React.js)</li>
        <li>• Interacción persona-ordenador (usabilidad de aplicaciones y facilidad de uso de estas para los usuarios)</li>
        <li>• Matemáticas: álgebra linear, cálculo numérico (SageMath), matemática discreta, lógica y estadística (R)</li>
        <li>• Administración y gestión de sistemas y redes (C y Shell)</li>
        <li>• Ingeniería de computadores</li>
        <li>• Ingeniería del software</li>
        <li>• Sistemas de información</li>
        <li>• Sistemas inteligentes</li>
        <li>• Sistemas basados en reglas (CLIPS, PROLOG)</li>
        <li>• Organización y gestión empresarial</li>
        <li>• Computación gráfica (C, C++)</li>
        <li>• Computación en la nube (AWS Educate)</li>
      </ul>
    </div>,
    image: resumeUSC
  },
  {
    date: 'Septiembre 2016 - Mayo 2018',
    location: 'I.E.S. Nosa Señora dos Ollos Grandes',
    title: 'Bachillerato de Ciencias Tecnológicas',
    content: <p></p>,
    image: resumeOllosGrandes
  },
];

export const certificaciones: TimelineItem[] = [
  {
    date: 'Expedición oct. 2019 · Vencimiento: oct. 2029',
    location: 'Dirección General de Tráfico',
    title: 'Permiso de Conducir (Clase B)',
    content: <p></p>,
    image: resumeDGT
  },
  {
    date: 'Expedición: jul. 2017 · Sin fecha de vencimiento',
    location: 'Cambridge University Press & Assessment English',
    title: 'B2 First Certificate in English (FCE)',
    content: <p></p>,
    image: resumeCambridge
  },
  {
    date: 'Expedición: dic. 2014 · Sin fecha de vencimiento',
    location: 'Cambridge University Press & Assessment English',
    title: 'B1 Preliminary (PET)',
    content: <p></p>,
    image: resumeCambridge
  },
  {
    date: 'Expedición: jun. 2018 · Sin fecha de vencimiento',
    location: 'Xunta de Galicia',
    title: 'CELGA 4',
    content: <p></p>,
    image: resumeXunta
  }
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contacta conmigo.',
  description: 'Este es mi medio de contacto. Cualquier consulta agradecería que me contactases a mi email.',
  items: [
    {
      type: ContactType.Email,
      text: 'pablotarriootero@gmail.com',
      href: 'mailto:pablotarriootero@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Lugo, España',
      href: 'https://www.google.es/maps/place/Lugo/@43.0123137,-7.5740097,14z/data=!3m1!4b1!4m5!3m4!1s0xd31ce80b130876d:0x1f305fbf2867050c!8m2!3d43.0097384!4d-7.5567582',
    },
    {
      type: ContactType.Instagram,
      text: '@pablito_tarrio',
      href: 'https://www.instagram.com/pablito_tarrio',
    },
    {
      type: ContactType.Github,
      text: 'pablito2199',
      href: 'https://github.com/pablito2199',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/pablito2199'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/pablo-tarr%C3%ADo-otero-806b52204/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/pablito_tarrio'}
];