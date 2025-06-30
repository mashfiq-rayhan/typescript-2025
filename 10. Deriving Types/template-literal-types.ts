// const mainUserName = 'mash';

// const greeting = `Hi there, ${mainUserName}`;

type ReadPermissions = 'no-read' | 'read';
type WritePermissions = 'no-write' | 'write';

// type FilePermissions =
//   | 'no-read-write'
//   | 'read-no-write'
//   | 'no-read-no-write'
//   | 'read-write';

type FilePermissions = `${ReadPermissions}-${WritePermissions}`;

type DataFle = {
  data: string;
  permissions: FilePermissions;
};

type DataFileEventNames = `${keyof DataFle}Changed`;

type DataFileEvents = {
  [Key in DataFileEventNames]: () => void;
};
