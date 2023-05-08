import mongoose, { Schema } from 'mongoose';

const ticketSchema = new mongoose.Schema({
  code: {
    Type: String,
    unique: true,
    required: true,
  },
  purchase_datetime: {
    Type: String,
    required: true,
  },
  purchaser: {
    Type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
  },
  amount: {
    Type: Number,
    required: true,
  },
});

export default ticketModel = mongoose.model('Tickets', ticketSchema);
