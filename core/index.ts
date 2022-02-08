import inquirer from "inquirer";
import {
  registerUser,
  obtainParticipants,
  totalParticipants,
  executeLottery,
} from "./actions";

(async () => {
  const options = [
    {
      name: "options",
      type: "list",
      message: "¿Que quieres hacer?",
      choices: [
        "Registrar participante",
        "Lista de participantes",
        "Obtener total de participantes",
        "Generar ganadores",
        "Salir",
      ],
    },
  ];

  const result = await inquirer.prompt(options);

  if (result.options === "Registrar participante") {
    register();
  }

  if (result.options === "Lista de participantes") {
    const participants = obtainParticipants();
    console.log(participants);
  }

  if (result.options === "Obtener total de participantes") {
    const total = totalParticipants();
    console.log(`Hay ${total} participantes registrados en el sorteo.`);
  }

  if (result.options === "Generar ganadores") {
    console.log("#######################");
    console.log("###### GANADORES ######");
    console.log("#######################");
    const result = await execLottery();
    console.log(result);
  }
})();

async function register() {
  const qs = [
    {
      name: "username",
      type: "input",
      message: "Nombre del participante",
    },
    {
      name: "email",
      type: "input",
      message: "Email del participante",
    },
  ];

  const result = await inquirer.prompt(qs);
  registerUser(result);
}

async function execLottery() {
  const qs = [
    {
      name: "totalWinners",
      type: "number",
      message: "¿Cuantos ganadors quieres sacar?",
    },
  ];

  const { totalWinners } = await inquirer.prompt(qs);

  if (!totalWinners) {
    return "ERROR: Tienes que introducir un numero valido";
  }

  const result = executeLottery(totalWinners);
  return result;
}
