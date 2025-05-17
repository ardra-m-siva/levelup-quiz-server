const testimonials = require('../models/textimonialModel');
const users = require('../models/userModel');

exports.addTestimonialController = async (req, res) => {
    console.log("inside addTestimonialController");
    const { name, email, message } = req.body
    try {
        const existingUser = await testimonials.findOne({ email })
        if (existingUser) {
            res.status(400).json("Response Already Added")
        } else {
            const newTestimonial = new testimonials({
                name,
                email,
                message
            })
            await newTestimonial.save()
            res.status(200).json({ message: "Response Added", output: newTestimonial })
        }
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

exports.getTestimonialsController = async (req, res) => {
    console.log("inside getTestimonialsController");
    try {
        const allTestimonials = await testimonials.find({status:"approved"})
        if (allTestimonials) {
            res.status(200).json(allTestimonials)
        } else {
            res.status(400).json("No Testimonials")
        }
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

exports.getTestimonialsAdminController = async (req, res) => {
    console.log("inside getTestimonialsAdminController");
    try {
        const allTestimonials = await testimonials.find()
        if (allTestimonials) {
            res.status(200).json(allTestimonials)
        } else {
            res.status(400).json("No Testimonials")
        }
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

exports.updateTestimonialCheckController = async (req, res) => {
    console.log("inside updateTestimonialCheckController");    
    const {id} = req.body   
    try {
        const updatedUser = await testimonials.findByIdAndUpdate({ _id: id }, {
            $set:
                { status: "approved" }
        }, { new: true })
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)

    }

}

exports.updateTestimonialCrossController = async (req, res) => {
    console.log("inside updateTestimonialCrossController");    
    const {id} = req.body   
    try {
        const updatedUser = await testimonials.findByIdAndUpdate({ _id: id }, {
            $set:
                { status: "rejected" }
        }, { new: true })
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)

    }

}