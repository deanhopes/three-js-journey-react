import { useEffect, useState } from "react";

export default function People() {
  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    fetch("https://jsonplaceholder.typicode.com/users");
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();

    setPeople(result);
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div>
      <h1>People</h1>
      <ul>
        {people.map((person, index) => {
          return <li key={person.id}>{person.name}</li>;
        })}
      </ul>
    </div>
  );
}
