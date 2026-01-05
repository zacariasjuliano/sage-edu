# 🏫 SAGE Education - Institutional Management / ERP

**Version:** 1.1.x  
**Module:** Tryton ERP  
**Developer:** Zacarias Juliano Capingala   


---


## 📘 About the Project

**SAGE Education** is a ***free and open-source*** project for ***educators, educational institutions, and governments***.
It provides the functionality of **Academic Management System (AMS), School Management System (SMS), and Educational Information System (EIS)**.
Its ***modular, scalable, and secure*** design allows it to be implemented in many different scenarios: from **small schools** and **training centers** to **large national public education systems**.

SAGE Education has a growing, committed, and friendly community that brings together the best in the fields of ***educational sciences, pedagogy, educational technology, and computer science***.
No matter where in the world you live, we are passionate about upholding education and educational technology as a non-negotiable human right.

We hope you find **SAGE Education** motivating and inspiring, and we look forward to having you as part of the team.


We host a public demo server where you can try out SAGE Education with different access profiles:
[sage.comunidadedosaber.ao](https://sage.comunidadedosaber.ao)  


| Profile    | User      | Password        |
|------------|-----------|-----------------|
| Student    | student   | sage_education  |
| Teacher    | teacher   | sage_education  |
| Secretary  | secretary | sage_education  |
| Direction  | direction | sage_education  |
| Admin      | admin     | sage_admin      |


---


## ⚙️ SAGE Education Modules

**🎓 AMS** - Academic Management System

**🏫 SMS** - School Management System

**🏢 EIS** - Educational Information System

### 🎯 Core Purpose

SAGE Education centralizes **all aspects of school management**, including:
- Institutional organization
- Academic structure and courses
- Student enrollment and transfers
- Class management, teachers, and attendance
- Evaluations and metrics
- Reports, dashboards, and user interfaces

### ✨ Modules Overview

#### 🏛️ Akademy Party – Base Party Management
- Extend Tryton `Party` model for students, employees, teachers, and institutions
- Standardized base for other modules
- Data consistency and reusability

#### 🏢 Akademy Company – Institutional Management
- Manage institutions, companies, and parties
- Employee registration and roles
- Student registration and supervisor relationships
- Institutional reporting

#### 🏫 Akademy Class – Academic & Class Management
- Academic levels, areas, courses, and classes
- Class schedules, classrooms, and lessons
- Teacher and student assignments
- Attendance tracking for students and teachers
- Study plans, disciplines, evaluation metrics
- Academic reports (class, teacher, student, study plan)

#### 📝 Akademy Matriculation – Enrollment & Applications
- Candidate registration and application management
- Evaluation of applications according to defined criteria
- Student transfers (internal and external)
- Association of students to courses and disciplines
- Enrollment reports, transfer reports, equivalence reports

#### ✅ Akademy Matriculation Confirmation – Enrollment Confirmation
- Wizard-based confirmation of new matriculations
- Modification of existing matriculations
- Stepwise, auditable workflows for enrollment

#### 📊 Akademy Dashboard – User Interface & Dashboards
- Main menu creation for SAGE Education
- Personalized dashboards for each user type
- Display of metrics, notifications, and tasks
- Integration with academic and administrative modules


---


## 🌍 Target Audience

- Educational institutions
- System administrators
- Open-source contributors
- Governments and NGOs
- Educational software integrators


### 🌐 Homepage

**Website:** [comunidadedosaber.ao](https://comunidadedosaber.ao)  
**E-mail:** [comercial@comunidadedosaber.ao](mailto:comercial@comunidadedosaber.ao)


---


## 🤝 Contributing

Contributions are welcome!
Please open an issue or submit a pull request following the SAGE Edu contribution guidelines.

### 💬 Technical Support

If you encounter any errors or require technical support, please contact us through the channels below:

- 📧 **E-mail:** [suporte@comunidadedosaber.ao](mailto:suporte@comunidadedosaber.ao)
- 💬 **WhatsApp:** [+244 955 868 110](https://wa.me/244955868110)


---


## 📋 Installation


Before starting, make sure you have one of the following components installed in version 6.8.14 to access the client environment:

- [Tryton Server](https://www.tryton.org/)
- [Tryton Desktop Client](https://www.tryton.org/)
- [Tryton Web Client](https://www.npmjs.com/package/tryton-sao)


### 🔧 PIP Installation

It is also possible to install SAGE Edu using pip.
To do this, you will need:

* Have PostgreSQL installed and configured

Including user creation and permissions.

* Create the database

* Install modules throw PIP

```bash
pip install akademy-party
pip install akademy-company
pip install akademy-classe
pip install akademy-matriculation
pip install akademy-matriculation-confirmation
pip install akademy-dashboard
```

* Create Tryton configuration file (trytond.conf)
```bash
[database]
uri = postgresql://usuario:senha@localhost:5432/banco_de_dados
```

