const datefunc=(req,res,next)=>{
    let date = new Date();
    let h = date.getHours()
    if(!(h>=9 &&h<=16 )){
        res.send('come back tomorrow were closed')
    } next()
}
module.exports=datefunc