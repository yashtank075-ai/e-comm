const express = require('express');
const Product = require('../models/Products');
const {protect,admin} = require('../Middleware/AuthMiddleware');

const router = express.Router();

//@route Post 
router.post("/",protect,admin,async (req,res)=>{
    try{
       const {name,
        description,
        price,
        discountPrice,
        countInStock,
        category,
        brand,
        sizes,
        colors,
        collections,
        material,
        gender,
        images,
        isFeatured,
        isPublished,
        tags,
        dimensions,
        weight,
        sku,
   } = req.body;

   const product = new Product({name,
        description,
        price,
        discountPrice,
        countInStock,
        category,
        brand,
        sizes,
        colors,
        collections,
        material,
        gender,
        images,
        isFeatured,
        isPublished,
        tags,
        dimensions,
        weight,
        sku,
        user:req.user._id
   });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
    }catch(error){
     console.log(error);
     res.status(400).send("Server Error");
    }
});


//put 
router.put("/:id",protect,admin,async(req,res)=>{
     try{
         const {name,
        description,
        price,
        discountPrice,
        countInStock,
        category,
        brand,
        sizes,
        colors,
        collections,
        material,
        gender,
        images,
        isFeatured,
        isPublished,
        tags,
        dimensions,
        weight,
        sku,
   } = req.body;

   //find product by id
   const product = await Product.findById(req.params.id);
   if(product){
     //Update Product Fields
     product.name = name || product.name;
     product.description = description || product.name;
     product.price = price || product.price;
     product.discountPrice = discountPrice || product.discountPrice;
     product.countInStock = countInStock || product.countInStock;
     product.category = category || product.category;
     product.brand = brand || product.brand;
     product.sizes = sizes || product.sizes;
     product.colors = colors || product.colors;
     product.collections = collections || product.collections;
     product.material = material || product.material;
     product.gender = gender || product.gender;
     product.images = images || product.images;
     product.isFeatured = isFeatured !== undefined ? isFeatured  : product.isFeatured;
     product.isPublished = isPublished !== undefined ? isPublished : product.isPublished;
     product.tags = tags || product.tags;
     product.dimensions = dimensions || product.dimensions;
     product.weight = weight || product.weight;
     product.sku = sku || product.sku;
   

   //save the updated product
   const updatedprodcut = await product.save();
   res.json(updatedprodcut);
   }
   else{
     res.status(404).json({message:"Product Not Found"});
   } 
     }catch(error){
        console.log(error);
        res.status(500).send("Server Error");
     }
});

module.exports = router;

// {
//     "name": "Classic Oxford Button-Down Shirt",
//     "description":
//       "This classic Oxford shirt is tailored for a polished yet casual look. Crafted from high-quality cotton, it features a button-down collar and a comfortable, slightly relaxed fit. Perfect for both formal and casual occasions, it comes with long sleeves, a button placket, and a yoke at the back. The shirt is finished with a gently rounded hem and adjustable button cuffs.",
//     "price": 3999,
//     "discountPrice": 3499,
//     "countInStock": 20,
//     "category": "Top Wear",
//     "brand": "Urban Threads",
//     "sizes": ["S", "M", "L", "XL", "XXL"],
//     "colors": ["Red", "Blue", "Yellow"],
//     "collections": "Business Casual",
//     "material": "Cotton",
//     "gender": "Men",
//     "images": [
//       {
//         "url": "https://picsum.photos/500/500?random=39",
//         "altText": "Classic Oxford Button-Down Shirt Front View"
//       },
//       {
//         "url": "https://picsum.photos/500/500?random=40",
//         "altText": "Classic Oxford Button-Down Shirt Back View"
//       }
//     ],
//     "isFeatured":true,
//     "isPublished":true,
//     "tags":["denim","jacket","casual","spring"],
//     "dimensions":{
//         "length":12,
//         "width":8,
//         "height":1
//     },
//     "weight":1.5,
//     "sku": "OX-SH-001"
//   }