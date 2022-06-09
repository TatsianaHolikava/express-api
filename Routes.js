let cards = [
    {id: '1', name: 'First card', status: 'todo', priority: 10},
    {id: '2', name: 'Second card', status: 'progress', priority: 4},
    {id: '3', name: 'Third card', status: 'review', priority: 3}
]

function Routes(app) {


    app.get('/', (req, res) => {
        res.send('Hello World!')
    })
    app.get('/card', (req, res) => {
        res.send(cards)
    })
    app.delete('/card/:cardId', (req, res) => {
        const cardId = req.params.cardId;
        console.log(cardId)
        cards = cards.filter(el => el.id !== cardId)
        res.send(cards)
    })

    app.post('/card', (req, res) => {
        const card = req.body;
        cards.push({id: Math.random().toString(), ...card});
        res.send('Card Created')
    })


    app.patch('/card/:cardId', (req, res) => {
        const cardId = req.params.cardId;
        const card = req.body;
        cards = cards.map(el => el.id === cardId ? ({...card, id: el.id}) : el)
        res.send('Card Updated')
    })


}
module.exports = Routes;
