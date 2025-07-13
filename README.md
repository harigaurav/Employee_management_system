# 🏢 Employee Management System (EMS)

A comprehensive **Employee Management System** built with **React.js**, **Vite**, and **TailwindCSS**. This system provides role-based access control for **Admins** and **Employees** with complete task management functionality.

## 🚀 Features

### 👨‍💼 **Admin Features**

- **Dashboard Overview** - View all employees and their task statistics
- **Task Creation** - Create and assign tasks to employees
- **Employee Management** - View all employee profiles and task progress
- **Task Analytics** - Monitor task completion rates and performance

### 👨‍💻 **Employee Features**

- **Personal Dashboard** - View assigned tasks and personal statistics
- **Task Management** - Accept, complete, or mark tasks as failed
- **Task Status Tracking** - Real-time task status updates
- **Profile Management** - View personal information and task history

### 🎯 **Task Management System**

- **4 Task States**: New Task → Active Task → Completed/Failed Task
- **Smart Refresh** - Real-time UI updates without page reload
- **Task Categories** - Development, Design, Meeting, Testing, etc.
- **Task Analytics** - Track completion rates and performance metrics

## 🛠️ Tech Stack

- **Frontend**: React.js 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: TailwindCSS 3.4.17
- **State Management**: React Context API
- **Data Storage**: LocalStorage
- **Icons & UI**: Custom CSS with TailwindCSS

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**

```bash
git clone <repository-url>
cd employee-management-system
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. **Open in browser**

```
http://localhost:5173
```

## 🔐 Authentication & Access

### **Admin Login**

- **Email**: `admin@example.com`
- **Password**: `123`
- **Access**: Full system access, task creation, employee management

### **Employee Login**

- **Email**: `e@e.com`
- **Password**: `123`
- **Access**: Personal dashboard, task management

### **Additional Test Employees**

- **Sneha**: `employee2@example.com` / `123`
- **Ravi**: `employee3@example.com` / `123`

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Authe/
│   │   └── Login.jsx              # Authentication component
│   ├── Dashboards/
│   │   ├── Admin.jsx              # Admin dashboard
│   │   └── Employee.jsx           # Employee dashboard
│   ├── Others/
│   │   ├── AllTask.jsx            # All tasks overview
│   │   ├── BackGround.jsx         # Background component
│   │   ├── CreateTask.jsx         # Task creation form
│   │   ├── Header.jsx             # Header component
│   │   └── TaskBoxes.jsx          # Task statistics boxes
│   └── TaskLIst/
│       ├── AcceptTask.jsx         # Active task component (Yellow)
│       ├── CompleteTask.jsx       # Completed task component (Green)
│       ├── FailedTask.jsx         # Failed task component (Red)
│       ├── NewTask.jsx            # New task component (Orange)
│       └── TaskLIST.jsx           # Task list container
├── context/
│   └── AuthProvider.jsx           # Authentication context
├── utils/
│   └── LocalStorage.jsx           # Data management utilities
├── App.jsx                        # Main application component
└── main.jsx                       # Application entry point
```

## 🌐 Application Endpoints & Routes

### **Frontend Routes (Client-Side)**

| Route       | Component      | Access Level  | Description                             |
| ----------- | -------------- | ------------- | --------------------------------------- |
| `/`         | `Login.jsx`    | Public        | Authentication page                     |
| `/admin`    | `Admin.jsx`    | Admin Only    | Admin dashboard with task creation      |
| `/employee` | `Employee.jsx` | Employee Only | Employee dashboard with task management |

### **Authentication Endpoints**

| Endpoint                               | Method | Description           | Parameters          |
| -------------------------------------- | ------ | --------------------- | ------------------- |
| `handleLogin()`                        | POST   | User authentication   | `email`, `password` |
| `localStorage.setItem('LoggedInUser')` | SET    | Store user session    | `role`, `userData`  |
| `localStorage.getItem('LoggedInUser')` | GET    | Retrieve user session | -                   |

### **Task Management Endpoints**

| Endpoint               | Method | Component        | Description            | Parameters                                                         |
| ---------------------- | ------ | ---------------- | ---------------------- | ------------------------------------------------------------------ |
| `SubmitHandler()`      | POST   | `CreateTask.jsx` | Create new task        | `taskTitle`, `taskDescription`, `taskDate`, `category`, `assignTo` |
| `handleAcceptTask()`   | PUT    | `NewTask.jsx`    | Accept new task        | `taskId`, `employeeName`                                           |
| `handleCompleteTask()` | PUT    | `AcceptTask.jsx` | Mark task as completed | `taskId`, `employeeName`                                           |
| `handleFailTask()`     | PUT    | `AcceptTask.jsx` | Mark task as failed    | `taskId`, `employeeName`                                           |

