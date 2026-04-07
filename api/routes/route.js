const express=require('express');
const router=express.Router();

router.get('/from',(req,res)=>{
    res.render('from',{message:'hello bhopal'});
});
router.get('/contact',(req,res)=>{
    res.render('contact');
});

router.get('/',(req,res)=>{
    res.send('user details received');
});

router.post('/',(req, res)=>{
 const {name, city}=req.body;
 res.send(`user create with name ${name || 'unknown'} city ${city|| 'unknown'}`)
})
router.get('/:id',(req,res)=>{
    res.send(`user datails with ID: ${req.params.id}`)

})
router.put('/:id' ,(req,res)=>{
    const {name}=req.body;
    res.send(`user details update. new name:${name || sneha}`)
})
router.delete('/:id',(req, res)=>{
    res.send(`user with ID ${req.params.id} has been deleted`)
})
module.exports=router