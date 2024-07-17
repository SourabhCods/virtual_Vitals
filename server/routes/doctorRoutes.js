import router from "./patientRoutes.js";
import bcrypt from 'bcrypt';

router.post('/signup', async (req, res) => {
    const {name, emailOrPhone, password} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const doctorModel = await Doctor.create({name, emailOrPhone, hashedPassword});
        res.status(201).json({message: 'Doctor created successfully'});
    } catch (error) {
        console.log(error);
    }
})

router.post('/login', async (req, res) => {
    const {emailOrPhone, password} = req.body;
    try {
        const doctorModel = await Doctor.findOne({emailOrPhone});
        if (doctorModel && (await bcrypt.compare(password, doctorModel.hashedPassword))) {
            res.status(200).json({message: 'Doctor logged in successfully'});
        } else {
            res.status(401).json({message: 'Invalid email or password'});
        }
    } catch (error) {
        console.log(error);
    }
})


export default router;
