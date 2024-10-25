import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '/',
    },

    {
      text: 'Servicio',
      href: getPermalink('/#features'),
    },
    {
      text: 'Quienes sómos?',
      href: getPermalink('/#quienes'),
    },
    {
      text: 'Contacto',
      href: '/contact',
      /* href: 'mailto:fabian@marlogistic.com.ar' */
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Servicios',
      links: [
        { text: 'Almacenamiento Personalizado', href: '#' },
        { text: 'Logística Integrada', href: '#' },
        { text: 'Seguridad 24/7', href: '#' },
        { text: 'Optimización de Espacios', href: '#' },
        { text: 'Atención al Cliente', href: '#' },
        { text: 'Soluciones Sostenibles', href: '#' },
      ],
    },
    {
      title: 'Nosotros',
      links: [
        { text: 'Nuestra Historia', href: '#' },
        { text: 'Misión y Visión', href: '#' },
        { text: 'Equipo', href: '#' },
        { text: 'Carreras', href: '#' },
        { text: 'Responsabilidad Social', href: '#' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { text: 'Blog', href: '#' },
        { text: 'Casos de Éxito', href: '#' },
        { text: 'Guías y Tutoriales', href: '#' },
        { text: 'Centro de Ayuda', href: '#' },
        { text: 'Preguntas Frecuentes', href: '#' },
      ],
    },

    {
      title: 'Contacto',
      links: [
        { text: 'Contáctanos', href: '#' },
        { text: 'Ubicaciones', href: '#' },
        { text: 'Solicitar Presupuesto', href: '#' },
        { text: 'Feedback', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
};
