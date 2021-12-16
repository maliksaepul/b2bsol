import apb from '@/contexts/data/apb.json'

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            res.status(200).json(apb)
            break
        default:
            res.status(400).send({ message: 'wrong method' })
            break
    }
}
