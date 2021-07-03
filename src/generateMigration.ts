import fs from 'fs'

const generateMigrationFile = (name: string, action: string) => {
    const fileName = `${Date.now()}__${action}_${name}.ts`
    const migrationTemplate = fs.readFileSync('src/templates/migration.ts');
    fs.appendFile(`src/migrations/${fileName}`, migrationTemplate, function (err) {
      if (err) { 
        throw err;
      }
      console.log(`Migration ${fileName} is created!`);
    });
}

const name = process.argv[2]
const action = process.argv[3]

if (!name || !action) {
    console.log('USAGE:  yarn generate-migration modelName Action')
}

generateMigrationFile(name.toLowerCase(), action.toLowerCase())