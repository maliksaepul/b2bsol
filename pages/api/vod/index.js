import vod from '@/contexts/data/vod.json'
import { queryData } from '@/utils/function'

export default function handler(req, res) {
    const { search, filter, sorting } = req.query
    let response = vod

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
