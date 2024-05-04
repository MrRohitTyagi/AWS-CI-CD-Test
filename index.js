const express = require("express");
const { PrismaClient } = require("@prisma/client");

const client = new PrismaClient();

const app = express();

let user = { name: "rohit", email: "rr@rr.com", password: "ijbfuisbu" };

app.post("/user", async (req, res) => {
  const new_user = await client.user.create({ data: user });
  res.send({ success: true, user: new_user });
});
app.get("/user/:pk", async (req, res) => {
  const { pk } = req.params;
  const new_user = await client.user.findUnique({ where: { pk } });
  res.send({ success: true, user: new_user });
});

const product = {
  name: "keyboard",
  price: 34,
  quantity: 3,
  belongsTo: "663601685d44a87e9b7a6341",
};
app.post("/product", async (req, res) => {
  const _product = await client.product.create({ data: product });
  res.send({ success: true, product: _product });
});

app.get("/product/:pk", async (req, res) => {
  const { pk } = req.params;

  const [_product, _ratings] = await Promise.all([
    client.product.findUnique({
      where: { pk },
      include: { belongs: { select: { name: true, email: true, pk: true } } },
    }),
    client.ratings.findMany({
      where: { belongsTo: pk },

      select: {
        pk: true,
        name: true,
        desc: true,
      },
    }),
  ]);

  _product.belongsTo = _product.belongs;
  delete _product.belongs;

  _product.ratings = _ratings;
  res.send({ success: true, product: _product });
});

app.post("/rating", async (req, res) => {
  const _rating = await client.ratings.create({
    data: {
      name: "helpful",
      desc: "this is a good product",
      belongsTo: "66360791e17042c37bd9bf77",
    },
  });
  res.send({ success: true, rating: _rating });
});
app.get("/rating/:pk", async (req, res) => {
  const { pk } = req.params;
  const _product = await client.ratings.findUnique({
    where: { pk },
    include: {
      product: {
        select: {
          name: true,
          price: true,
          belongs: { select: { name: true, email: true, pk: true } },
        },
      },
    },
  });

  _product.belongsTo = _product.belongs;
  delete _product.belongs;
  res.send({ success: true, product: _product });
});

app.listen(5000, () => {
  console.log("server running at port 5000");
});
