import { BotMessageSquare } from 'lucide-react';
import { BatteryCharging } from 'lucide-react';
import { Fingerprint } from 'lucide-react';
import { ShieldHalf } from 'lucide-react';
import { PlugZap } from 'lucide-react';
import { GlobeLock } from 'lucide-react';

import user1 from '../assets/profile-pictures/user1.jpg';
import user2 from '../assets/profile-pictures/user2.jpg';
import user3 from '../assets/profile-pictures/user3.jpg';
import user4 from '../assets/profile-pictures/user4.jpg';
import user5 from '../assets/profile-pictures/user5.jpg';
import user6 from '../assets/profile-pictures/user6.jpg';

export const navItems = [
  { label: 'Alumnos', href: '/alumnos' },
  { label: 'Coloquios', href: '/coloquios' },
  { label: 'Exámenes', href: '/examenes' },
  { label: 'Panel de Control', href: '/controlpanel' },
];

export const testimonials = [
  {
    user: 'John Doe',
    company: 'Stellar Solutions',
    image: user1,
    text: 'Estoy extremadamente satisfecho con los servicios de NSGA. El equipo fue receptivo, profesional y entregó resultados más allá de mis expectativas.',
  },
  {
    user: 'Jane Smith',
    company: 'Blue Horizon Technologies',
    image: user2,
    text: 'No podría estar más feliz con el resultado de nuestro proyecto. La creatividad y las habilidades de resolución de problemas del equipo fueron fundamentales para dar vida a nuestra visión.',
  },
  {
    user: 'David Johnson',
    company: 'Quantum Innovations',
    image: user3,
    text: 'Trabajar con NSGA fue un placer. Su atención al detalle y compromiso con la excelencia son encomiables. Los recomendaría encarecidamente a cualquiera que busque un servicio de primer nivel.',
  },
  {
    user: 'Ronee Brown',
    company: 'Fusion Dynamics',
    image: user4,
    text: 'Trabajar con el equipo de NSGA fue un cambio de juego para nuestro proyecto. Su atención al detalle y soluciones innovadoras nos ayudaron a alcanzar nuestras metas y objetivos más rápido de lo que pensábamos posible. ¡Estamos agradecidos por su experiencia y profesionalismo!',
  },
  {
    user: 'Michael Wilson',
    company: 'Visionary Creations',
    image: user5,
    text: 'Estoy impresionado por el nivel de profesionalismo y dedicación demostrado por el equipo de NSGA. Fueron capaces de superar nuestras expectativas y entregar resultados excepcionales.',
  },
  {
    user: 'Emily Davis',
    company: 'Synergy Systems',
    image: user6,
    text: 'El equipo de NSGA se esforzó para asegurar que nuestro proyecto fuera un éxito. Su experiencia y dedicación son incomparables. Espero con ansias trabajar con ellos nuevamente en el futuro.',
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: 'Optimización de la carga y gestión de datos académicos.',
    description:
      'Facilita la carga de alumnos a las materias adeudadas para coloquios, automatiza la generación de actas de coloquios, complementarios, previos y equivalencias, y simplifica el seguimiento de las diferentes condiciones de las materias.',
  },
  {
    icon: <Fingerprint />,
    text: 'Automatización de procesos administrativos.',
    description:
      'Automatiza la generación del Registro Anual de Calificaciones (RAC), y agiliza la gestión de trámites y solicitudes.',
  },
  {
    icon: <ShieldHalf />,
    text: 'Centralización de la información académica.',
    description:
      'Brinda un único espacio donde se puede acceder a toda la información académica de alumnos, profesores y personal administrativo, permitiendo un acceso intuitivo y personalizado a la información.',
  },
  {
    icon: <BatteryCharging />,
    text: 'Gestión de ciclo lectivo.',
    description:
      'Permite la gestión del ciclo lectivo, el alta, baja y modificación de Ciclo Lectivo, consulta y carga.',
  },
  {
    icon: <PlugZap />,
    text: 'Gestión de alumnos.',
    description:
      'Permite la gestión de alumnos, el alta, baja y modificación de alumnos, consulta de datos de alumnos, impresión de listados de alumnos, la carga de materias adeudadas a coloquios, seguimiento del progreso académico de cada alumno, generación de informes de avance.',
  },
  {
    icon: <GlobeLock />,
    text: 'Gestión de planes de estudio.',
    description:
      'Permite la gestión de planes de estudio, el alta, baja y modificación de planes, consulta de datos del plan, y carga del plan de estudio.',
  },
];

