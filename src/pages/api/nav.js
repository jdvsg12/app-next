const navData = [
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
]

export default function handleNav(req, res) {
    res.status(200).json(navData)
  }