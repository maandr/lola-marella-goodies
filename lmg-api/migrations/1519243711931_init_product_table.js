module.exports = {
    "up": "CREATE TABLE products (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp NOT NULL DEFAULT NOW(), `modified_at` timestamp NOT NULL DEFAULT NOW() ON UPDATE NOW(), `sku` varchar(20) NOT NULL, `name` varchar(120) NOT NULL, `price` decimal, PRIMARY KEY(id));",
    "down": "DROP TABLE products"
}