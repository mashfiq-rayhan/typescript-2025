// type FileData = {
//   path: string;
//   content: string;
// };

// type Database = {
//   connecttionUrl: string;
//   credentials: string;
// };

// type Status = {
//   isOpen: boolean;
//   errorMessage?: string;
// };

// type AccessedFieldData = FileData & Status;
// type AccessedDatabaseData = Database & Status;

interface FileData {
  path: string;
  content: string;
}

interface Database {
  connecttionUrl: string;
  credentials: string;
}

interface Status {
  isOpen: boolean;
  errorMessage?: string;
}

interface AccessedFieldData extends FileData, Status {}
interface AccessedDatabaseData extends Database, Status {}
