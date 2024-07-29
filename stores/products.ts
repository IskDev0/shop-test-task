import type {IProduct} from "~/types/IProduct";

export const useProductsStore = defineStore('products', () => {

    const products = ref<IProduct[]>([
            {
                "id": 1,
                "image": "https://via.placeholder.com/150",
                "name": "Смартфон Samsung Galaxy S21",
                "category": "Электроника",
                "description": "Флагманский смартфон с экраном 6.2 дюйма, 8 ГБ ОЗУ, 128 ГБ ПЗУ.",
                "price": 70000,
                "quantity": 10,
                "orders": 5
            },
            {
                "id": 2,
                "image": "https://via.placeholder.com/150",
                "name": "Ноутбук Apple MacBook Air",
                "category": "Компьютеры",
                "description": "Ультратонкий ноутбук с процессором M1, 8 ГБ ОЗУ, 256 ГБ SSD.",
                "price": 100000,
                "quantity": 20,
                "orders": 10
            },
            {
                "id": 3,
                "image": "https://via.placeholder.com/150",
                "name": "Наушники Sony WH-1000XM4",
                "category": "Аудио",
                "description": "Беспроводные наушники с шумоподавлением и отличным качеством звука.",
                "price": 25000,
                "quantity": 15,
                "orders": 7
            },
            {
                "id": 4,
                "image": "https://via.placeholder.com/150",
                "name": "Телевизор LG OLED55C1",
                "category": "Бытовая техника",
                "description": "55-дюймовый OLED телевизор с 4K разрешением и поддержкой HDR.",
                "price": 120000,
                "quantity": 5,
                "orders": 3
            },
            {
                "id": 5,
                "image": "https://via.placeholder.com/150",
                "name": "Часы Apple Watch Series 6",
                "category": "Гаджеты",
                "description": "Смарт-часы с измерением уровня кислорода в крови и поддержкой EKG.",
                "price": 40000,
                "quantity": 8,
                "orders": 2
            },
            {
                "id": 6,
                "image": "https://via.placeholder.com/150",
                "name": "Планшет Samsung Galaxy Tab S7",
                "category": "Компьютеры",
                "description": "Планшет с 11-дюймовым экраном, 6 ГБ ОЗУ, 128 ГБ ПЗУ и поддержкой S Pen.",
                "price": 60000,
                "quantity": 12,
                "orders": 6
            },
            {
                "id": 7,
                "image": "https://via.placeholder.com/150",
                "name": "Смартфон iPhone 12",
                "category": "Электроника",
                "description": "Смартфон с экраном 6.1 дюйма, 4 ГБ ОЗУ, 64 ГБ ПЗУ.",
                "price": 80000,
                "quantity": 20,
                "orders": 4
            },
            {
                "id": 8,
                "image": "https://via.placeholder.com/150",
                "name": "Кофеварка De'Longhi Magnifica",
                "category": "Бытовая техника",
                "description": "Эспрессо-кофемашина с функцией автоматического капучино и встроенной кофемолкой.",
                "price": 45000,
                "quantity": 9,
                "orders": 11
            },
            {
                "id": 9,
                "image": "https://via.placeholder.com/150",
                "name": "Фитнес-трекер Xiaomi Mi Band 6",
                "category": "Гаджеты",
                "description": "Фитнес-браслет с измерением пульса, уровня кислорода в крови и водонепроницаемостью.",
                "price": 5000,
                "quantity": 10,
                "orders": 8
            },
            {
                "id": 10,
                "image": "https://via.placeholder.com/150",
                "name": "Ноутбук Dell XPS 13",
                "category": "Компьютеры",
                "description": "Ультрабук с экраном 13.3 дюйма, процессором Intel Core i7, 16 ГБ ОЗУ, 512 ГБ SSD.",
                "price": 120000,
                "quantity": 7,
                "orders": 5
            },
            {
                "id": 11,
                "image": "https://via.placeholder.com/150",
                "name": "Камера Canon EOS R5",
                "category": "Фототехника",
                "description": "Беззеркальная камера с 45-мегапиксельной матрицей и поддержкой 8K видео.",
                "price": 350000,
                "quantity": 8,
                "orders": 3
            },
            {
                "id": 12,
                "image": "https://via.placeholder.com/150",
                "name": "Игровая консоль PlayStation 5",
                "category": "Игровые приставки",
                "description": "Игровая консоль нового поколения с поддержкой 4K HDR и SSD на 825 ГБ.",
                "price": 60000,
                "quantity": 4,
                "orders": 1
            },
            {
                "id": 13,
                "image": "https://via.placeholder.com/150",
                "name": "Монитор LG UltraFine 27",
                "category": "Компьютеры",
                "description": "27-дюймовый 4K монитор с поддержкой HDR10 и USB-C.",
                "price": 55000,
                "quantity": 6,
                "orders": 9
            },
            {
                "id": 14,
                "image": "https://via.placeholder.com/150",
                "name": "Робот-пылесос iRobot Roomba i7",
                "category": "Бытовая техника",
                "description": "Робот-пылесос с функцией автоматического опорожнения контейнера для мусора.",
                "price": 50000,
                "quantity": 15,
                "orders": 7
            },
            {
                "id": 15,
                "image": "https://via.placeholder.com/150",
                "name": "Блендер Bosch SilentMixx",
                "category": "Бытовая техника",
                "description": "Тихий блендер с мощностью 700 Вт и стеклянным кувшином объемом 2 литра.",
                "price": 8000,
                "quantity": 20,
                "orders": 5
            },
            {
                "id": 16,
                "image": "https://via.placeholder.com/150",
                "name": "Смартфон OnePlus 9",
                "category": "Электроника",
                "description": "Смартфон с экраном 6.55 дюйма, 8 ГБ ОЗУ, 128 ГБ ПЗУ и поддержкой 5G.",
                "price": 70000,
                "quantity": 10,
                "orders": 8
            },
            {
                "id": 17,
                "image": "https://via.placeholder.com/150",
                "name": "Электросамокат Xiaomi Mi Electric Scooter",
                "category": "Гаджеты",
                "description": "Электросамокат с максимальной скоростью 25 км/ч и дальностью хода 30 км.",
                "price": 30000,
                "quantity": 9,
                "orders": 6
            },
            {
                "id": 18,
                "image": "https://via.placeholder.com/150",
                "name": "Гарнитура Razer BlackShark V2",
                "category": "Аудио",
                "description": "Игровая гарнитура с микрофоном и системой шумоподавления.",
                "price": 10000,
                "quantity": 4,
                "orders": 2
            },
            {
                "id": 19,
                "image": "https://via.placeholder.com/150",
                "name": "Фотоаппарат Fujifilm X-T4",
                "category": "Фототехника",
                "description": "Беззеркальная камера с матрицей 26 МП и стабилизацией изображения.",
                "price": 180000,
                "quantity": 7,
                "orders": 9
            },
            {
                "id": 20,
                "image": "https://via.placeholder.com/150",
                "name": "Смарт-часы Garmin Fenix 6",
                "category": "Гаджеты",
                "description": "Смарт-часы для экстремальных видов спорта с GPS и измерением пульса.",
                "price": 60000,
                "quantity": 6,
                "orders": 10
            }
        ])

    const getProducts = async () => {
        try {
            products.value = await $fetch("/products")
        }catch (error) {
            console.error(error)
        }
    }

    return {
        products,
        getProducts
    }
})