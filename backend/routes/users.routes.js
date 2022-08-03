const express = require('express');
const usuario = express.Router();
const User = require('../models/users/users');

usuario.post('/newmc/:data', async (req, res) =>{
try{
  console.log(JSON.parse(req.params.data))
  const { name, dni, numero1, fecha, numero2 } = JSON.parse(req.params.data)
  const newmc = new User({name, dni, numero1, fecha, numero2 })
  await newmc.save()
  /*if(!(newmc.mcname === '')){
    if(!(newmc.pts === '')){
      await newmc.save()
      res.json({status: 'MC agregado'})
    }else{
      res.json({status: 'No puede dejar los puntos vacios'})
    }
  }else{
    res.json({status: 'No puede dejar el nombre vacio'})
  }*/
}
catch(err){
  res.json(err)
}
})


module.exports = usuario;