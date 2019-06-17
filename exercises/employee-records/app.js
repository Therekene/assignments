let employees =[]

function Employee(name, jobTitle, salary, status = "Full Time"){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    this.printEmployeeForm = function(){
        console.log(`Name:  ${this.name}`)
        console.log(`Job Title:  ${this.jobTitle}`)
        console.log(`Salary: ${this.salary}`)
        console.log(this.status)
    }
}

let employee1 = new Employee("Charles", "Boss", "300k")
let employee2 = new Employee("Moroni", "Cofounder", "295k" )
let employee3 = new Employee("Lynn", "COO","275k" )

employee2.status = "Part Time"




employees.push(employee1, employee2, employee3)
// console.log(employees)
employees.forEach(items => items.printEmployeeForm())
