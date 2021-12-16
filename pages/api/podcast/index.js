import podcast from '@/contexts/data/podcast.json'

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            res.status(200).json(podcast)
            break
        default:
            res.status(400).send({ message: 'wrong method' })
            break
    }
}
