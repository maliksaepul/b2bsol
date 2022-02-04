import statistic from '@/contexts/data/statistic.json'

const findMystatistic = id => {
    const myStat = statistic.find(val => {
        return val.id === Number(id)
    })

    if (myStat) {
        return myStat
    } else {
        return null
    }
}

export default function handler(req, res) {
    const { id } = req.query
    const stat = findMystatistic(id)

    switch (req.method) {
        case 'GET':
            if (stat) {
                res.status(200).json(stat)
            } else {
                res.status(400).send({ message: 'not data found' })
            }
            break
        default:
            res.status(400).send({ message: 'Invalid method' })
            break
    }
}
