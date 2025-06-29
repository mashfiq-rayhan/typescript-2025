type FileSource = { type: 'file'; path: string };
const fileSorce: FileSource = { type: 'file', path: 'some/path/to/file.csv' };

type DBSource = { type: 'db'; connectionUrl: string };
const dbSource: DBSource = { type: 'db', connectionUrl: 'some-connection-url' };

type Source = FileSource | DBSource;

function isFile(source: Source) {
  return source.type === 'file';
}

function loadData(source: Source) {
  // if ('path' in source) {
  //   // source.path; =>...
  //   return;
  // }
  // source.connectionUrl; =>...

  if (source.type === 'file') {
    source.path;
    return;
  }
  source.connectionUrl;
}

class User {
  constructor(public name: string) {}

  join() {
    // ...
  }
}

class Admin {
  constructor(permissions: string[]) {}

  scan() {
    // ...
  }
}

const user = new User('Max');
const admin = new Admin(['ban', 'restore']);

type Entity = User | Admin;

function init(entity: Entity) {
  if (entity instanceof User) {
    entity.join();
    return;
  }

  entity.scan();
}
