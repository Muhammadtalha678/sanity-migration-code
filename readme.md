# Sanity Migration

Migrate data to Sanity from an API.

## How to Use

### 1. Clone the Project
Clone this project by running the following command:
```bash
git clone <repoName>
```

### 2. Install Dependencies
Run the following command to install the required dependencies:
```bash
npm install
```

### 3. Create a `.env` File
Create a `.env` file in the root directory of the project. Inside the `.env` file, add the following values:
```env
tokenId="Your Sanity project id"
dataset="production"
token="Your Sanity token (generated from the API link in your Sanity project)"
```

### 4. Compile TypeScript
Run the TypeScript compiler to compile the code:
```bash
tsc
```

### 5. Run the Migration Script
Finally, execute the migration script to migrate the data:
```bash
node ./dist/importData.js
```

### 6. Add Schema
After completing the above steps, follow these instructions to create and use the schema:
1. Create a schema as defined by Sir Ali Jawwad from the given URL.
2. Copy the schema into the `sanity` folder and create a `products.ts` file.
3. Import the schema in the `index.ts` file located in `sanity/schemaTypes`.

### 7. Access the Sanity Studio
Visit your Next.js project URL at:
```
http://localhost:3000/studio/
```
The data you migrated to Sanity will be displayed here.

## Packages Used in Sanity Migration
- `@sanity/client`
- `axios`
- `dotenv`