export const checklistItems = [
  {
    title: 'Optimiza la carga y gestión de datos académicos.',
    description:
      'Con NSGA, podrás cargar y gestionar de manera eficiente los datos de tus alumnos, materias, exámenes, actas, calificaciones y el Registro Anual de Calificaciones (RAC). Además, podrás automatizar los procesos de carga y gestión de datos para ahorrar tiempo y recursos.',
  },
  {
    title: 'Facilita la revisión y aprobación de la información académica.',
    description:
      'Con NSGA, podrás revisar y aprobar la información académica de tus alumnos con facilidad y tranquilidad. La aplicación te permitirá detectar y corregir errores antes de la generación de informes, así como también hacer seguimiento de las diferentes condiciones de las materias.',
  },
  {
    title: 'Ofrece un acceso intuitivo y personalizado a la información académica.',
    description:
      'Con NSGA, podrás centrar toda la información académica de tu institución en un solo lugar, brindando un acceso intuitivo y personalizado a la información para alumnos, docentes y personal administrativo. La aplicación también te permitirá generar informes personalizados de seguimiento del progreso de los alumnos.',
  },
  {
    title: 'Agiliza la gestión del ciclo lectivo.',
    description:
      'Con NSGA, podrás gestionar el ciclo lectivo de manera eficiente, generando altas, bajas y modificaciones del ciclo lectivo, consulta y carga de planes de estudio, y siguiendo de cerca el progreso de tus alumnos.',
  },
];

export const pricingOptions = [
  {
    title: 'Gratis',
    price: '$0',
    features: ['Private board sharing', '5 Gb Storage', 'Web Analytics', 'Private Mode'],
  },
  {
    title: 'Pro',
    price: 'u$d10',
    features: ['Private board sharing', '10 Gb Storage', 'Web Analytics (Advance)', 'Private Mode'],
  },
  {
    title: 'Empresas',
    price: '$200',
    features: [
      'Private board sharing',
      'Unlimited Storage',
      'High Performance Network',
      'Private Mode',
    ],
  },
];

export const resourcesLinks = [
  {
    href: 'https://www.cba.gov.ar/',
    text: 'Gobierno de Córdoba',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'https://cidi.cba.gov.ar/portal-publico/',
    text: 'Ciudadano Digital',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'https://gestionestudiantes.cba.gov.ar/',
    text: 'Gestión de Estudiantes',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'https://empleadodigital.cba.gov.ar/',
    text: 'Empleado Digital',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'https://sites.google.com/ipem168.com/ipem168',
    text: "IPEM Nº 168 'Diego de Rojas'",
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  { href: '#', text: 'Tutoriales' },
];

export const platformLinks = [
  {
    href: 'https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ltmpl=default&hd=ipem168.com&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin',
    text: 'Correo académico IPEM 168',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'https://portal.office.com/',
    text: 'Correo Institucional Ministerio de Educación',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

export const communityLinks = [
  {
    href: 'https://www.google.com/url?q=https%3A%2F%2Fwww.facebook.com%2Fdiego.derojas.5&sa=D&sntz=1&usg=AOvVaw0wtCKlR5iYRrk_bPmQqYsV',
    text: 'Facebook',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'https://www.google.com/url?q=https%3A%2F%2Fwww.instagram.com%2Fdiegoderojas.ipem168%2F&sa=D&sntz=1&usg=AOvVaw3lEPGrROIuNpO362ZG-jNA',
    text: 'Instagram',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'http://www.google.com/url?q=http%3A%2F%2Fwa.me%2F5493546406870&sa=D&sntz=1&usg=AOvVaw3nV6plSYlCZ9bljbbGY9Ui',
    text: 'WhatsApp',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];
