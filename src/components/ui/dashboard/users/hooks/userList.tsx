import { useEffect, useState } from "react";
import api from "../../../../../services/api";
import { UserType } from "../../../../../types/Types";
interface useUserListReturnType {
  users: UserType[];
}
const useUserList = (): useUserListReturnType => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await api.fetchUsers();
        setUsers(userData);
      } catch (error) {
        console.log("something went wrong");
      }
    };
    fetchData();
  }, []);
  return { users, setUsers };
};

export default { useUserList };
