import { cartsCollection } from "../database/db.js";

export async function getCart(req,res){
  const {userId} = res.locals.session ;

  try{
      const cart = await cartsCollection.findOne({
          userId: userId
      })
      if(cart.products.length === 0){
        res.send({message: "O carrinho está vazio!"})
        return
      }
      res.send(cart.products)
  }
  catch(error){
      console.log(error)
      res.send(error.message)
      return
  }
}

export async function addCart(req, res, next){
  const {_id, value,image, name} = req.product
  const {userId} = req.session;
  const { quantity} = req.body

  try{
      await cartsCollection.updateOne(
          {userId: userId},
          {$push: 
              {products: {_id, name,value, quantity, image}}}
      )
      res.sendStatus(201)
  }
  catch(error){
      console.log(error)
  }
}
export async function deleteCart(req, res){
  const {_id} = req.product
  try{
      const delet = await productsCollection.updateOne(
          { _id : _id} ,
          { $pull : { products : { _id : _id } } } ,
      )
      res.send(delet)
  }
  catch(error){
      res.send(console.log("error"))
      return
  }
}