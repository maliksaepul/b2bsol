import podcast from '@/contexts/data/podcast.json'
import { queryData } from '@/utils/helpers'

export default function handler(req, res) {
    const { search, filter, sorting } = req.query
    let response = podcast

    switch (req.method) {
        case 'GET':
            if (search || filter || sorting) {
                response = queryData(response, search, filter, sorting)
                res.status(200).json(response)
            } else {
                res.status(200).json(response)
            }
            break
        default:
            res.status(400).send({ message: 'wrong method' })
            break
    }
}
