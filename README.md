# Personal Expense Management System with Note-Taking

A modern, user-friendly web application designed to help users efficiently manage their finances and organize personal notes. The project integrates **Expense Management** and **Note-Taking** functionalities, offering secure and real-time features to enhance productivity and financial tracking.

---

## 🌟 Features

### Expense Management

1. **Give**: Track money lent to others. Automatically updates balances and displays transactions.
2. **Take**: Record borrowed amounts. Balances adjust dynamically for better tracking.
3. **Split**: Easily divide expenses among multiple people. Includes:
   - **Paid**: Records paid amounts under "Take."
   - **To Pay**: Shows pending payments under "Give."

### Note-Taking

- Create, edit, and delete notes with a simple, intuitive interface inspired by Google Keep.
- Customize note colors for better organization.
- Integrated **Expense Dashboard** at the top, summarizing financial transactions, with options to show or hide.

### Real-Time Functionality

- Updates are instantly visible across all devices for seamless collaboration using **Pusher**.

### Secure Authentication

- Supports email and phone number login using **NextAuth** for robust user security.

---

## 🎯 Purpose

The primary goal of this project is to simplify personal expense tracking and note organization within a single platform. It aims to address common financial management challenges such as tracking loans, splitting expenses, and maintaining clarity in transactions. Additionally, the note-taking feature offers a structured and accessible way to keep personal thoughts and tasks organized.

---

## 🛠️ Technologies Used

### Frontend

- **React.js**: Component-based development for a dynamic user interface.
- **Next.js**: Server-side rendering for better performance and SEO.
- **Tailwind CSS**: Rapid styling with utility-first CSS.

### Backend

- **Next.js API Routes**: Handles RESTful endpoints for data operations.
- **MongoDB**: Stores structured data securely, ensuring scalability.

### Real-Time Updates

- **Pusher**: Enables instant updates across devices and users.

### Security

- **NextAuth**: Implements secure authentication with email and phone number support.

### Development Tools

- **Prisma ORM**: Simplifies interaction with MongoDB, ensuring data consistency.
- **VS Code**: Primary development environment.

---

## ⚙️ How It Works

1. **Home Page**:

   - Displays a project overview and navigation to "Expense Management" and "Notes" sections.
   - Modern, dynamic animations enhance the user experience.

2. **Expense Management**:

   - Select "Give," "Take," or "Split" for specific operations.
   - Real-time dashboard updates ensure clarity in financial tracking.

3. **Notes Section**:
   - Displays notes in a grid layout, similar to Google Keep.
   - Users can manage their notes while optionally viewing the expense dashboard.

---

## 📈 Future Enhancements

- Add budgeting and expense forecasting features.
- Integrate advanced data analytics for spending insights.
- Multi-language support for global usability.
- Export options for financial data and notes.

---

## 📚 Installation

### Prerequisites

- Node.js and npm installed.
- MongoDB database connection set up.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/somnath271/My-Budget-Buddy.git
   ```
