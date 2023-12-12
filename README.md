after use git clone then
for client
1. cd client
2. npm install vite
3. npm run dev

for server 

1. cd sever
2. npm run dev

in server you have to change .env to ur own mysql
DB_USER
DB_PASSWORD
DB_DATABASE

for mysql run all script in Dump structure in mysql Workbench.
Table Clinic is manual add you have to add all the infomation to work. For password we use Bcrypt salt 10
run your password through the Bcrypt then add it to Password and save
