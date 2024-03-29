let cards = [
    {id: '1', name: 'First card', status: 'todo', priority: 2},
    {id: '2', name: 'Second card', status: 'progress', priority: 5},
    {id: '3', name: 'Next card', status: 'preview', priority: 10},
]

function routes(app) {
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })
    app.get('/card', (req, res) => {
        res.send(cards)
    })
    app.delete('/card/:cardId', (req, res) => {
        console.log(req)
        const cardId = req.params.cardId;
        //console.log(cardId);
        cards = cards.filter(el => el.id !== cardId);
        //console.log(cards);
        res.send(cards)
    })

    app.post('/card', (req, res) => {
        const card = req.body;
        cards.push({id: Math.random().toString(), ...card});  // само действие от прихода запроса на РОЫЕ
        res.send('Card created'); // вывести инфо что карта создана
    })

    app.patch('/card/:cardId', (req, res) => {
        const cardId = req.params.cardId;
        const card = req.body;
        cards = cards.map(el => el.id === cardId ? ({...card, id: el.id}) : el);
        res.send('Card Updated'); // вывести инфо что карта создана
    })
}

module.exports = routes;