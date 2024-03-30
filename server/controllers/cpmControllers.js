
export const createCPM = async (req, res) => {
    try {
        const { name, address1, address2, city, state, zipcode, user_id } =
            req.body;

        if (typeof name !== "string") {
            return res.status(400).json({ message: "Name must be a string" });
        }

        if (typeof address1 !== "string") {
            return res.status(400).json({ message: "Address 1 must be a string" });
        }

        if (address2 !== undefined) {
            if (typeof address2 !== "string") {
                return res.status(400).json({ message: "Address 2 must be a string" });
            }
        }

        if (typeof city !== "string") {
            return res.status(400).json({ message: "City must be a string" });
        }

        if (typeof state !== "string") {
            return res.status(400).json({ message: "State must be a string" });
        }

        if (typeof zipcode !== "number") {
            return res.status(400).json({ message: "Zipcode must be a string" });
        }

        if (
            name === "" ||
            address1 === "" ||
            city === "" ||
            state === "" ||
            zipcode === ""
        ) {
            return res.status(400).json({ message: "Please fill out all fields" });
        }

        if (name.length > 50) {
            return res
                .status(400)
                .json({ message: "Name must be less than 50 characters" });
        }

        if (address1.length > 100) {
            return res
                .status(400)
                .json({ message: "Address 1 must be less than 100 characters" });
        }

        if (address2 !== undefined) {
            if (address2.length > 100) {
                return res
                    .status(400)
                    .json({ message: "Address 2 must be less than 100 characters" });
            }
        }

        if (city.length > 100) {
            return res
                .status(400)
                .json({ message: "City must be less than 100 characters" });
        }

        if (state.length > 2) {
            return res
                .status(400)
                .json({ message: "State must be less than 2 characters" });
        }

        if (zipcode.length > 9 || zipcode.length < 5) {
            return res
                .status(400)
                .json({
                    message:
                        "Zipcode must be less than 9 characters and greater than 5 characters",
                });
        }

       return res.status(200).json({ message: "CPM created successfully" });
    } catch (error) {
        res.status(400).json({ error });
    }
};


