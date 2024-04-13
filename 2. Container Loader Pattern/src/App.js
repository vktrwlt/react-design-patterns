import { BookInfo } from "./components/book-info";
import { DataSource } from "./components/data-source";
import { ResourceLoader } from "./components/resource-loader";

import { UserInfo } from "./components/user-info";
import axios from "axios";

const handleGetData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

function App() {
  return (
    <>
      {/* <ResourceLoader resourceName={"user"} resourceUrl={"/current-user"}>
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceName={"book"} resourceUrl={"/books/2"}>
        <BookInfo />
      </ResourceLoader> */}

      <DataSource resourceName={"user"} getData={() => handleGetData("/users/2")}>
        <UserInfo />
      </DataSource>
      <DataSource resourceName={"book"} getData={() => handleGetData("/books/3")}>
        <BookInfo />
      </DataSource>
    </>
  );
}

export default App;
