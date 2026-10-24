
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },

    type: {
      type: String,
      enum: ['income', 'expense'],
      required: true,
    },
  },
  { timestamps: true }
);

categorySchema.index({ user: 1, name: 1, type: 1 }, { unique: true, collation: { locale: 'en', strength: 2 } });


const categoryModel = mongoose.model('Category', categorySchema);

module.exports = categoryModel
