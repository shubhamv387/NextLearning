import { MongoClient } from 'mongodb';

export default async function ADD(req, res) {
  const data = { ...req.body, completed: false };
  console.log(data);
  try {
    const client = await MongoClient.connect(process.env.MONGO_URL);
    const db = client.db('todos');
    const todoCollections = db.collection('todos');

    await todoCollections.insertOne(data);
    client.close();
    res.status(201).json({ message: 'Todo inserted!' });
  } catch (error) {
    console.log(error);
  }
}

export async function UPDATE(req, res) {
  const data = req.body;

  try {
    const client = await MongoClient.connect(process.env.MONGO_URL);
    const db = client.db('todos');
    const todoCollections = db.collection('todos');

    await todoCollections.findOneAndUpdate({ _id: req.params._id }, data);
    client.close();
    res.status(200).json({ message: 'Todo Updated Successfully!' });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(req, res) {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URL);
    const db = client.db('todos');
    const todoCollections = db.collection('todos');

    await todoCollections.findOneAndDelete({ _id: req.params._id });
    client.close();
    res.status(200).json({ message: 'Todo deleted successfully!' });
  } catch (error) {
    console.log(error);
  }
}
