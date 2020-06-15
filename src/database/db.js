const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./src/database/database.db')


db.serialize(() => {
    /*
    db.run(`
    CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        name TEXT,
        address TEXT,
        address2 TEXT,
        state TEXT,
        city TEXT,
        items TEXT
    );
    `)

    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,? );
    `
    const values = [
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "Reciclo",
        "Henrique Dias, Mercadinho",
        "N 415",
        "Maranhão",
        "Imperariz",
        "Papel e Papelão",
    ]

    function afterInsertData(error) {
        if(error) {
            return console.log(error)
        }
        console.log('Cadastrado com sucesso')
        console.log(this)
    }

    //db.run(query, values, afterInsertData)

    db.all(`SELECT * FROM places`, function(error, rows) {
        if(error){
            return console.log(error)
        }
        console.log('Todos os Registros: ')
        console.log(rows)
    })
    
    db.run(`DELETE FROM places WHERE id = ?`, [1], function(error) {
        if (error){
            return console.log(error)
        }

        console.log('Registro deletado com sucesso!')
    })
    */
})
//*/
module.exports = db

