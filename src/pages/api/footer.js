const footerData = [
  [
    {
      title: 'Inicio',
      rute: '/index'
    },
    {
      title: 'Nosotros',
      rute: '/nosotros'
    },
    {
      title: 'Blog',
      rute: '/blog'
    },
    {
      title: 'Contactanos',
      rute: '/contactanos'
    }
  ],
  [
    {
      rute: 'icons/Facebook.svg',
      alt: 'facebook',
      link: 'https://www.facebook.com/inpsac'
    },
    {
      rute: 'icons/Twitter.svg',
      alt: 'twitter',
      link: 'https://twitter.com/?lang=es'
    },
    {
      rute: 'icons/Instagram.svg',
      alt: 'instagram',
      link: 'https://www.instagram.com/inpsac/'
    }
  ]
]


export default function handleIconFooter(req, res) {
  res.status(200).json(footerData)
}
