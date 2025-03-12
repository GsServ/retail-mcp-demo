const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  sku: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  // Channel-specific pricing
  channelPricing: {
    web: Number,
    mobile: Number,
    inStore: Number,
    marketplace: {
      amazon: Number,
      ebay: Number
    },
    social: {
      facebook: Number,
      instagram: Number
    }
  },
  categories: [{
    type: String
  }],
  images: [{
    url: String,
    alt: String
  }],
  variants: [{
    name: String,
    options: [String]
  }],
  // Track which channels this product is available on
  availableChannels: {
    web: Boolean,
    mobile: Boolean,
    inStore: Boolean,
    marketplace: {
      amazon: Boolean,
      ebay: Boolean
    },
    social: {
      facebook: Boolean,
      instagram: Boolean
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', ProductSchema);
