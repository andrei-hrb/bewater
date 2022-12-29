import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username } = req.body

    if (!username) {
      res.status(422).end()
    }

    if (!username.match(/^[0-9a-zA-Z]+$/)) {
      res.status(400).json({ error: 'alpha' }).end()
    }

    if (username.length < 3) {
      res.status(400).json({ error: 'min' }).end()
    }

    if (username.length > 20) {
      res.status(400).json({ error: 'max' }).end()
    }

    const user = await prisma.user.findFirst({
      where: {
        username: username,
      },
    })

    if (user) {
      res.status(400).json({ error: 'unique' }).end()
    }

    res.status(200).end()
  } else {
    res.status(405).end()
  }
}
