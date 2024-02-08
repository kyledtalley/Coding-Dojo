import {model, Schema} from 'mongoose';
const BookSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required!"],
            minlength: [3, "Title must be at least 3 characters long!"],
            maxlength: [75, "Title must be less than 75 characters long"]
        },
        author: {
            type: String,
            required: [true, "Author name is required!"],
            minlength: [3, "Author name must be at least 3 characters long!"],
            maxlength: [50, "Author name must be less than 50 characters long"]
        },
        pages: {
            type: Number,
            required: [true, "# of pages is required!"],
            min: [25, "There must be at least 25 pages!"]
        },
        isAvailable: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);
const Book = model("Book", BookSchema);
export default Book;
