import Key from "../Key";
import PersonProps from "./interface";
import "./styles.css";
const Person: React.FC<PersonProps> = ({nome, email, telefone, endereco}) => {
    return (
        <div className="person">
            <Key campo="Nome" valor={nome} />
            <Key campo="Endereço" valor={endereco} />
            <Key campo="Telefone" valor={telefone} />
            <Key campo="Email" valor={email} />
        </div>
    );
}

export default Person;