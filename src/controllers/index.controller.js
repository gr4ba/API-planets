const { Pool } = require('pg');

const pool = new Pool ({
    host: 'containers-us-west-143.railway.app',
    user: 'postgres',
    password: 'MsoSIX6jWSy3jPp0sgwC',
    database: 'railway',
    port: '7891'
});

const getPlanetas = async (req,res) => {
    const response = await pool.query('SELECT * FROM planetas');
    console.log(response.rows);
    res.status(200).json(response.rows);
};

const createPlanetas = async (req,res) => {
    const { name, mass, radius, period, semi_major_axis, temperature, distance_light_year, image } = req.body;
    const response = await pool.query('INSERT INTO planetas (name, mass, radius, period, semi_major_axis, temperature, distance_light_year, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [name, mass, radius, period, semi_major_axis, temperature, distance_light_year, image]);
    res.json({
        message: 'Planet added successfully',
        body: {
            user: {name, mass, radius, period, semi_major_axis, temperature, distance_light_year, image}
        }
    })
};

const getPlanetasById = async (req,res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM planetas WHERE id = $1', [id]);
    console.log(response.rows);
    res.status(200).json(response.rows);
};

const updatePlanetas = async (req,res) => {
    const id = req.params.id;
    const { name, mass, radius, period, semi_major_axis, temperature, distance_light_year, image } = req.body;
    const response = await pool.query('UPDATE planetas SET name = $1, mass = $2, radius = $3, period = $4, semi_major_axis = $5, temperature = $6, distance_light_year = $7, image = $8 WHERE id = $9', [
        name, 
        mass, 
        radius, 
        period, 
        semi_major_axis,
        temperature, 
        distance_light_year, 
        image,
        id
    ]);
    console.log(response);
    res.json('Planet Updated Successfuly');
};

module.exports = {
    getPlanetas,
    createPlanetas,
    getPlanetasById,
    updatePlanetas
}