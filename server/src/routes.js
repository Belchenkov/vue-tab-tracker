module.exports = app => {
    app.post('/register', (req, res) => {
        res.send({
            message: 'your user was registered',
            email: req.body.email,
            password: req.body.password
        });
    });
};