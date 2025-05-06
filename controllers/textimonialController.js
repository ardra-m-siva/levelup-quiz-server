const testimonials = require('../models/textimonialModel')

exports.addTestimonialController = async (req, res) => {
    console.log("inside addTestimonialController");
    const { name, email, message } = req.body
    try {
        const existingUser=await testimonials.findOne({email})
        if(existingUser){
            res.status(400).json("Response Already Added")
        }else{
            const newTestimonial= new testimonials({
                name,
                email,
                message
            })
            await newTestimonial.save()
            res.status(200).json({message:"Testimonial Added",result:newTestimonial})
        }
    } catch (err) {
        res.status(500).json({ message: err })
    }
}
exports.getTestimonialsController=async(req,res)=>{
    console.log("inside getTestimonialsController");
    try{
        const allTestimonials=await testimonials.find()
        if(allTestimonials){
            res.status(200).json(allTestimonials)
        }else{
            res.status(400).json("No Testimonials")
        }
    }catch(err){
        res.status(500).json({ message: err })  
    }
}