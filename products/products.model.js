const products = [
    {
        id: '1',
        description: 'IPhone 13 PRO',
        price: 13000000
    },
    {
        id: '2',
        description: 'OPPO A92',
        price: 13000000
    }
];

function getAllProducts(){
    return products;
}

module.exports = {
    getAllProducts,
}