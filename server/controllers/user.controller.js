import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


/**
 * @route users/sign-up
 * @desc Let users create an account
 * @method POST
 */
export const signUp = asyncHandler(async (req, res) => {
    const { email, password, fullName } = req.body

    const user = await User.find({ email: email })

    if (user.length > 0) {
        res.status(500)
        throw new Error('User postoji')
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    const createdUser = await User.create({ email, password: hashedPassword, fullName })
    const token = jwt.sign({ email: createdUser.email, id: createdUser._id }, process.env.SECRET, { expiresIn: '1h' })

    res.status(200).json({ createdUser, token })
})

export const signIn = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('User ne postoji napravi nalog')
    }

    const isPassOk = await bcrypt.compare(password, user.password)

    if (isPassOk) {
        console.log("sfdsdfsdf")
    }

    const token = jwt.sign({ email: user.email, id: user._id, type: user.type }, process.env.SECRET, { expiresIn: '1h' })

    res.status(200).json({ user, token })
})

export const deleteUser = asyncHandler(async (req, res) => {
    const { userId } = req.params

    //prover dal user postoji
    //ako da brisi ga

    if (req.userType === 'admin') {
        await User.findByIdAndDelete(userId)
    } else {
        throw new Error('Not authorized')
    }

    await User.findById(userId)

    res.status(200).json({ message: "user deleted" })
})

export const getUsers = asyncHandler(async (req, res) => {
    const allUsers = await User.find()

    res.status(200).json({ allUsers })
})