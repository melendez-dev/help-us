import { connectDB } from "../../libs/connectMysql";
import UUID from "uuid-int";

export default async function handlerContact(req, res) {
  const id = UUID(0).uuid();
  const { name, phone, email } = req.body;
  // insert query
  const query = `INSERT INTO Users (id, name, phone, email) VALUES (${id}, '${name}', '${phone}', '${email}')`;
  // connect to mysql
  try {
    connectDB(query);
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
  }
}
