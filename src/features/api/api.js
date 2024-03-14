import axios from "axios";

const api_url = "http://localhost:8888/api";

export async function createPerson(person) {
    const res = await axios.post(
        `${api_url}/create/person/${person.uuid}`,
        person,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    if (res.status !== 200) {
        throw new Error("Ошибка при добавлении пользователя");
    }
    return res.data;
}

export async function updatePerson(person) {
    const res = await axios.put(
        `${api_url}/update/person/${person.uuid}`,
        person,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    if (res.status !== 200) {
        throw new Error("Ошибка при изменении пользователя");
    }
    return res.data;
}

export async function getPerson(uuid) {
    const res = await axios.get(`${api_url}/person/${uuid}`);
    if (res.status !== 200) {
        throw new Error("Ошибка получение пользователя");
    }
    return res.data;
}

export async function saveOrder(order) {
    const res = await axios.post(
        `${api_url}/user/orders/${order.uuid}`,
        order,
        {
            headers: {
                "Content-Type" : "application/json"
            }
        }
    );
    if(res.status !== 200) {
        throw new Error("Ошибка при добавлении ордера");
    }
    return res.data;
}

export async function updateOrder(order) {
    const res = await axios.put(
        `${api_url}/update/order/${order._id}`,
        order,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    if (res.status !== 200) {
        throw new Error("Ошибка при изменении заказа");
    }
    return res.data;
}

export async function getOrders(uuid) {
    const res = await axios.get(`${api_url}/user/orders/${uuid}`);
    if(res.status !== 200) {
        throw new Error("Ошибка при получении списка ваших ордеров");
    }
    return res.data;
}

export async function getFeedOrders(uuid) {
    const res = await axios.get(`${api_url}/feeds/${uuid}`);
    if(res.status !== 200) {
        throw new Error("Ошибка получения списка заказов не в работе");
    }
    return res.data;
}

export async function getOneOrder(id) {
    const res = await axios.get(`${api_url}/order/${id}`);
    if(res.status !== 200) {
        throw new Error("Ошибка при получении данных ордера");
    }
    return res.data;
}

export async function deleteOrder(id) {
    const res = await axios.delete(`${api_url}/order/${id}`);
    if(res.status !== 200) {
        throw new Error("Ошибка при удалении заказа");
    }
    return res.data;
}

