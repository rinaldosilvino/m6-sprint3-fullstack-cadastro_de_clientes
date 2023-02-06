import clients from "../database";

const listclientProfileService = (id) => {
  const index = clients.findIndex((element) => element.uuid === id);

  const result = {...clients[index]}
  delete result.password
  return result;
};

export default listclientProfileService;