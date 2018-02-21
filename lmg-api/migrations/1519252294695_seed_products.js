module.exports = {
    "up": "INSERT INTO `products` (`sku`, `name`, `price`) VALUES ('1001-XS', 'RiotDontDiet T-Shirt Blue XS', 28.00), ('1001-S', 'RiotDontDiet T-Shirt Blue S', 28.00), ('1001-M', 'RiotDontDiet T-Shirt Blue M', 28.00), ('1001-L', 'RiotDontDiet T-Shirt Blue L', 28.00), ('1001-XL', 'RiotDontDiet T-Shirt Blue XL', 28.00)",
    "down": "TRUNCATE TABLE `products`"
}