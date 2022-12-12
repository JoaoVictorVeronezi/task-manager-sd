// Identificador: código que identifica de forma única a tarefa.
// Descrição: informação textual que descreve a tarefa.
// Prazo: data/hora que informa o limite para completar a tarefa.
// Completa: valor lógico que define se a tarefa já foi completada.

const jsonSchema = {
  desc: {
    type: String,
  },
  deadline: {
    type: Date,
  },
  isCompleted: {
    type: Boolean,
  },
};

export { jsonSchema as taskSchema };
