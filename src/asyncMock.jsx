const products = [

    {
        id: '1',
        titulo: 'Pantalón 01',
        imagen: '../img/pantalon_01.jpg',
        category: 'pantalones',
        precio: 10000,
        stock: 100,
        descripcion: 'fdfafdfdada'
    },
    {
        id: '2',
        titulo: 'Pantalón 02',
        imagen: '../img/pantalon_02.jpg',
        category: 'pantalones',
        precio: 10000,
        stock: 200,
        descripcion: 'fdfafdfdada'
    },
    {
        id: '3',
        titulo: "Pantalón 03",
        imagen: "../img/pantalon_03.jpg",
        category: "pantalones",
        precio: 10000,
        stock: 50,
        descripcion: "fdfafdfdada"
    },
    {
        id: '4',
        titulo: "Pantalón 04",
        imagen: "../img/pantalon_04.jpg",
        category: "pantalones",
        precio: 10000,
        stock: 50,
        descripcion: "fdfafdfdada"
    },
    {
        id: '5',
        titulo: "Pantalón 05",
        imagen: "../img/pantalon_05.jpg",
        category: "pantalones",
        precio: 10000,
        stock: 30,
        descripcion: "fdfafdfdada"
    },
    {
        id: '6',
        titulo: "Pantalón 06",
        imagen: "../img/pantalon_06.jpg",
        category: "pantalones",
        precio: 10000,
        stock: 20,
        descripcion: "fdfafdfdada"
    },
    {
        id: '7',
        titulo: "Pantalón 07",
        imagen: "../img/pantalon_07.jpg",
        category: "pantalones",
        precio: 10000,
        stock: 20,
        descripcion: "fdfafdfdada"
    },
    {
        id: '8',
        titulo: "Pantalón 08",
        imagen: "../img/pantalon_08.jpg",
        category: "pantalones",
        precio: 10000,
        stock: 60,
        descripcion: "fdfafdfdada"
    },
    {
        id: '9',
        titulo: "Pantalón 09",
        imagen: "./img/pantalon_09.jpg",
        category: "pantalones",
        precio: 10000,
        stock: 60,
        descripcion: "fdfafdfdada"
    },
    {
        id: '10',
        titulo: "Pollera 01",
        imagen: "./img/pollera_01.jpg",
        category: "pantalones",
        precio: 10000,
        stock: 60,
        descripcion: "fdfafdfdada"
    },
    {
        id: '11',
        titulo: "Pollera 02",
        imagen: "./img/pollera_02.jpg",
        category: "pantalones",
        precio: 10000,
        stock: 60,
        descripcion: "fdfafdfdada"
    },
    {
        id: '12',
        titulo: "Pollera 03",
        imagen: "./img/pollera_03.jpg",
        category: "pantalones",
        precio: 10000,
        stock: 60,
        descripcion: "fdfafdfdada"
    },
    {
        id: '13',
        titulo: "Pollera 04",
        imagen: "./img/pollera_04.jpg",
        category: "pantalones",
        precio: 10000,
        stock: 60,
        descripcion: "fdfafdfdada"
    },
    {
        id: '14',
        titulo: "Campera 01",
        imagen: "./img/campera_01.jpg",
        category: "pantalones",
        precio: 10000,
        stock: 60,
        descripcion: "fdfafdfdada"
    },

    {
        id: '15',
        titulo: "Campera 02",
        imagen: "./img/campera_02.jpg",
        category: "pantalones",
        precio: 10000,
        stock: 60,
        descripcion: "fdfafdfdada"
    },
    {
        id: '16',
        titulo: "Campera 03",
        imagen: "./img/campera_03.jpg",
        category: "pantalones",
        precio: 10000,
        stock: 60,
        descripcion: "fdfafdfdada"
    },
    {
        id: '17',
        titulo: "Campera 04",
        imagen: "./img/campera_04.jpg",
        category: "pantalones",
        precio: 10000,
        stock: 60,
        descripcion: "fdfafdfdada"
    },
    {
        id: '18',
        titulo: "Campera 05",
        imagen: "./img/campera_05.jpg",
        category: "pantalones",
        precio: 10000,
        stock: 60,
        descripcion: "fdfafdfdada"
    }

]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log({ products, id })
            const product = products.find((p) => p.id === id)
            if (products) return resolve(product)

            return reject({ error: 'No encontrado' })

        }, 1000)
    })
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === categoryId))
        }, 500)
    })
};