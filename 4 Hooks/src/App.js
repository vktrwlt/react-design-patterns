import { BookInfo } from "./components/book-info";
import { UserInfo } from "./components/user-info";
import { UserInfo2 } from "./components/user-info2";
import { UserInfo3 } from "./components/user-info3";

function App() {
  return (
    <>
      <UserInfo userId="3" />
      <UserInfo2 resourceUrl={"/users/2"} />
      <BookInfo resourceUrl={"/books/2"} />
      <UserInfo3 userId="3" />
    </>
  );
}

export default App;
