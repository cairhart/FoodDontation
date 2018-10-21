const {Client} = require('pg')
const client = new Client()

const text = "SELECT * FROM donations WHERE storeid = $1 ORDER BY time"

// function to query to retreive all donations for a location

async function getDonations() {
    client.connect()
    try {
        client.query(text, storeid)
        client.end()
        return res.rows
    }
    catch(e) {
        console.log(err.stack)
    }
    return null
}
