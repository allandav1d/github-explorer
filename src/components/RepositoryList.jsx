import RepositoryItem from "./RepositoryItem";

const repository = {
  name: 'teste',
  description: 'Forms in react',
  link: 'https://google.com/'
}

export default function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}