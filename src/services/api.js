export function loadLists() {
  return [
    {
      title: "Tarefas",
      creatable: true,
      cards: [
        {
          id: 1,
          content:
            "Bug de que quando muda o card de lista, ele não fica com os pontos lá",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/185/abotio@adorable.io.png"
        },
        {
          id: 2,
          content: "Trocar sem precisar passar em um card",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/185/abotio@adorable.io.png"
        },
        {
          id: 3,
          content: "Trocar para uma coluna vazia",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/185/abotio@adorable.io.png"
        }
      ]
    },
    {
      title: "Fazendo",
      creatable: false,
      cards: [
        {
          id: 6,
          content: "Com preguiça de ver como resolve",
          labels: [],
          user: "https://api.adorable.io/avatars/185/abotio@adorable.io.png"
        },
        {
          id: 7,
          content: "Estudando para as provas da faculdade",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/185/abotio@adorable.io.png"
        }
      ]
    },
    {
      title: "Pausado",
      creatable: false,
      cards: [
        {
          id: 8,
          content: "Temos que dormir, ein?",
          labels: ["#54e1f7"],
          user: "https://api.adorable.io/avatars/185/abotio@adorable.io.png"
        },
        {
          id: 9,
          content: "Kanban da vida",
          labels: []
        }
      ]
    },
    {
      title: "Concluído",
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: "Provas de engenharia de software",
          labels: []
        },
        {
          id: 12,
          content: "Aprendido o básico de ReactJs",
          labels: ["#54e1f7"]
        },
        {
          id: 13,
          content: "Aprendido o básico de ReactNative",
          labels: ["#7159c1"]
        }
      ]
    }
  ];
}
