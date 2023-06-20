import { OrderQuantity } from "./order.quantity.model";

export interface OrderDetails{
    fullName :String ,
    fullAddress: String ,
    gmail: String ,
    contactNumber: String ,
    alternativeContactNumber: String ,
    orderProductQuantityList: OrderQuantity[];
}