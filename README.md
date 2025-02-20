# SmartAssetManager !

**A subscription-based asset management web application for HR managers and employees.**

## 🌐 Live Site URL
[Live Website](https://sam000.web.app/)

---

## 🛠 Admin Credentials
- **Username:** admin@gmail.com
- **Password:** 12345aA

---

## 🚀 Features of the Website

1. **HR Manager Dashboard**
   - Add, update, and delete assets.
   - Manage employee teams and subscriptions.
   - Filter and search through assets based on type, availability, or quantity.

2. **Employee Dashboard**
   - View assigned assets.
   - Submit requests for additional assets.
   - See team activity logs.

3. **Subscription Management**
   - HR Managers can purchase subscription packages to manage more team members.
   - Three packages available:
     - 5 members for $5
     - 10 members for $8
     - 20 members for $15

4. **Asset Types**
   - Support for `Returnable` and `Non-returnable` assets.
   - Track quantities and availability of both asset types.

5. **Real-time Notifications**
   - Receive success/failure messages for all CRUD operations.
   - SweetAlert or Toastify used for instant feedback.

6. **Authentication and Authorization**
   - Secure user login system with JWT authentication.
   - Role-based access: HR Managers vs. Employees.

7. **Responsive Design**
   - Built using Tailwind CSS and DaisyUI for an aesthetically pleasing, mobile-friendly experience.

8. **Data Fetching and Optimization**
   - Utilizes TanStack Query for efficient data fetching and caching.

9. **Server-side Features**
   - Express.js RESTful APIs with modular structure.
   - MongoDB as the database to handle asset and employee data.

10. **Employee Management**
    - HR Managers can assign employees to teams.
    - Add employees to the database via a simple form.

---

## 🧰 Technologies Used

### Frontend
- React.js
- Tailwind CSS
- DaisyUI
- React Router DOM
- Axios
- TanStack Query

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Stripe for Payment Integration

---

## 📂 Project Structure

### Client-Side Repository
[Client Repo Link](https://github.com/MxAziz/SmartAssetManager-client)

### Server-Side Repository
[Server Repo Link](https://github.com/MxAziz/SmartAssetManager-server)

---

## 🛠 How to Run the Project Locally

### Clone Repositories
1. Clone the **client-side** repository:
   ```bash
   git clone https://github.com/your-username/client-repo.git

### Run this Command
cd client-repo
npm install