import {
  authService,
  createService,
  fetchService,
  authsignService,
  scoreUpdateService,
  leaderboardService,
} from "./service.js";

const userFetchController = async (request, response) => {
  const user = await fetchService();
  return response.status(200).send({ batata: true, user: user });
};

const userCreateController = async (request, response) => {
  const user = await createService(request.body);
  return response.status(200).send({ working: true, user: user });
};

const userAuthController = async (request, response) => {
  const serviceResponse = await authService(request.body);

  if (serviceResponse?.error) {
    return response
      .status(serviceResponse.statusCode)
      .send({ error: true, message: serviceResponse.message });
  }

  return response.status(200).send(serviceResponse);
};

const userAuthSignController = async (request, response) => {
  const serviceResponse = await authsignService(request.body);

  if (serviceResponse?.error) {
    return response
      .status(serviceResponse.statusCode)
      .send({ error: true, message: serviceResponse.message });
  }

  return response.status(200).send(serviceResponse);
};

const userScoreUpdateController = async (request, response) => {
  const serviceResponse = await scoreUpdateService(request.body);

  if (serviceResponse?.error) {
    return response
      .status(serviceResponse.statusCode)
      .send({ error: true, message: serviceResponse.message });
  }

  return response.status(200).send(serviceResponse);
};

const leaderboardController = async (request, response) => {
  const serviceResponse = await leaderboardService(request.body);

  if (serviceResponse?.error) {
    return response
      .status(serviceResponse.statusCode)
      .send({ error: true, message: serviceResponse.message });
  }

  return response.status(200).send(serviceResponse);
};

export {
  userAuthController,
  userCreateController,
  userFetchController,
  userAuthSignController,
  userScoreUpdateController,
  leaderboardController,
};
