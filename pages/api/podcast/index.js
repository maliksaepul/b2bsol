import podcast from '@/contexts/data/podcast.json'

export default function handler(req, res) {
    const { search } = req.query
    let response = podcast

    switch (req.method) {
        case 'GET':
            if (search) {
                response = response.filter((val, i) => {
                    return (
                        val.title
                            .toLowerCase()
                            .indexOf(search.toLowerCase()) !== -1
                    )
                })
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
