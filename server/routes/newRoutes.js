import router from "./patientRoutes";

router.post('/signup', async (req, res) => {
    const {name, emailOrPhone, password} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newModel = await New.create({name, emailOrPhone, hashedPassword});
        res.status(201).json({message: 'New created successfully'});
    } catch (error) {
        console.log(error);
    }
})