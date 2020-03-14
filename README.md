The `getServerProps` function is not working correctly 
when you use `app.render()` with your custom express server.

---

When you start from index page http://localhost:3000/
and click on **Test Page B**, everything is working as expected.

The json file will be loaded from 
http://localhost:3000/_next/data/development/TestPageB.json

---

When you click on **Test Page A**, 
NextJS will load the json file from

http://localhost:3000/_next/data/development/test-page-a.json

but the file can not be found and the page will be reloaded.
