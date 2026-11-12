const registerUserController=(req,res)=>{
    res.status(200).json({
        "message": "Success"
    })
    console.log(req.files);
}

export {registerUserController};