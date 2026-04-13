 const express = require('express') 
   const app = express() 
   const PORT = 3000 
 
   // Middleware to parse JSON request bodies 
   app.use(express.json()) 
 
   // Route 1: GET / - Welcome message 
   app.get('/', (req, res) => { 
      res.json({ 
         message: 'Hello from Express.js!', 
         timestamp: new Date().toISOString() 
      }) 
   }) 

   // nilabas para accesible sa both routes
   const students = [ 
{ id: 1, name: 'Juan dela Cruz', course: 'BSIT' }, 
{ id: 2, name: 'Maria Santos', course: 'BSIT' },


] 
   // Route 2: GET /api/students - Returns a list of students 
app.get('/api/students', (req, res) => { 
res.json({ data: students, count: students.length }) 
}) 


    // Route 3: POST /api/students - Create a new student 
app.post('/api/students', (req, res) => { 
const student = [
    { id: 3, name: 'Drexelle Magbual', course: 'BSINTE' }
]

students.push(...student)

res.json({ data: students, count: students.length, message: 'Student created successfully' }) 
})





// Start server 
app.listen(PORT, () => { 
console.log(`Server running at http://localhost:${PORT}`) 
})