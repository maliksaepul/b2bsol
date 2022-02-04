import events from '@/contexts/data/lastlearning.json'

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            res.status(200).json(events)
            break
        default:
            res.status(200).json(events)
            break
    }
}
