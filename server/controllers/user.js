const db = require('../config');

const getAllUser = (req, res) => {
    db.query('SELECT * FROM user', [], (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        });
    });
};
// const addQuestionnaire = (req, res) => {
//     const { question, opt1, opt2, opt3, opt4, reponse,categorie } = req.body;
//     const query = `INSERT INTO Questionnaire (question, opt1, opt2, opt3, opt4, reponse, categorie) VALUES (?, ?, ?, ?, ?, ?, ?)`;
//     db.run(query, [question, opt1, opt2, opt3, opt4, reponse,categorie], function(err) {
//         if (err) {
//             res.status(500).json({ error: err.message });
//             return;
//         }
//         res.status(201).json({ id_question: this.lastID });
//     });
// };

// const deleteQuestionnaire = (req, res) => {
//     const { id } = req.params;
//     const query = `DELETE FROM Questionnaire WHERE id_question = ?`;

//     db.run(query, id, function(err) {
//         if (err) {
//             res.status(500).json({ error: err.message });
//             return;
//         }
//         res.status(200).json({ message: `Questionnaire with ID ${id} deleted` });
//     });
// };

// const updateQuestionnaire = (req, res) => {
//     const { id } = req.params;
//     const { question, opt1, opt2, opt3, opt4, reponse ,categorie} = req.body;   
//     const query = `UPDATE Questionnaire SET categorie = ? ,question = ?, opt1 = ?, opt2 = ?, opt3 = ?, opt4 = ?, reponse = ? WHERE id_question = ?`;

//     db.run(query, [categorie,question, opt1, opt2, opt3, opt4, reponse, id], function(err) {
//         if (err) {
//             res.status(500).json({ error: err.message });
//             return;
//         }
//         res.status(200).json({ message: `Questionnaire with ID ${id} updated` });
//     });
// };
// const getQuestionnaireById = (req, res) => {
//     const { id } = req.params;
//     const query = `SELECT * FROM Questionnaire WHERE id_question = ?`;

//     db.get(query, id, (err, row) => {
//         if (err) {
//             res.status(500).json({ error: err.message });
//             return;
//         }
//         if (!row) {
//             res.status(404).json({ message: `Questionnaire with ID ${id} not found` });
//             return;
//         }
//         res.json(row);
//     });
// };
// const getRandomQuestionnaires = (req, res) => {
//     const { categorie } = req.query; // Récupérer les paramètres de l'URL
    
//     if (!categorie) {
//         return res.status(400).json({ error: "La propriété 'categorie' est requise." });
//     }
//     const query = `SELECT * FROM Questionnaire WHERE categorie =? ORDER BY RANDOM() LIMIT 10`;

//     db.all(query, categorie,(err, rows) => {
//         if (err) {
//             res.status(500).json({ error: err.message });
//             return;
//         }
//         res.json(rows);
//     });
// };






module.exports = {
    getAllUser,
    // addQuestionnaire,
    // deleteQuestionnaire,
    // updateQuestionnaire,
    // getQuestionnaireById,
    // getRandomQuestionnaires
}