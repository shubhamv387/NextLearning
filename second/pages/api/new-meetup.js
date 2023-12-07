import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    try {
      const client = await MongoClient.connect(process.env.MONGO_URL);
      const db = client.db();
      const meetupsCollection = db.collection('meetups');
      await meetupsCollection.insertOne(data);

      client.close();
      res.status(201).json({ message: 'Meetup inserted!' });
    } catch (error) {
      console.log(error);
    }
  }
}
