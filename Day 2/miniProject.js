function addEmployee(id, name, position, department) {
    employees.push({
        id: id,
        name: name,
        position: position,
        department: department
    });
    listEmployees();
}

function listEmployees() {
    employees.forEach((employee) => {
        console.log(`${employee.id}. Employee ${employee.name} works as a ${employee.position} in the ${employee.department} department`);
    });
}


function findEmployee(id) {
    return employees.find((employee) => id === employee.id);
}

function updateEmployee(id, newName, newPosition, newDepartment) {
    const index = employees.indexOf(employees.find((employee) => id === employee.id));
    employees[index] = {
        id: id,
        name: newName,
        position: newPosition,
        department: newDepartment
    };
    listEmployees();
}

function deleteEmployee(id) {
    const index = employees.indexOf(employees.find((employee) => id === employee.id));
    employees.splice(index, 1);
    listEmployees();
}


const employees = [
    {
        "id": 1,
        "name": "Alice Johnson",
        "position": "Software Engineer",
        "department": "Engineering"
    },
    {
        "id": 2,
        "name": "Bob Smith",
        "position": "Project Manager",
        "department": "Management"
    },
    {
        "id": 3,
        "name": "Carol White",
        "position": "Data Scientist",
        "department": "Data Analytics"
    },
    {
        "id": 5,
        "name": "David Brown",
        "position": "Product Designer",
        "department": "Design"
    },
    {
        "id": 5,
        "name": "Eva Green",
        "position": "HR Specialist",
        "department": "Human Resources"
    },
    {
        "id": 6,
        "name": "Frank Black",
        "position": "Sales Manager",
        "department": "Sales"
    },
    {
        "id": 7,
        "name": "Grace Lee",
        "position": "Marketing Coordinator",
        "department": "Marketing"
    },
    {
        "id": 8,
        "name": "Henry Adams",
        "position": "IT Support",
        "department": "IT"
    },
    {
        "id": 9,
        "name": "Isabel King",
        "position": "Business Analyst",
        "department": "Business Development"
    },
    {
        "id": 10,
        "name": "Jack Miller",
        "position": "Financial Analyst",
        "department": "Finance"
    }
];

// addEmployee(11, "Abebe", "intern","SE");
// console.log(findEmployee(5));
// deleteEmployee(1);