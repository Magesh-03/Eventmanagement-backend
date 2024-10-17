router.route('/register').post((req,res)=>{
    const {username} = req.body;

    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(req.body.password,salt,(err,hashedPassword) =>{
            const password = hashedPassword;
            const newUser = new Users({username,password})
            newUser.save()
            .then(()=> res.json("user added"))
            .catch(err => res.status(400).json('Error:'+err ))
        })
    })

})