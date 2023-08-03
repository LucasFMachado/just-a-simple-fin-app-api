import { hash } from "bcryptjs";

import createConnection from "..";

async function create() {
  const connection = await createConnection();

  const password = await hash("admin", 8);

  await connection.query(`
    INSERT INTO users (name, email, password, is_admin, active, delete, created_at, updated_at)
    VALUES ('Administrador', 'admin@admin.com', '${password}', true, true, false, now(), now())
  `);

  await connection.close();
}

create().then(() => console.log("User admin created!"));
