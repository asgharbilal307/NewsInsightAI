const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');
const bcrypt = require('bcrypt');

app.use(cors());
app.use(express.json());


app.post('/signup', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password || !role) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (!email.includes("@")) {
            return res.status(400).json({ message: "Invalid email" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        if (!['admin', 'user'].includes(role)) {
            return res.status(400).json({ message: "Role must be either 'admin' or 'user'" });
        }

       
        const checkEmailQuery = "SELECT * FROM Users WHERE email = ?";
        db.query(checkEmailQuery, [email], async (err, results) => {
            if (err) return res.status(500).json({ message: "Database error" });

            if (results.length > 0) {
                return res.status(400).json({ message: "Email already exists" });
            }

           
            const hashedPassword = await bcrypt.hash(password, 10);

           
            const insertQuery = "INSERT INTO Users (name, email, password, role) VALUES (?, ?, ?, ?)";
            db.query(insertQuery, [name, email, hashedPassword, role], (err, result) => {
                if (err) return res.status(500).json({ message: "Database error" });

               
                res.json({ message: "Signup successful", userId: result.insertId });
            });
        });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

app.post('/login',async (req,res)=>{

    const {email,password}=req.body;
    if(!email || !password) return res.status(400).json({message:"Email and password are required"});

    if (!email.includes("@")) {
            return res.status(400).json({ message: "Invalid email" });
        }
    const login_query="Select * FROM Users where email = ? ";
    db.query(login_query,[email],async(err,result)=>{
        if (err) return res.status(500).json({ message: "Database error" });
        
        if(result.length==0) return res.status(400).json({ message:"Invalidcredentials" });
        
        const user=result[0];
        
        const check = await bcrypt.compare(password, user.password);

        if (!check) return res.status(400).json({ message: "Invalid credentials" });
        
        res.json({
            message: "Login successful",
            user: {
                id: user.user_id,
                name: user.name,
                role: user.role
            }
        });

    });

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});