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
    },
    {
      text: 'Ubicación',
      href: '/ubicacion',
    },
  ],
};

export const footerData = {
  links: [
    /* {
      title: 'Servicios',
      links: [
        { text: 'Almacenamiento Personalizado', href: '#' },
        { text: 'Logística Integrada', href: '#' },
        { text: 'Seguridad 24/7', href: '#' },
      ],
    }, */
    {
      title: 'Nosotros',
      links: [
        { text: 'Quienes somos?', href: '/#quienes' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { text: 'Centro de Ayuda', href: '/contact' },
      ],
    },

    {
      title: 'Contacto',
      links: [
        { text: 'Contáctanos', href: '/contact' },
        { text: 'Ubicación', href: '/ubicacion' },
        { text: 'Solicitar Presupuesto', href: 'mailto:pedidos@marlogistic.com.ar' },
        { text: 'Whatsapp', href: 'https://wa.me/541134896666', target: '_blank' },

      ],
    },
  ],
  secondaryLinks: [
    { text: 'Todos los derechos reservados' },
  ],
  socialLinks: [
    /* { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' }, */
    /* { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' }, */
  ],
};
