const orders = [
    {
        date: '2023-01-26',
        subtotal: 200000,
        items:[
            {
                product: {
                    id: '1',
                    description: 'Old IPhone 13 PRO',
                    price: 13000000
                },
                quantity: 5,
            }
        ],

    }
]

function getAllOrders() {
    return orders;
}

module.exports = {
    getAllOrders,
}