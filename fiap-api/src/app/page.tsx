import Person from "../../components/Person";
import Item from "./interface";

const dataPerson: Item[] = [
  {
    nome: "Lucas",
    email: "lucas@email.com",
    telefone: "11999999999",
    endereco: "Rua da minha casa, 123",
  },
  {
    nome: "João",
    email: "joao@email.com",
    telefone: "11999999999",
    endereco: "Rua da casa do João, 123",
  },
  {
    nome: "Maria",
    email: "maria@email.com",
    telefone: "11999999999",
    endereco: "Rua da casa da Maria, 123",
  },
  {
    nome: "José",
    email: "jose@email.com",
    telefone: "11999999999",
    endereco: "Rua da casa do José, 123",
  },
  {
    nome: "Ana",
    email: "ana@email.com",
    telefone: "11999999999",
    endereco: "Rua da casa da Ana, 123",
  },
];

export default function Home() {
  return (
    <main>
      {dataPerson.map((item: Item, index) => {
        return (
          <Person
            key={index}
            nome={item.nome}
            email={item.email}
            telefone={item.telefone}
            endereco={item.endereco}
          />
        );
      })}
    </main>
  );
}
