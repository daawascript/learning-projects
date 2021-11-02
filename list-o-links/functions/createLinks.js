require("dotenv").config();
const { CREATE_LINK } = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async (event) => {
  const { name, url, description } = JSON.parse(event.body);
  const variables = { name, url, description, archived: false };
  try {
    const { createLink: createdLink } = await sendQuery(CREATE_LINK, variables);
    console.log(createdLink);
    return formattedResponse(200, createdLink);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { err: `${err}` });
  }
};