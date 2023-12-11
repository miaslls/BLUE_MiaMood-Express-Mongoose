This page is in <img src="assets/img/flag-en.png" width="14" alt="English"> English.
Para visualizar essa página em <img src="assets/img/flag-pt-br.png" width="14" alt="Português"> Português, [clique aqui](./README-ptbr.md).

---

# <img src="assets/img/server.png" width="20" alt="Server icon"> MiaMood (server)

![Static Badge: Personal](https://img.shields.io/badge/personal-mediumpurple)
![Static Badge: Node.js](https://img.shields.io/badge/Node.js-5a5a5a?logo=nodedotjs)
![Static Badge: Express](https://img.shields.io/badge/Express-5a5a5a?logo=express)
![Static Badge: Mongoose](https://img.shields.io/badge/Mongoose-5a5a5a?logo=mongoose)
![Static Badge: MongoDB](https://img.shields.io/badge/MongoDB-5a5a5a?logo=mongodb)

## 🌐 API Reference

#### Create mood

```http
POST /
```

#### Get all moods

```http
GET /
```

#### Get today moods

```http
GET /date/today
```

#### Find moods by date

```http
GET /date
```

| Query Param | Description                 |
| :---------- | :-------------------------- |
| `year`      | **Required**. 4-digit year  |
| `month`     | **Required**. 2-digit month |
| `day`       | **Required**. 2-digit day   |

#### Find moods by text

```http
GET /search
```

| Query Param | Description            |
| :---------- | :--------------------- |
| `text`      | **Optional**. Any text |

#### Get mood by ID

```http
GET /id/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of mood to fetch |

#### Update mood

```http
PUT /update/${id}
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. ID of mood to update |

#### Delete mood

```http
DELETE /delete/${id}
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. ID of mood to delete |

## ⚙️ Install and Run

Clone the project

```bash
> git clone https://github.com/miaslls/MiaMood-server.git
```

Go to the project directory

```bash
> cd MiaMood-server
```

Install dependencies

```bash
> npm install
```

Run the project

```bash
> npm run start
```

## 👩‍💻 Authors

- [@miaslls](https://www.github.com/miaslls)

## 📑 Related Projects

- [MiaMood](https://www.github.com/miaslls/MiaMood#readme)

## 🫶 Acknowledgements

- [flaticon](https://www.flaticon.com)
