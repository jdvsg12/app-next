const imgCarousel = [
    {
        rute: '/imag/banner.jpg',
        alt: 'text',
    },
    {
        rute: '/imag/banner.jpg',
        alt: 'text',
    },
    {
        rute: '/imag/banner.jpg',
        alt: 'text',
    }
];

export default function handleCarousel(req, res) {
    res.status(200).json(imgCarousel)
}