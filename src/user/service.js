import User from "../database/schema/User.js";

const fetchService = async () => {
  const user = await User.create({
    email: "teste33344444@gmail.com",
    password: "123",
  });

  return user;
};

const createService = async (body) => {
  const user = await User.create(body);
  return user;
};

const authService = async (body) => {
  if (!body.email) {
    return { error: true, message: "Dados faltantes", statusCode: 400 };
  }

  const user = await User.findOne({
    email: body.email,
    password: body.password,
  });

  if (user == null) {
    return { error: true, message: "Dados inválidos", statusCode: 400 };
  }

  return { user, message: "Login bem sucedido" };
};

const authsignService = async (body) => {
  if (!body.username || !body.password || !body.picture) {
    return { error: true, message: "Dados faltantes", statusCode: 400 };
  }

  const user = await User.findOne({
    username: body.username,
  });

  if (user) {
    const userAuth = await User.findOne({
      username: body.username,
      password: body.password,
    });

    if (userAuth == null) {
      return { error: true, message: "Dados inválidos", statusCode: 403 };
    }
    return { user, message: "Login bem sucedido" };
  } else {
    const user = await User.create(body);
    return { user, message: "Usuário criado com sucesso!", statusCode: 201 };
  }
};

export { fetchService, createService, authService, authsignService };
