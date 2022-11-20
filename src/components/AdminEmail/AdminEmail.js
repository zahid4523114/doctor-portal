import { useEffect, useState } from "react";

const AdminEmail = (email) => {
  const [adminEmail, setAdminEmail] = useState(false);

  const [adminLoader, setAdminLoader] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/userInfo/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.isAdmin) {
            setAdminEmail(data.isAdmin);
            setAdminLoader(false);
          }
        });
    }
  }, [email]);

  return [adminEmail, adminLoader];
};
export default AdminEmail;
