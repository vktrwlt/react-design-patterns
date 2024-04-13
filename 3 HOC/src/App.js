import { logProps } from "./components/log-props";
import { UserInfo } from "./components/user-info";
import { includeUser } from "./components/includeUser";
import { includeUpdatableUser } from "./components/includeUpdatableUser";
import { UserInfoForm } from "./components/userForm";
import { UserInfoForm2 } from "./components/userForm2";

const UserInfoWithLoader = includeUpdatableUser(UserInfo, "2");

function App() {
  return (
    <>
      {/* <UserInfoWithLoader /> */}
      {/* <UserInfoForm /> */}
      <UserInfoForm2 />
    </>
  );
}

export default App;