### **Data Storage Endpoints (LocalStorage)**

| Endpoint                            | Method | Description            | Data Structure            |
| ----------------------------------- | ------ | ---------------------- | ------------------------- |
| `localStorage.getItem('employees')` | GET    | Retrieve all employees | Array of employee objects |
| `localStorage.setItem('employees')` | SET    | Update employee data   | Updated employee array    |
| `localStorage.getItem('admin')`     | GET    | Retrieve admin data    | Array of admin objects    |
| `localStorage.setItem('admin')`     | SET    | Update admin data      | Updated admin array       |

## 📊 Data Models

### **Employee Data Model**

```javascript
{
  "id": 1,
  "firstName": "Arjun",
  "email": "e@e.com",
  "password": "123",
  "taskCounts": {
    "active": 2,
    "newTask": 1,
    "completed": 1,
    "failed": 0
  },
  "tasks": [
    {
      "id": 1234567890,
      "active": true,
      "newTask": false,
      "completed": false,
      "failed": false,
      "taskTitle": "Update website",
      "taskDescription": "Revamp the homepage design",
      "taskDate": "2024-10-12",
      "category": "Design",
      "assignedTo": "Arjun"
    }
  ]
}
```

### **Admin Data Model**

```javascript
{
  "id": 1,
  "firstName": "Admin",
  "email": "admin@example.com",
  "password": "123"
}
```

### **Task Data Model**

```javascript
{
  "id": 1234567890,           // Unique timestamp ID
  "taskTitle": "Task Title",
  "taskDescription": "Task Description",
  "taskDate": "2024-10-12",
  "category": "Development",
  "assignedTo": "Arjun",
  "active": false,
  "newTask": true,
  "completed": false,
  "failed": false
}
```

## 🎯 Task Workflow & States

### **Task State Flow**

```
🟠 New Task → [Accept Task] → 🟡 Active Task → [Mark as Completed] → 🟢 Completed Task
                                           → [Mark as Failed] → 🔴 Failed Task
```

### **Task State Definitions**

| State              | Color     | Description                        | Actions Available                 |
| ------------------ | --------- | ---------------------------------- | --------------------------------- |
| **New Task**       | 🟠 Orange | Newly created, awaiting acceptance | Accept Task                       |
| **Active Task**    | 🟡 Yellow | Accepted and in progress           | Mark as Completed, Mark as Failed |
| **Completed Task** | 🟢 Green  | Successfully completed             | View Only                         |
| **Failed Task**    | 🔴 Red    | Marked as failed                   | View Only                         |

## 🔧 API Functions & Methods

### **Authentication Functions**

#### `handleLogin(email, password)`

- **Purpose**: Authenticate user and set session
- **Parameters**:
  - `email` (string): User email
  - `password` (string): User password
- **Returns**: Sets user state and localStorage
- **Location**: `App.jsx`

### **Task Management Functions**

#### `SubmitHandler(e)` - Create Task

- **Purpose**: Create and assign new task to employee
- **Parameters**: Form event with task data
- **Validation**: All fields required
- **Location**: `CreateTask.jsx`
- **Process**:
  1. Validate form fields
  2. Create task object with unique ID
  3. Find target employee
  4. Add task to employee's task list
  5. Update task counts
  6. Save to localStorage
  7. Refresh context data

#### `handleAcceptTask()` - Accept Task

- **Purpose**: Convert new task to active task
- **Parameters**: Task ID, Employee Name
- **Location**: `NewTask.jsx`
- **Process**:
  1. Update task state: `newTask: false, active: true`
  2. Recalculate task counts
  3. Save to localStorage
  4. Refresh UI components

#### `handleCompleteTask()` - Complete Task

- **Purpose**: Mark active task as completed
- **Parameters**: Task ID, Employee Name
- **Location**: `AcceptTask.jsx`
- **Process**:
  1. Update task state: `active: false, completed: true`
  2. Recalculate task counts
  3. Save to localStorage
  4. Refresh UI components

#### `handleFailTask()` - Fail Task

