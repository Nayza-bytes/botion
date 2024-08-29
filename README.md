
# Notion Clone Github Repository
This is the Repository of my version of notion made by following using a tutorial to learn Next.js and other cool stacks ;)

## Features
All features available to you in this, might add my own things so i can only use this instead of Notion XD

- Light/dark mode toggle
- Create, delete and intelligent file recuperation
- Share the note
- Have multiples notes inside of one
- Basic text editor features (Bold, Italic, Changing colors)
- Login/Register


### Authors
- [@Nayza-bytes](https://github.com/Nayza-bytes)


### Feedback

If you have any feedback, please reach out to me at ilian.guille7@gmail.com


# My new knowledge
## Introduction
When making the copy of Notion by following a [tutorial](https://www.youtube.com/watch?v=0OaDyjB9Ib8&list=WL&index=296), i've learned a lot in the making of Full-stack web application.

In this file, you can find what i've learned while i was coding it !

## Next.js Routing system
### app Directory:
This is where is the app is located and this i where you can create new files to make a new route

### Folders inside app
They are used so we can access a new page with a new url.
But it should have a file named ```page.tsx``` to be accessible

For example:
```
app/
├─  routeOne
│   ├─ page.tsx
```
will create:
```https://www.myapp.com/routeOne```

### Folders with ():
They are used to structure and organise the app directory correctly.
they do not change the url, they need another folder without () to change the url

For example:
```
app/
├─  (auth)
│   ├─ routeOne 
│   │  ├─ page.tsx
```
will stil create:
```https://www.myapp.com/routeOne```

### Folders starting with _:
These folders ignore completly what's inside of them, so they are not routed

For example:
```
app/
├─  _auth
│   ├─ routeOne 
│   │  ├─ page.tsx
```
When we go to here:
```https://www.myapp.com/routeOne```
it will give a 404 error because the _auth cannot be routed and is the same as everything inside.

