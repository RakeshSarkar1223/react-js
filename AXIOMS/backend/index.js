import express from 'express';

const app = express();

const port = process.env.PORT || 4500;


app.get('/api/name', (req, res) => {
    const name = [
        {
            id: 1,
            name: 'Rakesh',
        },
        {
            id: 2,
            name: 'John Doe',
        },
    ]
    res.json({ name });
    return;
});

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});