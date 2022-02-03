import events from '@/contexts/data/events.json'

export default function handler(req, res) {
    const { organization } = req.query
    const response = events.filter(
        val =>
            val.organization.length === 0 ||
            val.organization.includes(Number(organization))
    )

    switch (req.method) {
        case 'GET':
            res.status(200).json(response)
            break
        default:
            res.status(200).json(events)
            break
    }
}
