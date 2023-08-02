import httpStatus from "../enums/httpStatus.js";
import authRepository from "../repositories/authRepository.js";
import dbConnection from "../../sqlite.js";

function initializeApp() {
  dbConnection
    .getDbConnection()
    .then((db) => {
      authRepository.init(db);
    })
    .catch((err) => {
      process.exit(1);
    });
}

async function signUp(data) {
  const response = await authRepository.signUp(data);
  if (response === "Email already exists!") {
    return { status: httpStatus.FORBIDDEN };
  } else if (response === undefined) {
    return { status: httpStatus.UNAUTHORIZED };
  } else {
    return { response: response, status: httpStatus.OK };
  }
}

async function login(data) {
  const response = await authRepository.login(data);
  if (response === "User Not Found" || response === undefined) {
    return { status: httpStatus.NOT_FOUND };
  } else if (response === "Password Mismatch") {
    return { status: httpStatus.FORBIDDEN };
  } else {
    return { response: response, status: httpStatus.OK };
  }
}

initializeApp();

export default { signUp, login };
