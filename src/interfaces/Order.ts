export interface OrderProduct {
    productCode: number;
    quantity: number;
}

export interface Order {
    userID: string;
    name: string;
    productsToOrder: Array<OrderProduct>;
    total: number;
}