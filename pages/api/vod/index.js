import vod from '@/contexts/data/vod.json'

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            res.status(200).json(vod)
            break
        default:
            res.status(400).send({ message: 'wrong method' })
            break
    }
}
