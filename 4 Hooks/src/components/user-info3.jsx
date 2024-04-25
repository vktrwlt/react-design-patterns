import { useDataSource } from "./useDataSource";
import axios from "axios";

const fetchFromServer = (resourceUrl) => async () => {
  const response = await axios.get(`${resourceUrl}`);
  return response.data;
};

export const UserInfo3 = ({ userId }) => {
  const user = useDataSource(fetchFromServer(`/users/${userId}`));
  const { name, age, country, books } = user || {};
  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}> {book} </li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
