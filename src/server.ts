import app from "./app";
import { PORT } from "./environments/environmentsVariables";

app.listen(PORT, () => {
  console.log(`escutado na porta ${PORT}`);
});
