import {model, Schema} from 'mongoose';
const SwiftyProdSchema = new Schema(
    {
        productName: {
            type: String,
            // required: [true, "Product name is required!"],
            // minlength: [2, "Product name must be at least 2 characters long!"],
            // maxlength: [255, "Product name must be less than 255 characters long"]
        },
        description: {
            type: String,
            // required: [true, "Description is required!"],
            // minlength: [2, "Description must be at least 2 characters long!"],
            // maxlength: [255, "Description must be less than 255 characters long"]
        },
        price: {
            type: Number,
            // required: [true, "Price is required!"],
            // min: [16, "SwiftyProd must be at least 16 years old!"]
        },
        inStock: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
);
const SwiftyProd = model("SwiftyProd", SwiftyProdSchema);
export default SwiftyProdSchema;
