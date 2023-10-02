const navData = [
    {
        title: 'Inicio',
        rute: '/'
    },
    {
        title: 'Atención',
        rute: '/atencion'
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