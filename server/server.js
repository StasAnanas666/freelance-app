const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

const MongoDBClient = new MongoClient("mongodb://127.0.0.1:27017");

//инициализация приложения
const app = express();
app.use(cors());
app.use(express.json());

const port = 8888;

//тестовое подключение к БД
const testConnect = async () => {
    try {
        await MongoDBClient.connect();
        console.log("Подключение к базе данных установлено");
        await MongoDBClient.close();
        console.log("Подключение закрыто");
    } catch (error) {
        console.error(`Произошла ошибка подключения к базе данных: ${error}`);
    }
};
testConnect();

app.get("/", (req, res) => {
    res.send("success");
});

//добавление пользователя
app.post("/api/create/person/:uuid", async (req, res) => {
    try {
        await MongoDBClient.connect();
        const exployees = MongoDBClient.db("freelancedb").collection("persons");
        await exployees.insertOne(req.body);
        res.json(req.body);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    } finally {
        MongoDBClient.close();
    }
});

//изменение пользователя
app.put("/api/update/person/:uuid", async (req, res) => {
    try {
        await MongoDBClient.connect();
        const exployees = MongoDBClient.db("freelancedb").collection("persons");
        // await exployees.updateOne({uuid: req.body.uuid}, {$set: {username: req.body.username}});
        var result = await exployees.findOneAndUpdate(
            { uuid: req.body.uuid },
            { $set: { username: req.body.username } },
            { returnDocument: "after" }
        );
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    } finally {
        await MongoDBClient.close();
    }
});

//получение пользователя по uuid
app.get("/api/person/:uuid", async (req, res) => {
    const uuid = req.params.uuid;
    try {
        await MongoDBClient.connect();
        const exployees = MongoDBClient.db("freelancedb").collection("persons");
        const filter = { uuid: uuid };
        const person = await exployees.find(filter).toArray();
        res.json(person);
    } catch (error) {
        console.error(`Ошибка получения пользователя по uuid: ${error}`);
    } finally {
        console.log("Пользователь получен");
        MongoDBClient.close();
    }
});

//получение ордеров пользователя
app.get("/api/user/orders/:uuid", async (req, res) => {
    const uuid = req.params.uuid;
    try {
        await MongoDBClient.connect();
        const exployees = MongoDBClient.db("freelancedb").collection("orders");
        const filter = { uuid: uuid };
        const allCategories = await exployees.find(filter).toArray();
        res.json(allCategories);
    } catch (error) {
        console.error(`Ошибка получения списка ордеров: ${error}`);
    } finally {
        console.log("Список ордеров получен");
        MongoDBClient.close();
    }
});

//получение ордера
app.get("/api/order/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await MongoDBClient.connect();
        const exployees = MongoDBClient.db("freelancedb").collection("orders");
        const filter = { _id: new ObjectId(id) };
        const oneOrder = await exployees.find(filter).toArray();
        res.json(oneOrder);
    } catch (error) {
        console.error(`Ошибка получения ордера: ${error}`);
    } finally {
        console.log("Ордер получен");
        MongoDBClient.close();
    }
});

//получение списка заказов не в работе(фиды)
app.get("/api/feeds/:uuid", async (req, res) => {
    const uuid = req.params.uuid;
    try {
        await MongoDBClient.connect();
        const exployees = MongoDBClient.db("freelancedb").collection("orders");
        //получаем заказаы не в работе и не равные переданному uuid
        const collection = await exployees
            .find({ uuid: { $ne: uuid }, inWork: false })
            .toArray();
        res.json(collection);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(`Ошибка получения списка фидов: ${error}`);
    } finally {
        console.log("Список фидов получен");
        MongoDBClient.close();
    }
});

//создание заказа
app.post("/api/user/orders/:uuid", async (req, res) => {
    try {
        await MongoDBClient.connect();
        const exployees = MongoDBClient.db("freelancedb").collection("orders");
        await exployees.insertOne(req.body);
        res.status(200).send("Заказ успешно сохранен");
    } catch (error) {
        res.status(500).send(error.message);
        console.error(`Ошибка создания заказа: ${error}`);
    } finally {
        await MongoDBClient.close();
    }
});

//изменение заказа
app.put("/api/update/order/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await MongoDBClient.connect();
        const exployees = MongoDBClient.db("freelancedb").collection("orders");
        var result = await exployees.findOneAndUpdate(
            { _id: new ObjectId(id) },
            {
                $set: {
                    workType: req.body.workType,
                    workclassName: req.body.workclassName,
                    name: req.body.name,
                    datetime: req.body.datetime,
                    price: req.body.price,
                    originals: req.body.originals,
                    description: req.body.description,
                },
            },
            { returnDocument: "after" }
        );
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    } finally {
        await MongoDBClient.close();
    }
});

//удаление заказа
app.delete("/api/order/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await MongoDBClient.connect();
        const exployees = MongoDBClient.db("freelancedb").collection("orders");
        const filter = { _id: new ObjectId(id) };
        await exployees.deleteOne(filter);
        res.status(200).send("Заказ успешно удален");
    } catch (error) {
        res.status(500).send(error.message);
        console.error(`Ошибка удаления заказа: ${error}`);
    } finally {
        await MongoDBClient.close();
    }
});

//запуск и прослушивание входящих подключений к серверу
app.listen(port, () => {
    console.log(`Приложение прослушивает порт ${port}`);
});
