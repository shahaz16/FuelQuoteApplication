
export const createRegister = async (req, res) => {
    try {
        const { Username, Password } = req.body
       

        if (typeof Username !== "string") {
            return res.status(400).json({ message: "Username must be a string" })
        }

        if (typeof Password !== "string") {
            return res.status(400).json({ message: "Password must be a string" })
        }

        if (Username === "" || Password === "") {
            return res.status(400).json({ message: "Please fill out all fields" })
        }

        res.status(200).json({ message: "Account created successfully" })
    } catch (error) {
        res.status(400).json({ message: "error" })
    }
}


export const login = async (req, res) => {
    try {
        const { Username, Password } = req.body

        if (typeof Username !== "string") {
            return res.status(400).json({ message: "Username must be a string" })
        }

        if (typeof Password !== "string") {
            return res.status(400).json({ message: "Password must be a string" })
        }

        if (Username === "" || Password === "") {
            return res.status(400).json({ message: "Please fill out all fields" })
        }

      
        res.status(200).json({ message: "Login successful" })
    } catch (error) {
        res.status(400).json({ message: "error" })
    }
}

