import { BookInfo } from "./components/book-info";
import { DataSource } from "./components/data-source";
import { ResourceLoader } from "./components/resource-loader";
import { DataSourceRender } from "./components/data-source-render";

import { UserInfo } from "./components/user-info";
import axios from "axios";

const getDataFromServer = async (url) => {
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

      {/* <DataSource resourceName={"user"} getData={() => getDataFromServer("/users/2")}>
        <UserInfo />
      </DataSource>
      <DataSource resourceName={"book"} getData={() => getDataFromServer("/books/3")}>
        <BookInfo />
      </DataSource> */}

      <DataSourceRender render={(data) => <UserInfo user={data} />} getData={() => getDataFromServer("/users/2")} />
      <DataSourceRender render={(data) => <BookInfo book={data} />} getData={() => getDataFromServer("/books/3")} />
    </>
  );
}

export default App;