- **Purpose**: Mark active task as failed
- **Parameters**: Task ID, Employee Name
- **Location**: `AcceptTask.jsx`
- **Process**:
  1. Update task state: `active: false, failed: true`
  2. Recalculate task counts
  3. Save to localStorage
  4. Refresh UI components

### **Data Management Functions**

#### `setLocalStorage()` - Initialize Data

- **Purpose**: Set initial employee and admin data
- **Location**: `LocalStorage.jsx`
- **Called**: On first app load

#### `getLocalStorage()` - Retrieve Data

- **Purpose**: Get current employee and admin data
- **Returns**: Object with employees and admin arrays
- **Location**: `LocalStorage.jsx`

#### `refreshData()` - Context Refresh

- **Purpose**: Update React context with latest localStorage data
- **Location**: `AuthProvider.jsx`
- **Trigger**: After any data modification

## 🎨 UI Components & Features

### **Dashboard Components**

#### Admin Dashboard (`Admin.jsx`)

- **Header**: Welcome message and logout functionality
- **Create Task Form**: Task creation with validation
- **All Tasks Overview**: View all employees and their tasks
- **Statistics**: Real-time task count analytics

#### Employee Dashboard (`Employee.jsx`)

- **Header**: Personal welcome and logout
- **Task Statistics**: Personal task count boxes
- **Task Lists**: Organized by task state (New, Active, Completed, Failed)
- **Task Actions**: Accept, Complete, Fail tasks

### **Task Components**

#### Task Cards

- **NewTask** (🟠): Orange cards with "Accept Task" button
- **AcceptTask** (🟡): Yellow cards with "Complete" and "Fail" buttons
- **CompleteTask** (🟢): Green cards (read-only)
- **FailedTask** (🔴): Red cards (read-only)

### **Form Components**

#### Login Form (`Login.jsx`)

- Email and password validation
- Role-based authentication
- Session management

#### Create Task Form (`CreateTask.jsx`)

- Task title, description, date, category
- Employee assignment dropdown
- Form validation and submission

## 📱 Responsive Design

- **Mobile-First**: TailwindCSS responsive design
- **Breakpoints**: Optimized for mobile, tablet, and desktop
- **Touch-Friendly**: Large buttons and touch targets
- **Scrollable**: Horizontal task lists with overflow handling

## 🔄 Real-Time Features

### **Smart Refresh System**

- **No Page Reload**: Tasks update without full page refresh
- **Context Updates**: React Context API for state management
- **LocalStorage Sync**: Persistent data across sessions
- **Instant UI Updates**: Immediate visual feedback

### **Task Count Updates**

- **Real-Time Counters**: Dashboard statistics update instantly
- **Automatic Calculation**: Task counts recalculated on every action
- **Persistent State**: Counts maintained across browser sessions

## 🚀 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🔧 Configuration Files

- **`vite.config.js`**: Vite build configuration
- **`tailwind.config.js`**: TailwindCSS styling configuration
- **`postcss.config.js`**: PostCSS processing configuration
- **`eslint.config.js`**: ESLint code quality rules

## 📝 Usage Examples

### **Creating a Task (Admin)**

```javascript
// Example task creation
const newTask = {
  taskTitle: "Implement user authentication",
  taskDescription: "Add login/logout functionality",
  taskDate: "2024-12-15",
  category: "Development",
  assignTo: "Arjun",
};
```

### **Task State Management (Employee)**

```javascript
// Accept task: New → Active
handleAcceptTask(); // Changes newTask: false, active: true

// Complete task: Active → Completed
handleCompleteTask(); // Changes active: false, completed: true

// Fail task: Active → Failed
handleFailTask(); // Changes active: false, failed: true
```

## 🛡️ Security Features

- **Client-Side Authentication**: Role-based access control
- **Session Management**: Secure localStorage session handling
- **Input Validation**: Form validation and sanitization
- **XSS Protection**: Safe data handling and rendering

## 🔮 Future Enhancements

- **Backend Integration**: REST API with database
- **Real-Time Notifications**: WebSocket task updates
- **File Attachments**: Task file upload functionality
- **Advanced Analytics**: Detailed performance metrics
- **Team Collaboration**: Multi-team task management
- **Mobile App**: React Native mobile application

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- React.js team for the amazing framework
- Vite team for the fast build tool
- TailwindCSS for the utility-first CSS framework
- All contributors and testers

---

**⭐ If you found this project helpful, please give it a star!**
