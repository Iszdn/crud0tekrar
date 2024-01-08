import mongoose from 'mongoose';
const { Schema } = mongoose;

const productShema = new Schema({
  title: String, 
  marka: String,
  price:Number
});
const Product = mongoose.model('makeup', productShema);

export default Product